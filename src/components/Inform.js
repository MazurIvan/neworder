import React, { Component } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export class Inform extends Component {
  render() {
    return (
      <div className='inform'>
        <div className='ornament' id='sec1'>
        </div>
        <div id='sec2' className='about-us'>
            <h1>Про нас</h1>
            <br></br>
            <p>Тут умовний опис умовної доставки. Або ресторану. Самі щось нафантазуйте. Адресу, наприклад. Корочше, літри води у вигляді нахвалювань.</p>
        </div>
        <div id='sec3' className='contacts-us'>
            <h1>Контакти</h1>
            <br></br>
            <FaFacebook className='contacts' />
            <FaInstagram className='contacts' />
            <FaTelegram className='contacts' />
        </div>
        <h1>Відгуки</h1>
      </div>
    )
  }
}

export default Inform