import React from 'react';
import { CardList } from '../components/card-list/card-list-component';

class Monsters extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => this.setState({ robots: users }));
    }

    render() {
        return (
            <div>
                <h1>Robots Rolodex</h1>
                <CardList robots={this.state.robots} />
            </div>
        );
    }
}

export default Monsters;
