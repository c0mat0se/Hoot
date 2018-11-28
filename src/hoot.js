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

    // Tooltip Creation Function
    function tooltipsCreate() {
        // Set variable content based on data-attributes
        let ttContent = this.dataset.tooltip;
        let ttPos = this.dataset.tooltipPosition;

        // Create a div element and assign attributes
        let tooltip = document.createElement('div');
        tooltip.setAttributes({
            'id':'tg',
            'class': 'tooltip',
            'data-position': ttPos
        });

        // Create text node for tooltip content
        let ttText = document.createTextNode(ttContent);
        tooltip.appendChild(ttText);

        // Append tooltip to document
        document.body.appendChild(tooltip);
    }

    // Tooltip Removal Function
    function tooltipsDestroy() {
        let elemDestroy = document.querySelectorAll('.tt');

        // Remove tooltips from document
        elemDestroy.forEach(function(item) {
            item.parentNode.removeChild(item);
        });
    }

})
