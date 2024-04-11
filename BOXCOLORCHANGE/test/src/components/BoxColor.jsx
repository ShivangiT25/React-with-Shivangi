import React, {useState} from 'react'

const BoxColor = () => {
    let [color,setColor] = useState(0)
    let colorArr = ['Red','Blue', 'Black', 'Aqua', 'Yellow', 'Green', 'Orange', 'Pink', 'Violet', 'Purple']
    function handleColorChange(){
      let newColor =  Math.floor(Math.random()*colorArr.length)
      console.log(newColor)
      setColor(newColor)
    }


  return (
    <div>
        <div className='h-60 w-60 border-4 border-black ml-auto mr-auto' style={{backgroundColor:colorArr[color]}}></div>
        <button onClick={handleColorChange} className='hover:bg-slate-300 border-black rounded-xl border-2 p-2 my-3 bg-white text-black text-center font-bold'>Change Color</button>
    </div>
  )
}

export default BoxColor