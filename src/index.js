import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: 'Leo',
  lastName: 'Benítez',
  avatar: 'https://i.pinimg.com/originals/e9/57/2a/e9572a70726980ed5445c02e1058760b.png'
};

function getName (user){
  if(user){
    return `${user.firstName} ${user.lastName}`
  }
  return 'Stranger';
};

const element = (
  <div>
    <h1>{getName(user)}</h1>
    <img src={user.avatar}></img>
  </div>
);

const container = document.getElementById('root')

ReactDOM.render(element, container)