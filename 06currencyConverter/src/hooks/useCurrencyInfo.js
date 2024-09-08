import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);  // Ensure `res[currency]` is a valid object
      })
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

// =============================================================================================

// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({});
//     useEffect(()=> {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//         .then((res) => res.json)  // here comes a callback where we have to convert the object to json
//         .then((res) => setData(res[currency]))
//         .catch((err) => console.error("Error fetching currency data:", err));
//     },[currency])

//     console.log(data["bdt"]);
//     return data
// }

// export default useCurrencyInfo;