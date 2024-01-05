import React, { useState } from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null);

    const data = [
        {
        desc : "Continuous Integration and Continuous Delivery- Assignment 1",
        filesize:"10mb", close: true, tag : { isOpen :true, tagTitle:"Download Now",  tagColor:"green"}
    },

    {
        desc : "Compiler Design- Assignment 1",
        filesize:"10mb", close: true, tag : { isOpen :true, tagTitle:"Download Now",  tagColor:"green"}
    },

    {
        desc : "Linux- Assignment 1",
        filesize:"8mb", close: true, tag : { isOpen :true, tagTitle:"Download Now",  tagColor:"green"}
    },

    {
        desc : "MicroProcessor and Embdded Systems- Assignment 1",
        filesize:"12mb", close: true, tag : { isOpen :true, tagTitle:"Download Now",  tagColor:"green"}
    },
];

  return (

    <div ref ={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-5'>
        {data.map((item,index) =>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
    

  )
}

export default Foreground
