import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


function App() {
 

  return (
    <div className="App">
    <div className="container text-left">
<div className="row">
    <div className="col-md-6 col-10 ">
     <First/>
     </div>
     <div className="col-md-6 col-10 ">
     <Second/>
     </div>
    </div>
    </div>
    </div>
  );
}

export default App;
