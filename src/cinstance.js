import web3 from './Web3';
var instance;
export var ca = '0xb5ffbF2FFd71633B76485501FEE329164599bA5c';
var abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_Casenumber",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Statement",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_Time",
        "type": "uint256"
      }
    ],
    "name": "setStatementRecords",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "GetStatementRecord",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "Casenumber",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Statement",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "Time",
            "type": "uint256"
          }
        ],
        "internalType": "struct StatementRecord.stmt",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "id",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "StatementRecord",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "Casenumber",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Statement",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "Time",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
if (web3) {
  instance = new web3.eth.Contract(
    abi,
    ca
  );
}

export default instance;
