import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./SideBar";
import Header from "./Header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

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
                <header className="App-header">
                    <Header></Header>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <SideBar></SideBar>
                <p className="App-intro">{this.state.apiResponse}</p>
                <button className="btn btn-primary">Click me</button>
            </div>
        );
    }
}

export default App;
