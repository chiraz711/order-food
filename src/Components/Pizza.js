import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Pizza({pizza}) {
  
  const [quantity,setQunatity]=useState(1)
  const [varient,setVarient]=useState('small')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{margin:'70px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
       <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.imageUrl} className='img-fluid' style={{heigth:'200px',width:'200px'}}/>
      </div>
      
      <div className='flex-container'>
          <div className='w-100 m-1'>
              <p>varients</p>
              <select className='form-control' value={varient} onChange={(e)=>setVarient(e.target.value)}>
                {pizza.varients.map(varient=>{
                  return <option value={varient}>{varient}</option>
                })}
              </select>
        </div>
          
        <div className='w-100 m-1'>
              <p>Quantity</p>
              <select className='form-control' value={quantity} onChange={(e)=>{setQunatity(e.target.value )}}>
                 {[...Array(10).keys()].map((x,i)=>{
                  return <option value={i+1}>{i+1}</option>
                 })}
              </select>
          </div>
      </div>

      <div className='flex-container'>
       <div className='m-1 w-100'>
           <h1 className='m-1'>Price: {pizza.prices[0][varient]* quantity}</h1>
       </div>
       <div className='m-1 w-100'>
         <button className='btn'>ADD TO CART</button>

       </div>
      </div>
    
     <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
           <img src={pizza.imageUrl} className='img-fluid' style={{height:'400px'}}/>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
   
    </div>
  )
}

export default Pizza
