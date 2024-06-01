import React, { useRef } from 'react'
import './Titlecard.css'
import cards from '../../assets/cards/cards.js'
const Titlecard = ({title}) => {
  const cardsRef = useRef();
 return (
    <div className='titlecards'>
      <h2>{title?title:"Popular Telugu movies"}</h2>
      <div className="cardlist" ref={cardsRef} >
        {cards.map((card,index)=>{
            return <div className="card" key={index}>
                <img src={card.image} alt="" />
                <p>{card.name}</p>
            </div>
        })
        }
      </div>
    </div>
  )
}

export default Titlecard
