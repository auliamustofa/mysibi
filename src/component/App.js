import React,{Component} from 'react';
import '../style/style.css';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import { Jumbotron, Button } from 'react-bootstrap';
import Navigation from '../component/Navigation';
import Home from './Home';

class App extends Component {
  render(){
    return(
      <Router>
        <div className="wrap">
          <div className="header">
            <Navigation></Navigation>
          </div>
          
          <div className="badan">
            <Jumbotron>
              <div className="card">
                <h3>Welcome To MySibi!</h3>
                  <p>Mari belajar Bahasa Isyarat dengan mudah </p>
                    <button className="button"><Link to="/home">Mulai!</Link></button>
              </div>
            </Jumbotron>
          </div>
          
          
        </div>
        <Route path="/home" component={Home}/>
      </Router>
    )
    }
}

export default App;
