import React, { Component } from "react";
import { StyleSheet, Text,  View, FlatList , SectionList} from "react-native";
import { Card, ListItem, Button, List } from "react-native-elements";


export default class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }

      componentDidMount(){
          this.fetchFeatures();
      }

      fetchFeatures = async () =>{
        const response = await fetch("https://iranwire.com/fa/api/v1/home");
        const json = await response.json();
        this.setState({
          data: json.features
        });
      };

      render(){
          return(
        <View>
          <List>
            <FlatList
              data={this.state.data}
              keyExtractor={(x, i) => i}
              renderItem={({ item }) => (
                <Card
                  title={item.category}
                  image={(source = { uri: "https://iranwire.com" + item.image })}
                >
                  <Text style={{ marginBottom: 10 }}>{item.title}</Text>
                </Card>
              )}
            />
          </List>
        </View>
          )
      }   
}
