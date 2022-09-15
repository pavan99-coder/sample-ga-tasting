
import './App.css';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
function App() {
  const click=()=>{

    alert("clicked")
  }
  return (
    <div className="App">
     <button onClick={click}>click on me</button>
    </div>
  );
}

export default App;
