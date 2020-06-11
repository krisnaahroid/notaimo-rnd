import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4FA',
    flex: 1,
    width: '100%',
  },
  header: {
    backgroundColor: '#2434D0',
    height: hp('60%'),
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
    backgroundColor: '#505DDA',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  chartLabel: {
    marginRight: 10,
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
