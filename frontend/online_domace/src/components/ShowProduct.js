
import React from 'react';
import Footer from './Footer';





function ShowProduct(props) {

    {/*  console.log(props)

     const [product, setProduct] = useState([])

     const getProduct = async () => {
          const response = await axios.get("http://127.0.0.1:8000/podaci/")
          console.log(response.data)
          setProduct(response.data)
     }

     useEffect(() => {
          getProduct();
     }, [])*/}

     return (
          <div className="showProduct-nav">            
              {/* <h3 className="ugljesa-h3 p-3"><span className='naslovv' style={{ color:'chartreuse'}}>SvezeSamo</span></h3>
               <a href="/addproduct"> </a>
               {
                    product.map((el, index) => (
                         <Container className="map p-0">
                        <div className='p-3'>
                         <img className='imagess' src={el.image} alt='img, IT , it ,first, prodaja, prodaj,sale,imati,voce,povrce,frts,fruits,fr,f,vocee,povrcee'></img>
                        </div>
                         <strong>Naziv Proizvoda:</strong>                        
                         <div className='opis1'>
                            {el.product}    
                         </div>
                         <strong>Opis proizvoda:</strong>                        
                         <div className='opis'>
                            {el.description}    
                         </div>
                         <strong>Klasa proizvoda:</strong>
                        <div className=''>
                            {el.klass}   
                        </div>
                        <strong className=''>Cena: </strong>
                        <div className='cena m-1'>
                         {el.price} KM
                        </div>
                        <strong>Ime i Prezime Prodavca: </strong>
                        <div>
                         {el.name}
                        </div>
                              <strong>Email: </strong>
                        <div>
                         {el.email}
                        </div>
                              <strong>Telefon: </strong>
                        <div className='p-1'>
                         {el.phone}
                        </div>
                         </Container>
                    ))
               }*/}
               <Footer />
          </div>
     );
}
export default ShowProduct;