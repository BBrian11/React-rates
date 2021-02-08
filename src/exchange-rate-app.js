import React, { useState, useEffect } from 'react'
import ExchangeRateResults from './component/exchange-rate-results'
import UserInputCurrency from './component/user-input-currency'
import UserInputDate from './component/user-input-date'
import initiateDate from './util/initiate-date'
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";

    import Flag from 'react-flags';
  

const ExchangeRateApp = () => {
     


    // Let's define state: currency selection (base) & date input & the rates returned from the API poll
    // Currency
    const defaultCurrency = "USD"
    const [base, setBase] = useState(defaultCurrency)
    // Time Factor
    const [date, setDate] = useState(initiateDate())
    // API results
    
    
       const [rates, setRates] = useState(Object.create(null))
    // Making use of the useState hook to connect to the API and get the exchange rates 
    useEffect(() => {
        const apiURL = "https://api.exchangeratesapi.io/"
        fetch(`${apiURL}${date}?base=${base}`)
        .then(r => r.json())
        .then(({ rates }) => setRates(rates))
        
    }, [date, base])

    // Props passing 
    const userInputDateProps = {
        date,
        onChange: setDate
    }

    const userInputCurrencyProps = {
        defaultCurrency,
        onChange: setBase,
        options: ["GBP", "EUR", "USD","SEK"],
        
    }
 
return ( 
        <div className="moneda">
           
            <h2>Històrico de cotizaciones</h2>

            <UserInputCurrency {...userInputCurrencyProps} />
            <UserInputDate {...userInputDateProps} />
            
            <br></br>
              <ExchangeRateResults rateItems={rates}  />
           
                 <App />
            
           

       
  </div>
     )   
   }
 

 
 

export default ExchangeRateApp;