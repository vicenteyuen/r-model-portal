exports.install = function () {
    F.route('/ga', view_index);
    // or
    // F.route('/');
};


/**
 * set the export uninstall
 */
exports.uninstall = function () {
    "use strict";

};

/**
 * map index handle
 */
function view_index() {
    var self = this;
    self.view('index');

}