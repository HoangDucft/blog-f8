class NewsController {
    //[GET] /
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('detail ....');
    }
}

module.exports = new NewsController();
