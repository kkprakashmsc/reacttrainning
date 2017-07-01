var React=require('react');
var ReactDOM=require('react-dom');
var {Route,Router,IndexRoute,hashHistory}=require('react-router');
var Weather=require('Weather');
var Main=require('Main');
var Services=require('Services');
var AboutUs=require('AboutUs');
var LocateUs=require('LocateUs');

// // Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css')
// $(document).foundation();

// // App css
// require('style!css!sass!applicationStyles')

var firstName = 'Amarjeet';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="/Services" component={Services}/>
    <Route path="/LocateUs" component={LocateUs}/>
    <Route path="/AboutUs" component={AboutUs}/>
    <IndexRoute component={Weather}/>
    </Route>
    </Router>,
  document.getElementById('app')
);
