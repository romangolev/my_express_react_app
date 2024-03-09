import React, { Component } from "react";
import "./App.css";
import SideBar from "./SideBar";
import Header from "./Header";
import MyModal from "./Modal";

class App extends Component {
    

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    handleSidePanelStatus = () => {
        this.openPanel = !this.openPanel;
        this.setState({ openPanel: !this.state.openPanel });
    };

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <Header></Header>

                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header> */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <SideBar></SideBar>
                        </div>
                        <div className="col-sm">
                            <p className="App-intro">{this.state.apiResponse}</p>
                        </div>
                        <div className="col-sm">
                        One of three columns
                        </div>
                    </div>
                </div>

                <MyModal></MyModal>
            </div>
        );
    }
}

export default App;
