import { generateColorSteps } from '../Styles/colorSteps'


const getMoodsColor = (list) => {

    const colors = generateColorSteps({
        colorStart: 'hsla(145, 75%, 40%, 1)',
        colorEnd: 'hsla(312, 75%, 50%, 1)',
        steps: list.length
    });

    return list.map((item, index) => ({color: colors[index], index: index, ...item}))
}

export {
    getMoodsColor,
}
