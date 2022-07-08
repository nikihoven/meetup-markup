import AnchorLink from 'react-anchor-link-smooth-scroll/lib/anchor-link'

import './header.scss'

const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <AnchorLink href="#services" className="nav__link">наши<br/>услуги</AnchorLink>
                        </li>
                        <li className="nav__item">
                            <AnchorLink href="#cases" className="nav__link">наши<br/>кейсы</AnchorLink>
                        </li>
                        <li className="nav__item">
                            <AnchorLink href="#happy" className="nav__link">счастье<br/>клиента</AnchorLink>
                        </li>
                        <li className="nav__item">
                            <AnchorLink href="#team" className="nav__link">наша<br/>команда</AnchorLink>
                        </li>
                        <li className="nav__item">
                            <AnchorLink href="#contacts" className="nav__link">контакты</AnchorLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export { Header }