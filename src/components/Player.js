import React from 'react'
import song from './C418 - Haggstrom - Minecraft Volume Alpha.mp3';
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlinePause } from "react-icons/ai";

import { Component } from "react";

// Import your audio file

class App extends Component {
    // Create state
    state = {

        // Get audio file in a variable
        audio: new Audio(song),

        // Set initial state of song
        isPlaying: false,
    };

    // Main function to handle both play and pause operations
    playPause = () => {

        // Get state of song
        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
            // Pause the song if it is playing
            this.state.audio.pause();
        } else {

            // Play the song if it is paused
            this.state.audio.play();
        }

        // Change the state of song
        this.setState({ isPlaying: !isPlaying });
    };

    render() {
        return (
            <div>
                {/* Show state of song on website */}
                <p>
                    {this.state.isPlaying ?
                        "Song is Playing" :
                        "Song is Paused"}
                </p>

                {/* Button to call our main function */}
                <button onClick={this.playPause}>
                    <AiFillPlayCircle /> | <AiOutlinePause />
                </button>
            </div>
        );
    }
}

export default App;
