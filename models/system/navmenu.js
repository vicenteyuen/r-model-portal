/**
 * Created by vison on 2016/9/28.
 */

exports.id = '/system/navmenu';
exports.version = '0.0.1';

// --- set the exports ----
exports.install = function(options) {

};

exports.uninstall = function(options) {

};


exports.getAll = function(params , callback) {


    var output = [
        {
            id: 'category',
            text: '模型分类',
            children: [
                {
                    id: 'category-1',
                    text: '动漫CG',
                    link: '#'
                },
                {
                    id: 'category-2',
                    text: '车辆人物',
                    link: '#'
                },
                {
                    id: 'category-3',
                    text: '建筑模型',
                    link: '#'
                }

            ]
        },
        {
            id: 'blog',
            text: '博客',
            link: '/blob'
        }
    ];

    return output;

};


