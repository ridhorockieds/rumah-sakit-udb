import { Component } from 'react'
import { Text, View, Image, StatusBar} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';

import BottomNavigation from './component/navigation/BottomNav';

import styles from './assets/style/styles';
import dataSlider from './assets/json/slide';

type Item = (typeof dataSlider)[0];

class App extends Component {
  state = {
    showRealApp: false,
  };

  _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <View style={styles.flex1}>
          <Image style={styles.image} source={item.image} />
        </View>

        <View style={styles.flex2}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.title;

  _renderPrevButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.button}>Prev</Text>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.button}>Next</Text>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.button}>
        <Text style={styles.button}>Done</Text>
      </View>
    );
  };

  _onDone = () => {
    this.setState({showRealApp: true});
  };

  render() {
    if (this.state.showRealApp) {
      return (
        <BottomNavigation />
      );
    } else {
      return (
        <View style={{flex: 1}}>
          <StatusBar translucent backgroundColor="transparent" />
          <AppIntroSlider
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            showPrevButton
            onDone={this._onDone}
            data={dataSlider}
          />
        </View>
      );
    }
  }
}

export default App;