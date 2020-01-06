const calculateDistancePoints = (distance, hillSize, kPoint) => {
    const normal = 60 + (2 * (distance - kPoint));
    const big = 60  + (1.8 * (distance - kPoint));
    const mammoth = 120  + (1.2 * (distance - kPoint));

    if (hillSize <= 109) {
        return (normal);
    } else if (hillSize >= 110 && hillSize <= 184){
        return (big);
    } else {
        return (mammoth);
    }
};

module.exports = calculateDistancePoints;