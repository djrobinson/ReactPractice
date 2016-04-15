var React = require('react');
var ThumbnailList = require('./ThumbnailList')

var options = {
    thumbnailData: [{
      title: 'See Tutorials',
      number: 32,
      header: 'Learn React',
      description: 'React is a great new Library for making fast, dynamic pages',
      imageUrl: 'https://facebook.github.io/react/img/logo.svg'
    },
    {
      title: 'See Tutorials 2',
      number: 32,
      header: 'Learn React 2',
      description: 'React is a great new Library for making fast, dynamic pages',
      imageUrl: 'https://facebook.github.io/react/img/logo.svg'
    },
    {
      title: 'See Tutorials 3',
      number: 32,
      header: 'Learn React 3',
      description: 'React is a great new Library for making fast, dynamic pages',
      imageUrl: 'https://facebook.github.io/react/img/logo.svg'
    }]
  };

  var element = React.createElement(ThumbnailList, options);

  React.render(element, document.querySelector('.row'));