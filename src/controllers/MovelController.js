const Movel = require('../models/Movel');

module.exports = {
    async index(req, res) {
        const moveis = await Movel.findAll();

        return res.json(moveis); //retorna todos os donatarios
    },

    async show(req, res) {
        const { id } = req.params;
        const movel = await Movel.findByPk(id);
      
        if (!movel) {
          return res.status(400).json({ error: "Movel não existe" });
        }
      
        return res.json(movel);
      },

    async store(req, res) {
        const { nome, cpf, email, senha } = req.body;

        const movel = await Movel.create({ tipo, condicao })

        return res.json(movel);
    },

    async update(req, res) {
        const { id } = req.params;
        const { tipo, condicao  } = req.body;

        const movel = await Movel.findByPk(id);

        if (!movel) {
            return res.status(400).json({ error: 'Falha ao atualizar movel' });
        }

        const updatedMovel = await movel.update({tipo, condicao  });

        return res.json(updatedMovel);
    },

    async delete(req, res) {
        const { id } = req.params;

        const movel = await Movel.findByPk(id);

        if (!movel) {
            return res.status(400).json({ error: 'Movel não encontrado' });
        }

        await movel.destroy();
        return res.send();
    }
}