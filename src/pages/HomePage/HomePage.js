import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import FloatingActionButton from "../../components/FloatingButton/Fab"


function HomePage() {
    return (
        
            <div>
                <Navbar />
                <div className="container">
                    <div className="row" style={{textAlign:"center"}}>
                        <h4>
                            Welcome, User("this is a placeholder")
                        </h4>
                        <h5>
                            Click on the button to start a new challenge!
                        </h5>
                        <FloatingActionButton />
                    </div>
                </div>
            </div>
        
    );
}

export default HomePage;