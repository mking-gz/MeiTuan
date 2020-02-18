import React, { PureComponent } from 'react'
import { AppRegistry } from 'react-native'

import RootScene from './src/RootScene';

export default class MeiTuan extends PureComponent<{}> {
  render() {
    return (
      <RootScene />
    );
  }
}

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
