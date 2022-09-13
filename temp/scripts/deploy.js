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

function saveFrontendFiles(tree) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ Tree: tree.address }, undefined, 2)
  );

  const TreeArtifact = artifacts.readArtifactSync("Tree");

  fs.writeFileSync(
    contractsDir + "/Tree.json",
    JSON.stringify(TreeArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
