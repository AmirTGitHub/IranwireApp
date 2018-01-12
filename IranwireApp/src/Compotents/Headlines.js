import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  Card,
  ListItem,
  Button,
  List,
  Divider,
  SocialIcon,
  Avatar
} from "react-native-elements";

export default class Headlines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      first: [],
      second: [],
      cartoon: []
    };
  }

  componentDidMount() {
    this.fetchHeadlines();
  }

  fetchHeadlines = async () => {
    const response = await fetch("https://iranwire.com/fa/api/v1/home");
    const json = await response.json();
    this.setState({
      data: json.headlines.slice(2),
      first: json.headlines[0],
      second: json.headlines.slice(1, 3),
      cartoon: json.cartoons
    });
  };
  onLongPress = () => {};
  handePress = () => {
    console.log("you pres this");
  };

  render() {
    console.log(this.state.data);
    console.log(this.state.first);
    console.log(this.state.second);
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={{height:340}} >
          <Card
            title={this.state.first.category}
            image={
              (source = {
                uri: "https://iranwire.com" + this.state.first.image
              })
            }
            onPress={this.handePress()}
          >
            <Text style={styles.title}>{this.state.first.title}</Text>
            <View style={styles.social}>
              <SocialIcon
                type="share"
                icon={{ size: 10 }}
                onPress={this.onLongPress}
              />
              <SocialIcon type="twitter" icon={{ size: 10 }} />
              <SocialIcon type="instagram" icon={{ size: 10 }} />
            </View>
          </Card>
        </View>
        <View style={styles.second} >
        {this.state.second.map((item , i) => {
          return(
          <View key = {i}>
          <Card
            title={item.category}
            image={
              (source = {
                uri: "https://iranwire.com" + item.image
              })
            }
            containerStyle={{width:158}}
            onPress={this.handePress()}
          >
            <Text style={styles.title}>{item.title}</Text>
          </Card>
          </View>

         )})} 
         </View>
          
          <Card title="سرخط اخبار و گزارش‌ها" style={{height:400, width: 50}}>
            {this.state.data.map((item, i) => {
              return (
                <TouchableOpacity key={i} onPress={this.handePress()}>
                <View style={{flexDirection:"row", padding:5}}>
                  <Avatar 
                  medium
                    source={{ uri: "https://iranwire.com" + item.image }}
                  />
                  <Text style={styles.name}>{item.title}</Text>
                  </View>
                  <Divider/>
                </TouchableOpacity>
              );
            })}
          </Card> 
          <View >
        {this.state.cartoon.map((item , i) => {
          return(
          <View key = {i}>
          <Card
            title={item.category}
            image={
              (source = {
                uri: "https://iranwire.com" + item.image
              })
            }
            onPress={this.handePress()}
          >
            <Text>{item.title}</Text>
          </Card>
          </View>

         )})} 
         </View>      
      </ScrollView>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue"
  },
  title: {
    marginBottom: 10,
    backgroundColor: "#ebf3eb"
  },
  divide: {
    backgroundColor: "black",
    width: 375
  },
  social: {
    flexDirection: "row",
    justifyContent: "center"
  },
  second: {
    flexDirection:"row",
  },
  first:{
    flexShrink:1
  },
  contentContainer: {
    paddingBottom: 150
  }
 
});
