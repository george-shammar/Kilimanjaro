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

      setStatus(`Creating a tree with metadata URI: ${metadata.url}`);

      const metadataURI = metadata.url;
      
      const transaction = await contract.createRandomMage(species, metadataURI, datePlanted, geoLocation, Longitude, Latitude);

      setStatus("On-chain tree creating transaction sent, awaiting confirmation...");

      const receipt = await transaction.wait();
      if (receipt.status === 0) {
          throw new Error("Transaction failed");
      } else {
        setStatus("Tree tokenization successful.");
      }
    } catch (error) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }
      console.error(error);
    } finally {

    }


  }

  const confirmedStatus =  "Tree tokenization successful.";

  return (
    <div>


      <div>
      
      <div className="border">
        <input 
          className="py-1" 
          placeholder="Species"
          required
          onChange={e => updateSpeciesInput({...speciesInput, name: e.target.value})}  
        />
        <div className="white mt-3">
          <p>ID: To be revealed</p>
          <p>DNA: To be revealed</p>
          <p>Rarity: To be revealed</p>
          <p>Level: To be revealed</p>
          <p>Description/Powers: To be reveealed</p>
        </div>
          <button className="py-2 submit white" onClick={mintMage}>
              Mint Mage
          </button>
        </div>

      </div>
      <button>
        Plant Tree
      </button>
    </div>
  )
}

export default Tree;