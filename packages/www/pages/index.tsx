import React from 'react';
import Head from 'next/head';
import { DatePicker } from 'antd';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DatePicker />
    </>
  );
};

export default Index;
