import React, { useEffect } from 'react';
import Header from '../components/header.js';
import Timeline from '../components/timeline.js';
import Sidebar from '../components/sidebar/index.js';

// Pull in the Header component and render it on the page
// render all 3 components
// Tailwind CSS documentation for grid/ grid-cols-3/ gap-4
// figure how to use justify between 
// figure how to use margin auto 

// max-w-screen-lg 

// Render Timeline and Sidebar in 
export default function Dashboard() {
    useEffect(() =>{
        document.title = 'Instagram';
    }, [])
    return (
        <div className="bg-gray-100">
           <Header />
           <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg"> 
                <Timeline />
                <Sidebar />
           </div>
        </div>
    )
}