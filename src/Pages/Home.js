import React, { Component } from 'react'
import { apiKey } from "../Reporsitory/connect";
import axios from "axios";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            fact: []
        }
    }

    fetchData() {
        axios(apiKey).then(result => {
            
            this.setState(() => {
                return {
                    isLoaded: true,
                    fact: Object.values(result)[0].all[0]
                }
            });
        })
        
    }

    componentDidMount() {
        if (!this.state.isLoaded) {
            this.fetchData();
        }
    }

    render() {
        return (
            <div>
            <h1>The Home Page</h1>

            <h2>The daily fact</h2>
            { this.state.isLoaded ? (
                <div>{ this.state.fact.text }</div>
            ) : (
                <div>
                    <img src="spinner.gif" alt="loading spinner"/>
                    <h3>Loading...</h3>
                </div>
            )}
        </div>
    )
    }
}
