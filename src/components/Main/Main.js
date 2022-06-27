import React from 'react';

// components
import MainLatestRecipes from "../Main/MainLatestRecipes/MainLatestRecipes"
import MainSpoonPart from '../Main/MainSpoonPart/MainSpoonPart';

export default function Main() {
    return (
        <div>
            <MainLatestRecipes/>
            <MainSpoonPart/>
        </div>
    );
}