import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const NotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta name="description" content="The content you are looking for cannot be found." />
      </Helmet>
      <h1 data-testid="heading" style={{color: 'white'}}>Éc éc không tìm thấy trang!</h1>
      <p style={{color: 'white'}}>Quay trở về <Link to="/">Trang chủ</Link></p>
    </div>
  </HelmetProvider>
);

export default NotFound;
