import * as React from 'react';
import {
  AsyncStorage,
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import {AuthContext} from './App';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import {styles} from './stylesSignin';

const SignInScreen: React.SFC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>Back</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => signIn({username, password})}>
            <Text style={styles.textButton}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => signIn({username, password})}>
            <Text style={styles.textButtonSecondary}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgot}>
          <Text>Forgot your password?</Text>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
