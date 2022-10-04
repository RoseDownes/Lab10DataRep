import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
/*
 * imports allow you to import from other pages
 * this class also extends react.component and has a render method(see components commments)
*/
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/*
          * Narbar makes a navbar in the application 
          * bg="primary" gives it the blue colour
          * Nav.Link links to the page you want to go to
          * Taken from bootstrap
          *react Router dom allows you to do client side routing
          */}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>  
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Content />}></Route>
            <Route path='/read' element={<Header />}></Route>
            <Route path='/create' element={<Footer />}></Route>
          </Routes>

          {/* 
          (the old code commented here>)
        <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
