import React from 'react';
import {useHistory} from 'react-router-dom';

const AboutPage: React.FC = () => {
    const history = useHistory();
    return <>
        <h1>
            Info
        </h1>
        <button className="btn" onClick={() => history.push('/')}>Back to list</button>
    </>
};

export default AboutPage;

