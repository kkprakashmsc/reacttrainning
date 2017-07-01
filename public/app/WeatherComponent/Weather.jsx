var React=require('react');
var WeatherData=require('WeatherData');
var WeatherForm=require('WeatherForm');
var OpenWeatherMap=require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
        isLoading:false
    };
  },
  handleNewData: function (city) {
    var that=this;
    this.setState({isLoading:true})
    OpenWeatherMap.getTemp(city).then(function(data){
      that.setState({
        city:city,
        temp:data.temp,
        humidity:data.humidity,
        isLoading:false
      });
    },function(errorMessage){
      that.setState({isLoading:false});
        alert(errorMessage);
    });    
  },
  render: function () {
    var {isLoading,city,temp,humidity} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3> Fetching Weather...</h3>;
      }else if (temp && city && humidity){
          return <WeatherData temp={temp} city={city} humidity={humidity}/>;
      }
    }
    
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onNewData={this.handleNewData}/>
        {renderMessage()}
      </div>
    );
  }
});
module.exports=Weather;