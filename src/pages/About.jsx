import React from 'react'
import '../styles/About.css'
import MyBtn from '../components/UI/button/MyBtn'
import WelcomePart from "../components/UI/welcome/WelcomePart";

const About = () => {
    return (
        <div className='about__container'>
            <WelcomePart
                title='Post Forum'
                subtitle='This application was built using the following technologies:'
            />
            <div className="about__content">
                <ul>
                    <li>React</li>
                    <li>React Transition Group</li>
                    <li>Axios library</li>
                    <li>React Router DOM</li>
                </ul>
            </div>
            <div className="btn__box">
                <MyBtn large>
                    @NVadimD
                    <div className='tg_ico'></div>
                </MyBtn>
            </div>
            <div className="about__bg_box">

            </div>
        </div>
    )
}

export default About
