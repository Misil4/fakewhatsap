import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view-forked';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Chats from './components/Chat';
import Calls from './components/Call';
import States from './components/State';
import ActionButton from 'react-native-action-button';


export default function App() {
  const [page, setPage] = useState("message");
  const [PageNumber,setPageNumber] = useState(0);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftHeaderContainer}>
          <Text style={styles.logo}>Whatsap</Text>
        </View>
        <View style={styles.rightHeaderContainer}>
          <Icon name="search" color="#fff" size={23} style={styles.icon} />
          <Icon name="more-vert" color="#fff" size={23} style={styles.icon} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <ScrollableTabView
        onChangeTab={(i) => {if(i.i === 0){setPageNumber(0);setPage("message")}else if(i.i === 1){setPageNumber(1);setPage("photo-camera")}else if(i.i===2){setPageNumber(2);setPage("add-call")}}}
          tabBarUnderlineIcon="#fff"
          tabBarUnderlineStyle={{ backgroundColor: "#fff" }}
          tabBarActiveTextColor="#fff"
          tabBarInactiveTextColor="#ddd"
          tabBarBackgroundColor="#075e54">
          <Chats tabLabel="CHATS" />
          <States tabLabel="ESTADOS"  />
          <Calls tabLabel="LLAMADAS" />
        </ScrollableTabView>
      </View>
      <ActionButton size={58} renderIcon={ active=> active ? (<Icon name="search"/> ) : (<Icon name={page} size={23} style={{color: "#fff"}} />)}buttonColor="green">
      {PageNumber===1 ?<ActionButton.Item ><Icon name="edit"></Icon></ActionButton.Item> : null}
      </ActionButton>
    </View>
  );
}
let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#075e54",
    alignItems: "center"
  },
  contentContainer: {
    flex: 8
  },
  rightHeaderContainer: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  leftHeaderContainer: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  logo: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold"
  },
  icon: {
    padding: 5,
  }
});
