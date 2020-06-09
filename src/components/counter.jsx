import React, {Component} from "react";

class Counter extends Component {
    state = {
        value: 0,
        // tags:['tag1','tag2','tag3','tag4']
        // tags: []

    };
    // styles = {
    //     fontSize:20,
    //     fontWeight:'bold'
    // }

    constructor() {
        super();
        this.handelIncrement = this.handelIncrement.bind(this);
    }

    handelIncrement() {
        this.setState({value: this.state.value + 1})
    }

    render() {


        console.log("props",this.props.value)
        let classes = this.getBadgeClasses();
        return (
            <div>

                <span style={this.styles} className={classes}>{this.formatCount()}</span>
                <button onClick={this.handelIncrement} className="btn btn-secondary btn-sm">Increment</button>
                {/*<ul>*/}
                {/*    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}*/}
                {/*</ul>*/}
            </div>
        );
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }

    getBadgeClasses() {
        let classes = "badge  m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;