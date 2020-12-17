import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    state = { 
        counters : [
            { id : 0 , value : 0 , title : "Yunus" },
            { id : 1 , value : 1 , title : "Ritwik" },
            { id : 2 , value : 2 , title : "Sahil" },
            { id : 3 , value : 3 , title : "Ishu" },
            { id : 4 , value : 4 , title : "Supriyo" },
            { id : 5 , value : 5 , title : "Tannu" },
            { id : 6 , value : 6 , title : "Manish" }
        ],
     }
    render() { 
        return ( 
            <div>
                { this.state.counters.map(counter => 
                    <Counter key={counter.id} value={counter.value} id={counter.title} />
                )}
            </div>
         );
    }
}
 
export default Counters;
