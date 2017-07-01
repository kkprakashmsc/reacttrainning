var React=require('react');
var GreeterMessage=require('GreeterMessage');
var GreeterForm=require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!',
      country:'India'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        message: this.props.message,
        country:this.props.country
    };
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    var country=this.state.country;
    var password=this.state.password;
    var email=this.state.email;
    return (
      <div>
        <GreeterMessage name={name} message={message} country={country} email={email}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});
module.exports=Greeter;