import { useEffect, useState } from 'react';
import moods from '../components/Mood/moods.grid';
import { generateColorSteps } from './../components/Styles/colorSteps';

export const useBasicMoods = (need) => {
    const [filteredMoods, setFilteredMoods] = useState([])

    const mappedMoods = {
        met: 'met',
        unmet: 'unmet'
    }

    useEffect(() => {
        let moodsArray = []
        moods.forEach(mood => {
            const found = moodsArray.some(m => m.mood === mood.category);
            if (!found && mood.set === mappedMoods[need]) {
                moodsArray.push({mood: mood.category});
            }
        })
        const colors = generateColorSteps({
            colorStart: need === mappedMoods.met ? 'hsla(151, 22%, 72%, 1)' : 'hsla(6, 71%, 65%, 1)',
            colorEnd: need === mappedMoods.met ? 'hsla(270, 24%, 70%, 1)' : 'hsla(60, 71%, 85%, 1)',
            steps: moodsArray.length - 2
        });
        moodsArray.forEach((mood, index) => {
            mood.color = colors[index]
        })
        setFilteredMoods([...moodsArray])
    }, [])

    return filteredMoods
}
