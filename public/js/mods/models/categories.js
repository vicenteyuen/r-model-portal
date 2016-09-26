/**
 * module inline running javascript
 */
$(document).ready(function () {


    // --- load config ---
    var isotypeContainer = $('.isotope-grid').isotope({
        itemSelector: '.isotope-grid-item',
        layoutMode: 'fitRows'
    });


    isotypeContainer.imagesLoaded(function () {
        "use strict";
        isotypeContainer.isotype('layout');
    })






});