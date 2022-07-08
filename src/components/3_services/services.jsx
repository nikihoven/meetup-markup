import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { nanoid } from 'nanoid'

import { Title } from '../ui/title/title'
import { ServiceItem } from './service-item'

import './services.scss'

const expertiseList = ['Real Estate', 'Logistics', 'Industry', 'Life Sciences', 'Retail & Consumer Goods', 'Finance', 'Education']

const servicesList = [
    {
        title: <>Executive Search<br/>прямой поиск</>,
        text: 'Прямой поиск — поиск руководителей высшего звена, в том числе среди  профессионалов rising stars, ещё не ставших известными в профессиональном сообществе. Мы идентифицируем наиболее успешных менеджеров и проводим с ними первые переговоры. Для этого мы анализируем сегменты отраслей и рынков, представляем Вам кандидатов и работаем с ними вплоть до подписания оффера.',
        itemClass: 'services__service--executive',
        paragraphClass: '',
        initial: false
    },
    {
        title: <>Talent Intelligence<br/>встреча с экспертами рынка</>,
        text: 'Talent Intelligence — это консультации с ключевыми специалистами вашего и других рынков. Некоторые задачи бизнеса не решить наймом новых сотрудников. Именно для таких случаев мы организуем консультации — находим авангард бизнес-мысли вашего рынка и помогаем сделать собственное открытие благодаря их советам.',
        itemClass: 'services__service--intelligence',
        paragraphClass: 'service__paragraph--primary',
        initial: true
    },
    {
        title: <>International Mapping <br/>построение карты рынка</>,
        text: 'Поиск топ-менеджера — работа, требующая серьёзных временных и финансовых вложений. Прежде чем её начинать, мы составляем детальный обзор конкурентных бизнесов. Карта рынка, как и физическая карта, даст чёткое представление о том, куда стоит направляться и каким путём — например, расскажет, какие зарплатные ожидания у потенциальных кандидатов и какая система мотивации им подходит.',
        itemClass: 'services__service--mapping',
        paragraphClass: 'service__paragraph--primary',
        initial: true
    },
    {
        title: <>Talent Excellence<br/>аудит текущей команды</>,
        text: 'Мы оцениваем состояние рынка труда и анализируем эффективность работы ключевых менеджеров бизнеса. После этого находим возможных кандидатов на существующие должности и предлагаем решения по изменению команды топ-менеджеров. Например, если рынок стагнирующий, мы поможем найти сотрудников с такой же эффективностью, но с меньшей стоимостью.',
        itemClass: 'services__service--excellence',
        paragraphClass: 'service__paragraph--secondary',
        initial: true
    }
]

const Services = () => {
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
        <section ref={ref} id="services" className={animated ? 'services services--animated' : 'services'}>
            <div className="container services__container">
                <Title text="наши услуги" className="services__title services__title--services"/>
                <ul className="services__list">
                    {servicesList.map(el =>
                        <ServiceItem key={nanoid()} text={el.text} title={el.title} itemClass={el.itemClass} paragraphClass={el.paragraphClass} initial={el.initial}/>)}
                </ul>
                <Title text="отраслевая экспертиза" className="services__title services__title--expertise"/>
                <p className="services__expertise expertise">Наша отраслевая экспертиза наиболее
                                                             развита в сферах:<br/>
                    <span className="expertise__list">
                    {
                        expertiseList.map(el =>
                            <span key={el} className="services__expertise--highlighted">{el}</span>)
                    }
                    </span>
                </p>
            </div>
        </section>
    )
}

export { Services }


