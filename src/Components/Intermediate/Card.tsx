// import React from 'react'
import '../../Assets/CSS/Components/Card.sass'

type CardProps = {
    ID?: string
    Class?: string
    Title?: string
    Image?: string
}

export default function Card({ ID, Class, Title, Image }: CardProps ) {
    return (
        <label id={ID} className={`${Class} card`}>
            { Image ? 
            <img src={Image} />
            :
            <div></div>
            }
            <h2>{Title}</h2>
        </label>
    )
}