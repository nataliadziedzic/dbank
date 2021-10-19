// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "./Token.sol";

contract Bank {

  mapping(address => uint) public accounts;

  constructor() {}

  function totalAssets() view external returns(uint) {
      return address(this).balance;
  }
  function deposit() payable external {
      require(msg.value > 0, "You need to deposit more than 0.");
      accounts[msg.sender] += msg.value;
  }
  function withdraw(uint _amount, address _tokenContract) payable external {
      require(_amount <= accounts[msg.sender], "Cannot withdraw more than deposited.");

      accounts[msg.sender] -= _amount;
      payable(msg.sender).transfer(_amount);

      Token yieldToken = Token(_tokenContract);
      yieldToken.mint(msg.sender, 1 ether);
  }
}