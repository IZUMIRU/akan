import React from 'react';
import styles from '../../assets/css/styles';

import { Text, TouchableOpacity } from 'react-native';

const City = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        City Name
      </Text>
    </TouchableOpacity>
  );
};

export default City;
