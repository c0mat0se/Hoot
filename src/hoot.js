/**
 * Created by Kolby Kruger on 11/27/2018
 * Version 0.1.0
 */

function Hoot() {

    let elems = document.querySelectorAll('.hoot');

    elems.forEach(function(item) {
        item.addEventListener('mouseover', tooltipsCreate);
        item.addEventListener('mouseout', tooltipsDestroy);
    });

    // Tooltip Creation Function
    function tooltipsCreate() {

        // Set variable content based on data-attributes
        let ttContent = this.dataset.tooltip;
        let ttPos = this.dataset.tooltipPosition;

        // Create a div element and assign attributes
        let tooltip = document.createElement('div');
        tooltip.setAttribute('id', 'hoot-tg');
        tooltip.setAttribute('class', 'hoot-tooltip');
        tooltip.setAttribute('data-position', ttPos);

        // Create text node for tooltip content
        let ttText = document.createTextNode(ttContent);
        tooltip.appendChild(ttText);

        // Append tooltip to document
        document.body.appendChild(tooltip);
    }

    // Tooltip Removal Function
    function tooltipsDestroy() {
        let elemDestroy = document.querySelectorAll('#hoot-tg');

        // Remove tooltips from document
        elemDestroy.forEach(function(item) {
            item.parentNode.removeChild(item);
        });
    }

}
