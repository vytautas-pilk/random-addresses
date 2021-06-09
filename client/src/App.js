import React, { useState } from "react";

import config from "./config/config";
import text from "./resources/text";
import useFetch from "./utils/hooks/useFetch";

import { DEFAULT_SIZE, MAX_SIZE } from "./constants";
import Button from "./components/Button";
import Addresses from "./components/Addresses";
import './App.css';

function App() {
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [sizeWarning, setSizeWarning] = useState(false);
  const [url, setUrl] = useState(null);
  const [addresses, refetch] = useFetch({ url, method: "GET" });

  function handleChange(event) {
    const { target: { value }} = event;

    if (value > MAX_SIZE) {
      setSizeWarning(true);
    }

    if (value <= MAX_SIZE) {
      setSizeWarning(false);
    }

    setSize(value);
  }

  function getAddresses() {
    const fullUrl = `${config.base_api_url}${config.addresses_path}?size=${size}`;

    if (addresses.data) {
      setUrl(fullUrl);
      refetch();
    } else {
      setUrl(fullUrl);
    }
  }
  
  return (
    <div className="App">
      <header className="app-header">
        <h1>{text.randomAddresses}</h1>
      </header>
      <main className="main">
        <div className="addresses-number-input">
          <label htmlFor="size-input">{text.enterAddressesNumber}</label>
          <input
            id="size-input"
            type="text"
            value={size}
            onChange={handleChange}
          />
        </div>
        {sizeWarning && (
          <div className="size-warning">{text.sizeWarning}</div>
        )}
        {addresses.isLoading ? 
          <div className="loading-indicator">{text.loading}</div>
          :
          <Button
            disabled={size > 100}
            handleClick={getAddresses}
          />
        }
        { (addresses.data && !addresses.loading) && (
          <Addresses data={addresses.data} />
        )}
      </main>
    </div>
  );
}

export default App;
