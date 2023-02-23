const TemplateExpressions = () => {
  const name = "Augusto";
  const age = 21;

  const data = {
    age: 21,
    job: "Programador",
  };

  return (
    <h3>
      Oi, {name}! Você tem {data.age} anos e trabalha como {data.job}!
    </h3>
  );
};

export default TemplateExpressions;
