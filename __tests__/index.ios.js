import 'react-native';
import React from 'react';
import { StackNavigator } from 'react-navigation';
// components for testing
import HomeScreen from '../HomeScreen.js'
import PostList from '../src/PostList.js';
import CreatePosts from '../src/CreatePosts.js';
import PostPreview from '../src/PostPreview.js';
import PostView from '../src/PostView.js';
import SignIn from '../src/SignIn.js';
import Settings from '../src/settings/Settings.js';
import AdminSettings from '../src/settings/AdminSettings.js';
import UserSettings from '../src/settings/UserSettings.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <HomeScreen />
    );
  });
});
