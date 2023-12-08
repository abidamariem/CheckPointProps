import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

export default function PlayerCard(prop) { 
  const {name,age,team,nationality,jersynumber,image}=prop.player
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} width="300px" height="250px"  />

      <Card.Body>
        <Card.Title><h1 style = { {color: 'red'} }>{name}</h1></Card.Title>

        <Card.Text><h3 style = { {color: 'blue', fontStyle: 'italic',} }>nationality:</h3><h2  style = { {color: 'black'} }>{nationality} </h2>
        </Card.Text><h3 style = { {color: 'blue'} }>Age :</h3><h2  style = { {color: 'black'} }>{age}</h2>
        <h3 style = { {color: 'blue'} }>TEAM:</h3><h2  style = { {color: 'black'} }>{team}</h2>
        <h3 style = { {color: 'blue'} }>jersyNumber:</h3> <h2  style = { {color: 'black'} }>{ jersynumber}</h2>
        <Button variant="primary">Like me</Button>
      </Card.Body>
    </Card>
  );
}