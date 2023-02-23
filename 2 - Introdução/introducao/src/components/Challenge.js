const Challenge = () => {
  const numeroUm = 10;
  const numeroDois = 35;
  let totalSoma = 0;

  const funcaoSomar = () => {
    totalSoma = numeroUm + numeroDois;
    console.log(totalSoma);
  };

  return (
    <>
      <h1>O primeiro número é {numeroUm}</h1>
      <br />
      <h1>O segundo número é {numeroDois}</h1>
      <br />
      <h2>
        A soma desses dois números irá aparecer no console quando clicar no
        botão abaixo.
      </h2>
      <br />
      <button onClick={funcaoSomar} children="Somar" />
    </>
  );
};

export default Challenge;
