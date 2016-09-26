exports.install = function () {
    F.route('/', view_index);
    // or
    // F.route('/');
};

/**
 * map index handle
 */
function view_index() {
    var self = this;

    self.head('mods/default.js');


    // --- custom view ---
    self.view('index');


}