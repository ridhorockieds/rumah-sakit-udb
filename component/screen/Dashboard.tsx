import { View, Text, Image, StatusBar } from 'react-native';

import styles from '../../assets/style/styles';

const Dashboard = () => {
    return (
      <View style={styles.dashboard}>
        <StatusBar translucent />
        <Image source={{uri:'https://i.postimg.cc/MpzQJ6Cv/udb1.png'}} style={styles.logo} />
        <Text style={styles.content}>Selamat datang di Rumah Sakit UDB</Text>
      </View>
    )
};

export default Dashboard;