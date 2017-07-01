var Welcome=React.createClass({
    render:()=>{
        return(<div>
            <h1>Hello World ReactJS</h1>
            <p>This is first component</p>
        </div>);
    }
});

ReactDOM.render(
<Welcome/>, 
document.getElementById('app')
);
