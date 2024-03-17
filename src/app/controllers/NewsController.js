class NewsController {
    //[GET] /
    async index(req, res) {
        res.render('news');
    }

    async show(req, res) {
        res.send('detail ....');
    }
}

module.exports = new NewsController();
