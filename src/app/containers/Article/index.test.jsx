import React from 'react';
import { shouldMatchSnapshot } from '../../../testHelpers';
import ArticleContainer from './index';

// explicitly ignore console.log errors for Article/index:getInitialProps() error logging
global.console.log = jest.fn();

const defaultProps = {
  isAmp: false,
  pageType: 'article',
  dials: {},
  service: 'news',
};

jest.mock('../PageHandlers/withPageWrapper', () => Component => {
  const PageWrapperContainer = props => (
    <div id="PageWrapperContainer">
      <Component {...props} />
    </div>
  );

  return PageWrapperContainer;
});

jest.mock('../PageHandlers/withLoading', () => Component => {
  const LoadingContainer = props => (
    <div id="LoadingContainer">
      <Component {...props} />
    </div>
  );

  return LoadingContainer;
});

jest.mock('../PageHandlers/withError', () => Component => {
  const ErrorContainer = props => (
    <div id="ErrorContainer">
      <Component {...props} />
    </div>
  );

  return ErrorContainer;
});

jest.mock('../PageHandlers/withData', () => Component => {
  const DataContainer = props => (
    <div id="DataContainer">
      <Component {...props} />
    </div>
  );

  return DataContainer;
});

jest.mock('../ArticleMain', () => {
  const ArticleMain = () => <div>ArticleMain</div>;

  return ArticleMain;
});

describe('ArticleContainer', () => {
  describe('Component', () => {
    describe('Composing the Article Container using the page handlers', () => {
      shouldMatchSnapshot(
        'should compose articleContainer with the Page Handler in the correct order',
        <ArticleContainer {...defaultProps} />,
      );
    });
  });
});
