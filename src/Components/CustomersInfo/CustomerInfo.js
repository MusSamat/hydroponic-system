import React from "react";
import './CustomerInfo.css'

const CustomerInfo = () => {
    return(
        <div className='customersInfo'>

            <div className='customersInfo__items'>
                <div className='rectangle' >
                    <img src="images/svg/user.svg" alt="user"/>
                </div>
                <div className='title'>
                    <span>90 + </span> {<br/>} Колдонуучу
                </div>
            </div>
            <div className='vertical_line'>

            </div>
            <div className='customersInfo__items'>
                <div className='rectangle'>
                    <img src="images/svg/location.svg" alt="location"/>
                </div>
                <div className='title'>
                    <span>30 + </span>{<br/>} Кыргызстандын ар {<br/>} кайсыл аймагында
                </div>
            </div>

            <div className='vertical_line'>

            </div>

            <div className='customersInfo__items'>
                <div className='rectangle'>
                    <img src="images/svg/server.svg" alt="location"/>
                </div>
                <div className='title'>
                     <span>15 +</span> {<br/>} Жыл сайын {<br/>} өткөрүлүүчү семинарлар
                </div>
            </div>
        </div>
    )
}

export default CustomerInfo