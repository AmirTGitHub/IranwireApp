import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  FlatListProperties
} from "react-native";
import { Card, ListItem, Button, List, Divider } from "react-native-elements";

export default class LoadFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      date: [],
      page: 1
    };
  }

  componentDidMount() {
    this.fetchLoadFeatures();
  }

  fetchLoadFeatures = async () => {
    this.setState({ isLoading: true });
    const fetchData = await fetch(
      `https://iranwire.com/fa/api/v1/articles/features?page=${
        this.state.page
      }&page_size=22`
    );
    const json = await fetchData.json();
    this.setState({
      data: [...this.state.date, ...json.results],
      isLoading: false
    });
  };
  handleEnd = () => {
    this.setState(
      state => ({ page: state.page + 1 }),
      () => this.fetchLoadFeatures()
    );
  };
  render() {
    {
      console.log(this.state.data);
    }
    return (
      <View>
        <List>
          <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i}
            onEndReached={this.handleEnd}
            onEndReachedThreshold={0}
            ListFooterComponent={() =>
              this.state.LoadFeatures ? null : (
                <ActivityIndicator size="large" animating />
              )
            }
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Card
                  style={{}}
                  title={item.category}
                  image={
                    (source = { uri: "https://iranwire.com" + item.image })
                  }
                />
                <Text
                  style={{
                      fontSize:16 ,
                    alignSelf: "flex-end",
                    paddingLeft: 20,
                    marginBottom: 10
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        </List>
      </View>
    );
  }
}
