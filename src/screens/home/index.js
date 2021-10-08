import React from 'react';
import {View, ScrollView} from 'react-native';
import {Header, Card, _Text} from '../../components';
import styles from './style';
import {StaticImages} from '../../constants';

const Home = () => {
  const Line = () => {
    return <View style={styles.line} />;
  };
  return (
    <View style={styles.coantiner}>
      <Header />
      <ScrollView>
        <Card
          imageBackgroundLoaction={StaticImages.jakarta}
          imageBackgroundStyle={styles.imageBackgound}
          imageTag={StaticImages.newTag}
          amount={5}
          imageCoin={StaticImages.coinSmall}
          coinAmount={'5K'}
          place={'Jakarta'}
          playText={'scratcher'}
        />
        {Line()}
        <View style={styles.headLineConatiner}>
          <_Text data={'Minigames'} style={styles.headlineText} />
        </View>
        <Card
          imageBackgroundLoaction={StaticImages.jakarta}
          imageBackgroundStyle={styles.imageBackgound}
          imageTag={StaticImages.newTag}
          amount={5}
          imageCoin={StaticImages.coinSmall}
          coinAmount={'5K'}
          place={'Jakarta'}
          playText={'scratcher'}
        />
        {Line()}
      </ScrollView>
    </View>
  );
};

export default Home;
