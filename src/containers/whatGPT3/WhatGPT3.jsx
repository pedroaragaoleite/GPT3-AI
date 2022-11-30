import React from 'react'
import './whatGPT3.scss'

import { Link } from 'react-router-dom';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__what section__padding'>
      <div className='gpt3__what-is'>
        <div className='gpt3__what-is__title'>
        <div className='gpt3__line'></div>
          <h3>What is GPT-3</h3>
        </div>
        <div className='gpt3__what-is__text'>
          <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
      </div>
      <div className='gpt3__what-banner'>
        <div className='gpt3__what-banner__content'>
          <h2>The possibilities are beyond your imagination</h2>
          <Link to="/">Explore the Library</Link>
        </div>
      </div>
      <div className='gpt3__what-content'>
        <div className='gpt3__what-content__item'>
          <div className='gpt3__what-content__title'>
            <div className='gpt3__line'></div>
            <h3>Chatbots</h3>
          </div>
          <div className='gpt3__what-is__text'>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
          </div>
        </div>
        <div className='gpt3__what-content__item'>
          <div className='gpt3__what-content__title'>
            <div className='gpt3__line'></div>
            <h3>Knowledgebase</h3>
          </div>
          <div className='gpt3__what-is__text'>
            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
          </div>
        </div>
        <div className='gpt3__what-content__item'>
          <div className='gpt3__what-content__title'>
            <div className='gpt3__line'></div>
            <h3>Education</h3>
          </div>
          <div className='gpt3__what-is__text'>
            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3