import React from 'react'

import Styles from '../Cards/Cards.module.css'

const Card = (props) => {
  return (
    <div className={Styles.card}>
      <img src="https://images.unsplash.com/photo-1783431412513-8043c76cc987?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sequi debitis velit dolorum quia veritatis. Consequuntur, est unde? Cumque ea laboriosam voluptas odit!</p>
      <button>{props.btnTXT}</button>
    </div>
  )
}

export default Card