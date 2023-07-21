import React from 'react'
import MidBody from './MidBody'
import MessageHeader from './MessageHeader'
import MessageBox from './MessageBox'

const Body = () => {
  return (
    <div>
        <MidBody />
        <MessageHeader />
        <MessageBox />
    </div>
  )
}

export default Body