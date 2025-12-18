function calcularAreaRetangulo(base, altura) {
  if (typeof base !== 'number' || typeof altura !== 'number') {
    throw new Error('Os parâmetros base e altura devem ser números.');
  }
  return base * altura;
}

function calculaTriangulo(base, altura) {
  if (typeof base !== 'number' || typeof altura !== 'number') {
    throw new Error('Os parâmetros base e altura devem ser números.');
  }
  return (base * altura) / 2; 
}

function calcularAreaCirculo(raio) {
  if (typeof raio !== 'number') {
    throw new Error('O parâmetro raio deve ser um número.');
  }
  return Math.PI * Math.pow(raio, 2);
}