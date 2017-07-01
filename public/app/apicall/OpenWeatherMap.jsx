var axios =require('axios');

const OPEN_WEATHER_MAP_URL="http://api.openweathermap.org/data/2.5/weather?appid=0ec0b30ac2cd9d7c11a3cf2673cd8de6&units=imperial";

module.exports={
    getTemp:function(city){
        var encodedLocation=encodeURIComponent(city);
        var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(
            function(res){
                debugger;
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                var data={};
                data.temp=res.data.main.temp;
                data.humidity=res.data.main.humidity;
                return data;
            }
        },function(res){
            throw new Error(res.data.message);
        });
    }
}