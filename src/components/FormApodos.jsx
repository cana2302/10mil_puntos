import React, { useEffect } from 'react';

const FormApodos = ({ numberOfInputs, inputApodos, setInputApodos, setApodoOk }) => {

  // Actualiza el estado cuando cambia el número de inputs
  useEffect(() => {
    setInputApodos(Array(numberOfInputs).fill(''));
  }, [numberOfInputs]);

  // Función para manejar cambios en los inputs
  const handleInputChange = (index, event) => {
    const newValues = [...inputApodos];
    newValues[index] = event.target.value;
    setInputApodos(newValues);
  };

  // Función para manejar el submit del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Valores ingresados:', inputApodos);
    // Aquí puedes hacer cualquier cosa con los valores, como enviarlos a un servidor, etc.
    setApodoOk(true);

  };

  return (
    <form onSubmit={handleSubmit}>
      {Array.from({ length: numberOfInputs }, (_, index) => (
        <div key={index}>
          <label>
            Apodo: {index + 1}:
            <input
              type="text"
              value={inputApodos[index]}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>
        </div>
      ))}
      <button type="submit">Enter</button>
    </form>
  );
};
  
export default FormApodos