import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {AuthContext} from '../../App';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {Chart} from '../../../components/organics';
import {StackActions} from '@react-navigation/native';

import {styles} from './Styles';

export const HomeContext = React.createContext();

const initialState = {
  isActive: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'IS_OUTCOME':
      return {
        ...state,
        isActive: true,
      };
    case 'IS_INCOME':
      return {
        ...state,
        isActive: false,
      };
    default:
      return state;
  }
};
const HomeScreen: React.SFC = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBar}>
            <View>
              <Text style={styles.hello}>Hello</Text>
              <Text style={styles.username}>Lunaferya</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.push('profile')}>
              <View>
                <Image
                  source={require('../../../assets/images/avatar.png')}
                  style={styles.avatar}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.headerTools}>
            <View style={styles.tools}>
              <TouchableOpacity
                style={
                  state.isActive ? styles.switcherActive : styles.chartLabel
                }
                onPress={() => dispatch({type: 'IS_OUTCOME'})}>
                <Text style={styles.toolText}>Outcome</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  state.isActive ? styles.chartLabel : styles.switcherActive
                }
                onPress={() => dispatch({type: 'IS_INCOME'})}>
                <Text style={styles.toolText}>Income</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.date}>
              <Text style={styles.textDate}>28 May 2020</Text>
            </View>
          </View>
          <HomeContext.Provider value={{state, dispatch}}>
            <Chart />
          </HomeContext.Provider>
        </View>
        <View style={styles.content}>
          <View style={styles.overview}>
            <View style={styles.overviewContent}>
              <View style={styles.overviewHeader}>
                <View style={styles.overviewSummary}>
                  <Image
                    source={require('../../../assets/images/transfer.png')}
                  />
                  <View style={styles.overviewSummaryText}>
                    <Text style={styles.overviewSummaryTextTitle}>Summary</Text>
                    <Text style={styles.overviewSummaryTextSubtitle}>
                      Transactions
                    </Text>
                  </View>
                </View>
                <View>
                  <Image
                    source={require('../../../assets/images/ios-settings.png')}
                  />
                </View>
              </View>
              <View style={styles.overviewMenus}>
                <View style={styles.overviewMenu}>
                  <View style={styles.overviewMenuProfile}>
                    <Image
                      source={require('../../../assets/images/outcome.png')}
                    />
                    <View style={styles.overviewMenuTexts}>
                      <Text>Outcome</Text>
                      <Text style={styles.overviewMenuSubtitle}>
                        Rp. Rp. 2,332,500
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image
                      source={require('../../../assets/images/arrow-forward.png')}
                    />
                  </View>
                </View>
                <View style={styles.overviewMenu}>
                  <View style={styles.overviewMenuProfile}>
                    <Image
                      source={require('../../../assets/images/income.png')}
                    />
                    <View style={styles.overviewMenuTexts}>
                      <Text>Outcome</Text>
                      <Text style={styles.overviewMenuSubtitle}>
                        Rp. 250,000
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image
                      source={require('../../../assets/images/arrow-forward.png')}
                    />
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
                  <TouchableOpacity
                    style={styles.add}
                    onPress={() => navigation.navigate('add.transaction')}>
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
                <Image source={require('../../../assets/images/outcome.png')} />
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
                <Image source={require('../../../assets/images/income.png')} />
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
                <Image source={require('../../../assets/images/outcome.png')} />
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
                <Image source={require('../../../assets/images/outcome.png')} />
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
                <Image source={require('../../../assets/images/outcome.png')} />
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

export default HomeScreen;
