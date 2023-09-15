import { create, act } from 'react-test-renderer';
import React from 'react';
import Video from '../Video';

const onCloseVideo = jest.fn();

it('should render correctly', () => {
  let root;
  act(() => {
    root = create(<Video src="/videos/dummy-files/Video_File.mp4" onCloseVideo={onCloseVideo} />);
  });

  expect(root.toJSON()).toMatchSnapshot();
});
