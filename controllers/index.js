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

    self.repository.menuModel = MODEL('/system/navmenu').getAll();


    self.head('mods/index.js');


    // --- custom view ---
    self.view('index');


}