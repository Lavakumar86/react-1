class Header extends React.Component {
    render() {
        return <h1>Header component</h1>;
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Content component</h1>
                {this.props.uName &&  <h2>My name is {this.props.uName}</h2>}
                {this.props.age && <h2>My age is {this.props.age}</h2>}
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return <h1>Footer component</h1>;
    }
}

ReactDOM.render(
    <div>
        <Header />
       <Content uName="lava" age={22} />
        <Footer />
    </div>,
    document.getElementById("root")
);