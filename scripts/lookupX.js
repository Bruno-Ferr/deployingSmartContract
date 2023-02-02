const hre = require("hardhat");

const CONTRACT_ADDRESS = "0x9708B8394f20ff40202Cb6B5A94354908B19f218"

async function main() {
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDRESS); // Procura um contrato já em deploy, com nome e no endereço

  console.log(await contract.x()); 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
