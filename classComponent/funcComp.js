
    function Header() {
        return <h1>Header component</h1>;
    }


 function Content({firstName, age, }) {
    // const {firstName,age } = props

    const clickFunc = () =>{
        console.log("click th function");
    };
    return (
        <div>
            <h1>Header component</h1>
            <h1>
                First Name is {firstName} and age is {age}
            </h1>
           <button onClick={() => clickFunc()}> Click Me</button>

        </div>
    );
}
 function Footer() {
        return <h1>Header component</h1>;
    }

ReactDOM.render(
    <div>
        <Header />
       <Content firstNme="David" age={23} />
        <Footer />
    </div>,
    document.getElementById("root")
);