import axios from 'axios';
import { FAKE_CHATS } from '../data/data';
import React, {Component} from "react";
import {ActivityIndicator,FlatList} from 'react-native'
import ListChat from './ListChat';
export default class Chats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatList : [],
            loaded : false
        }
    }
    componentDidMount() {
        axios.get(FAKE_CHATS)
        .then(response => {
            this.setState({
                chatList : response.data,
                loaded : true
            })
        })
        .catch(error => console.log(error) )
    }
    render() {
        if(this.state.loaded) {
        return (
            <FlatList
            data={this.state.chatList}
            renderItem={({item}) => (
                <ListChat
                first_name ={item.first_name}
                message = {item.message}
                image = {item.image}
                date = {item.date}
                time = {item.time} 
                />
            )}
            keyExtractor={item => item.id.toString()}
            />
           
        )  
        }else{
            return (
                <ActivityIndicator size="large" />
            )
        }
    }
    }