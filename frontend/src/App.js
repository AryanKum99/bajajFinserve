import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState("");

  // Function to validate JSON input
  const isValidJSON = (str) => {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidJSON(input)) {
      setError("Invalid JSON format");
      return;
    }
    setError("");
    try {
      const res = await fetch("https://bajajfinserve-21bct0275-code.onrender.com/api/bfhl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: input,
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError("Failed to fetch data");
    }
  };

  // Function to handle the selection from the dropdown
  const handleDropdownChange = (e) => {
    const options = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(options);
  };

  return (
    <div className="App">
      <h1>21BCT0275</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter JSON input"
        />
        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>

      {response && (
        <>
          <div>
            <label htmlFor="responseOptions">Multi Filter</label>
            <select
              id="responseOptions"
              multiple={true}
              value={selectedOptions}
              onChange={handleDropdownChange}
            >
              <option value="alphabets">Alphabets</option>
              <option value="numbers">Numbers</option>
              <option value="highest_lowercase_alphabet">
                Highest Lowercase Alphabet
              </option>
            </select>
          </div>

          <div className="FilteredResponse">
            {selectedOptions.includes("alphabets") && (
              <p>Alphabets: {response.alphabets.join(", ")}</p>
            )}
            {selectedOptions.includes("numbers") && (
              <p>Numbers: {response.numbers.join(", ")}</p>
            )}
            {selectedOptions.includes("highest_lowercase_alphabet") && (
              <p>
                Highest Lowercase Alphabet:{" "}
                {response.highest_lowercase_alphabet.join(", ")}
              </p>
            )}
          </div>
        </>
      )
      }
    </div >
  );
}

export default App;
