import axios from 'axios';
import { FAKE_STATES } from '../data/data'
import React, { Component } from "react";
import { View, ActivityIndicator, FlatList, StyleSheet, Text, Image } from 'react-native'
import ListStates from './ListState';
export default class Chats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatList: [],
            loaded: false
        }
    }
    componentDidMount() {
        axios.get(FAKE_STATES)
            .then(response => {
                this.setState({
                    chatList: response.data,
                    loaded: true
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        if (this.state.loaded) {
            return (
                <>
                    <View style={styles.listItemContainer}>
                        <View style={styles.avatarContainer}>
                            <Image
                                style={styles.avatar}
                                source={{ uri: "https://i.redd.it/vv8mwcrpv2941.jpg" }}
                            />
                        </View>
                        <View style={styles.chatDetailsContainer}>
                            <View style={styles.chatDetailsContainerWrap}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.nameText}>Mi estado{"\n"}</Text>
                                    <Text>Añade una actualización</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.recents}>
                    <Text style={styles.recents_text}>Recientes</Text>
                    </View>
                    <FlatList
                        data={this.state.chatList}
                        renderItem={({ item }) => (
                            <ListStates
                                first_name={item.first_name}
                                image={item.image}
                                date={item.date}
                                time={item.time}
                            />
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </>
            )
        } else {
            return (
                <ActivityIndicator size="large" />
            )
        }
    }
}
const styles = StyleSheet.create({
    listItemContainer: {
        height: 110,
        flexDirection: "row",
        padding: 10,
    },
    recents : {
        height: 60,
        justifyContent: "center",
        backgroundColor: "#ddd"
    },
    avatarContainer: {
        flex: 1,
        alignItems: "flex-start",
    },
    contentContainer: {
        flex: 8
    },
    chatDetailsContainer: {
        flex: 4,
        borderBottomColor: "rgba(92,94,94,0.5)",
        borderBottomWidth: 0.25
    },
    chatDetailsContainerWrap: {
        flex: 1,
        flexDirection: "row",
        padding: 5
    },
    nameContainer: {
        alignItems: "flex-start",
        flex: 1
    },
    dateContainer: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    msgContainer: {
        alignItems: "flex-start",
        flex: 1
    },
    nameText: {
        fontWeight: "bold",
        color: "#000",
    },
    recents_text : {
        fontWeight: "bold",
        color: "#075e54",
        fontSize: 17,
        padding: 10
    },
    dateText: {
        fontSize: 12
    },
    avatar: {
        borderRadius: 30,
        width: 60,
        height: 60
    }
});