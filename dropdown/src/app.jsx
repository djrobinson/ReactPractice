var React = require('react');
var Dropdown = require('./Dropdown')

var options = {
      title: 'Choose a dessert',
      items: [
        'Apple Pie',
        'Peach Cobbler',
        'Coconut Pie'
      ]
  };

  var element = React.createElement(Dropdown, options);

  React.render(element, document.querySelector('.row'));