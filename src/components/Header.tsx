import React from 'react';
import Logo from "../assets/Logo.svg"
export default function Header() {
    return (
        <header className="header">
            <img  className="header__image" alt="pokemom-logo" src={Logo} />
        </header>
    )
}
