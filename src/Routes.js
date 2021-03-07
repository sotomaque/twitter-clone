import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import Explore from 'pages/Explore';
import SearchResults from 'pages/SearchResults';
import Notifications from 'pages/Notifications';
import PostLikes from 'pages/PostLikes';
import PostReposts from 'pages/PostReposts';
import PostDetail from 'pages/PostDetail';
import UserFriends from 'pages/UserFriends';
import UserFollowers from 'pages/UserFollowers';
import UserDetail from 'pages/UserDetail';
import ProfileModal from 'pages/ProfileModal';
import Home from 'pages/Home';
import CreatePostModal from 'pages/CreatePostModal';

import Sidebar from 'components/Sidebar';

export default function Routes() {
  return (
    <Row>
      <Col className="px-sm-4" sm="12" lg="8">
        <Col className="border">
          {/* Routes */}
          <Switch>
            <Route path="/explore" component={Explore} />
            <Route path="/search" component={SearchResults} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/post/:postId/likes" component={PostLikes} />
            <Route path="/post/:postId/reposts" component={PostLikes} />
            <Route path="/post/:postId/reposts" component={PostReposts} />
            <Route path="/post/:postId" component={PostDetail} />
            <Route path="/user/:username/friends" component={UserFriends} />
            <Route path="/user/:username/followers" component={UserFollowers} />
            <Route path="/user/:username" component={UserDetail} />
            <Route path="/settings/profile" component={ProfileModal} />
            <Route path="/" component={Home} />
          </Switch>
          <Route path="/compose/post" component={CreatePostModal} />
        </Col>
      </Col>

      <MediaQuery minWidth={992}>
        <Col lg="4" className="vh-100 overflow-y-auto hide-scroll sticky-top">
          <Sidebar />
        </Col>
      </MediaQuery>
    </Row>
  );
}
