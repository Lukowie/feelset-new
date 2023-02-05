import './App.css';
const { Component } = require("react")


class Home extends Component {
    state = {
        name: ""
    }
    componentDidMount() {
        fetch("http://192.168.10.17:2461")
            .then(res => res.json())
            .then(data => this.setState({ name: data.name }))
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hello {this.state.name}</h1>
                </header>
            </div>
        )
    }
}

export default Home;