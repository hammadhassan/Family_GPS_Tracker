// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import WelcomeScreen from "./src/components/WelcomeScreen";
// // const instructions = Platform.select({
// //   ios: 'Press Cmd+R to reload,\n' +
// //     'Cmd+D or shake for dev menu',
// //   android: 'Double tap R on your keyboard to reload,\n' +
// //     'Shake or press menu button for dev menu',
// // });

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <WelcomeScreen />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React, { Component } from "react";
import HomeScreen from "./src/HomeScreen/index.js";
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isReady: false
  //   };
  // }
  // async componentWillMount() {
  //   await Expo.Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //     Ionicons: require("native-base/Fonts/Ionicons.ttf")
  //   });
  //   this.setState({ isReady: true });
  // }
  render() {
    return (
    <HomeScreen />
    );
  }
}

export default  App