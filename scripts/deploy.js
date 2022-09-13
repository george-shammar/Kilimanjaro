// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Tree = await ethers.getContractFactory("Tree");
  const tree = await Tree.deploy();

  console.log("Tree address:", tree.address);

  //  To save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(tree);
}



  
async function main() {

  const token = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';

  const Kilimanjaro = await hre.ethers.getContractFactory("Kilimanjaro");
  const kilimanjaro = await Kilimanjaro.deploy(token);

  await kilimanjaro.deployed();

  console.log(
    `Kilimanjaro contract deployed to ${kilimanjaro.address}`
  );

  saveFrontendFiles(kilimanjaro);
}

function saveFrontendFiles(kilimanjaro) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ Kilimanjaro: kilimanjaro.address }, undefined, 2)
  );

  const KilimanjaroArtifact = artifacts.readArtifactSync("Kilimanjaro");

  fs.writeFileSync(
    contractsDir + "/Kilimanjaro.json",
    JSON.stringify(KilimanjaroArtifact, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
