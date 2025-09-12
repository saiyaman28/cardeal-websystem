// import React from 'react'
import { Link } from 'react-router-dom'
import '../../Assets/CSS/Components/Href.css'

type HrefMode = {
    Redirect?: string
    OnClick?: () => void
}

type HrefProps = {
    ID?: string
    Class?: string
    Title?: string
}

export default function Href({ ID, Class, Title, Redirect, OnClick }: HrefMode & HrefProps) {
    return (
        <>
            {Redirect && 
                <Link id={ID} className={Class} to={Redirect}>
                    { Title }
                </Link>
            }
            {OnClick && 
                <a id={ID} className={Class} onClick={OnClick}>
                    { Title }
                </a>
            }
        </>
    )
}