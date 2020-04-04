import React from 'react';
import styles from '../../assets/css/styles';

import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
  name
}) => {
  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.matchesProfileItem}>
        <Text style={styles.matchesTextProfileItem}>
          <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('hello')} 
          /> {matches}% Match!
        </Text>
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.descriptionProfileItem}>
        {age} - {location}
      </Text>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('hello')} 
          />
        </Text>
        <Text style={styles.infoContent}>{info1}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('hello')} 
          />
        </Text>
        <Text style={styles.infoContent}>{info2}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('hello')} 
          />
        </Text>
        <Text style={styles.infoContent}>{info3}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('hello')} 
          />
        </Text>
        <Text style={styles.infoContent}>{info4}</Text>
      </View>
    </View>
  );
};

export default ProfileItem;
