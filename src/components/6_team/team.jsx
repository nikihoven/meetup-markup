import Ed from './images/people/ed.png'
import Stas from './images/people/stas.png'
import Vika from './images/people/vika.png'
import Sofia from './images/people/sofia.png'
import Nikita from './images/people/nikita.png'

import { Title } from '../ui/title/title'

import { TeamItem } from './team-item'

import './team.scss'

const arr = [
    {
        image: Ed,
        author: 'Эд Бикбулатов',
        position: 'Основатель компании',
        text: 'Работает в executive recruitment с 1998 года. Эд имел возможность изучить практики поиска топ-менеджеров в лидирующих глобальных компаниях: Managing Associate офиса Korn Ferry в Париже, Client Partner Alexander Hughes (Париж),  Senior Associate компании РосЭксперт (Москва). Владеет русским, английским и французским языками. Главный генератор идей'
    },
    {
        image: Stas,
        author: 'Стас Полтавец',
        position: 'Associate Recruiter направления IT',
        text: 'Бакалавр информационных систем и технологий Российского Технологического Университета МИРЭА. Автоматизирует процессы рекрутмента в компании, отвечает за Team Building, участвует в развитии бизнеса. Свободно владеет русским и английским языками',
        right: true,
        cl: 'item--first'
    },
    {
        image: Vika,
        author: 'Вика Бредихина',
        position: 'Associate Recruiter направления Finance',
        text: 'Бакалавр экономики и статистики Высшей Школы Экономики. Работала бизнес-ассистентом, занималась закупками, медиапланированием, ведением социальных сетей. В компании занимается поиском и интервьюированием кандидатов. Большую часть своей жизни прожила в Бельгии и Греции. Свободно владеет тремя языками: русским, английским и французским',
        cl: 'item--second'
    },
    {
        image: Sofia,
        author: 'Софья Ларина',
        position: 'Бизнес-ассистент',
        text: 'Бакалавр информатики и вычислительная техники Высшей Школы Экономики. Разрабатывала дизайн-проекты для малого бизнеса в IT-сегменте. В компании занимается аналитикой рынка и подбором кандидатов, работает с источниками информации и экспертами, владеет инструментами SMM и Business Writing. Главный медиум в команде, отвечает за работу со смыслами',
        right: true,
        cl: 'item--third'
    },
    {
        image: Nikita,
        author: 'Никита Полников',
        position: 'Associate Recruiter направления Недвижимость',
        text: 'Бакалавр управления бизнесом Высшей Школы Экономики. До этого работал видеомонтажёром и моушн-дизайнером. Владеет русским и английским языками. Занимается поиском и интервьюированием кандидатов в области недвижимости, строит систему продаж внутри компании. Прагматичный и точный'
    }
]

const Team = () => {

    return (
        <section id="team" className="team">
            <div className="team__decorative">
                <div className="container team__container">
                    <Title className="team__title" text="наша команда"/>
                    <ul className="team__list">
                        {arr.map(el =>
                            <TeamItem key={el.position} cl={el.cl} image={el.image} author={el.author} right={el.right} position={el.position} text={el.text}/>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export { Team }