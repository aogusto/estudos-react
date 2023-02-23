const Events = () => {
  const handleMyEvent = (e) => {
    alert("Olá!");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Verdadeiro =)</h1>;
    } else {
      return <h1>Falso =(</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique-me</button>
      </div>
      <br />
      <div>
        <button
          onClick={(e) => {
            alert("Olá, novamente!");
          }}
        >
          Clique em mim
        </button>
      </div>
      <br />
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
