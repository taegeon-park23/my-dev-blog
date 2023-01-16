import React, { ReactElement } from 'react';
import Footer from '../organisms/Footer';
import { Navigation } from '../organisms/Navigation';

interface HomeTemplateProp {
  children: JSX.Element[] | JSX.Element;
}
export function HomeTemplate(props: HomeTemplateProp): React.ReactElement {
  const { children } = props;
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
