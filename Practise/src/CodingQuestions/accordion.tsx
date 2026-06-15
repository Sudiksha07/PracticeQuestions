import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

   

const AccordionBar = () => {

    const [openId , setOpenId] = useState<number | ''>('');

    const dummyData = [

        {
            id:1,
            name:'React',
            description:'React is Javscript library',

        },
        {
            id:2,
            name:'JavaScript',
            description:'Javascript is asynchoronous language'
        },
        {
            id:3,
            name:'Css',
            description:'Css is cascading style langauage'
        }
        ,{
            id:4,
            name:'Html',
            description:'Html is hyper-text markeup lanaguage'
        }
    ]
    
    const handleCard = (id: number) => {
        if (openId === id) {
           setOpenId('');
        } else {
        setOpenId(id)
    }

    }
    
    return (
     <>
       {dummyData.map((item)=>(
        <div key={item.id}>    
            <span >{item.name}</span>  <span onClick={()=> handleCard(item.id)}> { item.id === openId ?  <FaChevronUp/> : <FaChevronDown/> }</span>    
            {item.id === openId && (
            <p>{item.description}</p>
      )}             
        </div>
       ))}
      </>
    );
  };
  
  export default AccordionBar;