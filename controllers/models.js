exports.install = function () {
    F.route('/prodmod/categories', view_index);

    F.route('/prodmod/model/{modelId}' , view_model_info);
};

/**
 * map index handle
 */
function view_index() {
    var self = this;

    self.repository.menuModel = MODEL('/system/navmenu').getAll();

    self.head('mods/prodmod/categories.js');

    // --- custom view ---
    self.view('categories');

}


/**
 * call model detail
 * @param modelId
 */
function view_model_info(modelId) {
    var self = this;

    console.log('modelId ' + modelId);
    console.log(self.req);
    console.log(self.query);


    self.view('modelinfo');
}
