import React from 'react';
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import play from './utils/audio-engine/player';
import { Notes } from './utils/notes';
import { generateRandomSequence } from './utils/utils';
import RecordButton from './components/RecordButton';

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

  return (
    <View style={styles.container}>
      <Button testID='play-button' title='Play Something' onPress={onPlay} />
      <RecordButton />
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
