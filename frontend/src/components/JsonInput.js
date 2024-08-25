import React, { useState } from 'react';
import axios from 'axios';

const JsonInput = ({ setResponseData }) => {
  const [inputData, setInputData] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const json = JSON.parse(inputData);
      console.log(json);
      const res = await axios.post('http:localhost:8000/api/bfhl', { data: json.data });
      console.log(res);
      setResponseData(res.data);
      setError(null);
    } catch (err) {
      setError('Invalid JSON input');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <textarea
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder='Enter JSON data'
          style={{ width: '300px', height: '50px', marginBottom: '10px', padding: '10px' }}
        />
        <button type='submit' style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          Submit
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default JsonInput;
