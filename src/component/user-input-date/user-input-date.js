import React from 'react'
const UserInputDate = ({ onChange, date }) => {
    return (
        <div >
            <p className="text">Ingresa la fecha de cotizaciòn:</p>
            
           
            <input 
                type="date"
                className="input"
                defaultValue={date}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    )
}
export default UserInputDate