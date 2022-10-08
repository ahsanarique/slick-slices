import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => (
  <section>
    <header>
      <Nav />
    </header>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </section>
);

export default Layout;
