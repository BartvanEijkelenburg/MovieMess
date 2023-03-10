import { AppProps, ErrorBoundary, ErrorComponent, ErrorFallbackProps } from '@blitzjs/next';
import { AuthenticationError, AuthorizationError } from 'blitz';
import React from 'react';
import { withBlitz } from 'src/blitz-client';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import 'src/styles/globals.css';
import { LoginFormWrapper } from '../auth/components/LoginFormWrapper';

config.autoAddCss = false;

function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <LoginFormWrapper />;
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title={'Sorry, you are not authorized to access this'}
      />
    );
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    );
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      {getLayout(<Component {...pageProps} />)}
    </ErrorBoundary>
  );
}

export default withBlitz(MyApp);
