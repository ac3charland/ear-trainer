import Note, { NoteFiles } from '../notes';
import { Audio } from 'expo-av';
import { wait } from '../utils';

export default async function play(notes: Note | Note[]) {
  if (Array.isArray(notes)) {
    for (const n of notes) {
      const { sound } = await Audio.Sound.createAsync(NoteFiles[n as Note]);
      await sound.playAsync();
      await wait(500);
      await sound.stopAsync();
    }
  } else {
    const { sound } = await Audio.Sound.createAsync(NoteFiles[notes]);
    await sound.playAsync();
  }
}
