import { Title } from '../ui/title/title'

import { Gallery } from '../gallery/gallery'

import './cases.scss'

const arr = [
    {
        id: 1,
        position: 'HR Director',
        turnover: '500 млн. руб.',
        duration: '1,5 месяца',
        longList: '25 кандидатов',
        area: 'Москва, Россия',
        sphere: 'EdTech',
        classes: ['light', 'highlighted']
    },
    {
        id: 3,
        position: 'Chief Product Officer',
        turnover: '300 млн. руб.',
        duration: '3 месяца',
        longList: '48 кандидатов',
        area: 'Россия, страны Центральной Европы',
        sphere: 'IT',
        classes: ['light']
    },
    {
        id: 5,
        position: 'Country Manager',
        turnover: '2 млрд. евро',
        duration: '3 месяца',
        longList: '75 кандидатов',
        area: 'Франция, Великобритания',
        sphere: 'Chemicals',
        classes: ['light', 'highlighted', 'circle--red']
    },
    {
        id: 2,
        position: 'Financial Controller',
        turnover: '100 млн. долларов',
        duration: '4 месяца',
        longList: '45 кандидатов',
        area: 'Россия',
        sphere: 'EdTech',
        classes: ['light']
    },
    {
        id: 4,
        position: 'Chief Digital Officer',
        turnover: '1 млрд. руб.',
        duration: '3 месяца',
        longList: '40 кандидатов',
        area: 'Россия',
        sphere: 'IT',
        classes: ['dark', 'wing--blue']
    },
    {
        id: 6,
        position: 'Генеральный директор девелоперской компании',
        turnover: false,
        duration: '2,5 месяца',
        longList: '46 кандидатов',
        area: 'Россия',
        sphere: 'Real Estate',
        classes: ['dark', 'circle--blue']
    },
    {
        id: 7,
        position: 'Sales Director',
        turnover: '320 млн. руб.',
        duration: '3 месяца',
        longList: '38 кандидатов',
        area: 'Россия',
        sphere: 'IT',
        classes: ['light', 'highlighted']
    },
    {
        id: 9,
        position: 'Коммерческий директор',
        turnover: '15 млрд. руб.',
        duration: '3 месяца',
        longList: '40 кандидатов',
        area: 'Россия',
        sphere: 'Real Estate',
        classes: ['dark', 'wing--red']
    },
    {
        id: 11,
        position: 'Commercial Manager',
        turnover: '14 млрд. руб',
        duration: '4 месяца',
        longList: '68 кандидатов',
        area: 'Франция, Германия, Нидерланды, Испания',
        sphere: 'Energy',
        classes: ['light', 'highlighted', 'wing--blue']
    },
    {
        id: 8,
        position: 'Вице-Президент – Head of Retail',
        turnover: '25 млрд. руб.',
        duration: '4 месяца',
        longList: '60 кандидатов',
        area: 'Россия',
        sphere: 'FinTech',
        classes: ['dark', 'circle--red']
    },
    {
        id: 10,
        position: 'Chief Executive Officer',
        turnover: '400 млн. руб.',
        duration: '2 месяца',
        longList: '48 кандидатов',
        area: 'Россия',
        sphere: 'Logistics',
        classes: ['light', 'circle--blue']
    },
    {
        id: 12,
        position: 'Chief Investment Officer',
        turnover: '9 млрд. руб.',
        duration: '3,5 месяца',
        longList: '63 кандидатов',
        area: 'Великобритания, США, Центральная Европа',
        sphere: 'Metallurgy',
        classes: ['light']
    }
]

const Cases = () => {

    return (
        <section id="cases" className="cases">
            <div className="container">
                <Title text="наши кейсы" className="cases__title"/>
                <Gallery className="cases__gallery" list={arr}/>
            </div>
        </section>
    )
}

export { Cases }