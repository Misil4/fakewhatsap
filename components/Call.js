import axios from 'axios';
import {FAKE_CALLS} from '../data/data'
import React, {Component} from "react";
import {ActivityIndicator,FlatList} from 'react-native'
import ListCalls from './ListCall';
export default class Chats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatList : [],
            loaded : false
        }
    }
    componentDidMount() {
        axios.get(FAKE_CALLS)
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
                <ListCalls
                first_name ={item.first_name}
                video_call = {item.video_call}
                image = {item.image}
                missed = {item.missed}
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