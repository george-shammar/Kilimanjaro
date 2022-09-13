import { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractAddress from "../../contracts/contract-address.json";
import { NFTStorage, File } from 'nft.storage';
import KilimanjaroArtifact from "../../contracts/Kilimanjaro.json";

const NFT_STORAGE_KEY = 'NFT_STORAGE_KEY';
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

function Tree() {
  const [speciesInput, updateSpeciesInput] = useState({species:""});
  const [datePlantedInput, updateDatePlantedInput] = useState({datePlanted:0});
  const [geoLocationInput, updateGeoLocationFormInput] = useState({geoLocation:""});
  const [LongitudeInput, updateLongitudeInput] = useState({Longitude:""});
  const [LatitudeInput, updateLatitudeInput] = useState({Latitude:""});
  const [status, setStatus] = useState("");

  async function mintTree() {
    const {species} = speciesInput;
    const {datePlanted} = datePlantedInput;
    const {geoLocation} = geoLocationInput;
    const {Longitude} = LongitudeInput;
    const {Latitude} = LatitudeInput;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress.Kilimanjaro, KilimanjaroArtifact.abi, signer);

    try {
      const client = new NFTStorage({ token: NFT_STORAGE_KEY });
      setStatus("Uploading to nft.storage...")
      const metadata = await client.store({
        species,
        datePlanted,
        geoLocation,
        Longitude,
        Latitude,
        image: new File(['./assets/dude.jpeg'], 'dude.jpeg', { type: 'image/jpg' })
      });

      setStatus(`Minting token with metadata URI: ${metadata.url}`);

      const metadataURI = metadata.url;
      
      const transaction = await contract.createRandomMage(name, metadataURI, { value: mintingPrice });

      setStatus("Blockchain transaction sent, awaiting confirmation...");

      const receipt = await transaction.wait();
      if (receipt.status === 0) {
          throw new Error("Transaction failed");
      } else {
        setStatus("Fresh Mage minted successfully! Reveal your Mage with the button below to start the game");
      }
    } catch (error) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }
      console.error(error);
    } finally {

    }


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