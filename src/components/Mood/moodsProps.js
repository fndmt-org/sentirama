import moods from './moods.grid';
import { generateColorSteps } from '../Styles/colorSteps'


const getMoodsColor = () => {
    const colors = generateColorSteps({
        colorStart: 'hsla(145, 75%, 40%, 1)',
        colorEnd: 'hsla(312, 75%, 50%, 1)',
        steps: moods.length
    });

    return moods.map((mood, index) => ({color: colors[index], ...mood}))
}

export {
    getMoodsColor,
}
