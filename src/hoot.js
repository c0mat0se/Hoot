/**
 * Created by Kolby Kruger on 11/27/2018
 * Version 0.1.0
 */

let Hoot = (function() {
    let elems = document.querySelectorAll('.tt');

    elems.forEach(function(item) {
        item.addEventListener('mousein', tooltipsCreate);
        item.addEventListener('mouseout', tooltipsDestroy);
    });

    function tooltipsCreate() {

    }

    function tooltipsDestroy() {

    }

})
