import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'US'}/>

        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about_img} alt="" />

        </div>

    </div>
  )
}

export default About