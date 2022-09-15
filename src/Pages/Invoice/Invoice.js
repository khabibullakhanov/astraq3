import React from "react";
import { Header } from "../../Companenta/Header/Header";
import "./Invoice.css";
import topIcon from "../../Assets/Icons/White Up Logo.svg";
import downIcon from "../../Assets/Icons/White Down Logo.svg"
import sendLogo from "../../Assets/Icons/Send Logo.svg"
import invoiceBlueChart from "../../Assets/Images/Invoice Chart.png"
import dollorImg from "../../Assets/Icons/Purple Dollor.svg"
import doubleTrue from "../../Assets/Icons/Double True.svg"
import tolqin1 from "../../Assets/Images/Tolqin1.png"
import tolqin2 from "../../Assets/Images/tolqin 2.png"
import tolqin3 from "../../Assets/Images/tolqin 3.png"
import tolqin4 from "../../Assets/Images/tolqin 4.png";
import trueIcon from "../../Assets/Icons/True.svg"
import undovIcon from "../../Assets/Icons/Undov.svg"
import soroqIcon from "../../Assets/Icons/Soroq.svg"
import purpleTrue from "../../Assets/Icons/Purple True.svg"
import uchNuqta from "../../Assets/Icons/3 nuqta.svg"
import qizilXato from "../../Assets/Icons/Red False.svg"
import { Checkbox } from "@mui/material";


export function Invoice() {

  return (
    <div id="invoice-main-container">
      <div id="invoice-top-main-content">
        <Header />
      </div>
      <div id="invoice-top-main-content-header-text">
        <h1 id="invoice-main-container-title">Invoicing</h1>
        <h2>Lastest Invoice</h2>
      </div>
      <div id="invoice-bottom-main-content">
        <div id="invoice-bottom-main-content-left">
          {/* <div id="invoice-bottom-main-content-left-top"> */}
          <div id="invoice-bottom-main-content-left-blue">
            <div id="invoice-bottom-main-content-left-blue-first">
              <p>Your Balance</p>
              <h1>$12,890,00</h1>
            </div>
            <div id="invoice-bottom-main-content-left-blue-second">

            </div>
            <div id="invoice-bottom-main-content-left-blue-third">
              <p>Income</p>
              <h2>$4345,00</h2>
              <div id="invoice-bottom-main-content-left-blue-third-bottom">
                <img src={topIcon} alt="" />
                <p>+15%</p>
              </div>
            </div>
            <div id="invoice-bottom-main-content-left-blue-fourth">
              <p>Expense</p>
              <h2>$2890,00</h2>
              <div id="invoice-bottom-main-content-left-blue-fourth-bottom">
                <img src={downIcon} alt="" />
                <p>-10%</p>
              </div>
            </div>
            <div id="invoice-bottom-main-content-left-blue-fifth">
              <p>Withdraw </p>
              <img src={sendLogo} alt="" />
            </div>
          </div>
          {/* </div> */}
          <div id="invoice-blue-div-bootom">
            <div id="invoice-blue-div-bootom-left">
              <div id="invoice-blue-div-bootom-first">
                <div id="invoice-blue-div-bootom-first-img">
                  <img src={invoiceBlueChart} alt="" />
                  <div id="invoice-blue-div-bootom-first-img-bottom">
                    <p>00:00</p>
                    <p>23:59</p>
                  </div>
                </div>
              </div>
              <h2 id="invoice-blue-div-bootom-left-tittle">Send Invoices</h2>
              <div id="invoice-blue-div-bootom-second">
                <div id="invoice-blue-div-bootom-second-left">
                  <label>Recipient</label>
                  <div id="invoice-blue-div-bootom-second-left-select">
                    <select>
                      <option>Select from list</option>
                      <option>Select from list</option>
                      <option>Select from list</option>
                      <option>Select from list</option>
                    </select>
                  </div>
                </div>
                <div id="invoice-blue-div-bootom-second-right">
                  <label>Recent Contact</label>
                  <div id="invoice-blue-div-bootom-second-right-div-container">
                    <div id="invoice-blue-div-bootom-second-right-div-container-div">

                    </div>
                    <div id="invoice-blue-div-bootom-second-right-div-container-div">

                    </div>
                    <div id="invoice-blue-div-bootom-second-right-div-container-div">

                    </div>
                    <div id="invoice-blue-div-bootom-second-right-div-container-div">

                    </div>
                  </div>
                </div>
              </div>
              <div id="invoice-blue-div-bootom-third">
                <div id="invoice-blue-div-bootom-third-left">
                  <label>Amount</label>
                  <div id="invoice-blue-div-bootom-third-left-div">
                    <img src={dollorImg} alt="" />
                    <p>Insert amount</p>
                  </div>
                </div>
                <div id="invoice-blue-div-bootom-third-right">
                  <label>Reference</label>
                  <div id="invoice-blue-div-bootom-third-right-div">
                    <p>Enter reference here</p>
                  </div>
                </div>
              </div>
              <div id="invoice-blue-div-bootom-fourth">
                <p>Send</p>
                <img src={sendLogo} alt="" />
              </div>
            </div>
            <div id="invoice-blue-div-bootom-right">
              <div id="invoice-blue-div-bootom-right-first">
                <div id="invoice-blue-div-bootom-right-first-left">
                  <div id="invoice-blue-bottom-border">
                    <Checkbox icon={<img src={doubleTrue} />} checkedIcon={<img src={trueIcon} style={{ width: "24px" }} />} />
                  </div>
                  <div id="invoie-blue-bottom-text">
                    <p>Invoice Completed </p>
                    <h2>2.678</h2>
                  </div>
                </div>
                <div id="invoice-blue-div-bootom-right-first-right">
                  <img src={tolqin1} alt="" />
                </div>
              </div>
              <div id="invoice-blue-div-bootom-right-second">
                <div id="invoice-blue-div-bootom-right-second-left">
                  <div id="invoice-blue-bottom-border">
                    <Checkbox icon={<img src={doubleTrue} />} checkedIcon={<img src={trueIcon} style={{ width: "24px" }} />} />
                  </div>
                  <div id="invoie-blue-bottom-text">
                    <p>Invoice Sent</p>
                    <h2>1.234</h2>
                  </div>
                </div>
                <div id="invoice-blue-div-bootom-right-second-right">
                  <img src={tolqin2} alt="" />
                </div>
              </div>
              <div id="invoice-blue-div-bootom-right-third">
                <div id="invoice-blue-div-bootom-right-third-left">
                  <div id="invoice-blue-bottom-border">
                    <Checkbox icon={<img src={undovIcon} style={{ width: "24px" }} />} checkedIcon={<img src={trueIcon} style={{ width: "24px" }} />} />
                  </div>
                  <div id="invoie-blue-bottom-text">
                    <p>Invoice Pending</p>
                    <h2>123</h2>
                  </div>
                </div>
                <div id="invoice-blue-div-bootom-right-third-right">
                  <img src={tolqin3} alt="" />
                </div>
              </div>
              <div id="invoice-blue-div-bootom-right-fourth">
                <div id="invoice-blue-div-bootom-right-fourth-left">
                  <div id="invoice-blue-bottom-border">
                    <Checkbox icon={<img src={soroqIcon} style={{ fontSize: "40px" }} />} checkedIcon={<img src={trueIcon} style={{ width: "24px" }} />} />
                  </div>
                  <div id="invoie-blue-bottom-text">
                    <p>Invoice Unpaid</p>
                    <h2>432</h2>
                  </div>
                </div>
                <div id="invoice-blue-div-bootom-right-fourth-right">
                  <img src={tolqin4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="invoice-bottom-main-content-right">
          <div id="invoice-bottom-main-content-right-header">
            <p>Invoice ID</p>
            <p>Status</p>
          </div>
          <div id="invoice-bottom-main-content-right-main">
            <div id="invoice-bottom-main-content-right-main-first">
              <div id="invoice-bottom-main-content-right-main-first-left">
                <h3>#123456</h3>
                <p>21/03/2021</p>
              </div>
              <Checkbox icon={
                <div id="invoice-bottom-main-content-right-main-first-center-red">
                  <img src={qizilXato} alt="" />
                  Paid
                </div>

              } checkedIcon={<div id="invoice-bottom-main-content-right-main-first-center">
                <img src={purpleTrue} alt="" />
                Paid
              </div>} />

              <div>
                <img src={uchNuqta} alt="" />
              </div>
            </div>
            <div id="invoice-bottom-main-content-right-main-first">
              <div id="invoice-bottom-main-content-right-main-first-left">
                <h3>#123456</h3>
                <p>21/03/2021</p>
              </div>
              <Checkbox icon={<div id="invoice-bottom-main-content-right-main-first-center">
                <img src={purpleTrue} alt="" />
                Paid
              </div>} checkedIcon={<div id="invoice-bottom-main-content-right-main-first-center-red">
                <img src={qizilXato} alt="" />
                Paid
              </div>} />
              <div>
                <img src={uchNuqta} alt="" />
              </div>
            </div>
            <div id="invoice-bottom-main-content-right-main-first">
              <div id="invoice-bottom-main-content-right-main-first-left">
                <h3>#123456</h3>
                <p>21/03/2021</p>
              </div>
              <Checkbox icon={
                <div id="invoice-bottom-main-content-right-main-first-center-red">
                  <img src={qizilXato} alt="" />
                  Paid
                </div>

              } checkedIcon={<div id="invoice-bottom-main-content-right-main-first-center">
                <img src={purpleTrue} alt="" />
                Paid
              </div>} />
              <div>
                <img src={uchNuqta} alt="" />
              </div>
            </div>
            <div id="invoice-bottom-main-content-right-main-first">
              <div id="invoice-bottom-main-content-right-main-first-left">
                <h3>#123456</h3>
                <p>21/03/2021</p>
              </div>
              <Checkbox icon={
                <div id="invoice-bottom-main-content-right-main-first-center-red">
                  <img src={qizilXato} alt="" />
                  Paid
                </div>

              } checkedIcon={<div id="invoice-bottom-main-content-right-main-first-center">
                <img src={purpleTrue} alt="" />
                Paid
              </div>} />
              <div>
                <img src={uchNuqta} alt="" />
              </div>
            </div>
            <div id="invoice-bottom-main-content-right-main-first">
              <div id="invoice-bottom-main-content-right-main-first-left">
                <h3>#123456</h3>
                <p>21/03/2021</p>
              </div>
              <Checkbox icon={<div id="invoice-bottom-main-content-right-main-first-center">
                <img src={purpleTrue} alt="" />
                Paid
              </div>} checkedIcon={<div id="invoice-bottom-main-content-right-main-first-center-red">
                <img src={qizilXato} alt="" />
                Paid
              </div>} />
              <div>
                <img src={uchNuqta} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
