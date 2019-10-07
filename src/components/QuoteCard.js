import React from 'react';
import './QuoteCard.css'

const image = "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
const name = "Nelson Muntz"



function QuoteCard(){
    return(
        <figure className="QuoteCard">
            <img src={image} alt='Nelson Muntz'></img>
            <figcaption>
                <blockquote>
                Shoplifting is a victimless crime, like punching someone in the dark.
                </blockquote>
                <cite>{name}</cite>
            </figcaption>
        </figure>
    )
};


export default QuoteCard;