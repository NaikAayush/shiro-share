import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("ShiroShare", function () {
  async function deployShiroShareFixture() {
    const ShiroStore = await ethers.getContractFactory("ShiroStore");
    const ShiroShare = await ethers.getContractFactory("ShiroShare");

    const [owner, anotherAddress] = await ethers.getSigners();

    const shiroStore = await ShiroStore.deploy();
    await shiroStore.deployed();
    const shiroShare = await ShiroShare.deploy(shiroStore.address);
    await shiroShare.deployed();

    return { shiroShare, owner, anotherAddress };
  }

  async function uploadNewFile() {
    const ret = await deployShiroShareFixture();

    const cid = "QmNrQn4bsZgApPR6J32AXXDfVDa9xv2iBEcfUhVnR7Rp3k";
    const validity = 60 * 60 * 60;
    const provider = "ipfs";

    await ret.shiroShare.putFile(cid, validity, provider);

    return Object.assign(ret, { cid, validity, provider });
  }

  describe("Deployment", function () {
    it("Should show a newly uploaded file", async function () {
      const { shiroShare, cid, validity, provider } = await loadFixture(uploadNewFile);

      const files = await shiroShare.getFiles();

      expect(files.length).to.equal(1);

      const file = files[0];

      expect(file.valid).to.equal(true);
      expect(file.deleted).to.equal(false);
      expect(file.cid).to.equal(cid);
      expect(file.validity).to.equal(validity);
      expect(file.provider).to.equal(provider);
      expect(file.timestamp).to.equal(await time.latest());
    });

    it("Should not show someone else's files", async function () {
      const { shiroShare, anotherAddress } = await loadFixture(uploadNewFile);

      const files = await shiroShare.connect(anotherAddress).getFiles();

      expect(files.length).to.equal(0);
    });

    it("Should not show a deleted file", async function () {
      const { shiroShare, cid } = await loadFixture(uploadNewFile);

      await shiroShare.deleteFile(cid);

      const files = await shiroShare.getFiles();

      expect(files.length).to.equal(0);
    });

    it("Should not be able to double delete a file", async function () {
      const { shiroShare, cid } = await loadFixture(uploadNewFile);

      await shiroShare.deleteFile(cid);

      expect(shiroShare.deleteFile(cid)).to.be.revertedWith(
        "File not found or is deleted."
      );
    });

    it("Should not be able to double delete a file", async function () {
      const { shiroShare, cid, validity } = await loadFixture(uploadNewFile);

      expect(shiroShare.putFile(cid, validity, "brrfs")).to.be.revertedWith(
        "invalid storage provider: brrfs"
      );

      expect(shiroShare.deleteFile(cid)).to.be.revertedWith(
        "File not found or is deleted."
      );
    });

    it("Should delete file after expiring if garbage collected", async function () {
      const { shiroShare, validity } = await loadFixture(uploadNewFile);

      await time.increase(validity);

      await shiroShare.garbageCollect();

      const files = await shiroShare.getFiles();

      expect(files.length).to.equal(0);
    });

    it("Should not delete file before expiring if garbage collected", async function () {
      const { shiroShare, validity } = await loadFixture(uploadNewFile);

      // 1 second before expiry
      await time.setNextBlockTimestamp((await time.latest()) + validity - 1);

      await shiroShare.garbageCollect();

      const files = await shiroShare.getFiles();

      expect(files.length).to.equal(1);
    });

    it("Should renew file before expiry", async function () {
      const { shiroShare, cid, validity, provider } = await loadFixture(
        uploadNewFile
      );

      // 1 second before expiry
      await time.setNextBlockTimestamp((await time.latest()) + validity - 1);

      await shiroShare.putFile(cid, validity, provider);

      const files = await shiroShare.getFiles();
      expect(files.length).to.equal(1);
      const file = files[0];

      expect(file.valid).to.equal(true);
      expect(file.deleted).to.equal(false);
      expect(file.cid).to.equal(cid);
      expect(file.validity).to.equal(validity + 1);
      expect(file.provider).to.equal(provider);
      expect(file.timestamp).to.equal(await time.latest());
    });

    it("Should renew file after expiry", async function () {
      const { shiroShare, cid, validity, provider } = await loadFixture(
        uploadNewFile
      );

      // 1 second after expiry
      await time.setNextBlockTimestamp((await time.latest()) + validity + 1);

      await shiroShare.putFile(cid, validity, provider);

      const files = await shiroShare.getFiles();
      expect(files.length).to.equal(1);
      const file = files[0];

      expect(file.valid).to.equal(true);
      expect(file.deleted).to.equal(false);
      expect(file.cid).to.equal(cid);
      expect(file.validity).to.equal(validity);
      expect(file.provider).to.equal(provider);
      expect(file.timestamp).to.equal(await time.latest());
    });
  });
});
