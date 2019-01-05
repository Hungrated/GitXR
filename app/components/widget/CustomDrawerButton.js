import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../../style';
import * as Constant from '../../style/constant';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * 自定义搜索过滤按键
 */
class CustomDrawerButton extends Component {
  componentDidMount () {
  }

  componentWillUnmount () {

  }

  render () {
    return (
      <View style={[
        styles.centered, {
          marginRight: Constant.normalMarginEdge,
          marginTop: Constant.normalMarginEdge,
          paddingLeft: 20
        }]}>
        <Icon name={'filter'} size={20} color={Constant.miWhite}/>
      </View>
    );
  }
}

export default CustomDrawerButton;
