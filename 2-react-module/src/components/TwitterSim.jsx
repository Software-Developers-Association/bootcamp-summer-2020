import React from 'react';
import '../App.css';
import User from './User';
import Tweet from './Tweet';

function TwitterSim() {
  const twitter_data = {
    name: "Tim Cook",
    bio: "Apple CEO  Auburn Basketball American football Duke Basketball National Parks National park “Life's most persistent and urgent question is, 'What are you doing for others?'” - MLK",
    profile_url: "https://images.macrumors.com/t/aNRPKl07kP0oibtBb-rMJHtT9n0=/400x0/filters:quality(90)/article-new/2016/08/cook_hero.png?lossy",
    avatar: "https://images.macrumors.com/t/3dNrqpXXcmbMaWtrzZRnt9urNgs=/1200x1200/smart/article-new/2019/02/timcooktulane.jpg",
    tweets: [
      {
        id: 0,
        text: "Apple is awesome!"
      },
      {
        id: 1,
        text: "MacBook Pro out in 2 days!"
      },
      {
        id: 2,
        text: "Proud of the Apple team for meeting the deadline! #MeetingDeadlines"
      },
      {
        id: 3,
        text: "Hello, World!"
      }
    ]
  };

  return (
    <div className="App">
      <User name={twitter_data.name} profile_url={twitter_data.profile_url} bio={twitter_data.bio} />
      {
        twitter_data.tweets.map(tweet => {
          return <Tweet name={twitter_data.name} profile_url={twitter_data.avatar} tweet={tweet} key={tweet.id} />
        })
      }
    </div>
  );
}

export default TwitterSim;
