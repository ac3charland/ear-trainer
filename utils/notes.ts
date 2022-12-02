/*

Getting this to work would be ideal.
Defines consts & type checks at the same time.

enum Note {
    C4 = 'C4',
    Db4 = 'Db4',
    D4 = 'D4',
    Eb4 = 'Eb4',
    E4 = 'E4',
    F4 = 'F4',
    Gb4 = 'Gb4',
    G4 = 'G4',
    Ab4 = 'Ab4',
    A4 = 'A4',
    Bb4 = 'Bb4',
    B4 = 'B4',
    C5 = 'C5',
}

export default Note
*/

export const C4 = 'C4';
export const Db4 = 'Db4';
export const D4 = 'D4';
export const Eb4 = 'Eb4';
export const E4 = 'E4';
export const F4 = 'F4';
export const Gb4 = 'Gb4';
export const G4 = 'G4';
export const Ab4 = 'Ab4';
export const A4 = 'A4';
export const Bb4 = 'Bb4';
export const B4 = 'B4';
export const C5 = 'C5';

type Note =
  | typeof C4
  | typeof Db4
  | typeof D4
  | typeof Eb4
  | typeof E4
  | typeof F4
  | typeof Gb4
  | typeof G4
  | typeof Ab4
  | typeof A4
  | typeof Bb4
  | typeof B4
  | typeof C5;

export const Notes: Note[] = [
  C4,
  Db4,
  D4,
  Eb4,
  E4,
  F4,
  Gb4,
  G4,
  Ab4,
  A4,
  Bb4,
  B4,
  C5,
];

export const NoteFiles = {
  [C4]: require('../assets/notes/C4.mp3'),
  [Db4]: require('../assets/notes/Db4.mp3'),
  [D4]: require('../assets/notes/D4.mp3'),
  [Eb4]: require('../assets/notes/Eb4.mp3'),
  [E4]: require('../assets/notes/E4.mp3'),
  [F4]: require('../assets/notes/F4.mp3'),
  [Gb4]: require('../assets/notes/Gb4.mp3'),
  [G4]: require('../assets/notes/G4.mp3'),
  [Ab4]: require('../assets/notes/Ab4.mp3'),
  [A4]: require('../assets/notes/A4.mp3'),
  [Bb4]: require('../assets/notes/Bb4.mp3'),
  [B4]: require('../assets/notes/B4.mp3'),
  [C5]: require('../assets/notes/C5.mp3'),
};

export default Note;
