import React from 'react'
import useSound from 'use-sound';
import song from './C418 - Haggstrom - Minecraft Volume Alpha.mp3';
import { useState } from 'react';

const Player = () => {


    const [play] = useSound(song);
    const [stop] = useSound(song);

    function boolean(boo) {
        boo = false;
        return boo;
    }

    return (
        <div>
            <button onClick={play}>Play</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}
export default Player
