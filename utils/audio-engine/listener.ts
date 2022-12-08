import Recording from 'react-native-recording';
import PitchFinder from 'pitchfinder';

export default function listen() {
  const middleA = 440;
  const semitone = 69;
  const noteStrings = [
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab',
    'A',
    'Bb',
    'B',
  ];
  const pitchFinder = PitchFinder.YIN({
    sampleRate: 22050,
  });

  // ! Usage throws error
//   console.log({ Recording });

  //   Recording.init({
  //     sampleRate: 22050,
  //     bufferSize: 2048,
  //   });
  //   Recording.start();
  //   Recording.addRecordingEventListener((data) => {
  //     const frequency = pitchFinder(data);
  //     if (frequency) {
  //       console.log('frequency: ', frequency);
  //     } else {
  //       console.log('whoops');
  //     }
  //   });
}
