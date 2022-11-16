import { ethers } from "hardhat";

async function main() {
  const ShiroShare = await ethers.getContractFactory("ShiroShare");
  const MinimalForwarder = await ethers.getContractFactory("MinimalForwarder");
  const minimalForwarder = await MinimalForwarder.deploy();
  const shiroShare = await ShiroShare.deploy(
    process.env.SHIRO_STORE_ADDRESS || "",
    minimalForwarder.address
  );
  await shiroShare.deployed();

  console.log(`ShiroShare deployed to ${shiroShare.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
