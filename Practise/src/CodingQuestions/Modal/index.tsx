import React, { useState }  from "react";
import './index.css'
const Modal = ()=>{

    const [modalState , setModalState] = useState(false);
    const handleModalState =()=>{
       setModalState(prev=> !prev);
    }

    return (
        <>
        { 
        !modalState ? ( <button onClick = { handleModalState }>
         <h2>Open Modal </h2>
        </button>):(
              <div className='backDrop'>
              <h1>Content of ModaL</h1>  
              <h3 onClick={ handleModalState}>Close</h3>
              </div>
        )
    }
    </>
    )
}

export default Modal;