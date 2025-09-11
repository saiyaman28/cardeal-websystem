import React from 'react'
import '../../Assets/CSS/Components/Inputbox Selectbox.css'

export default function Inputbox({}) {
    function ValidType( type ) {
        const allowedTypes = [`text`, `email`, `date`, `password`, `datetime-local`, `month`, `url`, `number`, `time`, `file`, `search`];
        return allowedTypes.includes( type ) && type;
    }

    return (
        <input type="text" placeholder={`Enter text here`} />
    )
}