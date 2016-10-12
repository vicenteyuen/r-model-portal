var fs = require('fs');

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

    var sTime = Date.now();

    /**
     * read data from async handle
     * @type {*|Async}
     */
    var async = new Utils.Async();

    async.await(function(next) {
        MODEL('/system/navmenu').getAll({} , function( receiveModel ) {
            self.repository.menuModel = receiveModel[0];
            next();
        });

    });

    // --- done ---
    async.run(function() {

        // --- custom view ---
        self.view('index');

        var diffTime = Date.now() - sTime;
        console.log('use time : ' + diffTime);

    });
}

function view_search(opts) {
    "use strict";

    var self = this;

    var sTime = Date.now();

    /**
     * read data from async handle
     * @type {*|Async}
     */
    var async = new Utils.Async();

    async.await(function(next) {
        MODEL('/system/navmenu').getAll({} , function( receiveModel ) {
            self.repository.menuModel = receiveModel[0];
            next();
        });


        self.repository.prodModels = MODEL('/prodmod/model').searchResultByText();

    });

    // --- done ---
    async.run(function() {

        // --- show list field ---
        self.view('/models/list');

        var diffTime = Date.now() - sTime;
        console.log('use time : ' + diffTime);

        self.log('parse search file');
    });






}
