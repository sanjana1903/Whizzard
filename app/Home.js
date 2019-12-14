import React, { Component } from 'react';
import { View, Text } from 'native-base';

import platform from './native-base-theme/variables/platform';

export default class Root1 extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 24, color: platform.brandPrimary }}>Whizzard App</Text>
      </View>
    );
  }
}
