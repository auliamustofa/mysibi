import React,{Component} from 'react';
import { Button, Navbar, Form, FormControl } from 'react-bootstrap';
import '../style/style.css';

class Navbarr extends Component {
    render(){
      return(
        <div>
          <Navbar bg="#019DD5" variant="dark">
            <Navbar.Brand href="#home"><img className="logo" src={require('../logo/logosibi.png')}  alt="logo"/></Navbar.Brand>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>
      </div>
      );
    }
}

export default Navbarr;