import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from "../LandingPage/LandingPage"
import CreateAccount from "../CreateAccount/CreateAccount"
import Home from "../Home/Home"
import LogIn from "../LogIn/LogIn"
import InformationHub from "../InformationHub/InformationHub"
import Test from "../Test/Test"
import EventSchedule from '../EventSchedule/EventSchedule';
import QuestionForum from '../QuestionForum/QuestionForum';
import PostPage from "../PostPage/PostPage"
import CreatePost from '../CreatePost/CreatePost';
import MyAccount from '../MyAccount/MyAccount';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<LandingPage />} />
                <Route path="/createaccount" exact element={<CreateAccount />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/login" exact element={<LogIn />} />
                <Route path="/informationhub" exact element={<InformationHub />} />
                <Route path="/test" exact element={<Test />} />
                <Route path="/questionforum" exact element={< QuestionForum/>} />
                <Route path="/eventschedule" exact element={<EventSchedule />} />
                <Route path="/post" exact element={<PostPage />} />
                <Route path="/createpost" exact element={<CreatePost />} />
                <Route path="/myaccount" exact element={<MyAccount />} />
        
            </Routes>
        </BrowserRouter>
    );
}

export default App;