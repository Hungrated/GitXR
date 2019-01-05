import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles, { drawerWidth, statusHeight } from '../../style';
import * as Constant from '../../style/constant';
import {
  SearchFilterType,
  SearchLanguageType,
  SortType
} from '../../utils/filterUtils';
import SelectList from './SearchFilterSelectList';

class SearchDrawerFilter extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string
  };

  static contextTypes = {
    drawer: PropTypes.object
  };

  render () {
    return (
      <View style={[
        styles.flex, {
          backgroundColor: 'transparent'
        }]}>
        <View style={{
          backgroundColor: '#F0000000',
          height: statusHeight,
          width: drawerWidth
        }}>
          <View
            style={{
              backgroundColor: Constant.primaryDarkColor,
              height: statusHeight,
              width: drawerWidth
            }}/>
        </View>
        <SelectList
          listStyle={{
            flex: 1,
            backgroundColor: Constant.white,
            marginTop: Constant.normalMarginEdge * 2
          }}
          selectIndex={{'filerType': 0, 'filterSort': 0, 'filterLanguage': 0}}
          selectMap={{
            'filerType': SearchFilterType,
            'filterSort': SortType,
            'filterLanguage': SearchLanguageType
          }}
          onSelect={(selection, data) => {
            switch (selection) {
              case 'filerType':
                Actions.pop({refresh: {selectTypeData: data}});
                break;
              case 'filterLanguage':
                Actions.pop({refresh: {selectLanguageData: data}});
                break;
              case 'filterSort':
                Actions.pop({refresh: {selectSortData: data}});
                break;
            }

          }}
        />
      </View>
    );
  }
}

export default SearchDrawerFilter;
