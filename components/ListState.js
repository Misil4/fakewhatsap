import React,{Component} from "react";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import { View, Text, Image, StyleSheet } from "react-native";
export default class ListStates extends Component {
    render() {
        return (
            <View style= {styles.listItemContainer}>
            <View style= {styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: this.props.image }}
                    />
                </View>
                <View style={styles.chatDetailsContainer}>
                    <View style={styles.chatDetailsContainerWrap}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>{this.props.first_name}</Text>
                        </View>
                    </View>
                    <View styles={styles.chatDetailsContainerWrap}>
                    <View styles={styles.msgContainer}>
                            <Text> {this.props.date} {this.props.time}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
    },
    avatarContainer: {
        flex: 1,
        alignItems: "flex-start",
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
        flex: 1
    },
    nameText: {
        fontWeight: "bold",
        color: "#000",
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