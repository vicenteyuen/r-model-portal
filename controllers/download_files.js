var fs = require('fs');

exports.install = function () {

    //F.route('/models/fbx/xsi_man_skinning.fbx' , media_file_access);
    //console.log(F);
};


function media_file_access() {
    "use strict";

    var self = this;

    console.log(5454);


    var filename = F.path.public('models/fbx/xsi_man_skinning.fbx');
    var stream = fs.createReadStream(filename);

    stream.on('data', function (buffer) {
        //current += buffer.length;
        // progress[id] = Math.floor((current / size) * 100);
    });

    self.stream(U.getContentType('application/octet-stream'), stream, 'xsi_man_skinning.fbx');

    //self.file(F.path.public('models/fbx/xsi_man_skinning.fbx'), 'xsi_man_skinning.fbx');


}