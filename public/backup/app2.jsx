var Welcome=React.createClass({
    getDefaultProps:function(){
        return{
            name:'Gokul',
            city:'Hyderabad'
        };
    },
    render:function(){
        var name=this.props.name;
        var city=this.props.city;
        return(<div>
            <h1>Hi {name}</h1>
            <p>I am from {city}</p>
        </div>);
    }
});

var firstName="Prakash"
ReactDOM.render(
<Welcome  city="Chennai"/>, 
document.getElementById('app')
);


