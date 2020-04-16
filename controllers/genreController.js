var Genre = require('../models/genre');
var Book = require('../models/book');
var async = require('async');

// Display list of all Genre.
exports.genre_list = function(req, res) {
    res.send('Students IMPLEMENT: Genre list, to display each Genre name in ascending order. Use genre_list view');
};

// Display detail page for a specific Genre.
exports.genre_detail = function(req, res) {
    res.send('Students IMPLEMENT: Genre detail: ' + req.params.id + 'Use genre_detail view. You should dispaly genre name, and all books in this genre.');
};

// Display Genre create form on GET.
exports.genre_create_get = function(req, res) {
    res.send('Bonus: Student IMPLEMENT: Genre create GET. Use genre_form view');
};

// Handle Genre create on POST.
exports.genre_create_post = function(req, res) {
    res.send('Bonus: Student IMPLEMENT: Genre create POST. Use genre_form view');
};

// Display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};