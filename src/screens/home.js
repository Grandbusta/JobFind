import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Jobs} from '../data';

export default Home = () => {
  const colors = ['#008080'];
  const getColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{width: '100%', paddingHorizontal: 16}}>
          <View style={styles.btnflex}>
            {[{name: 'menu'}, {name: 'notifications'}].map((item, i) => (
              <View style={styles.btnStyle}>
                <Icon name={item.name} size={36} color={'grey'} key={i} />
              </View>
            ))}
          </View>
          <View>
            <Text style={styles.title}>Find the worlds most Amazing job</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Search Job"
                style={{
                  flex: 1,
                  fontSize: 18,
                }}
              />
              <Icon name={'search'} size={30} color={'grey'} />
            </View>
            <View
              style={{
                marginVertical: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: '700'}}>
                Browse By Company
              </Text>
              <Text style={{fontWeight: '600', color: '#008080'}}>
                See more
              </Text>
            </View>
            {Jobs.map((item, i) => (
              <View
                style={{...styles.jobView, backgroundColor: getColor()}}
                key={i}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 14, fontWeight: '500'}}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'white',
                      padding: 4,
                      borderRadius: 100,
                    }}>
                    <Icon size={16} name="bookmark" color="grey" />
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'white',
                    fontWeight: '700',
                    marginVertical: 15,
                  }}>
                  {item.title}
                </Text>
                <Text style={{color: 'white'}}>{item.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: '10%',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
    marginVertical: '10%',
  },
  btnflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  btnStyle: {
    backgroundColor: 'whitesmoke',
    padding: 5,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  inputView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  jobView: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
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
