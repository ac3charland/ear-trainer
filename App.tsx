import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import play from './utils/audio-engine/player';
import {C4} from './utils/notes';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        testID="play-button"
        title="Play"
        onPress={() => play(C4)}
      />
      <StatusBar style="auto" />
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
