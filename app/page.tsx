import React from 'react';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeProcess } from '@/components/home/HomeProcess';
import { HomeCapabilities } from '@/components/home/HomeCapabilities';
import { HomePartners } from '@/components/home/HomePartners';
import { HomeCTA } from '@/components/home/HomeCTA';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProcess />
      <HomeCapabilities />
      <HomePartners />
      <HomeCTA />
    </>
  );
}
