const Donatario = require('../models/Donatario');

module.exports = {
    async index(req, res) {
        const donatarios = await Donatario.findAll();

        return res.json(donatarios); //retorna todos os donatarios
    },

    async show(req, res) {
        const { id } = req.params;
        const donatario = await Donatario.findByPk(id);
      
        if (!donatario) {
          return res.status(400).json({ error: "Donatario não existe" });
        }
      
        return res.json(donatario);
      },

    async store(req, res) {
        const { nome, cpf, email, senha } = req.body;

        const donatario = await Donatario.create({ nome, cpf, email, senha })

        return res.json(donatario);
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome, cpf, email, senha } = req.body;

        const donatario = await Donatario.findByPk(id);

        if (!donatario) {
            return res.status(400).json({ error: 'Falha ao atualizar donatario' });
        }

        const updatedDonatario = await donatario.update({ nome, cpf, email, senha });

        return res.json(updatedDonatario);
    },

    async delete(req, res) {
        const { id } = req.params;

        const donatario = await Donatario.findByPk(id);

        if (!donatario) {
            return res.status(400).json({ error: 'Donatario não encontrado' });
        }

        await donatario.destroy();
        return res.send();
    }
}