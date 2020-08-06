import React from 'react' ;
import { Card, CardDeck } from 'react-bootstrap' ;
import './Cards.css' ;
import holder1 from '../img/holder1.jpg' ;

export default function Cards() {
    return (
        <CardDeck>
            <Card bg='dark' text='white'>
                <Card.Img variant="top" src={holder1} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Bars
                </Card.Text>
                </Card.Body>
            </Card>
            <Card bg='dark' text='white'>
                <Card.Img variant="top" src={holder1} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Fax
                </Card.Text>
                </Card.Body>
            </Card>
            <Card bg='dark' text='white'>
                <Card.Img variant="top" src={holder1} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Spicy
                </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    )
}