import React from 'react';
import ShowProduct from './ShowProduct';
import Search from './Search';

function Kupujem(props) {
     return (
          <div>  
               <h2 className='p-3'>Kupujem</h2>
                <Search />
                <ShowProduct />                                  
          </div>
     );
}

export default Kupujem;