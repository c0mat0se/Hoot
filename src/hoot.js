/**
 * Created by Kolby Kruger on 11/27/2018
 * Version 0.1.0
 */

function Hoot(offset) {

    let elems = document.querySelectorAll('.hoot');

    elems.forEach(function(item) {
        item.addEventListener('mouseover', tooltipsCreate);
        item.addEventListener('mouseout', tooltipsDissolve);
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

        // Get offsets and sizing for hoot element
        let hootOffsetTop = this.getBoundingClientRect().top,
            hootOffsetLeft = this.getBoundingClientRect().left,
            hootHeight = this.offsetHeight,
            hootWidth = this.offsetWidth;

        // Get sizing for tooltip element
        let tooltipHeight = tooltip.offsetHeight,
            tooltipWidth = tooltip.offsetWidth;

        // Define sizing variables for later use
        let y = '',
            x = '';

        // Define & merge setting for offset spacing of tooltips
        let ttOffset = 8;

        // Set positions based on tooltip position (ttPos)
        if (!ttPos) {
            ttPos = 'top';
        }

        if (ttPos == 'bottom') {
            y = (hootOffsetTop + hootHeight) + ttOffset;
            x = (hootOffsetLeft + (hootWidth / 2)) - (tooltipWidth / 2);
        }
        if (ttPos == 'top') {
            y = (hootOffsetTop - tooltipHeight) - ttOffset;
            x = (hootOffsetLeft + (hootWidth / 2)) - (tooltipWidth / 2);
        }
        if (ttPos == 'left') {
            y = (hootOffsetTop + (hootHeight / 2)) - (tooltipHeight / 2);
            x = (hootOffsetLeft - tooltipWidth) - ttOffset;
        }
        if (ttPos == 'right') {
            y = (hootOffsetTop + (hootHeight / 2)) - (tooltipHeight / 2);
            x = (hootOffsetLeft + hootWidth) + ttOffset;
        }

        // Set position of tooltip
        tooltip.style.top = Math.round(y)+'px';
        tooltip.style.left = Math.round(x)+'px';

    }

    // Tooltip Removal Function
    function tooltipsDissolve() {
        let tooltipDissolve = document.querySelectorAll('.hoot-tooltip');

        // hide tooltip
        for (var i = 0; i < tooltipDissolve.length; i++) {
            tooltipDissolve[i].classList.add('fade-out');
        }

        setTimeout(tooltipsDestroy, 150);

    }

    function tooltipsDestroy() {

    }

}
