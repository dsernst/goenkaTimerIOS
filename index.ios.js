/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PickerIOS,
} = React;

var PickerItemIOS = PickerIOS.Item;

var times = ['2', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60']

var goenkaTimerIOS = React.createClass({
  getInitialState: function() {
    return {
      duration: '15',
    };
  },


  render: function() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          How long would you like to sit?
        </Text>
        <PickerIOS
          selectedValue={this.state.duration}
          onValueChange={(duration) => this.setState({duration})}>
          {times.map((duration) => (
            <PickerItemIOS
              key={duration}
              value={duration}
              label={duration + ' minutes'}
              />
            )
          )}
        </PickerIOS>

        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('goenkaTimerIOS', () => goenkaTimerIOS);
