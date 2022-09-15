import React from 'react'
import "./Crypto.css"
import { CryptoCard } from '../../Companenta/Crypto Companents/CryptoCard'
import { Header } from "../../Companenta/Header/Header"
import bitcoinLogo from "../../Assets/Icons/BitCoin Logo.svg"
import oldiBerdi from "../../Assets/Icons/Oldi Berdi.svg"
import etherum from '../../Assets/Icons/Etherum Logo.svg'
import uchNuqta from "../../Assets/Icons/3 nuqta.svg"
import { CryptoStatistics } from '../../Companenta/Crypto Companents/CryptoStatistics'
import {CryptoRight} from "../../Companenta/Crypto Companents/CryptoRight"


export function Crypto() {
    return (
        <div id="crypto-main">
            <div id="crypto-main-container-left">
            <Header />
            <h1>Crypto</h1>
            <CryptoCard />
            <div id="crypto-period-container">
                <div id='crypto-period-container-left'>
                    <div id='crypto-period-container-left-left'>
                        <div id='crypto-period-container-left-left-img'>
                            <div>
                                <img src={bitcoinLogo} alt="" />
                            </div>
                            <div>
                                Bitcoin
                            </div>
                        </div>
                        <select id='crypto-period-container-left-left-select'>
                            <option>Bitcoin</option>
                            <option>Bitcoin</option>
                            <option>Bitcoin</option>
                        </select>
                    </div>
                    <div>
                        <img id='crypto-oldi-berdi' src={oldiBerdi} alt="" />
                    </div>
                    <div id='crypto-period-container-left-right'>
                        <div id='crypto-period-container-left-right-img'>
                            <div id='crypto-period-container-left-right-img-img'>
                                <img src={etherum} alt="" />
                            </div>
                            <div>
                                <p>Etherum</p>
                            </div>
                        </div>
                        <select id='crypto-period-container-left-right-img-select'>
                            <option>Etherum</option>
                            <option>Etherum</option>
                            <option>Etherum</option>
                        </select>
                    </div>
                </div>
                <div id='crypto-period-container-right'>
                    <div id='crypto-period-container-right-left'>
                        <div id='crypto-period-container-right-grey'>
                            1H
                        </div>
                        <div id='crypto-period-container-right-grey'>
                            1D
                        </div>
                        <div id='crypto-period-container-right-blue'>
                            3D
                        </div>
                        <div id='crypto-period-container-right-grey'>
                            1W
                        </div>
                        <div id='crypto-period-container-right-grey'>
                            1M
                        </div>
                        <div id='crypto-period-container-right-grey'>
                            1Y
                        </div>
                    </div>
                    <div>
                        <img src={uchNuqta} alt="" />
                    </div>
                </div>
            </div>
            <CryptoStatistics />
            
        </div>
        <div id="crypto-main-container-right">
            <CryptoRight/>
        </div>
        </div>
    )
}
