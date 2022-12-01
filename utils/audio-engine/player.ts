import Note from "../notes";

export default function play(notes: Note | Note[]) {
  if (Array.isArray(notes)) {
    for (const note in notes) {
      console.log(note);
    }
  } else {
    console.log(notes);
  }
}
