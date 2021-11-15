function splitHLSA(hsla) {
    let sep = hsla.indexOf(",") > -1 ? "," : " ";
    hsla = hsla.substr(5).split(")")[0].split(sep);

    let h = hsla[0],
        s = hsla[1].substr(0, hsla[1].length - 1),
        l = hsla[2].substr(0, hsla[2].length - 1),
        a = hsla[3];
    // Strip label and convert to degrees (if necessary)
    if (h.indexOf("deg") > -1)
        h = h.substr(0, h.length - 3);
    else if (h.indexOf("rad") > -1)
        h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
    else if (h.indexOf("turn") > -1)
        h = Math.round(h.substr(0, h.length - 4) * 360);
    // Keep hue fraction of 360 if ending up over
    if (h >= 360)
        h %= 360;

    return [h,s,l,a]
}



// eslint-disable-next-line max-statements
function generateColorSteps({
    colorStart,
    colorEnd,
    steps
}) {
    const colorArray = [];
    colorArray.push(colorStart);
    const [initH, initS, initL, initA] = splitHLSA(colorStart);
    const [endH, endS, endL, endA] = splitHLSA(colorEnd);
    const stepHRatio = (endH - initH) / (steps +1);
    const stepSRatio = (endS - initS) / (steps +1);
    const stepLRatio = (endL - initL) / (steps +1);

    for (let index = 1; index <= steps; index++) {
        const h = Number(initH) + (stepHRatio*index);
        const s = Number(initS) + (stepSRatio*index);
        const l = Number(initL) + (stepLRatio*index);
        const a = 1;
        const colorToPush = `hsla(${h},${s}%,${l}%,${a})`;
        colorArray.push(colorToPush);
    }
    colorArray.push(colorEnd)

    return colorArray
}

export {
    generateColorSteps
}
