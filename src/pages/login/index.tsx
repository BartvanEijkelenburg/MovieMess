import { BlitzPage, Routes } from '@blitzjs/next';
import Layout from '../../core/layouts/Layout';
import { Navbar } from '../../core/components/Navbar';
import { ScrollBarComponent } from '../../core/components/ScrollBarComponent';
import React from 'react';
import { LoginFormWrapper } from '../../auth/components/LoginFormWrapper';

const LoginPage: BlitzPage = () => {
  return (
    <Layout title={'Login'}>
      <ScrollBarComponent />
      <Navbar />
      <LoginFormWrapper />
    </Layout>
  );
};

LoginPage.redirectAuthenticatedTo = Routes.AppPage();
export default LoginPage;
