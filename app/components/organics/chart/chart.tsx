import * as React from 'react';
import {Defs, LinearGradient, Stop} from 'react-native-svg';
import {LineChart, Grid} from 'react-native-svg-charts';
import {Text} from 'react-native';
import * as shape from 'd3-shape';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HomeContext} from '../../../views/Dashboard/Home/HomeScreen';

const Chart: React.SFC = () => {
  const {state, dispatch} = React.useContext(HomeContext);

  const data1 = [0, -5, 10, -30, 50, -20, 0];

  const data2 = [0, 20, 20, 50, 10, 60, 50];

  const data = [
    {
      data: data1,
      svg: {strokeWidth: state.isActive ? 1 : 2},
    },
    {
      data: data2,
      svg: {strokeWidth: state.isActive ? 2 : 1},
    },
  ];

  const Gradient = () => (
    <Defs key={'gradient'}>
      <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
        <Stop offset={'0%'} stopColor={'rgb(66, 194, 244)'} />
        <Stop offset={'100%'} stopColor={'rgb(255, 255, 255)'} />
      </LinearGradient>
    </Defs>
  );

  return (
    <>
      <LineChart
        style={{height: hp('30%')}}
        data={data}
        curve={shape.curveNatural}
        contentInset={{top: 20, bottom: 20}}
        svg={{
          stroke: 'url(#gradient)',
        }}>
        <Gradient />
      </LineChart>
    </>
  );
};

export default Chart;
