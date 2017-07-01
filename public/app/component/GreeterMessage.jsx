var React=require('react');

var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;
      var email =this.props.email;
      var country=this.props.country;
      
      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>Message:{message}</p>
          <p>Email: {email}</p>
          <p>Country:{country}</p>
        </div>
      );
    }
});
module.exports=GreeterMessage;