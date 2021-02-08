import React from 'react';

const UserInputCurrency = ({ defaultCurrency, onChange, options, size, code2 }) => {
    const displayOptions = () => {
        return options.map(option => <option value={option} key={option}>{option}</option>)
    }
 

     return (
          <div>
            <p className="text">Selecciona la moneda de referencia:</p>
            

        

        
            <select 
                defaultValue={[defaultCurrency]}
                size={size}
                className="input"
                
          
                 
                onChange={e => onChange(e.target.value)}
                 
            
                
                 
            >
                {displayOptions()}
            </select>
        </div>
    )
}

export default UserInputCurrency