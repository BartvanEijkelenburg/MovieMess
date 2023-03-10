import { BlitzPage } from '@blitzjs/next';
import Layout from '../../core/layouts/Layout';
import { ScrollBarComponent } from '../../core/components/ScrollBarComponent';
import { Navbar } from '../../core/components/Navbar';
import React from 'react';
import { RegistrationFormWrapper } from '../../auth/components/RegistrationFormWrapper';

const SignUpPage: BlitzPage = () => {
  return (
    <Layout title={'Register'}>
      <ScrollBarComponent />
      <Navbar />
      <RegistrationFormWrapper />
    </Layout>
  );
};

SignUpPage.redirectAuthenticatedTo = '/app';
export default SignUpPage;
