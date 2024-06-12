const FormPuntos = () => {

  const handleInput = (event) => {
    const value = event.target.value;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Turno jugador:</h3>
      </div>
      <div>
        <input  type='text'  onChange={handleInput} placeholder=' puntos'/>
      </div>
      <div>
        <button type='submit'>Enter</button>
      </div>       
    </form>
  )
}
export default FormPuntos