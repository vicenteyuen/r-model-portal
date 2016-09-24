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



    // --- custom view ---
    self.view('index');


}