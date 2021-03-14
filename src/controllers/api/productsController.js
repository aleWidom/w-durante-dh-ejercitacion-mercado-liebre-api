const {
    Product,
    Sequelize,
    Brand,
    Category
} = require('../../database/models');
const Op = Sequelize.Op;


module.exports = {
    latest: function (req, res) {
        Product.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
                limit: 8
            })
            .then(function (resultado) {
                let respuesta = {
                    meta: {
                        status: 200,
                        count: resultado.length,
                        url: "/api/products/latest"
                    },
                    data: resultado
                }
                res.json(respuesta)
            })
            .catch(function (err) {
                console.log(err)
            });
    },
        offers: function (req, res) {
            Product.findAll({
                where: {
                    discount: {
                        [Op.gt]: 0
                    }
                },
                limit: 8
            })
            .then(function(resultado) {
                let respuesta = {
                    meta : {
                        status: 200,
                        count: resultado.length,
                        url: "/api/products/offers"
                    },
                    data: resultado
                }
                
                res.json(respuesta)
                })
            },
            category: function(req, res) {
                Product.findAll().
                then(function(resultado) {
                    let respuesta = {
                        meta: {
                            status: 200,
                            url: "/api/products/categories",
                            count: resultado.length
                            },
                        data: resultado
                    }

                    res.json(respuesta)

                })
                
            }
    }