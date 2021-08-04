import { useEffect, useState } from 'react';
import moods from '../components/Mood/moods.grid';
import { generateColorSteps } from './../components/Styles/colorSteps';

export const useBasicMoods = (need) => {
    const [filteredMoods, setFilteredMoods] = useState([])

    const mappedMoods = {
        good: 'met',
        bad: 'unmet'
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
            colorStart: need === 'good' ? 'hsla(145, 63%, 35%, 1)' : 'hsla(28, 86%, 61%, 1)',
            colorEnd: need === 'good' ? 'hsla(214, 84%, 55%, 1)' : 'hsla(1, 49%, 47%, 1)',
            steps: moodsArray.length - 2
        });
        moodsArray.forEach((mood, index) => {
            mood.color = colors[index]
        })
        setFilteredMoods([...moodsArray])
    }, [])
    
    return filteredMoods
}
