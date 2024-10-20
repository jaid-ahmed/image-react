import React, { useState } from 'react'


const Searchapp = () => {
      const [value, setValue] = useState()
      const [result, setResult] = useState([]);

      let Acces_key = "39gTiESC9xzeMDFFkhy0wH9qqiNPJUvQDG_JawzcGTI";
     const inputHandle = (event) =>{
        console.log(event.target.value);
        setValue(event.target.value);
        getData(value)
    
     }

     const searchImg = () =>{
        
        setValue("")
         
     }

      
     const getData = async (searchValue) =>{
        const get = await fetch(`https://api.unsplash.com/search/photos?query1=${searchValue}&per_Page=28&P=1&client_id=${Acces_key}`);
        const jsonData = await get.json();
        console.log(jsonData);
       
        if(value !== ""){
            setResult(jsonData.results)
        }else{
            console.log("EMPTY");
        }
        
     }

      
  return (
    <>
        <div className='container'>
        <h1>Image Search App</h1>
            <div className='inputs'>
                <input type='text' placeholder='Search Images' value={value} onChange={inputHandle} />
                <button onClick={searchImg}>Search</button>
            </div>
            <div className='images'>
             {
                result.map((curVal, index)=>{
                    console.log(curVal)
                    return (
                        <>
                         
                            <img className='img' src={curVal.urls.full}/>
                        </>
                    )
                })
             }
            </div>
        </div>
    </>
  )
}

export default Searchapp;