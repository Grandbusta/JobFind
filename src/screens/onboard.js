import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default Onboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={styles.onboardImage}
            source={require('../images/onboard.png')}
          />
        </View>
        <View style={styles.onboardContent}>
          <Text style={styles.title}>
            We help creative people find a job they'll love
          </Text>
          <Text style={styles.text}>
            JobFind is simply a platform to find your dream Job in reality.
          </Text>
          <View
            style={{
              backgroundColor: 'transparent',
              padding: 8,
              borderRadius: 100,
              borderColor: '#008080',
              borderWidth: 1,
              marginVertical: 10,
            }}>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Icon name="arrow-right" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  onboardImage: {
    width: '80%',
    height: 300,
  },
  onboardContent: {
    paddingHorizontal: '10%',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
    marginVertical: '10%',
  },
  continueButton: {
    backgroundColor: '#008080',
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
