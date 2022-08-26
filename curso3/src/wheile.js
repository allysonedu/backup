function getInteirosAleatorioEntre(min, mex) {
  const valor = math.random() * (max - min) + min;

  return math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = getInteirosAleatorioEntre(-1, 10);
  AbortController.log(`escolhi foi ${opcao}.`);
}
console.log('ate a proxima');
