import { nanoid } from 'nanoid'

const GallerySlide = ({elements}) => {

    return (
        <li className="gallery__slide slide">
            {elements.map(el =>
                <div key={nanoid()} className={'card ' + el.classes.join(' ')}>
                    <h3 className="card__position">{el.position}</h3>
                    <h3 className="card__sphere">{el.sphere}</h3>
                    <h5 className="card__turnover">Оборот компании: {el.turnover}</h5>
                    <h5 className="card__duration">Длительность поиска: {el.duration}</h5>
                    <h5 className="card__longList">Longlist: {el.longList}</h5>
                    <h5 className="card__area">Зона поиска: {el.area}</h5>
                </div>)}
        </li>
    )
}

export { GallerySlide }