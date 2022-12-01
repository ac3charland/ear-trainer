import Note from "../notes";
import { Audio } from "expo-av";

export default async function play(notes: Note | Note[]) {
  if (Array.isArray(notes)) {
    for (const note in notes) {
      console.log(note);
    }
  } else {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/notes/C4.mp3")
    );
    await sound.playAsync();
    console.log("Played C4");
  }
}
