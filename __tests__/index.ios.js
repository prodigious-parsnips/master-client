import 'react-native';
import React from 'react';
import { StackNavigator } from 'react-navigation';

// components for testing
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
import { HomeScreen } from '../index.ios.js'
import Drawer from '../src/Drawer.js';

describe('HomeScreen', () => {
  it('renders HomeScreen correctly', () => {
    const tree = renderer.create(
      HomeScreen: {
        screen: HomeScreen,
      }
    );
  });
});

describe('Drawer', () => {
  it('renders Drawer correctly', () => {
    const tree = renderer.create(
      Drawer: {
        screen: Drawer,
      }
    );
  });
});

describe('PostList', () => {
  it('renders PostList correctly', () => {
    const tree = renderer.create(
      PostList: {
        screen: PostList,
      }
    );
  });
});
