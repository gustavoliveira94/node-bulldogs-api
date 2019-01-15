const axios = require('axios')

module.exports = (app) => {

    app.get('/', (req, res) => {
        axios.get('https://dog.ceo/api/breed/bulldog/images/random')
            .then(function (response) {
                res.marko(
                    require('../views/lista.marko'),
                    {
                        dogs: [
                            response.data.message
                        ]
                    }
                )
            })
            .catch(function (error) {
                console.log(error);
            })
    })

}