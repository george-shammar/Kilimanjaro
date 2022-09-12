import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { NFTStorage, File } from 'nft.storage';

const NFT_STORAGE_KEY = 'NFT_STORAGE_KEY';
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

function Tree() {
  const [formInput, updateFormInput] = useState({coordinate:""});
  const [status, setStatus] = useState("");

  async function mintTree() {
    const {coordinate} = formInput;
      if (!coordinate) {
        setStatus("Input coordinate");
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();


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