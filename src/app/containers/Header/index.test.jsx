import React from 'react';
import { string, shape } from 'prop-types';
import HeaderContainer from './index';
import { RequestContextProvider } from '../../contexts/RequestContext';
import { ServiceContext } from '../../contexts/ServiceContext';
import { ToggleContext } from '../../contexts/ToggleContext';
import { shouldMatchSnapshot } from '../../../testHelpers';
import pidginServiceConfig from '../../lib/config/services/pidgin';

const defaultToggleState = {
  test: {
    navOnArticles: {
      enabled: true,
    },
  },
  live: {
    navOnArticles: {
      enabled: false,
    },
  },
};

const mockToggleDispatch = jest.fn();

const HeaderContainerWithContext = ({ pageType, service, serviceContext }) => (
  <ToggleContext.Provider
    value={{
      toggleState: defaultToggleState,
      toggleDispatch: mockToggleDispatch,
    }}
  >
    <ServiceContext.Provider value={serviceContext}>
      <RequestContextProvider
        isAmp={false}
        pageType={pageType}
        service={service}
        bbcOrigin="https://www.test.bbc.com"
      >
        <HeaderContainer />
      </RequestContextProvider>
    </ServiceContext.Provider>
  </ToggleContext.Provider>
);
HeaderContainerWithContext.propTypes = {
  pageType: string.isRequired,
  service: string.isRequired,
  serviceContext: shape({}).isRequired,
};

describe(`Header`, () => {
  shouldMatchSnapshot(
    'should render correctly for news article',
    HeaderContainerWithContext({
      pageType: 'article',
      service: 'news',
      serviceContext: pidginServiceConfig,
    }),
  );
  shouldMatchSnapshot(
    'should render correctly for WS frontPage',
    HeaderContainerWithContext({
      pageType: 'frontPage',
      service: 'pidgin',
      serviceContext: pidginServiceConfig,
    }),
  );
  shouldMatchSnapshot(
    'should render correctly for WS media page',
    HeaderContainerWithContext({
      pageType: 'media',
      service: 'pidgin',
      serviceContext: pidginServiceConfig,
    }),
  );
});
