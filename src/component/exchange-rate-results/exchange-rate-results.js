import React from 'react'

const ExchangeRateResults = ({ rateItems }) => {
    return (
     <div className="country-card">
    
 <div className="moneda  border-gray rounded border  align-items-center ">
            
       

            {Object.keys(rateItems).map(rateKey => (
                
                <div className="rates" key={rateKey}>
                    
                    {`${rateKey}: ${rateItems[rateKey].toFixed(4)}`}
                   
                </div>
                 
            ))}
         
            
      </div>
         </div>
      
    )
    
}

export default ExchangeRateResults