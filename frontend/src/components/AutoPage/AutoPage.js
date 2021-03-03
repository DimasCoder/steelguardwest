import React, {Component} from 'react';

class AutoPage extends Component {
    render() {
        return (
            <div>
                {this.props.match.params.brand}
                {'\n'}
                {this.props.match.params.model}
            </div>
        );
    }
}

export default AutoPage;