import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 3},
            {id: 2, value:1},
            {id: 3, value: 2},
            {id: 4, value: 4},
        ]
    };


    render() {


        return (
            <div className={'text-center pt-5'}>

                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        value={counter.value}

                    >
                        <h4>Title</h4>
                    </Counter>
                )}

            </div>
        );
    }


}

export default Counters;