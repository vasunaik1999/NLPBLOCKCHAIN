import Web3 from 'web3';
var web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
}

export default web3;
