const {
    addNewBook,
    getAllBooks,
    getDetailBook,
    updateBook,
    removeBook,
} = require('./books.controller');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addNewBook,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getDetailBook,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBook,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: removeBook,
    },
    {
        method: '*',
        path: '/{any*}',
        handler: () => 'Halaman tidak ditemukan',
    },
];

module.exports = routes;