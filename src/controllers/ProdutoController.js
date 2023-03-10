const Produto = require('../models/Produto');

module.exports = {
    async index(req, res) {
        const produtos = await Produto.findAll();

        return res.json(produtos); //retorna todos os produtos
    },

    async show(req, res) {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);
      
        if (!produto) {
          return res.status(400).json({ error: "Produto não existe" });
        }
      
        return res.json(produto);
      },

    async store(req, res) {
        const { nome, tipo  } = req.body;

        const produto = await Produto.create({ nome, tipo  })

        return res.json(produto);
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome, tipo   } = req.body;

        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(400).json({ error: 'Falha ao atualizar produto' });
        }

        const updatedProduto = await produto.update({nome, tipo  });

        return res.json(updatedProduto);
    },

    async delete(req, res) {
        const { id } = req.params;

        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(400).json({ error: 'Produto não encontrado' });
        }

        await produto.destroy();
        return res.send();
    }
}