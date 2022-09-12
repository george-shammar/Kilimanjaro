import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { NFTStorage, File } from 'nft.storage';

const NFT_STORAGE_KEY = 'NFT_STORAGE_KEY';

function Tree() {
  return (
    <div>
      <button>
        Plant Tree
      </button>
    </div>
  )
}

export default Tree;