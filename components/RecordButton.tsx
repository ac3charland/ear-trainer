import React, { useEffect, useRef, useState } from 'react';
import { Button, View, Text } from 'react-native';
import { Audio } from 'expo-av';
import Pitchfinder from 'pitchfinder';

export default function RecordButton() {
  const AudioRecorder = useRef(new Audio.Recording());
  const AudioPlayer = useRef(new Audio.Sound());

  const [recordedURI, setRecordedURI] = useState('');
  const [AudioPermission, SetAudioPermission] = useState(false);
  const [IsRecording, SetIsRecording] = useState(false);
  const [IsPLaying, SetIsPLaying] = useState(false);
  const [currentPitch, setCurrentPitch] = useState('');

  const noteStrings = [
    'C',
    'C♯',
    'D',
    'D♯',
    'E',
    'F',
    'F♯',
    'G',
    'G♯',
    'A',
    'A♯',
    'B',
  ];

  useEffect(() => {
    console.log('Requesting permission...');
    GetPermission();
  }, []);

  // Function to get the audio permission
  const GetPermission = async () => {
    const getAudioPerm = await Audio.requestPermissionsAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });
    SetAudioPermission(getAudioPerm.granted);
  };

  // Function to start recording
  const StartRecording = async () => {
    try {
      // Check if user has given the permission to record
      if (AudioPermission === true) {
        try {
          // Prepare the Audio Recorder
          await AudioRecorder.current.prepareToRecordAsync(
            Audio.RecordingOptionsPresets.HIGH_QUALITY
          );

          // Start recording
          await AudioRecorder.current.startAsync();
          SetIsRecording(true);
        } catch (error) {
          console.log(error);
        }
      } else {
        // If user has not given the permission to record, then ask for permission
        GetPermission();
      }
    } catch (error) {}
  };

  const StopRecording = async () => {
    try {
      // Stop recording
      await AudioRecorder.current.stopAndUnloadAsync();

      // Get the recorded URI here
      const result = AudioRecorder.current.getURI();
      if (result) setRecordedURI(result);

      // Reset the Audio Recorder
      AudioRecorder.current = new Audio.Recording();
      SetIsRecording(false);
    } catch (error) {}
  };

  const PlayRecordedAudio = async () => {
    try {
      // Load the Recorded URI
      await AudioPlayer.current.loadAsync({ uri: recordedURI }, {}, true);

      // Get Player Status
      const playerStatus = await AudioPlayer.current.getStatusAsync();

      // Play if song is loaded successfully
      if (playerStatus.isLoaded) {
        if (playerStatus.isPlaying === false) {
          const detectPitch = Pitchfinder.YIN();
          AudioPlayer.current.setOnAudioSampleReceived((sample) => {
            const { channels, timestamp } = sample;
            const float32Array = new Float32Array(channels[0].frames);
            const frequency = detectPitch(float32Array);
            const note = 12 * (Math.log(frequency / 440) / Math.log(2));
            const noteIndex = Math.round(note) + 69;
            const noteName = noteStrings[noteIndex % 12];
            const octave = Math.floor(noteIndex / 12) - 1;
            const noteString = `${noteName}${octave}`;
            if (frequency && frequency < 17000) {
              if (noteString !== currentPitch) {
                setCurrentPitch(noteString);
              }
              console.log({
                note: noteString,
                frequency,
                timestamp,
              });
            } else {
              setCurrentPitch('');
            }
          });
          AudioPlayer.current.playAsync();
          SetIsPLaying(true);
        }
      }
    } catch (error) {}
  };

  const StopPlaying = async () => {
    try {
      //Get Player Status
      const playerStatus = await AudioPlayer.current.getStatusAsync();

      // If song is playing then stop it
      if (playerStatus.isLoaded === true)
        await AudioPlayer.current.unloadAsync();

      SetIsPLaying(false);
    } catch (error) {}
  };

  return (
    <View>
      <Button
        title={IsRecording ? 'Stop Recording' : 'Start Recording'}
        color={IsRecording ? 'red' : 'green'}
        onPress={IsRecording ? StopRecording : StartRecording}
      />
      <Button
        title={IsPLaying ? 'Stop Sound' : 'Play Sound'}
        color={IsPLaying ? 'red' : 'orange'}
        onPress={IsPLaying ? StopPlaying : PlayRecordedAudio}
      />
      <Text style={{ fontSize: 24 }}>Pitch: {currentPitch}</Text>
    </View>
  );
}
