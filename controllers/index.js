exports.install = function () {
    F.route('/', view_index);
    // or
    F.route('/search', view_search);
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

function view_search(opts) {
    "use strict";
    var self = this;

    self.view('/list-show');
}