import React from 'react'
import Header from '@/components/template/Header/Header.jsx'
import TerendingCollection from '@/components/template/trendingCollection/TerendingCollection'
import TopCreator from '@/components/template/topCreator/TopCreator'
import Categories from '@/components/template/categories/Categories'
import DiscoverMoreNft from '@/components/template/dicoverMoreNft/DiscoverMoreNft'
import Timer from '@/components/template/timer/Timer'
import HowWork from '@/components/template/howWork/HowWork'
import WeeklyDigest from '@/components/template/weeklyDigest/WeeklyDigest'

export default function Home() {

  return (
    <div>
      <Header />
      <TerendingCollection />
      <TopCreator />
      <Categories />
      <DiscoverMoreNft />
      <Timer />
      <HowWork />
      <WeeklyDigest />
    </div>
  )
}
