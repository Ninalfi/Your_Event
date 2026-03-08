import React from 'react';
import Events from './Events';

export const metadata = {
    title: "All Events",
    description: "Explore our upcoming events and book your spot today!",
};

const page = () => {
    return (
        <div>
            <Events></Events>
        </div>
    );
};

export default page;