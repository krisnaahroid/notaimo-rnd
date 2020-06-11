import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const ProfileScreen: React.SFC = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <LottieView
        source={require('../../../assets/lottiefiles/lottie-leaf.json')}
        autoPlay
        loop
      />
      <Button title="Press me" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },
});
