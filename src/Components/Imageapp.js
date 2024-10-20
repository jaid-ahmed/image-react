import React, { useState } from 'react';
import Link from './Link';

const Imageapp = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('');

  const API_KEY = "39gTiESC9xzeMDFFkhy0wH9qqiNPJUvQDG_JawzcGTI";

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const getData = async () => {
    if (search) {
      const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`);
      const jsonData = await response.json();
      setData(jsonData.results.slice(0, 4));
    }
  };

  const handleSendUrl = (url) => {
    setUrl(url); 
  };

  return (
    <>
      <div className='container'>
        <h2>
          Name: Jaid Ahmed <br />
          E-mail: <a href="mailto:jaidahmed01@gmail.com">jaidahmed01@gmail.com</a>
        </h2>

        <div className='inputs'>
          <input type='text' placeholder='Search Images..' onChange={handleSearch} />
          <button onClick={getData}>Search</button>
        </div>

        <div className='images'>
          {data.map((curVal, index) => (
            <div key={index}>
              <img src={curVal.urls.full} alt={curVal.alt_description} />
              <a
                className="btn"
                href={curVal.urls.full}
                onClick={(e) => {
                  e.preventDefault();
                  handleSendUrl(curVal.urls.full);
                }}
              >
                Add Caption
              </a>
            </div>
          ))}
        </div>

      
        {url && <Link receivedUrl={url} />}
      </div>
    </>
  );
};

export default Imageapp;
