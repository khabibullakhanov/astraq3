import React from 'react'
import "./TicketingCards.css"
import bleuRectangle from "../../Assets/Icons/Blue full Rectangle.svg"
import pinkRectangle from "../../Assets/Icons/Pink full Rectangle.svg"
import yellowRectangle from "../../Assets/Icons/Yellow full Rectangle.svg"
import orangeRectangle from "../../Assets/Icons/Orange full Rectangle.svg"



export function TicketingCards() {
    return (
        <div id="ticketing-companents-cards-container">
            <div id='ticketing-companents-cards-content'>
                <div id="ticketing-companents-cards-content-header">
                    <img src={bleuRectangle} alt="" />
                    <p>Ticket Solds</p>
                </div>
                <h1>11.720</h1>
            </div>
            <div id='ticketing-companents-cards-content'>
                <div id="ticketing-companents-cards-content-header">
                    <img src={pinkRectangle} alt="" />
                    <p>Ticket Solds</p>
                </div>
                <h1>2.345</h1>
            </div>
            <div id='ticketing-companents-cards-content'>
                <div id="ticketing-companents-cards-content-header">
                    <img src={yellowRectangle} alt="" />
                    <p>Ticket Solds</p>
                </div>
                <h1>980</h1>
            </div>
            <div id='ticketing-companents-cards-content'>
                <div id="ticketing-companents-cards-content-header">
                    <img src={orangeRectangle} alt="" />
                    <p>Ticket Solds</p>
                </div>
                <h1>720</h1>
            </div>
        </div>
    )
}
