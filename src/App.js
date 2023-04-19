import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import instance from './cinstance';
import web3 from './Web3';
import moment from 'moment/moment';

function App() {
  const [statem, setstm] = useState("")
  const [name, setname] = useState("")
  const [Casenumber, setcaseno] = useState("")

  onsubmit = async () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(async res => {
          let resultaccount = res
          let time = moment().unix()
          console.log(resultaccount, Casenumber, name, statem, time)
          instance.methods
            .setStatementRecords(
              Casenumber, name, statem, time
            )
            .send({ from: resultaccount[0], value: 0 })
            .then(async (res1) => { console.log(res1) }).catch(err => {
              console.log(err)

            })
        })
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <input value={statem}
          style={{ marginTop: 20 }}
          placeholder='Statement'
          onChange={(e) => {
            setstm(e.target.value)
          }} />
        <input value={Casenumber}
          style={{ marginTop: 20 }}
          placeholder='Case Number'
          onChange={(e) => {
            setcaseno(e.target.value)
          }} />
        <input value={name}
          style={{ marginTop: 20 }}
          placeholder='Name'
          onChange={(e) => {
            setname(e.target.value)
          }} />
        <button onClick={onsubmit
        } style={{ marginTop: 50 }}>Submit</button>
      </header>
    </div>
  );
}

export default App;
