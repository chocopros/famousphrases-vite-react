import { useState } from 'react'
import React from 'react'
import users from '../json/users.json'
import colors from '../utils/colors'


const Card = () => {

    //Generando Numero Aleatorio segun el json
    const getRandomElement = arr => {
      const indexRandom = Math.floor(Math.random() * arr.length)
      return arr[indexRandom]
    }
    getRandomElement(users)

    const [randomUser, setRandomUser] = useState(getRandomElement(users))

    //ColorRandom
    const [randomColors, setRandomColors] = useState(getRandomElement(colors))

    //CambiarPeople
    const getRandomAll = () => {

      let colorRandom = getRandomElement(colors)
      let userRandom = getRandomElement(users)
      

      setRandomUser(userRandom)
      setRandomColors(colorRandom)
    }

    const objecStyle = {
      color: randomColors
    }
  
    const objectBgStyle = {
      backgroundColor: randomColors
    }

    
    
  return (
    <div className="container" style={objectBgStyle} >
      <div className="card">
        <div className="body-card">
          <div className="body-text" >
            <p style={objecStyle} ><span className='simbol' style={objecStyle} >"</span>{randomUser.quote}</p>
            <h2 style={objecStyle} >{randomUser.author}</h2>
          </div>
        </div>
        <div className="options">
          <button style={objectBgStyle} onClick={getRandomAll} ><b>{`>`}</b></button>
        </div>
      </div>
    </div>

  )
}

export default Card