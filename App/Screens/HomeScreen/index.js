import MasonryList from '@react-native-seoul/masonry-list';
import React, { useEffect } from 'react';
import { Image, Pressable, SafeAreaView, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Col } from '../../Components/Grid.js/index.js';
import Loader from '../../Components/Loader';
import { APP_HEADINGS } from '../../Constants/Headings.js';
import { APP_SCREENS } from '../../Constants/ScreensName.js';
import NewsActions from '../../Redux/NewsRedux';
import styles from './style';

const HomeScreen = (props) => {

  const { navigation } = props;
  const dispatch = useDispatch();

  /* --- Geting data from redux state ---- */
  const { fetching, news } = useSelector((state) => state.news);


  useEffect(() => {
    /* --- Calling saga api using redux action ---- */
    dispatch(NewsActions.request());
  }, []);


  const toDetailScreen = (item) => {
    navigation.navigate(APP_SCREENS.DETAILS, { data: item });
  };


  const CardItem = (item) => {

    return (
      <Pressable onPress={ () => toDetailScreen(item) } style={ styles.cardContainer }>

        <Image
          style={ styles.cardImage }
          source={ { uri: item?.item?.urlToImage } } />

        { item?.item?.author && <Col style={ styles.nameContainer }>
          <Text style={ styles.autherNameText }>{ item?.item?.author }</Text>
        </Col> }

        <Col style={ styles.titleContainer }>
          <Text numberOfLines={ 2 } style={ styles.titleText }>{ item?.item?.title }</Text>
        </Col>

      </Pressable>
    );

  };

  return (
    <Col style={ styles.mainContainer }>
      <SafeAreaView style={ styles.safeArea } />
      <Col style={ styles.header }>
        <Text style={ styles.headerTitle }>{ APP_HEADINGS.NEWS_FEED }</Text>
      </Col>
      <MasonryList
        style={ styles.paddingTop }
        data={ news }
        numColumns={ 2 }
        keyExtractor={ (item, index) => index }
        showsVerticalScrollIndicator={ false }
        renderItem={ ({ item }) => <CardItem item={ item } /> }
      />
      <Loader loading={ fetching } />
    </Col>
  );
};

export default HomeScreen;
