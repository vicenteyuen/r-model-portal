exports.install = function () {
    F.route('/categories', view_index);
    // or
    // F.route('/');
};

/**
 * map index handle
 */
function view_index() {
    var self = this;

    self.head('mods/models.js');

    // --- custom view ---
    self.view('categories');

}