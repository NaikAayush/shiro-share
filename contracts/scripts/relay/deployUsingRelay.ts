import { ethers } from "hardhat";
import {
  DefenderRelaySigner,
  DefenderRelayProvider,
} from "defender-relay-client/lib/ethers";
import { writeFileSync } from "fs";
import dotenv from "dotenv";

async function main() {
  dotenv.config();
  const credentials = {
    apiKey: process.env.RELAYER_API_KEY as string,
    apiSecret: process.env.RELAYER_API_SECRET as string,
  };
  const provider = new DefenderRelayProvider(credentials);
  const relaySigner = new DefenderRelaySigner(credentials, provider, {
    speed: "fast",
  });

  const Forwarder = await ethers.getContractFactory("MinimalForwarder");
  const forwarder = await Forwarder.connect(relaySigner)
    .deploy()
    .then((f: { deployed: () => any }) => f.deployed());

  const ShiroShare = await ethers.getContractFactory("ShiroShare");
  const shiroStoreAddress = process.env.SHIRO_STORE_ADDRESS as string;
  const shiroShare = await ShiroShare.connect(relaySigner)
    .deploy(shiroStoreAddress, forwarder.address)
    .then((f: { deployed: () => any }) => f.deployed());

  writeFileSync(
    "deploy.json",
    JSON.stringify(
      {
        MinimalForwarder: forwarder.address,
        ShiroShare: shiroShare.address,
      },
      null,
      2
    )
  );

  console.log(
    `MinimalForwarder: ${forwarder.address}\nShiroShare: ${shiroShare.address}\nShiroStore: ${shiroStoreAddress}`
  );
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
