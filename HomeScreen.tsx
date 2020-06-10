import * as React from 'react';
import {
  AsyncStorage,
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {AuthContext} from './App';

import {Defs, LinearGradient, Stop} from 'react-native-svg';
import {LineChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

class Chart extends React.PureComponent {
  render() {
    const data1 = [0, -5, 10, -30, 50, -20, 0];

    const data2 = [0, 20, 20, 50, 10, 60, 50];

    const data = [
      {
        data: data1,
      },
      {
        data: data2,
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
          style={{height: 200}}
          data={data}
          curve={shape.curveNatural}
          contentInset={{top: 20, bottom: 20}}
          svg={{
            strokeWidth: 2,
            stroke: 'url(#gradient)',
          }}>
          <Gradient />
        </LineChart>
      </>
    );
  }
}

const HomeScreen: React.SFC = () => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBar}>
            <View>
              <Text style={styles.hello}>Hello</Text>
              <Text style={styles.username}>Lunaferya</Text>
            </View>
            <View>
              <Image source={require('./avatar.png')} style={styles.avatar} />
            </View>
          </View>
          <View style={styles.headerTools}>
            <View style={styles.tools}>
              <TouchableOpacity style={styles.switcherActive}>
                <Text style={styles.toolText}>Outcome</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.toolText}>Income</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.date}>
              <Text style={styles.textDate}>28 May 2020</Text>
            </View>
          </View>
          <Chart />
        </View>
        <View style={styles.content}>
          <View style={styles.overview}>
            <View style={styles.overviewContent}>
              <View style={styles.overviewHeader}>
                <View style={styles.overviewSummary}>
                  <Image source={require('./transfer.png')} />
                  <View style={styles.overviewSummaryText}>
                    <Text style={styles.overviewSummaryTextTitle}>Summary</Text>
                    <Text style={styles.overviewSummaryTextSubtitle}>
                      Transactions
                    </Text>
                  </View>
                </View>
                <View>
                  <Image source={require('./ios-settings.png')} />
                </View>
              </View>
              <View style={styles.overviewMenus}>
                <View style={styles.overviewMenu}>
                  <View style={styles.overviewMenuProfile}>
                    <Image source={require('./outcome.png')} />
                    <View style={styles.overviewMenuTexts}>
                      <Text>Outcome</Text>
                      <Text style={styles.overviewMenuSubtitle}>
                        Rp. Rp. 2,332,500
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image source={require('./arrow-forward.png')} />
                  </View>
                </View>
                <View style={styles.overviewMenu}>
                  <View style={styles.overviewMenuProfile}>
                    <Image source={require('./income.png')} />
                    <View style={styles.overviewMenuTexts}>
                      <Text>Outcome</Text>
                      <Text style={styles.overviewMenuSubtitle}>
                        Rp. 250,000
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image source={require('./arrow-forward.png')} />
                  </View>
                </View>
              </View>
              <View style={styles.overviewFooter}>
                <View style={styles.overviewFooterTexts}>
                  <Text>Balance</Text>
                  <Text style={styles.balance}>Rp. 2,750,000</Text>
                  <Text style={styles.percent}>-2.7%</Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.add} onPress={signOut}>
                    <Text style={styles.addText}>Add New</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.histories}>
            <View style={styles.historyHeader}>
              <Text style={styles.historyTitle}>History</Text>
            </View>
            <View style={styles.history}>
              <View style={styles.historyCover}>
                <Image source={require('./outcome.png')} />
                <View style={styles.historyTexts}>
                  <Text style={styles.historyTextTitle}>Paket Internet</Text>
                  <Text style={styles.historyTextSubtitle}>
                    Internet & Cable
                  </Text>
                </View>
              </View>
              <View>
                <Text>Rp. 50,000</Text>
              </View>
            </View>
            <View style={styles.history}>
              <View style={styles.historyCover}>
                <Image source={require('./income.png')} />
                <View style={styles.historyTexts}>
                  <Text style={styles.historyTextTitle}>Sayur Selada</Text>
                  <Text style={styles.historyTextSubtitle}>Food</Text>
                </View>
              </View>
              <View>
                <Text>Rp. 250,000</Text>
              </View>
            </View>
            <View style={styles.history}>
              <View style={styles.historyCover}>
                <Image source={require('./outcome.png')} />
                <View style={styles.historyTexts}>
                  <Text style={styles.historyTextTitle}>Sate Ayam</Text>
                  <Text style={styles.historyTextSubtitle}>Food</Text>
                </View>
              </View>
              <View>
                <Text>Rp. 20,000</Text>
              </View>
            </View>
            <View style={styles.history}>
              <View style={styles.historyCover}>
                <Image source={require('./outcome.png')} />
                <View style={styles.historyTexts}>
                  <Text style={styles.historyTextTitle}>
                    Apple Pencil Gen 2
                  </Text>
                  <Text style={styles.historyTextSubtitle}>Electonic</Text>
                </View>
              </View>
              <View>
                <Text>Rp. 2,250,000</Text>
              </View>
            </View>
            <View style={styles.history}>
              <View style={styles.historyCover}>
                <Image source={require('./outcome.png')} />
                <View style={styles.historyTexts}>
                  <Text style={styles.historyTextTitle}>Case iPhone</Text>
                  <Text style={styles.historyTextSubtitle}>Electronic</Text>
                </View>
              </View>
              <View>
                <Text>Rp. 145,000</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4FA',
    flex: 1,
    width: '100%',
  },
  header: {
    backgroundColor: '#2434D0',
    height: 450,
    position: 'relative',
  },
  headerBar: {
    marginTop: 30,
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hello: {
    fontSize: 16,
    color: '#ffffff',
  },
  username: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  headerTools: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  tools: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switcherActive: {
    marginRight: 20,
    backgroundColor: '#505DDA',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    borderRadius: 5,
  },
  toolText: {
    color: '#ffffff',
  },
  date: {
    alignItems: 'center',
  },
  textDate: {
    color: '#ffffff',
  },
  content: {
    position: 'relative',
    paddingTop: 250,
  },
  overview: {
    borderRadius: 10,
    width: '100%',
    paddingRight: 30,
    paddingLeft: 30,
    position: 'absolute',
    top: -50,
  },
  overviewContent: {
    backgroundColor: '#ffffff',
    flex: 1,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#31365F',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.01,
    shadowRadius: 10,
    elevation: 5,
  },
  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DFE0FA',
  },
  overviewSummary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overviewSummaryText: {
    marginLeft: 15,
  },
  overviewSummaryTextTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#151834',
  },
  overviewSummaryTextSubtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#B7B8C1',
  },
  overviewMenus: {
    paddingTop: 15,
  },
  overviewMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  overviewMenuProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overviewMenuTexts: {
    marginLeft: 15,
  },
  overviewMenuSubtitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  overviewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  overviewFooterTexts: {
    position: 'relative',
  },
  balance: {
    fontSize: 16,
    fontWeight: '600',
  },
  percent: {
    position: 'absolute',
    right: -30,
    color: '#F45B5B',
  },
  add: {
    backgroundColor: '#EFF4FF',
    paddingLeft: 30,
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    borderRadius: 5,
  },
  addText: {
    color: '#2434D0',
    fontSize: 16,
    fontWeight: '600',
  },
  histories: {
    padding: 30,
  },
  historyHeader: {
    marginBottom: 30,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  history: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#31365F',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.01,
    shadowRadius: 10,
    elevation: 5,
  },
  historyCover: {
    flexDirection: 'row',
  },
  historyTexts: {
    marginLeft: 15,
  },
  historyTextTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
export default HomeScreen;
