/**
 * Created by nqlong on 07-Apr-17.
 */
var header = function(req, res, next) {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-header', 'Origin, X-Requested-Width', 'Content-Type',
        'Accept', 'Authorization');
    next();
};

module.exports = header;