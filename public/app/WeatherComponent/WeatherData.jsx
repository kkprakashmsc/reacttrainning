var React=require('react');

var WeatherData = React.createClass({
    render: function () {
      var city = this.props.city;
      var temp = this.props.temp;
      var humidity = this.props.humidity;
      
      
      return (
        <div>
          <h1>Hello {city}!</h1>          
          <h1>{temp}</h1>
          <h1>{humidity}</h1>
        </div>
      );
    }
});
module.exports=WeatherData;