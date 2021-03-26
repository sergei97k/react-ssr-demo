import React from 'react';

const Home = ({ data }) => {
    return (
        <div>
            <h1>Hell, Home page!</h1>
            <h2>{data.title}</h2>
        </div>
    )
};

export default Home;