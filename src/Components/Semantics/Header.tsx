import React from 'react'
import '../../Assets/CSS/Components/Header.css'
import '../../Assets/CSS/Components/MenuBurger.css'
import { Href } from '../../Exporter/Components_Exporter'
import { useScreenWidth } from '../../Exporter/Hooks_Exporter'

export default function Header({}) {
    const screenwidth = useScreenWidth();

    return (
        <header id={`header`}>
            <div id={`header-container`} className={`container`}>
                <h1 id={`header-title`}>Header Component</h1>
                {screenwidth > 766 ? 
                    <nav id={`header-nav`}>
                        <Href Title={`HOME`} Redirect={`#`} />
                        <Href Title={`GALLERY`} Redirect={`#`} />
                    </nav>
                    :
                    <div className={`burger`}>
                        <input className={`burger-in`} type={`checkbox`} href={`#NavMenu`} data-bs-toggle={`collapse`} data-bs-target={`#collapseExample`} />
                    </div>
                }
            </div>
        </header>
    )
}