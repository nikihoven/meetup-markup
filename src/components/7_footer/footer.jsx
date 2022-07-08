import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Title } from '../ui/title/title'

import { ReactComponent as TelegramIcon } from './images/tg.svg'
import { ReactComponent as VkIcon } from './images/vk.svg'
import { ReactComponent as InstagramIcon } from './images/inst.svg'

import './footer.scss'

const Footer = () => {
    const [animated, setAnimated] = useState(false)

    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    useEffect(() => {
        if (inView) {
            setAnimated(true)
        }
    }, [inView])


    return (
        <footer ref={ref} id="contacts" className={animated ? 'footer footer--animated' : 'footer'}>
            <div className="container">
                <div className="footer__container">
                    <Title className="footer__title" text="контакты"/>
                    <div className="footer__row footer__row--email">
                        <h3 className="footer__subtitle">электронная почта</h3>
                        <a href="mailto:eduard.bikbilatov@gmail.com" className="footer__link">eduard.bikbilatov@gmail.com</a>
                    </div>
                    <div className="footer__row footer__row--phones">
                        <h3 className="footer__subtitle">контакты Эдуарда Бикбулатова</h3>
                        <a href="tel:+33622485104" className="footer__link footer__link--phone">+ 33 6 22 48 51 04 - TG,
                                                                                                WA</a>
                        <a href="tel:+79688385577" className="footer__link footer__link--phone">+ 7 968 838 55 77 -
                                                                                                GSM</a>
                    </div>
                    <div className="footer__row footer__row--socials socials">
                        <h3 className="footer__subtitle">соцсети</h3>
                        <ul className="socials__list">
                            <a href="https://instagram.com" className="socials__item"><InstagramIcon/></a>
                            <a href="https://t.me" className="socials__item"><TelegramIcon/></a>
                            <a href="https://vk.com" className="socials__item"><VkIcon/></a>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { Footer }