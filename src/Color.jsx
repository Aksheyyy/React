import React, { useState } from 'react'

const Color = () => {
    const [bgColor,setBgColor] = useState("bg-warning")
    const ColourChanger = (value)=>{
        setBgColor(value)
    }

    
  return (
    <div className='container m-5 p-5 border border-dark rounded d-flex justify-content-center'>
        <div className={`container ${bgColor} text-center p-5 rounded`}>
            <h1 style={{padding:50,color:'purple',fontFamily:'fantasy'}}>COLOUR CHANGER</h1>
            <button onClick={()=>ColourChanger("bg-danger")} className='m-5 fw-bolder btn  btn-danger'>Red</button>
            <button onClick={()=>ColourChanger("bg-success")} className='m-5 fw-bolder btn  btn-success'>Green</button>
            <button onClick={()=>ColourChanger("bg-primary")} className='m-5 fw-bolder btn  btn-primary'>Blue</button>
            <button onClick={()=>ColourChanger("bg-light")} className='m-5 fw-bolder btn  btn-light'>White</button>
        </div>
    </div>
  )
}

export default Color
