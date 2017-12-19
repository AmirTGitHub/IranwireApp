import React, { Component } from "react";
import { StyleSheet, Text,  View, FlatList, TouchableOpacity} from "react-native";
import { Card, ListItem, Button, List , Divider , SocialIcon} from "react-native-elements";


export default class Headlines extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }

      componentDidMount(){
          this.fetchHeadlines();
      }

      fetchHeadlines = async () =>{
        const response = await fetch("https://iranwire.com/fa/api/v1/home");
        const json = await response.json();
        this.setState({
          data: json.headlines
        });
      };
      onLongPress= () =>{
          
        }
      handePress=()=>{
        console.log("you pres this")
      }

      render(){
          return(
        <View>
          <List style={styles.container}>
            <FlatList
              data={this.state.data}
              keyExtractor={(x, i) => i}
              renderItem={({ item }) => (
                <TouchableOpacity>
                <Card
                  title={item.category}
                  image={(source = { uri: "https://iranwire.com" + item.image })}
                  onPress={this.handePress()}
                >
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.social}>
                  <SocialIcon type='share' icon={{size:10}} onPress={this.onLongPress}/>
                  <SocialIcon type='twitter' icon={{size:10}} />
                  <SocialIcon type='instagram'  icon={{size:10}} />
                  </View>

                </Card>
                </TouchableOpacity>
              )}
            />
          </List>
          <Divider style={{ backgroundColor: 'blue' }} />
          <Text style={styles.divide}> بلاگ‌ها </Text>
        </View>
          )
      }   
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'blue'      
    },
    title: {
      flexWrap:'wrap',
      flexDirection:'row-reverse',
        padding:5,
        marginBottom: 10,
        backgroundColor:"#ebf3eb"
    },
    divide:{
      backgroundColor:"black",
      width: 375,
    },
    social:{
      flexDirection:'row',
      justifyContent:'center',
    }
  });