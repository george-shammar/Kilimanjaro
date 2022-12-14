import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import contractAddress from "../../contracts/contract-address.json";
import { NFTStorage, File } from 'nft.storage';
import KilimanjaroArtifact from "../../contracts/Kilimanjaro.json";
import { Button} from "reactstrap";

const NFT_STORAGE_KEY = 'NFT_STORAGE_KEY';
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;



function Tree() {
  const [speciesInput, updateSpeciesInput] = useState({species:""});
  const [datePlantedInput, updateDatePlantedInput] = useState({datePlanted:0});
  const [geoLocationInput, updateGeoLocationFormInput] = useState({geoLocation:""});
  const [LongitudeInput, updateLongitudeInput] = useState({Longitude:""});
  const [LatitudeInput, updateLatitudeInput] = useState({Latitude:""});
  const [status, setStatus] = useState("");


  function click() {
    console.log('hi')
  }

  async function mintTree() {
    console.log('hello')
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
        species: 'dogoyaro',
        datePlanted: '09/09/2022',
        geoLocation: 'ilorin',
        Longitude: '2323523523',
        Latitude: '435335453',
        // image: new File(['./assets/dude.jpeg'], 'dude.jpeg', { type: 'image/jpg' })
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

       <div className="border">
        {/* <input className="py-1" placeholder="Species" required onChange={e => updateSpeciesInput({...speciesInput, species: e.target.value})} /> */}
        
          {/* <button className="py-2 submit white" onClick={mintTree}>
            Tokenize Tree
          </button> */}
        </div>

        
{/* 
    <div>
    {status ===  confirmedStatus ? (
      <Link to="/index"><button>See Your Trees</button></Link>
    ) : (
      <p className="py-3">See your trees after confirmation... </p>
    )}
    </div> */}


   
    <Button
                className="btn-round"
                color="danger"
                href=""
                target="_blank"
               onClick={click}
              >
                Tokenize
    </Button>
   
    </div>
  )
}

export default Tree;