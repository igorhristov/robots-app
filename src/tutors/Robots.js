import React from 'react';
import { CardList } from '../components/card-list/card-list-component';

class Robots extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => this.setState({ robots: users }));
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredMonsters = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div>
                <h1>Robots Rolodex</h1>
                <input
                    type='search'
                    placeholder='search robots'
                    onChange={(e) => this.setState({ searchField: e.target.value })}
                />
                <CardList robots={filteredMonsters} />
            </div>
        );
    }
}

export default Robots;
