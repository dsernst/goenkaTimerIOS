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
  Navigator,
} = React;
var Button = require('react-native-button');

var PickerItemIOS = PickerIOS.Item;

var times = ['2', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60']

var ConfigScreen = React.createClass({
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

        <Button
         style={{borderWidth: 1, borderColor: 'blue', padding: 10, flex: 2, margin: 10, borderRadius: 5}}
         onPress={function() {
           console.log('Sit for ' + this.state.duration + ' minutes');
           this.props.navigator.push({
             name: 'PlaybackScreen',
             component: PlaybackScreen
           });
         }.bind(this) }
        >
          Start!
        </Button>
      </View>
    )
  }
})

var PlaybackScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          On playback Screen
        </Text>
      </View>
    )
  }
})

var goenkaTimerIOS = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Goenka Timer
        </Text>

        <Navigator
          initialRoute={{name: 'Config Screen', component: ConfigScreen}}
          renderScene={(route, navigator) => {
            // count the number of func calls
            console.log(route, navigator);

            if (route.component) {
              return React.createElement(route.component, { navigator });
            }
          }}
        />

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
    marginTop: 75,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
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
