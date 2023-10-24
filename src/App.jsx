import { useState } from 'react'
import viteLogo from '/vite.svg'
import api from './api/api';
import './style.css'

function App() {
  const [input, setTinput] = useState();
  const [bairro, setBairro] = useState();
  const [logradouro, setLogradouro] = useState();
  const [localidade, setLocalidade] = useState();
  const [complemento, setComplemento] = useState();
  async function fetchData(cep){
    const {data} = await api.get(`${cep}/json/`);
    setBairro(data.bairro);
    setLogradouro(data.logradouro);
    setLocalidade(data.localidade);
    setComplemento(data.complemento);
  }

  return (
    <>
      <div className='container'>
        <h1 className='title'>
          hello world!
        </h1>
        <div className='form'>
          <input type="text" onChange={(e)=> setTinput(e.target.value)} />
          <button onClick={()=> fetchData(input)}>
            pegar cep
          </button>
        </div>
        <h3>Endereço</h3>
        <p>
          Bairro: {bairro}
        </p>
        <p>
          Logradouro: {logradouro}
        </p>
        <p>
          Localidade: {localidade}
        </p>
        <p>
          Complemento: {complemento}
        </p>
      </div>
    </>
  )
}

export default App
