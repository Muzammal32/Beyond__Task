import moment from 'moment';
import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { Col } from '../../Components/Grid.js';
import { APP_HEADINGS } from '../../Constants/Headings';
import { Fonts, Images } from '../../Themes';
import styles from './style';

const DetailScreen = (props) => {

  const { navigation } = props;
  const data = navigation.getParam('data').item;


  return (
    <Col style={ styles.mainContainer }>

      <Col style={ styles.backBtnCont }>
        <Pressable onPress={ () => navigation.goBack() }>
          <Image style={ styles.backBtn } source={ Images.backButton } />
        </Pressable>
      </Col>

      <ScrollView >

        <Col style={ styles.topContainer }>
          <Image style={ styles.image } source={ { uri: data?.urlToImage } } />
          <View style={ styles.bgView } />
        </Col>

        <Col style={ styles.bottomContainer }>

          { data?.author && <Text style={ styles.author }>{ APP_HEADINGS.AUTHER }:  { data?.author }</Text> }
          <Text style={  styles.publish }>
            { APP_HEADINGS.PUBLISH_DATE }: { moment(data.publishedAt).format('DD-MMM-YYYY') }
            { `\nSource: ${data.source.name}` }
          </Text>

          { data?.author && <Text style={styles.title}>{ APP_HEADINGS.TITLE }:  { data?.author }</Text> }
          <Text style={ styles.title }>{ APP_HEADINGS.DESCRIPTION }:</Text>
          <Text style={ styles.descrip}>{ data?.description }</Text>
          <Text style={ styles.title }>{ APP_HEADINGS.CONTENT }:</Text>
          <Text style={ [Fonts.style.normal, styles.descrip] }>{ data?.content }</Text>

        </Col>

      </ScrollView>

    </Col>
  );
};

export default DetailScreen;
