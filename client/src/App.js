import './App.css';
import {Router} from '@reach/router';
import {} from 'reactstrap';
import Main from './views/Main';
import New from './views/New';
import Update from './views/Update';


//CHANGE ROUTES IF NEEDED
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <New path="/new"/>
        <Update path="/edit/:id"/> 
      </Router>
    </div>
  );
}

export default App;