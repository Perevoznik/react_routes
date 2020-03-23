import React from 'react';

class About extends React.Component {

    render() {

        const id = this.props.match.params.id;
        const name = this.props.match.params.name;

        return <h2>id: {id} Name: {name}</h2>
    }
}

export default About;