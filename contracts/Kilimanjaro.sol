// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Kilimanjaro is ERC721URIStorage, Pausable, Ownable{
  uint256 COUNTER;
  using SafeERC20 for IERC20;
  IERC20 public rewardsToken;

  struct Tree {
    uint256 id;
    string species;
    uint256 datePlanted;
    string geoLocation;
    string longitude;
    string latitude;
    uint256 CO2Locked;
  }
}