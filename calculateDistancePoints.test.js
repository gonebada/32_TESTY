const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    const testDistanceValues = {
        // distancePoints: [distance, hillSize, kPoint];
        86: [111, 109, 98],
        77: [106.5, 109, 98],
        85.2: [134, 134, 120],
        55.5: [117.5, 134, 120],
        153: [227.5, 225, 200],
        121.2: [201, 225, 200],
    };

    for(let item in testDistanceValues) {
        const name = item;
        const args = testDistanceValues[item];

        const distance = args[0];
        const hillSize = args[1];
        const kPoint = args[2];
        const distancePoints = name;

        it('should return distance points for hill size, K-Point, distance', () => {
            const actual = calculateDistancePoints(
                distance,
                hillSize,
                kPoint
            );

            const expected = distancePoints;

            assert.equal(actual, expected);
        });
    };
});