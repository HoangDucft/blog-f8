class SiteController {

    //index thường đặt là trang chủ

    // [GET]/
    index (req, res) {
        res.render('home');
    }

    // [GET]/news/:slug
    search (req, res) {
        res.send("search");
    }
}

module.exports = new SiteController;