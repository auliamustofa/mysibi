import React,{Component} from 'react';
import '../style/style.css';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import { Jumbotron, Button, Navbar } from 'react-bootstrap';
import Navbarr from './Navbarr';


class Home extends Component {
    render(){
      return(
        <Router>
          <div className="wrap">
            <div className="header">
              <Navbarr></Navbarr>
            </div>
            
            <div className="badan">
                <div className="card-tools">
                  <h3>Pilih Tools yang anda gunakan</h3>
                      <button className="button">Myo Armband</button>
                      <button className="button">Leap Motion Controller</button>
                </div>
            </div>
            
          </div>
        </Router>
      )
      }
  }
  
  export default Home;