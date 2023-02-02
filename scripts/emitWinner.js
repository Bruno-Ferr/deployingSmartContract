const hre = require("hardhat");

const CONTRACT_ADDRESS = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"

async function main() {
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDRESS); // Procura um contrato já em deploy, com nome e no endereço

  console.log(await contract.attempt()); 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
