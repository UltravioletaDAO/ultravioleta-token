import hre from 'hardhat';

async function main() {

  const name = "UltravioletaToken"; // Nombre del token
  const symbol = "UVT"; // Símbolo del token
  const totalSupply = 24157817; // Ejemplo de valor para el suministro total

  const erc20Token = await hre.ethers.getContractFactory("ERC20Token"); // busca en el folder contracts basado en el nombre

  const erc20TokenContract = await erc20Token.deploy(name, symbol, totalSupply);; // pasa parametros y llama la funcion de despliegue
  await erc20TokenContract.deployed(); // espera hasta que haya sido desplegado

  // print logs
  console.log(" ");
  console.log(`${name} Contract address:`, erc20TokenContract.address);
  console.log(" ");
  console.log(`To verify ${name} contract:`);
  console.log(`   npx hardhat verify --force --network avalanche_testnet ${erc20TokenContract.address} ${name} ${symbol} ${totalSupply}`);
  console.log(" ");
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });