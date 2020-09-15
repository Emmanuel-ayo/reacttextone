import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these fantabulous places</h1>
            <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src='./images/img13.jpg'
                    text="Explore the hidden waterfall deep inside the Amazon"
                    label='Adventure'
                    path='/services' />
                    <CardItem
                    src='./images/food4.jpg'
                    text="Tour and enjoy yourself around Nigeria beautiful places"
                    label='Luxury'
                    path='/services' />
                </ul>
                <ul className="cards__items">
                    <CardItem
                    src='./images/img4.jpg'
                    text="Amazing places around Nigeria with beautiful designs"
                    label='Adventure'
                    path='/services' />
                    <CardItem
                    src='./images/img12.jpg'
                    text="Beautiful ornamentals design around Nigeria"
                    label='Luxury'
                    path='/services' />
                    <CardItem
                    src='./images/img14.jpg'
                    text="A tour won't kill you, it will only save you"
                    label='Luxury'
                    path='/services' />
                    
                </ul>
            </div>
        </div>
        </div>
    )
}


export default Cards