import { ethers } from "hardhat";

async function main() {
    let contract = await ethers.getContractFactory("ShiroShare");
    let deployed = contract.attach("0xc6e7DF5E7b4f2A278906862b61205850344D4e7d");
    let res = await deployed.putFile("QmXSYX9fA7D6XAD8dpoxAtdk8tUNxgPY9M1veNtcViyfFH", 7200, "ipfs");
}