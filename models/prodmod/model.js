/**
 * Created by vison on 2016/9/28.
 */

exports.id = '/prodmod/model';
exports.version = '0.0.1';

// --- set the exports ----
exports.install = function(options) {

};

exports.uninstall = function(options) {

};


exports.searchResultByText = function(params , callback) {


    var output = [
        {
            id: 'pid-1',
            image: 'images/portfolio/portfolio1.jpg'

        },
        {
            id: 'pid-2',
            image: 'images/portfolio/portfolio2.jpg'
        },
        {
            id: 'pid-3',
            image: 'images/portfolio/portfolio3.jpg'
        },
        {
            id: 'pid-4',
            image: 'images/portfolio/portfolio4.jpg'
        },
        {
            id: 'pid-5',
            image: 'images/portfolio/portfolio5.jpg'
        }

    ];

    return output;

};


