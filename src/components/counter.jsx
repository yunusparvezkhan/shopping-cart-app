import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value : this.props.value, 
        tags : ['tag1', 'tag2', 'tag3'],
    };


    handleIncrement = () => {
        this.setState({ value : this.state.value + 1 });
    };

    render() {
        return (
        <div>
            <h6>{ this.props.id }</h6>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            <ul>
              {this.renderTags()}
            </ul>
        </div>
        );
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p> ; 
        return this.state.tags.map(tag => <li key={tag}>{ tag }</li>)
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        let { value } = this.state;
        return value === 0 ? "Zero" : value;
    }

}

 
export default Counter;