import Head from 'next/head';
import React, { FC, useEffect } from 'react';
import { SignIn } from '../components/pages/signIn'
import { TopPage } from '../components/pages/TopPage/TopPage';


export const Page: FC = () => {
  return (
    <>
      <Head>
        <title>スイタイ</title>
      </Head>
      <TopPage />
    </>
  )
}

export default Page;