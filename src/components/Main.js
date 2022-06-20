import React from 'react';


import MainSpoonPart from './MainSpoonPart';
import MainLatestRecipes from "./MainLatestRecipes.js"

export default function Main() {
    return (
        <div>
            <MainLatestRecipes/>
            <MainSpoonPart/>
        </div>
    );
}