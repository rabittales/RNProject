import React from 'react';
import {
  Button
} from 'react-native';
class FetchLocation extends React.Component {

  render() {
    return ({
      hello
    });
  }
}
const hello = props => {
  return ( <
    Button title = "Get Location"
    onPress = {
      props.onGetLocation
    }
    />
  );
};
export default {
  hello
};
