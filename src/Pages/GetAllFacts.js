import React, { Component } from 'react'
import { apiKey } from "../Reporsitory/connect";
import axios from "axios";

export class GetAllFacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            facts: []
        }
    }

    fetchData() {
        axios(apiKey).then(result => {  
            this.setState(() => {
                return { facts: Object.values(result)[0].all};
            })
        })
    }

    componentDidMount() {
        if (this.state.facts.length === 0) {
            this.fetchData();
        }
    }

    render() {
        if (this.state.facts.length > 0) {
                return (
                    <div>
                    <ul>
                        {this.state.facts.map(fact => (
                            <li key={fact._id}>
                            {fact.text}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return <div>
                    <img src="spinner.gif" alt="loading spinner"/>
                    <h3>Loading...</h3>
                </div>
        }
    }
}


