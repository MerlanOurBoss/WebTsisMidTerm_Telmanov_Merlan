import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Header from './components/Header';
import AboutTweet from './components/AboutTweet'
import './App.css';

function App() {
    const [tweets, setTweets] = useState([]);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Feed tweets={tweets} setTweets={setTweets} />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/tweet/:tweetId" element={<AboutTweet />} />
            </Routes>
        </Router>
    );
}

export default App;