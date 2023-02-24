const Roupa = require('../models/Roupa');

module.exports = {
    async index(req, res) {
        const roupa = await Roupa.findAll();

        return res.json(roupa); //retorna todos as roupas
    },

    async show(req, res) {
        const { id } = req.params;
        const roupa = await Roupa.findByPk(id);
      
        if (!roupa) {
          return res.status(400).json({ error: "Roupa não existe" });
        }
      
        return res.json(roupa);
      },

    async store(req, res) {
        const { tipo, tamanho, condicao  } = req.body;

        const roupa = await Roupa.create({ tipo, tamanho, condicao  })

        return res.json(roupa);
    },

    async update(req, res) {
        const { id } = req.params;
        const { tipo, tamanho, condicao  } = req.body;

        const roupa = await Roupa.findByPk(id);

        if (!roupa) {
            return res.status(400).json({ error: 'Falha ao atualizar roupa' });
        }

        const updatedRoupa = await roupa.update({tipo, tamanho, condicao  });

        return res.json(updatedRoupa);
    },

    async delete(req, res) {
        const { id } = req.params;

        const roupa = await Roupa.findByPk(id);

        if (!roupa) {
            return res.status(400).json({ error: 'Roupa não encontrado' });
        }

        await roupa.destroy();
        return res.send();
    }
}