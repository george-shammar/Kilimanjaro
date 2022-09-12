import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { NFTStorage, File } from 'nft.storage';

const NFT_STORAGE_KEY = 'NFT_STORAGE_KEY';
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

function Tree() {

  async function mintTree() {

  }

  return (
    <div>
      <button>
        Plant Tree
      </button>
    </div>
  )
}

export default Tree;