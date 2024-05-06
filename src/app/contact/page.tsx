import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Product from '../components/Product';
import Form from '../components/Form';
import Title from '../components/Title';

export default function Home() {
  return (
    <>
      <Header />
      <Title />
      <Main children={<Form />} />
      <Footer />
    </> 
  );
}
