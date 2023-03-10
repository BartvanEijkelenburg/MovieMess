import Head from 'next/head';
import React from 'react';
import { BlitzLayout } from '@blitzjs/next';

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{`MovieMess | ${title}` || 'MovieMess'}</title>
        <link rel={'icon'} href={'/favicon.ico'} />
        <meta charSet={'utf-8'} />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
        <meta name={'theme-color'} content={'#000000'} />
      </Head>
      {children}
    </>
  );
};

export default Layout;
