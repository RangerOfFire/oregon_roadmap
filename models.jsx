var Resource = React.createClass({
    render: function() {
        return (
            TODO
        );
    },
    getInitialState: function() {
        return {
            name: '',
            job: '',
            velocity: Math.random() * (RESOURCE_MAX_VELOCITY - RESOURCE_MIN_VELOCITY) + RESOURCE_MIN_VELOCITY
        }
    }
});
var Team = React.createClass({
    render: function() {
        return null;
    },
    getInitialState: function() {
        return {
            name: TEAM_DEFAULT_NAME,
            resources: [],
            morale: Math.random() * (MORALE_MAX - MORALE_MIN) + MORALE_MIN,
            story_points: 0,
            stories_completed: 0
        }
    },
    addResource: function(resource) {
        this.state.resources.push(resource);
    }
});

var Game = React.createClass({
    createTeam: function() {
        team = new Team();
        console.log(team);
        this.advanceState();
    },
    advanceState: function() {
        this.setState({status: this.state.status+1});
    },
    render: function() {
        if (this.state.status == GAME_NOT_STARTED) {
            return (
                <div><b>Welcome to the game! (version {this.props.version})</b>

                <p><button onClick={this.advanceState}>Start the game</button></p></div>
            );
        }
        else if (this.state.status == CREATE_TEAM) {
            return (
                    <table>
                        <tr><td>Team name</td><td><input name="team_name" value={TEAM_DEFAULT_NAME} /></td></tr>
                        <tr><td colspan="2"><button onClick={this.createTeam}>Create</button></td></tr>
                    </table>
            );
        } else {
            return (
                <h2>Leo please add details</h2>
            );
        }
    },
    getInitialState: function() {
        return {
            team: null,
            status: GAME_NOT_STARTED
        }
    }
});

React.renderComponent(<Game version={VERSION} />, document.getElementById('container'));