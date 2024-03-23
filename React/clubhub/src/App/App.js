import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from "../LandingPage/LandingPage"
import CreateAccount from "../CreateAccount/CreateAccount"
import Home from "../Home/Home"
import LogIn from "../LogIn/LogIn"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<LandingPage />} />
                <Route path="/createaccount" exact element={<CreateAccount />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/login" exact element={<LogIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;