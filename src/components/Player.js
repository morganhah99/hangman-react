import React from 'react'
import useSound from 'use-sound';
import song from './C418 - Haggstrom - Minecraft Volume Alpha.mp3';
import { useState } from 'react';

const Player = () => {
    const [play] = useSound(song);
    const [isPlaying, setisPlaying] = useState(false);
    return (
        <div>
            <button onClick={play}>Play</button>
        </div>
    )
}
export default Player
