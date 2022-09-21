const axios = require("axios");


function Thentic() {
  const newContract = {
    method: 'POST',
    url: 'https://thentic.tech/api/nfts/contract',
    headers: {'Content-Type': 'application/json'},
    data: {
      "key":"rOpgr7s5wA1mQtjGVUsQIRWHY9SDfLcl",
      "chain_id":97,
      "name":"Kilimanjaro",
      "short_name":"KIL"}
  }
  
  function deploy() {
    // axios.request(newContract).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });
    console.log('Thentic');
  }

  return (
    <div>
      <button 
                onClick = {() => deploy()}
                className="btn-round"
                color="danger">
        deploy
      </button>
    </div>
  )
}

export default Thentic;