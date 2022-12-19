import { Audio } from 'expo-av';
import { C4, G4 } from '../notes';
import { wait } from '../utils';
import play from './player';

export default async function listen() {
  try {
    console.log('Requesting permissions..');
    await Audio.requestPermissionsAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    await play(G4);
    console.log('Starting recording...');
    const { recording } = await Audio.Recording.createAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );
    console.log('Recording started');

    await wait(1000);
    console.log('Stopping recording...');
    await recording.stopAndUnloadAsync();
    await play(C4);
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    const { sound } = await Audio.Sound.loadAsync(require(uri));
    // await sound.playAsync();
  } catch (err) {
    console.error('Failed to start recording:', err);
  }
}
