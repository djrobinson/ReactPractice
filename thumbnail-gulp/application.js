  var Badge = React.createClass({displayName: "Badge",
    render: function(){
      this.props
      return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
              this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
            )
    }
  });
  var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function(){
      return React.createElement("div", {className: "thumbnail col-sm-4"}, 
          React.createElement("img", {src: this.props.imageUrl}), 
          React.createElement("div", {className: "caption"}, 
            React.createElement("h3", null, this.props.header), 
            React.createElement("p", null, this.props.description), 
            React.createElement("p", null, 
              React.createElement(Badge, {title: this.props.title, number: this.props.number})
            )
          )
        )
    }
  });
  var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function(){
      var list = this.props.thumbnailData.map(function(thumbnailProps){
        return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
      });
      return React.createElement("div", null, 
        list
      )
    }
  });
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

  ReactDOM.render(element, document.querySelector('.row'));