import './App.css';
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <h1>QQ号查询</h1>
      <div className="flex">
        <span>QQ</span>
        <div className="input-wrapper">
          <input type="text" />
          <div className="underline"></div>
        </div>
      </div>
      <div className="container"> {
        [1, 2, 3, 4, 5].map(item => <Card item={item} key={item} />)
      }
      </div>
    </div>
  );
}

export default App;
