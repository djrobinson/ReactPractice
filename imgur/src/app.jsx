var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Hello = React.createClass({
  render: function(){
    return <div>
      <h2>Hello!</h2>
        {this.props.children}
    </div>
  }
});

var Child1 = React.createClass({
  render: function(){
    return <div>
      <h2>I am child one</h2>
      {this.props.children}
    </div>
  }
});

var Child2 = React.createClass({
  render: function(){
    return <div>
      <h2>I am child two</h2>
    </div>
  }
});

var Routes = (
    <Router>
      <Route path="/" component={Hello}>
        <Route path="1" component={Child1} />
        <Route path="2" component={Child2} />
        </Route>
    </Router>
  );


ReactDOM.render(Routes, document.querySelector('.container'));
