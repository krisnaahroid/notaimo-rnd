import * as React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    flex: 1,
    padding: 30,
    justifyContent: 'space-between',
  },
  content: {
    justifyContent: 'flex-end',
  },
  header: {
    marginTop: '30%',
  },
  title: {
    fontSize: 36,
  },
  form: {
    marginTop: '0%',
  },
  input: {
    backgroundColor: '#F3F4FA',
    marginTop: '5%',
    padding: 14,
    fontSize: 16,
    borderRadius: 5,
  },
  buttons: {
    marginTop: '10%',
  },
  button: {
    backgroundColor: '#151834',
    height: 45,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: '5%',
  },
  buttonSecondary: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 50,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  textButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textButtonSecondary: {
    color: '#151834',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgot: {
    marginTop: '10%',
    alignItems: 'center',
  },
});
