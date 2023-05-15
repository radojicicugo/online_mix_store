import React from 'react';
import { Button } from 'react-bootstrap';

function Footer(props) {
     return (
          <div className='foot p-3'>
              
               <p className=''>
                    Schaffhauserstrasse 560, 8052, Zurich
               </p>
               <p>
                    Phone: +41772394440
               </p>
               <div className='btnn p-1'>
                    <a href='https://www.termsfeed.com/live/569fe489-45ba-49ec-b6a1-20b09901e538'><Button className='p-1 m-1'>Terms</Button> </a>   
               </div> 
               <div className='btnn p-1'>
                    <a href='https://www.termsfeed.com/live/cd67ea06-3e03-45f6-ab0d-559b4db6b792'><Button className='p-1 m-1'>Policy</Button></a>   
               </div> 
               <p className='p-3'>
                    Copyright © Ugo IT GmbH 2023
               </p>            
          </div>
     );
}

export default Footer;