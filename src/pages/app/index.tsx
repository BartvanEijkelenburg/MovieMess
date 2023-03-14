import { BlitzPage } from '@blitzjs/next';
import Layout from '../../core/layouts/Layout';
import { AppNavbar } from '../../app/components/AppNavbar';
import React from 'react';
import { MovieGridComponent } from '../../app/components/MovieGridComponent';

const AppPage: BlitzPage = () => {
  return (
    <Layout title={'Stream Now!'}>
      <AppNavbar />
      <MovieGridComponent />
    </Layout>
  );
};

AppPage.authenticate = true;

export default AppPage;
