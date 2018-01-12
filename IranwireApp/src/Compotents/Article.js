import React , { Component } from 'react'
import { StyleSheet, Text,  View, ScrollView} from "react-native"

export default class Article extends Component {
    constructor(props){
        super(props)
        this.state ={
            data=[]
        }
    }

    getArticle = async () =>{
        const response = fetch(`https://iranwire.com/fa/api/v1/articles/${this.props.id}`)
    }

    render(){
        return(
            <ScrollView>

                </ScrollView>


        )
    }
}