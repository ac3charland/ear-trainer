import React, { useEffect } from 'react';
import 'expo-dev-client';
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import play from './utils/audio-engine/player';
import listen from './utils/audio-engine/listener';
import { Notes } from './utils/notes';
import { generateRandomSequence } from './utils/utils';

export default function App() {
  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    });
  }, []);

  const onPlay = () => {
    const sequence = generateRandomSequence(3, Notes.length);
    const notes = sequence.map((i) => Notes[i]);
    play(notes);
  };

  listen();

  return (
    <View style={styles.container}>
      <Button testID='play-button' title='Play' onPress={onPlay} />
      <StatusBar style='auto' />
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
});
