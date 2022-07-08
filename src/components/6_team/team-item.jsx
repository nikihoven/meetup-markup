import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const TeamItem = ({cl, image, author, right, position, text}) => {
    const [animation, setAnimation] = useState('')

    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    useEffect(() => {
        if (inView) {
            setAnimation(right ? 'fadeInLeft' : 'fadeInRight')
        }
    }, [inView])

    return (
        <li ref={ref} className={cl ? animation + ' team__item item ' + cl : animation + ' team__item item'}>
            <img src={image} alt={author} className={right ? 'item__image item__image--right' : 'item__image'}/>
            <div className="item__info">
                <h3 className="item__author">{author}</h3>
                <h4 className="item__position">{position}</h4>
                <p className="item__text">{text}</p>
            </div>
        </li>
    )
}

export { TeamItem }