import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from "../LandingPage/LandingPage"
import CreateAccount from "../CreateAccount/CreateAccount"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<LandingPage />} />
                <Route path="/createaccount" exact element={<CreateAccount />} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;