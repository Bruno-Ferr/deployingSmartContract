const hre = require("hardhat");

async function main() {
  // hardhat-ethers
  const Contract = await hre.ethers.getContractFactory("Contract"); // Pega o ABI no bytecode gerado do "Contract"
  const contract = await Contract.deploy(); // Pode ter argumentos necessários por um construtor dentro de deploy 

  await contract.deployed();

  console.log(
    `Contract was deployed to ${contract.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
