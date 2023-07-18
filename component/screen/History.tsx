import { View, StatusBar, Text } from 'react-native';

import styles from '../../assets/style/styles'
import Users from '../api/Users'

const History = () => {
    return (
      <View style={styles.history}>
        <StatusBar translucent />
        <Users /> 
      </View>
    )
  };
  
  export default History;