import { useState } from 'react'

const ServiceItem = ({title, text, itemClass, paragraphClass, initial}) => {
    const [closed, setClosed] = useState(initial)

    return (
        <div className={
            closed
                ?
                (itemClass ? 'services__service service--closed ' + itemClass : 'services__service service--closed')
                :
                (itemClass ? 'services__service ' + itemClass : 'services__service')
        }>
            <h3 className="service__title">{title}</h3>
            <p className={paragraphClass ? 'service__paragraph ' + paragraphClass : 'service__paragraph'}>{text}</p>
            <div className="service__arrow" onClick={() => setClosed(prev => !prev)}>
                <span className="service__arrow--top"/>
                <span className="service__arrow--bottom"/>
            </div>
        </div>
    )
}

export { ServiceItem }