import React, { Component } from 'react';
import { apiKey } from "../Reporsitory/connect";
import axios from "axios";


let placeholderArray = [];
export class GetTenFacts extends Component{
    

    constructor(props) {
        super(props);
        this.state = {
            facts: []   
        }
    };
    fetchData = () => {
        axios(apiKey).then((result) => {                   
            Object.values(result)[0].all.map(fact => {
                if (placeholderArray.length < 10) {
                    placeholderArray.push(fact);
                }
            })
            this.setState(() => {
                return { facts: placeholderArray }
            });
        })               
    }

    componentDidMount() {
        this.fetchData();
    }
    
    render() {
        if (this.state.facts.length > 0 ) {
                return <div> 
                            <ul>
                                {this.state.facts.map(item => (
                                    <li key={item._id}>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
            } else {
                return <div>
                    <img src="spinner.gif" alt="loading spinner"/>
                    <h3>Loading...</h3>
                </div>
            }  
    }

}
