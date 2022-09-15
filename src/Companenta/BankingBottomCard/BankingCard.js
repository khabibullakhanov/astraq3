import React from 'react'
import oldiberdiBanking from "../../Assets/Icons/Oldi berdi Banking.svg"
import orangeSmallCard from "../../Assets/Icons/Orange small box.svg"
import greenSmallCard from "../../Assets/Icons/Green small box.svg"
import skripka from "../../Assets/Icons/Skripka.svg"
import uchNuqta from "../../Assets/Icons/3 nuqta.svg"
import './BankingCard.css'

export function BankingCard({ users }) {

    return (
        <div>
            <div>
                {users.map((item, index) => {
                    return (
                        <div id="banking-card-comapnent-line">
                            <div id="banking-card-comapnent-line-first">
                                <div id="banking-card-comapnent-line-first-img">
                                    <img src={oldiberdiBanking} alt='' />
                                </div>
                                <div id="banking-card-comapnent-line-first-text">
                                    <h4 id='font-weight-600'>{item.name}</h4>
                                    <p id="grey-color">{item.date}</p>
                                </div>
                            </div>
                            <div id="banking-card-comapnent-line-second">
                                <img src={greenSmallCard} alt='' />
                                <p>{item.completed}</p>
                            </div>
                            <div id="banking-card-comapnent-line-third">
                                <img src={skripka} alt='' />
                                <p id="grey-color">{item.file}</p>
                            </div>
                            <div id="banking-card-comapnent-line-fourth">
                                <h4 id='font-weight-600'>{item.cost}</h4>
                                <img src={uchNuqta} alt='' />
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}
