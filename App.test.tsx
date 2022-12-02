import React from 'react';
import { Button } from 'react-native';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('has a button', () => {
    const testRenderer = renderer.create(<App />);
    const testInstance = testRenderer.root;
    expect(testInstance.findAllByType(Button).length).toBe(1);
  });
});
