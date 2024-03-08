class NewsController {

    //index thường đặt là trang chủ

    // [GET]/news
    index (req, res) {
        res.render('news');
    }

    // [GET]/news/:slug
    show (req, res) {
        res.send("detail <3");
    }
}

module.exports = new NewsController;