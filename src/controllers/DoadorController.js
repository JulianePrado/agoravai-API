const Doador = require('../models/Doador');

module.exports = {
    async index(req, res) {
        const doadores = await Doador.findAll();

        return res.json(doadores); //retorna todos os doadores
    },

    async show(req, res) {
        const { id } = req.params;
        const doador = await Doador.findByPk(id);
      
        if (!doador) {
          return res.status(400).json({ error: "Doador não existe" });
        }
      
        return res.json(doador);
      },

    async store(req, res) {
        const { nome, cpf, email, senha } = req.body;

        const doador = await Doador.create({ nome, cpf, email, senha });

        return res.json(doador);
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome, cpf, email, senha } = req.body;

        const doador = await Doador.findByPk(id);

        if (!doador) {
            return res.status(400).json({ error: 'Falha ao atualizar doador' });
        }

        const updatedDoador = await doador.update({ nome, cpf, email, senha });

        return res.json(updatedDoador);
    },

    async delete(req, res) {
        const { id } = req.params;

        const doador = await Doador.findByPk(id);

        if (!doador) {
            return res.status(400).json({ error: 'Doador não encontrado' });
        }

        await doador.destroy();
        return res.send();
    }
}