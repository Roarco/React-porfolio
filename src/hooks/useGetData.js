/* eslint-disable prefer-destructuring */

/* aqui vamos a implementar el react hook para la fake api */
import { useState, useEffect } from 'react';

/* creamos una funcion que nos permitira manejar el estado y el ciclo de vida de cualquier componente
de nuestra aplicacion, por que la vamos a poder utilizar donde sea necesario.
*/
const API = process.env.REACT_APP_API_URL;

const useInitialState = () => {
  //useState
  const [info, setInfo] = useState({
    results: [],
  }) ;

  //useEffect
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, []);
  return info;
};

export default useInitialState;
