const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Bank dapp', () => {
  let bank, token, owner, address_1;
  let addresses

  beforeEach(async () => {
      const bankContract = await ethers.getContractFactory("Bank");
      bank = await bankContract.deploy();
      await bank.deployed();

      const tokenContract = await ethers.getContractFactory("Token");
      token = await tokenContract.deploy(bank.address);
      await token.deployed();

      [owner, address_1, ...addresses] = await ethers.getSigners()
      
    })

    describe("Deployment", () => {
      it("Should have totalAssets of 0", async () => {
        expect(await bank.totalAssets()).to.equal("0");
      });
      it("Should be 0 tokens and 0 deposit in owner account", async () => {
        expect(await bank.accounts(owner.address)).to.equal("0");
        expect(await token.balanceOf(owner.address)).to.equal("0");
      });
      it("Should be 0 tokens and 0 deposit in addres_1 account", async () => {
        expect(await bank.accounts(address_1.address)).to.equal("0");
        expect(await token.balanceOf(address_1.address)).to.equal("0");
      });
    });
    
    describe("Deposit", () => {
      const oneEth = ethers.utils.parseEther('1.0').toString();
      it("Should let owner deposit 1 eth, then totalAssets should be 1 and accounts[owner.address] should be 1", async () => {
        await bank.connect(owner).deposit({value: oneEth});
        expect(await bank.totalAssets()).to.equal(oneEth);
        expect(await bank.accounts(owner.address)).to.equal(oneEth);
      });
    });

    describe("Deposit and withdrawal", () => {
      const oneEth = ethers.utils.parseEther('1.0').toString();
      it("Should let address_1 deposit and withdraw 1 eth, then address_1 should have 1 FT token", async () => {
        await bank.connect(address_1).deposit({value: oneEth});
        await bank.connect(address_1).withdraw(oneEth, token.address);
        expect(await bank.totalAssets()).to.equal("0");
        expect(await token.balanceOf(address_1.address)).to.equal(oneEth);
      });
      it("Should fail when address_1 is trying to withdraw a money that has not been deposited", async () => {
        await expect(bank.connect(address_1).withdraw(oneEth, token.address)).to.be.revertedWith("Cannot withdraw more than deposited.");
      });
    })

})