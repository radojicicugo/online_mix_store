import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fresh2 from '../img/fresh2.avif'
import fresh3 from '../img/voce.webp'
import Footer from './Footer';



function Home(props) {
     return (
          <div className='p-3'>
              <h2>Dobro dosli na stranicu <span className='homee'>SamoSveze</span></h2> 
              <div className='p-3 m-3'>
                <p>
                         Ovde mozete kupiti, dogovarati, pregovarati, prodati i posredovati u svezim proizvodima. Takodje mozete oglasiti i druge vrste proizvoda. Za sve informacije nas mozete kontaktirati.
                </p>               
              </div>
              <div className='box1 p-1'>
                    <Card style={{ width: '18rem', border:'white' }}>
                         <Card.Img variant="top" src={fresh3} />
                         <Card.Body>
                              <Card.Title>Kupujem</Card.Title>
                              <Card.Text>
                                  Ovde mozete kupiti sve ono sto se nalazi na stranici. Takodje mozete dogovarati licno sa <span className='prodavac'>prodavcem</span>, vreme, mesto i cenu proizvoda.
                              </Card.Text>
                              <a href="/kupujem"><Button variant="primary">kupujem</Button></a>
                         </Card.Body>
                    </Card>
              </div>
              <div className='box1 p-1'>
                    <Card style={{ width: '18rem', border: 'white' }}>
                         <Card.Img variant="top" src={fresh2} />
                         <Card.Body>
                              <Card.Title>Prodajem</Card.Title>
                              <Card.Text>
                                   Ovde mozete prodati sve vase proizvode. Takodje mozete dogovarati licno sa <span className='kupac'>kupcem</span>, vreme, mesto i cenu proizvoda.
                              </Card.Text>
                              <a href="/prodajem"><Button variant="primary">prodajem</Button></a>
                         </Card.Body>
                    </Card>   
              </div> 
              <hr></hr>   
             <Footer />
          </div> 
     );
}

export default Home;