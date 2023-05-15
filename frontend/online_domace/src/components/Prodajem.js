import React,{useState} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Footer from './Footer';




function Prodajem() {

     let history = useHistory();

     const [image, setImage] = useState('')
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [description, setDescription] = useState('')
     const [klass, setKlass] = useState('')
     const [price, setPrice] = useState('')
     const [phone, setPhone] = useState('')
     const [product, setProduct] = useState('')
    

     const addProductInfo = async () => {
          alert('Uspesno ste postavili Vas proizvod')
          let formField = new FormData()
          formField.append('image', image)
          formField.append('name', name)
          formField.append('email', email)
          formField.append('price', price)
          formField.append('description', description)
          formField.append('phone', phone)
          formField.append('klass', klass)
          formField.append('product', product)
         
          await axios({
               method: 'post',
               url: 'https://samosveze.herokuapp.com/podaci/',
               data: formField
          }).then((response) => {
               console.log(response.data);
          })        
     }

     return (
          <div className=''>
               <h2 className='p-3 m-3'>Ako zelite da prodate svoj proizvod dovoljno je da unesete podatke i sliku odgovarajuce rezolucije.</h2>
              <div className="">
                    <div className="form-group m-1">
                         <label className='p-1'>Izaberi Foto:</label>
                         <input
                              type='file'
                              className="form-control form-control-lg"
                              placeholder="Foto: "
                              name="image"                    
                              onChange={(e) => setImage(e.target.files[0])}
                         />
                    </div>
                    <div className="form-group m-1">
                         <input
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="Ime i Prezime: "
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                         />
                    </div>
                    <div className="form-group m-1">
                         <input
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="Naziv Proizvoda: "
                              name="product"
                              value={product}
                              onChange={(e) => setProduct(e.target.value)}
                         />
                    </div>
                    <div className="form-group m-1">
                         <input
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="Opis proizvoda: "
                              name="decsription"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                         />
                    </div>
                    <div className="form-group m-1">
                         <input
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="Cena: "
                              name="price"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                         />
                    </div>
                    <div className="form-group m-1">
                         <input
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="Klasa proizvoda: "
                              name="klass"
                              value={klass}
                              onChange={(e) => setKlass(e.target.value)}
                         />
                    </div>
                    <div className="form-group m-1">
                         <input
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="Telefon: "
                              name="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                         />
                    </div>
                    <div className="form-group m-1">
                         <input
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="email: "
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                         />
                    </div>  
                    
                     <Button  className="btn12 m-2" onClick={addProductInfo}>Dodaj Proizvod</Button>
              </div>
              <div className=''>
               <Footer />
              </div>
              
              </div>
          
     );
}

export default Prodajem;