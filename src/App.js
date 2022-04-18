import './App.css';
import { useState, useEffect, useCallback } from 'react';
import Card from './components/Card/Card'
import axios from 'axios'

function App() {
  const [qq, setQQ] = useState('')
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [number, setNumber] = useState(0)
  const [msg, setMsg] = useState('')
  const setQQNumber = (event) => {
    setQQ(event.target.value.toString())
  }
  const getQQInfo = () => {
    axios.get('https://api.uomg.com/api/qq.info', {
      params: {
        qq: qq,
      }
    }).then(response => {
      console.log(response.data)
      const data = response.data
      if (data.msg) {
        setMsg(data.msg)
      } else {
        setName(data.name)
        setAvatar(data.qlogo)
        setNumber(data.qq)
        setMsg('')
      }
    })
  }
  const useDebouncedEffect = (effect, delay, deps) => {
    const callback = useCallback(effect, deps);

    useEffect(() => {
      const handler = setTimeout(() => {
        callback();
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [callback, delay]);
  };

  useDebouncedEffect(getQQInfo, 1000, [qq]);
  return (
    <div className="App">
      <h1>QQ号查询</h1>
      <div className="flex">
        <span>QQ</span>
        <div className="input-wrapper">
          <input type="text" value={qq} onChange={setQQNumber} />
          <div className="underline"></div>
        </div>
      </div>
      <div className="container">
        {
          msg ? <h3 className="error">{msg}</h3> :
            name ? <Card name={name} number={number} avatar={avatar} /> : null
        }
      </div>
    </div>
  );
}

export default App;
