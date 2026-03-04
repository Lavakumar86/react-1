class MyComp extends React.Component{
    state ={
        uName : "Harry",
    };
    changeName = () => {
        this.setState({ uName : "David"})
    };
    render(){
        return (
            <div>
                <h1>welcome back, {this.state.uName}</h1>
                <button onClick={() => this.changeName()}>changeName</button>
            </div>
        );
    }
}
ReactDOM.render(<MyComp/>, document.getElementById("root"))