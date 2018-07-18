import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { string, shape, any } from 'prop-types';
import Header from '../Header';
import MainContent from '../MainContent';

const Article = ({ lang, title, data }) => (
  <Fragment>
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
    </Helmet>
    <Header />
    <MainContent data={data} />
  </Fragment>
);

Article.propTypes = {
  lang: string.isRequired,
  title: string.isRequired,
  data: shape(any).isRequired,
};

export default Article;
