import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    height: hp(10),
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.statusBar,
  },
  paddingTop: {
    paddingTop: hp(3)
  },
  headerTitle: {
    color: Colors.white,
    ...Fonts.style.h4
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  autherNameText: {
    alignSelf: 'center',
    ...Fonts.style.h6,
    padding: 5
  },
  titleText: {
    width: '80%',
    alignSelf: 'center',
    textAlign: 'justify',
    ...Fonts.style.normal
  },
  cardContainer: {
    width: '90%',
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 0.3,
    borderColor: Colors.charcoal
  },
  nameContainer: {
    paddingVertical: hp(1),
    backgroundColor: Colors.charcoal,
  },
  titleContainer: {
    paddingVertical: hp(1),
    backgroundColor: Colors.gray,
  },
  cardImage: {
    height: hp(20),
    width: '100%',
    resizeMode: 'stretch',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
