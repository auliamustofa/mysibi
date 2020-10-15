import React,{Component} from 'react';
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import '../style/style.css';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";

import Drawer from './Drawer';
class Navigation extends Component {
    render(){
      return(
        <Router>
        <div>
          <Navbar bg="#019DD5" variant="dark">
            <Navbar.Brand href="/home"><img className="logo" src={require('../logo/logosibi.png')}  alt="logo"/></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/drawer"><Link to="/drawer"></Link>Home</Nav.Link>
              <Nav.Link href="#features">Contact</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>
      </div>
      <Route path="/drawer" component={Drawer}/>

      </Router>
      );
    }
}

export default Navigation;