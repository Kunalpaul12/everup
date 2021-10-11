import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {Header, Card, _Text, ButtonDetail} from '../../components';
import styles from './style';
import {StaticImages} from '../../constants';
import {LottoCard} from './component';
import SplashScreen from 'react-native-splash-screen';

const Home = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Line = () => {
    return <View style={styles.line} />;
  };
  return (
    <View style={styles.coantiner}>
      <Header amount={'€11.00'} coinAmount={'764.2K'} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card
          imageBackgroundLoaction={StaticImages.jakarta}
          imageBackgroundStyle={styles.imageBackgound}
          imageTag={StaticImages.newTag}
          amount={5}
          imageCoin={StaticImages.coinMedium}
          coinAmount={'5K'}
          place={'Jakarta'}
          playText={'scratcher'}
        />
        {Line()}
        <LottoCard
          amount={1500999}
          imageLoaction={StaticImages.rightArrowOrange}
          day={'Thursday'}
          time={'6 PM'}
          winNumber={[9, 5, 0, 4, 9, 0, 3, 1, StaticImages.watermelon]}
          drawNumber={26597}
          Line={() => Line()}
          nextDrawNumber={14}
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
        <View style={styles.buttonConatiner}>
          <ButtonDetail
            label={'Competition Rules'}
            imageLoaction={StaticImages.rightArrowGrey}
          />
          <ButtonDetail
            label={'Competition Rules'}
            imageLoaction={StaticImages.rightArrowGrey}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
