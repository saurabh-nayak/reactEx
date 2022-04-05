import './App.css';
import Graphcomp from './Graphcomp';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

function App() { 

  return (
    <div>
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/graph" component={Graphcomp}>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
    <Graphcomp/>
    </div>
  );
}

export default App;
