'use client';
import * as React from 'react';

import '../styles/image.css';

import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { lightTheme } from '../components/ThemeRegistry/lightTheme';
import { darkTheme } from '../components/ThemeRegistry/darkTheme';

import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Section from '../components/Section';
import Categories from '../components/Categories/Categories';
import Quality from '../components/Quality/Quality';
import Services from '../components/Services/Services';
import Feedbacks from '@/components/Feedbacks/Feedbacks';

import heroImage from '../../public/images/hero.png';
import categoriesImage from '../../public/images/categories.png';
import qualityImage from '../../public/images/quality.png';
import servicesImage from '../../public/images/services.png';

import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function Home() {
  const [mode, setMode] = React.useState(true);
  const toggleTheme = () => {
    setMode(mode ? false : true);
  };

  function getMode(mode: boolean) {
    if (mode) {
      return lightTheme;
    } else {
      return darkTheme;
    }
  }

  const SECTIONS = [
    {
      id: 'Inicio',
      href: '#Inicio',
      children: <Hero />,
      image: heroImage,
      order: true,
    },
    {
      id: 'Categorias',
      href: '#Categorias',
      children: <Categories />,
      image: categoriesImage,
      order: false,
    },
    {
      id: 'Serviços',
      href: '#Serviços',
      children: <Services />,
      image: servicesImage,
      order: true,
    },
    {
      id: 'Qualidade',
      href: '#Qualidade',
      children: <Quality />,
      image: qualityImage,
      order: true,
    },
  ];

  return (
    <>
      <ThemeRegistry theme={getMode(mode)}>
        <Navbar toggleFunc={toggleTheme} links={SECTIONS} />

        {SECTIONS.map(({ image, order, children, id }) => (
          <Section key={id} image={image} order={order} id={id}>
            {children}
          </Section>
        ))}

        <Feedbacks />
      </ThemeRegistry>
    </>
  );
}
