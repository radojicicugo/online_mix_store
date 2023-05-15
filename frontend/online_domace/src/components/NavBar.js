import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoo from '../img/fresh.jpg'
import { Card } from 'react-bootstrap';


function NavBar(props) {
     return (
          <div>
               <Navbar bg="dark" variant="dark">
                    <Container className=" ">
                         <Nav className="me-auto">
                              <Nav.Link href="/"><span  className='homee'>SvezeSamo</span></Nav.Link>
                              <Nav.Link href="/kupujem">Kupujem</Nav.Link>
                              <Nav.Link href="/prodajem">Prodajem</Nav.Link>
                              <Nav.Link href="/contact">Kontakt</Nav.Link>              
                         </Nav>
                         <Card.Img style={{ height: '40px', width: '40px' }} src={logoo} alt="Description" variant="top" /> 
                    </Container>
               </Navbar>
          </div>
     );
}

export default NavBar;