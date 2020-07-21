import React from 'react';
import TwichCategory from './TwitchCategory';

export default function TwitchSim() {
    const categories = [
        {
            name: "Minecraft",
            banner: "https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-285x380.jpg",
            tags: [
                "Adventure Games",
                "Action"
            ]
        },
        {
            name: "Just Chatting",
            banner: "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-285x380.jpg",
            tags: [
                "IRL"
            ]
        },
        {
            name: "Poker",
            banner: "https://static-cdn.jtvnw.net/ttv-boxart/Poker-285x380.jpg",
            tags: [
                "Card & Board Games"
            ]
        }
    ];

    return (
        <div>
            {
                categories.map(category => {
                    return <TwichCategory name={category.name} banner={category.banner} tags={category.tags} key={category.name}/>
                })
            }
        </div>
    );
}