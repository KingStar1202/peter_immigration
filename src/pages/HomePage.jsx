import React from 'react'
import AwardWinning from '../component/Home/AwardWinning'
import Banner from '../component/Home/Banner'
import DidYouKnow from '../component/Home/DidYouKnow'
import PageLayOut from './../component/Shared/PageLayOut';

function HomePage() {
  return (
    <PageLayOut>
      <Banner/>
      <DidYouKnow/>
      <AwardWinning/>
    </PageLayOut>
  )
}

export default HomePage