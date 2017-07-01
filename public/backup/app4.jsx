var Welcome=React.createClass({
    getDefaultProps:function(){
        return{
            name:'Gokul',
            city:'Hyderabad'
        };
    },
    getInitialState:function(){
        return{
            name:this.props.name,
            dept:this.props.dept
        };
    },
    
});
var WelcomeForm=React.createClass({
onBtnClick:function(e){
        e.preventDefault();

         var updates = {};
        var usr=this.refs.usr.value;
        var dept1=this.refs.dept.value;
        
        if (usr.length > 0) {
            this.refs.usr.value = '';
            updates.usr = usr;
        }
        this.setState({
            name:usr,
            dept:dept1
        });        
    },
    render:function(){
        var name=this.state.name;
        var department=this.state.dept;
        var city=this.props.city;     
         
        return(<div>
            <h1>Hi {name}</h1>
            <p>I am from {city}</p>
            <p>{name}</p>
            <p>{department}</p>
            <form onSubmit={this.onBtnClick}>
                <input type="text" ref="usr"></input><br/>
                <input type="text" ref="dept"></input><br/>
                <button>set value</button>
            </form>
        </div>);
    }
});
var firstName="Prakash"
ReactDOM.render(
<Welcome/>, 
document.getElementById('app')
);