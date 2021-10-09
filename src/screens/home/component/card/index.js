import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './style';
import {ImageDraw, _Text} from '../../../../components';

const LottoCard = ({imageLoaction, amount, day, time, winNumber, winImage}) => {
  const Header = () => {
    return (
      <View style={styles.headerConatiner}>
        <View style={styles.headerInner}>
          <_Text data={'Million Lotto'} style={styles.headerText} />
          <_Text
            data={'Jackpot'}
            style={styles.jackpotText}
            imageConatinerStyle={styles.row}>
            <_Text data={`${amount}`} style={styles.amount} />
          </_Text>
        </View>
        <View style={styles.imageConatiner}>
          <ImageDraw
            imageLoaction={imageLoaction}
            imageStyle={styles.arrowImage}
          />
        </View>
      </View>
    );
  };

  const DayTime = () => {
    return (
      <View style={styles.dayConatiner}>
        <_Text
          data={`Every ${day} at`}
          style={styles.dayText}
          imageConatinerStyle={styles.row}>
          <_Text data={` ${time}`} style={styles.timeText} />
        </_Text>
      </View>
    );
  };

  const Winning = () => {
    const renderItem = ({item, index}) => {
      if (index !== winNumber.length - 1) {
        return (
          <View style={styles.faltlistNumberConatiner}>
            <_Text data={item} style={styles.dayText} />
          </View>
        );
      } else {
        return (
          <View style={styles.faltlistNumberConatiner}>
            <ImageDraw imageLoaction={item} imageStyle={styles.winImage} />
          </View>
        );
      }
    };

    return (
      <View style={styles.winningConatiner}>
        <_Text data={'Last winning numbers'} style={styles.dayText} />
        <View style={styles.flatlistConatiner}>
          <FlatList
            data={winNumber}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={(item, index) => 'key' + index}
            scrollEnabled={false}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContiner}>
        {Header()}
        {DayTime()}
        {Winning()}
      </View>
    </View>
  );
};

export default LottoCard;
