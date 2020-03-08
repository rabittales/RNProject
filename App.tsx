import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native';
import { FetchLocation } from './component/FetchLocation';

class Blink extends React.Component {

  componentDidMount() {
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 2000);
  }

  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return (
      <Text>{this.props.text}</Text>
    );
  }
}

class NameForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

  }

  handlerChange(event) {
    alert( 'A name was submitted' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Text>hello</Text>
    );
  }
}



export default class App extends React.Component {
constructor(props){
  super(props);
  this.state = {text:''};
}

  getUserLocationHandler = () => {
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
          <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'orange', width:50, height:50 }}>
            <Text style={[styles.bigBlue, styles.red]}>Hello World</Text>
            <Text>Hello World!!!!!!!My badWOW</Text>
            <Button title="Get Location" onPress={this.getUserLocationHandler} />
            <Blink text='I love to blink' />
          </View>
          <View style={{ flex: 2, backgroundColor: 'red' , width:50, height:50 }}>
            <TextInput placeholder="Typ here!!!" onChangeText={(text) => this.setState({text})} value={this.state.text}/>
            <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕      love').join(' ')}
        </Text>
          </View>
        </View>
        <NameForm/>
        <View style={{backgroundColor:"steelblue"}}><Text>hii</Text></View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    fontFamily: 'Cochin',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
