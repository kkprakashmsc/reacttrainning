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

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var email=this.refs.email.value;
    var country=this.refs.country.value;
    var password =this.refs.password.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    if (email.length > 0) {
      this.refs.email.value = '';
      updates.email = email;
    }
    
    if (password.length > 0) {
      this.refs.password.value = '********';
      updates.password = password;
    }

    if (country.length > 0) {
      this.refs.country.value = '';
      updates.country = country;
    }

    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
          <input type="password" ref="password" placeholder="Enter password"/>
        </div>
        <div>
          <input type="email" ref="email" placeholder="Enter Email"/>
        </div>
        <div>
          <input type="text" ref="country" placeholder="Enter country"/>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

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

var firstName = 'Amarjeet';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
