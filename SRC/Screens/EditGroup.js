import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Color from '../Assets/Utilities/Color';
import CustomHeader from '../Components/CustomHeader';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {FONTS, SIZES} from '../Config/theme';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomButton from '../Components/CustomButton';

const EditGroup = () => {
  const navigation = useNavigation();
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.background_color}
        barStyle={'dark-content'}
      />
      <CustomHeader leftIcon RightIcon={true} />
      <ScrollView style={styles.container}>
        <View style={styles.main_view}>
          <CustomText isBold style={styles.title}>
            Title
          </CustomText>
          <TextInputWithTitle
            disable
            placeholder={'Enter your Group'}
            viewHeight={0.06}
            viewWidth={0.85}
            inputWidth={0.8}
            backgroundColor={'#FFFFFF'}
            marginTop={moderateScale(5, 0.6)}
            color={Color.darkGray}
            placeholderColor={Color.themeLightGray}
            marginBottom={moderateScale(10, 0.3)}
            border={0.5}
          />
          <CustomText isBold style={styles.title}>
            Filter Categories
          </CustomText>
          <CustomText isBold style={styles.text}>
            Stolen Date
          </CustomText>
          <TextInputWithTitle
            disable
            placeholder={'MM/DD//YYYY'}
            viewHeight={0.06}
            viewWidth={0.85}
            inputWidth={0.8}
            backgroundColor={'#FFFFFF'}
            marginTop={moderateScale(5, 0.6)}
            color={Color.darkGray}
            placeholderColor={Color.themeLightGray}
            marginBottom={moderateScale(10, 0.3)}
            border={0.5}
          />
          <CustomText isBold style={styles.text}>
            Location
          </CustomText>
          <TextInputWithTitle
            disable
            placeholder={'Address'}
            viewHeight={0.06}
            viewWidth={0.85}
            inputWidth={0.8}
            backgroundColor={'#FFFFFF'}
            marginTop={moderateScale(5, 0.6)}
            color={Color.darkGray}
            placeholderColor={Color.themeLightGray}
            marginBottom={moderateScale(10, 0.3)}
            border={0.5}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <CustomText isBold style={styles.text}>
                Bike Modal
              </CustomText>
              <TextInputWithTitle
                disable
                placeholder={'2024'}
                viewHeight={0.06}
                viewWidth={0.26}
                inputWidth={0.26}
                backgroundColor={'#FFFFFF'}
                marginTop={moderateScale(5, 0.6)}
                color={Color.darkGray}
                placeholderColor={Color.themeLightGray}
                marginBottom={moderateScale(10, 0.3)}
                border={0.5}
                // name={'arrow-drop-down'}
                // as={MaterialIcons}
                righticonName={'arrow-drop-down'}
                righticonType={MaterialIcons}
                rightIconcolor={Color.lightGrey}
              />
            </View>
            <View>
              <CustomText isBold style={styles.text}>
                Bike Color
              </CustomText>
              <TextInputWithTitle
                disable
                placeholder={'Color'}
                viewHeight={0.06}
                viewWidth={0.26}
                inputWidth={0.26}
                backgroundColor={'#FFFFFF'}
                marginTop={moderateScale(5, 0.6)}
                color={Color.darkGray}
                placeholderColor={Color.themeLightGray}
                marginBottom={moderateScale(10, 0.3)}
                border={0.5}
                righticonName={'arrow-drop-down'}
                righticonType={MaterialIcons}
                rightIconcolor={Color.lightGrey}
              />
            </View>
            <View>
              <CustomText isBold style={styles.text}>
                Battery Type
              </CustomText>
              <TextInputWithTitle
                disable
                placeholder={'Type'}
                viewHeight={0.06}
                viewWidth={0.26}
                inputWidth={0.26}
                backgroundColor={'#FFFFFF'}
                marginTop={moderateScale(5, 0.6)}
                color={Color.darkGray}
                placeholderColor={Color.themeLightGray}
                marginBottom={moderateScale(10, 0.3)}
                border={0.5}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <CustomText isBold style={styles.text}>
                Frame Size
              </CustomText>
              <TextInputWithTitle
                placeholder={'Size'}
                disable
                viewHeight={0.06}
                viewWidth={0.26}
                inputWidth={0.26}
                backgroundColor={'#FFFFFF'}
                marginTop={moderateScale(5, 0.6)}
                color={Color.darkGray}
                placeholderColor={Color.themeLightGray}
                marginBottom={moderateScale(10, 0.3)}
                border={0.5}
                righticonName={'arrow-drop-down'}
                righticonType={MaterialIcons}
                rightIconcolor={Color.lightGrey}
              />
            </View>
            <View>
              <CustomText isBold style={styles.text}>
                Brand
              </CustomText>
              <TextInputWithTitle
                disable
                placeholder={'Brand'}
                viewHeight={0.06}
                viewWidth={0.26}
                inputWidth={0.26}
                backgroundColor={'#FFFFFF'}
                marginTop={moderateScale(5, 0.6)}
                color={Color.darkGray}
                placeholderColor={Color.themeLightGray}
                marginBottom={moderateScale(10, 0.3)}
                border={0.5}
                righticonName={'arrow-drop-down'}
                righticonType={MaterialIcons}
                rightIconcolor={Color.lightGrey}
              />
            </View>
            <View>
              <CustomText isBold style={styles.text}>
                Unique Indentifiers
              </CustomText>
              <TextInputWithTitle
                placeholder={'Type'}
                disable
                viewHeight={0.06}
                viewWidth={0.26}
                inputWidth={0.26}
                backgroundColor={'#FFFFFF'}
                marginTop={moderateScale(5, 0.6)}
                color={Color.darkGray}
                placeholderColor={Color.themeLightGray}
                marginBottom={moderateScale(10, 0.3)}
                border={0.5}
              />
            </View>
          </View>
          <CustomButton
            text={'Stolen'}
            textColor={Color.white}
            width={windowWidth * 0.85}
            height={windowHeight * 0.07}
            marginTop={moderateScale(20, 0.3)}
            bgColor={Color.themeColor}
            elevation
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
  btn_view: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: moderateScale(50, 0.5),
  },
  btn: {
    width: '48%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderRadius: moderateScale(10, 0.6),
  },
  btn_text: {
    ...FONTS.Medium17,
    color: Color.mediumGrey,
  },
  btn_text3: {
    ...FONTS.Medium13,
    color: Color.mediumGrey,
  },
  btn_text2: {
    ...FONTS.Medium13,
    color: Color.mediumGrey,
    paddingVertical: moderateScale(8, 0.6),
  },
  title: {
    ...FONTS.Medium15,
  },
  text: {
    ...FONTS.Regular12,
    color: Color.lightGrey,
  },
  banner: {
    width: windowWidth,
    height: windowHeight * 0.23,
  },
  user_image: {
    height: windowHeight * 0.07,
    width: windowHeight * 0.07,
    borderRadius: moderateScale(),
  },
  post_card: {
    width: windowWidth * 0.9,
    borderColor: Color.mediumGray,
    borderRadius: moderateScale(5, 0.6),
  },
  post_text: {
    ...FONTS.Medium17,
    color: Color.mediumGray,
    paddingHorizontal: moderateScale(20, 0.6),
    paddingTop: moderateScale(15, 0.6),
  },
  post_row: {
    flexDirection: 'row',
    width: windowWidth,
    // alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(10, 0.6),
    paddingBottom: moderateScale(10, 0.6),
  },
  post_image: {
    height: windowHeight * 0.05,
    width: windowHeight * 0.05,
    borderRadius: (windowHeight * 0.06) / 2,
    overflow: 'hidden',
    // marginHorizontal: moderateScale(5, 0.3),
    marginTop: moderateScale(9, 0.3),
    marginLeft: moderateScale(10, 0.6),
  },
});
