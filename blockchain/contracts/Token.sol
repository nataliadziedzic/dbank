// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

  address private bankAddress;

  modifier onlyBank () {
    require(msg.sender == bankAddress, "Only the bank can mint new Tokens.");
    _;
  }
  constructor(address _bankAddress) ERC20("Free token", "FT") {
      bankAddress = _bankAddress;
  }

  function mint (address to, uint amount) public onlyBank {
    _mint(to, amount);
  }

}