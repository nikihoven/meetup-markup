import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import { GallerySlide } from './gallery-slide'

import ArrowPrev from './images/arrow-prev.png'
import ArrowNext from './images/arrow-next.png'

import './gallery.scss'

const Gallery = ({list, className}) => {
    const [listed, setListed] = useState([])
    const [clientWidth, setClientWidth] = useState(0)

    const [maxScrollPercent, setMaxScrollPercent] = useState(0)
    const [scrolled, setScrolled] = useState(0)

    const [prevVisibility, setPrevVisibility] = useState(false)
    const [nextVisibility, setNextVisibility] = useState(true)

    useEffect(() => {
        const resizeHandler = (e) => {
            setClientWidth(e.path[0].innerWidth)
            setScrolled(0)
        }

        window.addEventListener('resize', resizeHandler)

        setClientWidth(window.innerWidth)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    useEffect(() => {
        setMaxScrollPercent((listed.length - 1) * 100)
    }, [listed])

    useEffect(() => {
        if (clientWidth >= 1024) {
            if (listed.length && listed[0].length === 6) return
            setListed(get6(list))
        } else if (clientWidth >= 768) {
            if (listed.length && listed[0].length === 4) return
            setListed(get4(list))
        } else {
            if (listed.length && listed[0].length === 1) return
            setListed(get1(list))
        }
    }, [clientWidth, setListed])

    useEffect(() => {
        if (scrolled !== 0 && scrolled !== maxScrollPercent) {
            setNextVisibility(true)
            setPrevVisibility(true)
        } else if (scrolled === 0) {
            setPrevVisibility(false)
            setNextVisibility(true)
        } else {
            setNextVisibility(false)
            setPrevVisibility(true)
        }
    }, [scrolled, maxScrollPercent])

    const handelPrev = () => {
        if (scrolled > 0) {
            setScrolled(prev => prev -= 100)
        }
    }

    const handelNext = () => {
        if (scrolled < maxScrollPercent) {
            setScrolled(prev => prev += 100)
        }
    }

    return (
        <div className={className ? 'gallery ' + className : 'gallery'}>
            <div className="gallery__window">
                <ul style={{transform: `translateX(-${scrolled}%)`}} className="gallery__list">
                    {listed && listed.map((el, i) => <GallerySlide key={nanoid()} elements={el}/>)}
                </ul>
            </div>
            <img
                style={{display: prevVisibility ? 'block' : 'none'}}
                onClick={handelPrev} src={ArrowPrev}
                alt="arrow previous"
                className="gallery__arrow gallery__arrow--prev"
            />
            <img
                style={{display: nextVisibility ? 'block' : 'none'}}
                onClick={handelNext} src={ArrowNext}
                alt="arrow previous"
                className="gallery__arrow gallery__arrow--next"
            />
        </div>
    )
}

export { Gallery }

const get6 = (list) => {
    const newArr = []

    for (let i = 0; i < list.length; i++) {
        if (i % 6 === 0) {
            newArr.push([list[i]])
        } else {
            newArr[newArr.length - 1].push(list[i])
        }
    }

    return newArr
}

const get4 = (list) => {
    const newArr = []

    for (let i = 0; i < list.length; i++) {
        if (i % 4 === 0) {
            newArr.push([list[i]])
        } else {
            newArr[newArr.length - 1].push(list[i])
        }
    }

    return newArr
}

const get1 = (list) => {
    const newArr = []

    list.forEach(el => {
        newArr.push([el])
    })

    return newArr
}