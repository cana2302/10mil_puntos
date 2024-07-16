import React, { useRef, useEffect, useState } from 'react';

const FormInicial = ({ cantidadJugadores, setCantidadJugadores, menu2 }) => {
  const inputRef = useRef(null);
  const [error, setError] = useState(''); // mensaje de error

  useEffect(() => {
    // Enfoca el input cuando el componente se monta
    inputRef.current.focus();
  }, []);
  
  const handleInput = (event) => {
    const value = event.target.value;
    //Validar que el núm sea entero positivo
    if (/^\d*$/.test(value)) {
      const number = parseInt(value, 10);
      if (value === '' || (number >= 1 && number <= 12)){
        window.localStorage.setItem('cantidadJugadores', value)
        setCantidadJugadores(value);
        setError('');
      } else {
        setError('El valor debe ser un número entre 1 y 12');
      }
    } else {
      setError('El valor debe ser un número.')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (cantidadJugadores === '' || isNaN(cantidadJugadores)) {
      setError('Por favor ingrese un número.');
    } else {
      const number_ = parseInt(cantidadJugadores, 10);
      if (number_ >= 1 && number_ <= 12) {
        setError('');
        console.log('Valor ingresado:', number_);
        window.localStorage.setItem('cantidadJugadores', number_)
        setCantidadJugadores(number_);
        menu2();
      } else {
        setError('El valor debe ser un número entre 1 y 12.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Ingrese cantidad de jugadores</h3>
      </div>
      <div>
        <input type="text" ref={inputRef} onChange={handleInput} placeholder="número" />
      </div>
      <div>
        <button type="submit">Enter</button>
      </div>
      {error && <p style={{ color:'red' }}>{error}</p>}  
    </form>
  )

}
export default FormInicial