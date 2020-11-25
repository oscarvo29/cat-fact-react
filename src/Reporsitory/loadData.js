import React, { Component } from 'react'
import { apiKey } from "./connect";


/**
 * Get ten facts
 */
export const getTen = () => {
    fetch(apiKey)
    .then(res => res.json())
        .then(result => {
            setState({
                isLoaded: true
            })

            for(let i = 0; i < 10; i++) {
                state.items.push(Object.values(result)[0][i]);
            }
        })
}

// /**
//  * Get all facts, and prints them to the state.
//  */
// export const allFacts = () => {
//     fetch(apiKey)
//     .then(res => res.json())
//     .then((result) => { 
//         this.setState({
//         isLoaded: true,
//         items: Object.values(result)[0]
//     });
//     console.log(this.state.items[0])
//     }, (error) => {
//         this.setState({
//             isLoaded: true,
//             error
//         })
//     })
// }