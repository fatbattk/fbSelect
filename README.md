# fbSelect

A lightweight **jQuery plugin** that transforms a standard HTML select input into a toggleable *button* that is fully customizable.
Handles `<optgroup>`, disabled `<option>`, multiple `<select>`, blank/ default values.

## Example

![fbSelect screenshot](/demo/example.gif "Example screenshot")

[See demo for advanced usage!](/demo/)

## Quick start

1. Include CSS + jquery + javascript files.
```html
<link rel="stylesheet" href="jquery.fbs.min.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="jquery.fbs.min.js"></script>
```
2. Start fbSelect.
```javascript
$('select').fbSelect();
```

## Options

* **bClass** (*default: 'fbs'*) - CSS class name of created `<button>` that *replaces* `<select>`.
* **bClasses** (*default: ['fbs1','fbs2','fbs3']*) - array of CSS class names to be toggled between each click on `<button>`.
* **skipNoValue** (*default: false*) - set true to skip `<option>` with none/ blank values. `(e.g.- <option></option>)`.

## Requires

* jQuery v1.6.0 and up
* Major browsers, but IE 9+

## Credits

[jQuery Boilerplate](http://jqueryboilerplate.com/)

## License

The MIT License (MIT).