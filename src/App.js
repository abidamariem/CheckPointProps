import './App.css';
import PlayersList from './component/PlayersList';

function App() {
  return (
    <>
    <div> <h1 style = { {color: 'blue',textAlign: 'center'} }>Our favorate players</h1> </div>
    <div className="App" style = { {backgroundColor: 'lightgrey'} }>
     
<div>   
    <PlayersList/>
    </div>
    </div>
    </>

  );
}

export default App;
