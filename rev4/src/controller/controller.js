const array2 = [];

module.exports = {
  async create(request, response) {
    const { nome, idade, anoquenasceu, diafaleceu, anoatual, comomorreu } =
      request.body;
    const idadequeestaria = anoquenasceu - anoatual;

    const iten = {
      nome,
      idade,
      anoquenasceu,
      diafaleceu,
      anoatual,
      comomorreu: 'bala perdida',
      idadequeestaria,
    };

    array2.push(idadequeestaria);
    return response.json(iten);
  },
  async getItens(request, response) {
    return response.json(array2);
  },
};
