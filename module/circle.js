
const circleArea = (r) => {
    const area = (Math.PI * r ** 2).toFixed()
    console.log(`circleArea: ${area} m²`);
}

const circleCircumference = (r) => {
    const circumference = (2 * Math.PI * r).toFixed()
    console.log(`circleCircumference: ${circumference} m`);
}

module.exports = { circleArea, circleCircumference }