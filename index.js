var icons = require('./lib/icons.json');

module.exports = function (network, opts) {
  var data = icons[network];
  
  var opts            = opts || {},
      svgClass        = opts.svgClass        || 'social-svg',
      backgroundClass = opts.backgroundClass || 'social-svg-background',
      iconClass       = opts.iconClass       || 'social-svg-icon',
      color           = opts.color           || data.color;
  
  return '<svg class="' + svgClass + '" viewBox="0 0 64 64" ><g class="' + iconClass + '" ><path d="' + data.icon + '" ></path></g><g class="' + backgroundClass + '" style="fill:' + color + '" ><path d="' + data.mask +'" ></path></g></svg>';
};
