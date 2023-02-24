const Doador = require('../models/Doador');

module.exports = {
    async index(req, res) {
        const donors = await Doador.findAll();

        return res.json(donors); //retorna todos os doadores
    },

    async show(req, res) {
        const { id } = req.params;
        const donor = await Doador.findByPk(id);
      
        if (!donor) {
          return res.status(400).json({ error: "Doador não existe" });
        }
      
        return res.json(donor);
      },

    async store(req, res) {
        const { nome, cpf, email, senha } = req.body;

        const donor = await Doador.create({ nome, cpf, email, senha })

        return res.json(donor);
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome, cpf, email, senha } = req.body;

        const donor = await Doador.findByPk(id);

        if (!donor) {
            return res.status(400).json({ error: 'Falha ao atualizar doador' });
        }

        const updatedDoador = await donor.update({ nome, cpf, email, senha });

        return res.json(updatedDoador);
    },

    async delete(req, res) {
        const { id } = req.params;

        const donor = await Doador.findByPk(id);

        if (!donor) {
            return res.status(400).json({ error: 'Doador não encontrado' });
        }

        await donor.destroy();
        return res.send();
    }
}