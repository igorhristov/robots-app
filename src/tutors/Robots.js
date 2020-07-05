import React from 'react';
import { CardList } from '../components/card-list/card-list-component';
import { SearchBox } from '../components/search-box/search-box-component';
import './robots.styles.css'

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

    handleChange = (e) => {
        this.setState({ searchField: e.target.value });
    };

    render() {
        const { robots, searchField } = this.state;
        const filteredMonsters = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="robots-body">
                <h1>Robots Rolodex</h1>

                <SearchBox handleChange={this.handleChange} placeholder={'search robots'} />

                <CardList robots={filteredMonsters} />
            </div>
        );
    }
}

export default Robots;
