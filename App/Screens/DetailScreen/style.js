import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1
  },
  topContainer: {
    backgroundColor: Colors.frost,
    width: '100%',
    height: Metrics.screenHeight * 0.5,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
  },
  bgView: {
    backgroundColor: Colors.frost,
    width: '100%',
    height: '15%',
    position: 'absolute',
    bottom: '-15%',
    zIndex: 1,
  },
  author: {
    color: Colors.black,
    ...Fonts.style.h4
  },
  bottomContainer: {
    backgroundColor: Colors.white,
    width: '100%',
    borderTopLeftRadius: 50,
    zIndex: 9,
    padding: 30,
  },
  image: {
    width: '75%',
    height: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    resizeMode: 'contain'
  },
  title: {
    marginVertical: 20,
    color: Colors.black,
    ...Fonts.style.h6
  },
  descrip: {
    lineHeight: 28,
    color: Colors.black,
    ...Fonts.style.description
  },
  backBtnCont: {
    position: 'absolute',
    zIndex: 11
  },
  backBtn: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: Colors.charcoal,
    margin: 10
  },
  publish: {
    alignSelf: 'flex-end',
    textAlign: 'right',
    color: Colors.black,
    ...Fonts.style.description
  }

});
