exports.getIndex = (req, res, next) => {
    res.render('admin/index', {
        pageTitle: "Movies",
        path: '/movies'
    });  
};
exports.getMovies = (req, res, next) => {
    res.render('admin/movies', {
        pageTitle: "Movies",
        path: '/movies'
    });  
};
exports.getPage = (req, res, next) => {
    res.render('admin/page', {
        pageTitle: "Movies",
        path: '/movies'
    });  
};
exports.getTrickOrTreat = (req, res, next) => {
    res.render('admin/trickortreat', {
        pageTitle: "Movies",
        path: '/movies'
    });  
};