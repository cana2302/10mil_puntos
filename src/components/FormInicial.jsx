const FormInicial = ({inputInicial, setInputInicial, setCantidadJugadores, error, setError }) => {

  const handleInput = (event) => {
    const value = event.target.value;

    //Validar que el núm sea entero positivo
    if (/^\d*$/.test(value)) {
      const number = parseInt(value, 10);
      if (value === '' || (number >= 1 && number <= 12)){
        setInputInicial(value);
        setError('');
      } else {
        setError('El valor debe ser un número entre 1 y 12');
      }
    } else {
      setError('El valor debe ser un número.')
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (inputInicial === '' || isNaN(inputInicial)) {
      setError('Por favor ingrese un número.');
    } else {
      const number = parseInt(inputInicial, 10);
      if (number >= 1 && number <= 12) {
        setError('');
        console.log('Valor ingresado:', number);
        setCantidadJugadores(number);
      } else {
        setError('El valor debe ser un número entre 1 y 12.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Ingrese cantidad de jugadores:</h3>
      </div>
      <div>
        <input  type='text' value={inputInicial} onChange={handleInput} placeholder=' número'/>
      </div>
      <div>
        <button type='submit'>Enter</button>
      </div>
      {error && <p style={{ color:'red' }}>{error}</p>}        
    </form>
  )
}
export default FormInicial