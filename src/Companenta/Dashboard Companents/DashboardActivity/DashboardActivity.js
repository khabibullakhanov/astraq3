import React from 'react'
import "./DashboardActivty.css"
import siyohrangTortburchak from "../../../Assets/Icons/Siyohrang Tortburchak.svg"
import pushtiTortburchak from "../../../Assets/Icons/Pushti Tortburchak.svg"
import yashilTortburchak from "../../../Assets/Icons/Yashil Tortburchak.svg"
import orangeTortburchak from "../../../Assets/Icons/Orange Tortburchak.svg"
import borderImg from "../../../Assets/Images/border.png"


export function DashboardActivity() {
    return (
        <div id='dashboard-percent-main'>
            <div id='dashboard-percent-main-left'>
                <img src={siyohrangTortburchak} alt="" />
                <img src={pushtiTortburchak} alt="" />
                <img src={yashilTortburchak} alt="" />
                <img src={orangeTortburchak} alt="" />
                {/* <div>
                    <img id="border-img" src={borderImg} alt="" />
                </div> */}
            </div>
            <div id='dashboard-percent-main-right'>
                <div id="dashboard-percent-main-right-container">
                    <div id="dashboard-percent-main-right-container-inside">
                        <h3>Transaction Assets</h3>
                        <span>2 Hour Ago</span>
                    </div>
                    <span id='dashboard-percent-main-right-container-text'>Ab architecto provident ex accusantium deserunt. </span>
                </div>
                <div id="dashboard-percent-main-right-container">
                    <div id="dashboard-percent-main-right-container-inside">
                        <h3>New Email Register</h3>
                        <span>2 Hour Ago</span>
                    </div>
                    <span id='dashboard-percent-main-right-container-text'>Ab architecto provident ex accusantium deserunt. </span>
                </div>
                <div id="dashboard-percent-main-right-container">
                    <div id="dashboard-percent-main-right-container-inside">
                        <h3>Transaction Assets</h3>
                        <span>2 Hour Ago</span>
                    </div>
                    <span id='dashboard-percent-main-right-container-text'>Ab architecto provident ex accusantium deserunt. </span>
                </div>
                <div id="dashboard-percent-main-right-container">
                    <div id="dashboard-percent-main-right-container-inside">
                        <h3>New Email Register</h3>
                        <span>2 Hour Ago</span>
                    </div>
                    <span id='dashboard-percent-main-right-container-text'>Ab architecto provident ex accusantium deserunt. </span>
                </div>
            </div>
        </div>
    )
}
