/* eslint-disable react/jsx-props-no-spreading */
/* este archivo es una mejor forma de trabajar nuestros componetentes,
ya que aqui los estamos conteniendo en un contenedor
*/
/*
aqui vamos a importar todos los componetentes,
para  asi tener un contenedor principal con cada,
uno de ellos
*/
import React from 'react';
import About from '../components/About';
import Card from '../components/Card';
import CardsDetails from '../components/CardsDetails';
import CardsSocial from '../components/CardsSocial';
import '../assets/styles/App.scss';

const App = () => {
  return (
    <About>
      <Card>
        <CardsDetails />
        <CardsSocial />
      </Card>
    </About>
  );
};

export default App;
