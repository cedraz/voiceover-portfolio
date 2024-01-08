'use client'
import * as React from 'react'

import '../styles/image.css'

import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import { lightTheme } from '../components/ThemeRegistry/lightTheme'
import { darkTheme } from '../components/ThemeRegistry/darkTheme'

import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Categories from '@/components/Categories/Categories'
import Portfolio from '@/components/Portfolio/Portfolio'
import About from '@/components/About/About'
import Feedbacks from '@/components/Feedbacks/Feedbacks'
import Budget from '@/components/Budget/Budget'
import Footer from '@/components/Footer/Footer'

import { register } from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

export default function Home() {
    const [mode, setMode] = React.useState(false)
    const toggleTheme = () => {
        setMode(mode ? false : true)
    }

    function getMode(mode: boolean) {
        if (mode) {
            return lightTheme
        } else {
            return darkTheme
        }
    }

    return (
        <>
            <ThemeRegistry theme={getMode(mode)}>
                <Navbar toggleFunc={toggleTheme} />
                <Hero />
                <Categories />
                <Portfolio />
                <About />
                <Feedbacks />
                <Budget />
                <Footer />
            </ThemeRegistry>
        </>
    )
}
