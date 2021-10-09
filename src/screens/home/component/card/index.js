import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styles from './style';
import {ImageDraw, _Text} from '../../../../components';
import AnimatedNumbers from 'react-native-animated-numbers';

const LottoCard = ({
  imageLoaction,
  amount,
  day,
  time,
  winNumber,
  drawNumber,
  Line,
  nextDrawNumber,
}) => {
  const [animateAmount, setAnimateAmount] = React.useState(0);
  const [days, setDay] = React.useState('10');
  const [hrs, sethrs] = React.useState(11);
  const [min, setMin] = React.useState(57);
  const [sec, setSec] = React.useState(10);

  useEffect(() => {
    setAmount();
    let myInterval = setInterval(() => {
      setSec((s) => {
        if (s === 0) {
          setMin((m) => m - 1);
          return 59;
        } else {
          return s - 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  const setAmount = () => {
    setTimeout(() => setAnimateAmount(animateAmount + amount), 500);
  };

  const Header = () => {
    return (
      <View style={styles.headerConatiner}>
        <View style={styles.headerInner}>
          <_Text data={'Million Lotto'} style={styles.headerText} />
          <_Text
            data={'Jackpot'}
            style={styles.jackpotText}
            imageConatinerStyle={styles.row}>
            <_Text data={' €'} style={styles.amount} />
            <AnimatedNumbers
              includeComma
              animateToNumber={animateAmount}
              fontStyle={styles.amount}
            />
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

  const Draw = () => {
    const DateTime = (data, label) => {
      return (
        <View style={styles.dateTimeConatiner}>
          <AnimatedNumbers
            includeComma
            animateToNumber={data}
            fontStyle={styles.dateTime}
          />
          <_Text data={label} style={styles.dateTimeLabel} />
        </View>
      );
    };

    return (
      <View style={styles.drawConatiner}>
        <_Text
          data={'Draw'}
          style={styles.dayText}
          imageConatinerStyle={styles.row}>
          <_Text data={` ${drawNumber}`} style={styles.timeText} />
          <_Text data={' closes in:'} style={styles.dayText} />
        </_Text>
        <View style={styles.timmerConatiner}>
          {DateTime(days, 'days')}
          {DateTime(hrs, 'hrs')}
          {DateTime(min, 'min')}
          {DateTime(sec, 'sec')}
        </View>

        <_Text data={'Next 7th oct at 14.00'} style={styles.nextTimerText} />
      </View>
    );
  };

  const Enitries = () => {
    return (
      <View style={styles.enitriesConatiner}>
        <_Text
          data={'Your entries into the next draw: '}
          style={styles.dayText}
          imageConatinerStyle={styles.row}>
          <_Text data={`${nextDrawNumber}`} style={styles.timeText} />
        </_Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContiner}>
        {Header()}
        {DayTime()}
        {Winning()}
        {Draw()}
        {Line()}
        {Enitries()}
      </View>
    </View>
  );
};

export default LottoCard;
