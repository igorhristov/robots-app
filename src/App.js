import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';
function App() {
    return (
        <div className='App'>
            <Header />
            <div className='LoggedOut'>
                <About />{' '}
                <Tabs>
                    <TabList>
                        <Tab>Login</Tab>
                        <Tab>Signup</Tab>
                    </TabList>
                    
                    <TabPanels>
                        <TabPanel>
                            <LoginForm />
                        </TabPanel>
                        <TabPanel>
                            <SignupForm />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    );
}

export default App;
