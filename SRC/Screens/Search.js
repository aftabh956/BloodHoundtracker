import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomHeader from '../Components/CustomHeader';
import CustomStatusBar from '../Components/CustomStatusBar';
import {SIZES} from '../Config/theme';
import {windowHeight, windowWidth} from '../Utillity/utils';
import SearchContainer from '../Components/SearchContainer';
import CustomText from '../Components/CustomText';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {moderateScale} from 'react-native-size-matters';
import {View} from 'native-base';

const EditGroup = () => {
  const navigation = useNavigation();
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.background_color}
        barStyle={'dark-content'}
      />
      <CustomHeader leftIcon text={'Search'} />

      <ScrollView style={styles.container}>
        <View style={styles.main_view}>
          <SearchContainer
            input={true}
            placeholder={'Search'}
            style={{height: windowHeight * 0.06, borderWidth: 0}}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default EditGroup;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.background_color,
  },
  main_view: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding2 * 0.5,
  },
});
