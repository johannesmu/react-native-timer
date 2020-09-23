import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const [time, setTime] = useState(0)
  const [paused, setPaused] = useState(true)

  // global reference for timer
  let timer = null

  // useEffect( () => {
  //   timer = setInterval( () => { setTime( time + 1 ) } , 1000)
  // })

  useEffect(() => {
    if (!paused) {
      timer = setInterval(() => {
        setTime(time => time + 1);
      }, 1000)
      return () => clearInterval(timer)
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time} seconds</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
        setPaused(paused ? false : true)
      }} >
        <Text>{paused ? "Start" : "Stop"}</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <TouchableOpacity style={[{ display: paused && time > 0 ? "flex" : "none" }, styles.save]}>
          <Text style={styles.saveText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[{ display: paused && time > 0 ? "flex" : "none" }, styles.save]}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 32,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'yellow',
    padding: 15,
    minWidth: 100,
  },
  row: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
  save: {
    backgroundColor: 'darkblue',
    padding: 15,
  },
  saveText: {
    color: 'white',
  },
});
