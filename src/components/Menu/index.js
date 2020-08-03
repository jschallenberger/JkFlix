import React from 'react'
import Logo from '../../assets/logoimg.png'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from './components/ButtonLink'


function Menu() {
    return(
        <nav className="Menu">
            <a href="/" >
                <img className="Logo" src={Logo} alt="JkzraFlix Logo"></img>
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu