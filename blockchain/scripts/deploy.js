/* eslint-disable no-undef */
const fs = require('fs');

async function main () {
    const Bank = await ethers.getContractFactory('Bank');
    const bank = await Bank.deploy();
    await bank.deployed();
    console.log('Bank deployed to:', bank.address);
  
    const Token = await ethers.getContractFactory('Token');
    const token = await Token.deploy(bank.address);
    await token.deployed();
    console.log('Token deployed to:', token.address);
    
    const addresses = {"bankContract": bank.address, "tokenAddress": token.address};
    const addressesJSON = JSON.stringify(addresses);
    fs.writeFileSync("environment/contract-address.json", addressesJSON)
  }

  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });