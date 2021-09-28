import logo from './logo.svg';
import './App.css';

function App() {
    return (
//TODO: This code is pure JS and it needs Babel
        /*#__PURE__*/
        // React.createElement("div", {
        //       className: "shopping-list"
        //     },
        //     /*#__PURE__*/
        //     React.createElement("h1", null, "Shopping List for ", props.name),
        //     /*#__PURE__*/
        //     React.createElement("ul", null,
        //         /*#__PURE__*/React.createElement("li", null, "Instagram"),
        //         /*#__PURE__*/React.createElement("li", null, "WhatsApp"),
        //         /*#__PURE__*/React.createElement("li", null, "Oculus")))

        <div className="App">React
            <header className="App-header">
                <div>Here is my text</div>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>npm ins

                    Edit <code>src/App.js</code> and save to reload.

                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>


    )
        ;
}

export default App;
