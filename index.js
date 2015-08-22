var icons = require('./lib/icons.json');

module.exports = function (network, opts) {
  var data = icons[network];
  
  var opts            = opts || {},
      svgClass        = opts.svgClass        || 'social-svg',
      backgroundClass = opts.backgroundClass || 'social-svg-background',
      iconClass       = opts.iconClass       || 'social-svg-icon',
      maskClass       = opts.maskClass       || 'social-svg-mask',
      color           = opts.color           || data.color;
  
  return '<svg class="' + svgClass + '" viewBox="0 0 64 64" ><g class="' + backgroundClass + '" ><circle cx="32" cy="32" r="31" ></circle></g><g class="' + iconClass + '" ><path d="' + data.icon + '" ></path></g><g class="' + maskClass + '" style="fill:' + color + '" ><path d="' + data.mask +'" ></path></g></svg>';
};
