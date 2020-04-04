import React from 'react';
import styles from '../../assets/css/styles';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import CardItem from '../components/CardItem';
import { Icon } from 'react-native-elements'
import Demo from '../../assets/data/demo.js';

const Matches = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerMatches}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>Matches</Text>
            <TouchableOpacity>
              <Text style={styles.icon}>
                <Icon
                  raised
                  name='heartbeat'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => console.log('hello')} 
                />
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            numColumns={2}
            data={Demo}
            keyExtractor={(index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <CardItem
                  image={item.image}
                  name={item.name}
                  status={item.status}
                  variant
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Matches;
