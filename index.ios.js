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
var Button = require('react-native-button');

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

        <Text style={styles.title}>
          Goenka Timer
        </Text>

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

        <Button
         style={{borderWidth: 1, borderColor: 'blue', padding: 10, flex: 2, margin: 10, borderRadius: 5}}
         onPress={function() {console.log('Sit for ' + this.state.duration + ' minutes');}.bind(this) }
        >
          Start!
        </Button>

        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  title: {
    fontSize: 34,
    textAlign: 'center',
    marginBottom: 55,
  },
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
