import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';



function Contact(props) {

     const [email, setEmail] = useState('')
     const [name, setName] = useState('')
     const [message, setMessage] = useState('')

     const addDataInfo = async (e) => {
          alert('Message sent!')
          let formField = new FormData()
          formField.append('email', email)
          formField.append('name', name)
          formField.append('message', message)
          await axios({
               method: 'post',
               url: '',
               data: formField
          }).then((response) => {
               console.log(response.data);

          })
     }
     return (
          <div className=''>
               <h2 className='p-3'>Contact Us</h2>
               <div className="p-3 m-3">
                    <div className="set-form position- form-group m-1">
                         <input
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="email"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                         />
                    </div>
                    <div className="set-form form-group m-1" >
                         <input
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="name"
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                         />
                    </div>
                    <div className="set-form position- form-group m-1" >
                         <textarea
                              type='text'
                              className="form-control form-control-lg"
                              placeholder="message"
                              name="message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                         />
                    </div>
                    <div className='p-4'>
                         <button type="button" className="btn btn-secondary m-3" onClick={addDataInfo}>Send Message</button>   
                    </div>
              <div className='foote p-5'>
               <Footer />
             </div>
               </div>    

          </div>
     );
}

export default Contact;