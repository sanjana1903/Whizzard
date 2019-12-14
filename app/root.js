import React, { Component } from 'react';
import { StyleProvider, Root as NativeRoot } from 'native-base';

import WhizzardApp from './router';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

export default class Root extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <NativeRoot>
          <WhizzardApp />
        </NativeRoot>
      </StyleProvider>
    );
  }
}
