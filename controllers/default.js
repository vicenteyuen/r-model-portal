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


    console.log( MODEL('/system/navmenu').getAll() );


    self.head('mods/default.js');


    // --- custom view ---
    self.view('index');


}