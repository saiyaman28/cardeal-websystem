import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Assets/CSS/Components/Button.css'

type ButtonProps = {
    Redirect?: boolean
    Navigate?: boolean
    Submit?: boolean
    Radio?: boolean
    File?: boolean
}

export default function Button({ Redirect, Navigate, Submit, Radio, File }: ButtonProps) {
    return (
        <>
            {(Redirect || Navigate) &&
                <button>BUTTON</button>
            }
            {Submit &&
                <input type={`submit`}/>
            }
            {Radio &&
                <label>
                    <input type={`radio`} />
                    Radio Button
                </label>
            }
            {File &&
                <label>
                    <input type={`file`} />
                    File Button
                </label>
            }
        </>
    )
}