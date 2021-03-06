import React, { Component } from 'react';
import firebase from "firebase";
import { AppRegistry, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";
import HomeScreen from "../HomeScreen";

class Location extends Component {

  constructor() {
    super()
    this.state = {
      latitude: '',
      longitude: '',
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          });
          // alert(this.state.location.latitude)
          // alert(this.state.location.longitude)
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    }
  saveLocation() {
    // var date = new Date();
    // var day = date.getDate();
    // var month = date.getMonth()+1;
    // var year = date.getFullYear();
    // var fullDate = day + '/' + month + '/' + year;
    var usersData = {
      Locations: {
        lat: this.state.latitude, 
        long: this.state.longitude,
        // date: fullDate,
      }
    }
    var db = firebase.database();
    let dbRef = db.ref().child('Location');
    dbRef.push(usersData)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Save Location</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          {/* <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Nine Chat</Label>
            <Input />
          </Item> */}
          <Button
            success
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={this.saveLocation.bind(this)}
          >
            <Text>Save Location</Text>
          </Button>
          <Text>latitude : {this.state.latitude}</Text>
        <Text>longitude : {this.state.longitude}</Text>
        </Content>
      </Container>
    );
  }
}
export default Location;

