# svg-social-icons

SVG social icons based (mostly) on Squarespace icons.

Check out the [project page](http://markhuge.github.io/svg-social-icons/) for a demo.

## Abstract

This is an improvement on another module I had been using, that had a lot of dependencies and was kind of a pain to use.

## Install

`npm install svg-social-icons --save`

## Supported Social Networks

 fivehundredpix, bandsintown, behance, codepen, dribbble, dropbox, email, facebook, flickr, foursquare, github, google, google_play, instagram, itunes, linkedin, medium, meetup, npm, pinterest, rdio, rss, sharethis, smugmug, soundcloud, spotify, squarespace, tumblr, twitch, twitter, vevo, vimeo, vine, vsco, yelp, youtube

## Usage
`icon(<network>, [ options ])`

```js
var icons = require('svg-social-icons');

console.log(icons('npm'));
```

Outputs:
```xml
<svg class="social-svg" viewBox="0 0 64 64">
  <g class="social-svg-icon">
    <path d="M18.9,20v25.6H32V25.5h7.5V46h5.6V20H18.9z"></path>
  </g>
  <g class="social-svg-background" style="fill:#cb3837">
    <path d="M68,0v68H0V0H68z M18.9,20v25.6H32V25.5h7.5V46h5.6V20H18.9z"></path>
  </g>
</svg>
```



## Styling

### CSS Classes

Some helper classes are attached to svg elements. You can pass in your own classes via the options parameter. Options with defaults:

```js
{
  svgClass:         'social-svg', //the <svg>
  backgroundClass:  'social-svg-background', // the svg background
  iconClass:        'social-svg-icon' // the svg icon path
}
```

Example:

```js
var icons = require('svg-social-icons');

console.log(icons('npm', { svgClass: 'MY-SVG-CLASS', iconClass: 'MY-ICON-CLASS' }));
```

Outputs:
```xml
<svg class="MY-SVG-CLASS" viewBox="0 0 64 64">
  <g class="MY-ICON-CLASS">
    <path d="M18.9,20v25.6H32V25.5h7.5V46h5.6V20H18.9z"></path>
  </g>
  <g class="social-svg-background" style="fill:#cb3837">
    <path d="M68,0v68H0V0H68z M18.9,20v25.6H32V25.5h7.5V46h5.6V20H18.9z"></path>
  </g>
</svg>
```




### Fill color

By default, the fill color of each icon matches the fill color of that network's logo. You can override this by passing in a CSS color code with `{ color: '#yourcolor'}` in the options object.
