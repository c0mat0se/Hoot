# Hoot
Simple javascript tooltips. No dependencies. Works for all major browser versions excluding IE.

## Include the script and stylesheet
Include both the `hoot.js` and `hoot.css` files found in the src directory in the head of your document.

```html
<link rel="stylesheet" href="src/hoot.css">
<script src="src/hoot.js"></script>
```

## Initializing Hoot
Initialize the script at the bottom of your page before the closing `</body>` tag.
```javascript
document.addEventListener('DOMContentLoaded', Hoot);
```

# Hoot Configs
You will be able to pass configs soon. This is in development and not yet available.
```javascript
document.addEventListener('DOMContentLoaded', Hoot({
    offset: '15', //sets the offset from the tooltips container
    position: 'top', //sets the default position to top
    target: 'customClass' //defines a custom css class for hoot
}));
```

## Define your tooltip's content
On your element, include the following attributes. Your element must also have the `hoot` class.
```html
<div class="hoot" data-tooltip="This is a tooltip" data-tooltip-position="bottom">Hover Me</div>
```

## Variables

Attribute | Description
--------- | -----------
data-tooltip | The text content to be included inside your tooltip
data-tooltip-position | The position of the tooltip [bottom, top, left, right] (default: bottom)
