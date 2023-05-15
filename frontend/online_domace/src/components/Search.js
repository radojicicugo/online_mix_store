import React,{useEffect, useState} from 'react';
import useDebounce from '../hooks/use-debounce';
import { Container } from 'react-bootstrap';

const url = 'https://samosveze.herokuapp.com/podaci'

function Search() {

     const [data, setData] = useState([])
     const [search, setSearch] = useState('')

     const debounce = useDebounce(search, 500)

const fetchData = async() => {
     const endpoint = `${url}/?product=${search}`

     try {
        const response = await fetch(endpoint, {
          method: 'GET'
        })
        const data = await response.json()
        console.log(data)
        setData(data)
     }
     catch(e){
          console.log(e)
     }
}
  

     useEffect(()=>{
        fetchData()
     }, [debounce])

     return (
          <div className='searchh p-0 '>
               <input 
               className='search'
               type='search'
               placeholder=' Pretrazi...'
               value={search}
               onChange={e => setSearch(e.target.value)}
               />
               <div className='p-3'><strong>Rezultat pretrage: </strong></div>              
               {data && data.length > 0 ? (
                    data.map((el) => (
                         <Container className="map p-0">
                              <div className='p-1 m-1'>
                                 <img className='imagess' src={el.image} alt='img, IT , it ,first, prodaja, prodaj,sale,imati,voce,povrce,frts,fruits,fr,f,vocee,povrcee'></img>
                              </div>                       
                              <strong>Naziv Proizvoda:</strong>
                              <div className='opis1'>
                                   <h3>{el.product}</h3>
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
                              <div className='cena m-0'>
                                   {el.price} KM
                              </div>
                              <strong className=''>Cena po 1kg: </strong>
                              <div className='cena m-0'>
                                   {el.price_kg} KM
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
               ) : (
                    <h1>No results found!</h1>
               )}
          </div>
     );
}

export default Search;