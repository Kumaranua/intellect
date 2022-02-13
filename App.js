// In App.js in a new project

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const App = () => {
  const [data, setData] = useState(0);


  return (
    <View>

      <Text style={styles.label}>
        {'Pick the level of you anger & frustation right now'}
      </Text>
      <View style={styles.layout}>
        <AnimatedCircularProgress
        size={200}
        width={5}
        fill={data * 10}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875">
        {data => <Text>{Math.round(data / 10)}</Text>}
      </AnimatedCircularProgress>
      <Slider
        style={{width:300, height: 70}}
        minimumValue={0}
        maximumValue={10}
        onValueChange={value => {
          console.log('onValueChange', Math.round(value));
          setData(Math.round(value));
        }}
        minimumTrackTintColor="#42e3f5"
        maximumTrackTintColor="#000000"
        thumbTintColor="#42e3f5"
        maximumTrackTintColor="#0F0F0F"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding:10
  },
  layout:{
    justifyContent: 'center',
    alignItems: 'center',
  }
});



export default App;
 