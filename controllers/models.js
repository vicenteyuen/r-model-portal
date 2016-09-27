exports.install = function () {
    F.route('/models/categories', view_index);
    // or
    // F.route('/');
};

/**
 * map index handle
 */
function view_index() {
    var self = this;

    self.head('mods/models/categories.js');

    // --- custom view ---
    self.view('categories');

}