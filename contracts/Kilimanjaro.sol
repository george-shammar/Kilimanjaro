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
    uint256 CO2Credit;
  }

  event NewTree(uint256 id, string species, uint256 datePlanted, string geoLocation, string longitude, string latitude, uint256 CO2Credit);

  Tree[] public trees;

  constructor(address _rewardsToken)ERC721("Kilimanjaro", "KLM"){
    rewardsToken = IERC20(_rewardsToken);
  }

  // Create
  function _createTree(string memory _species, string memory tokenURI, uint256 _datePlanted, string memory _geoLocation, string memory longitude, string memory latitude, uint256 CO2Credit) internal {
        Tree memory newTree = Tree(COUNTER, _species, _datePlanted, _geoLocation, longitude, latitude, 0);
        trees.push(newTree);
        _safeMint(msg.sender, COUNTER);
        _setTokenURI(COUNTER, tokenURI);
        emit NewTree(COUNTER, _species, _datePlanted, _geoLocation, longitude, latitude, CO2Credit);
        COUNTER++;
  }


}