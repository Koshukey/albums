import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {  //このfunction名はファイル名と一致する必要がある
  const { textStyle, viewStytle } = styles;
  return (
    <View style={viewStytle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStytle: {
    backgroundColor: '#F8F8F8',
    justifyContent:'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15
  },
  textStyle: {
    fontSize: 12
  }
};

export default Header;
