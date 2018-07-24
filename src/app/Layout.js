import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site'
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Router from './layout/Router'

const Layout = ({ children }) => (
  <Site>
    <Helmet
      title="James' Adventure"
      meta={[
        { name: 'description', content: 'Aaron Klaser\'s personal wedsite, portfolio, blog, tutorials, and just cool $h!t' },
        { name: 'keywords', content: 'resume, blog, porfolio, tutorials, aaron klaser' },
      ]}
      script={[
        { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
      ]}
      link={[
        {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/5.0.0/css/font-awesome.min.css'},
        {'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&amp;subset=latin-ext'}
      ]}
    />
    <Header />
      <Content>
      <Router />
    </Content>
    <Footer />
  </Site>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
