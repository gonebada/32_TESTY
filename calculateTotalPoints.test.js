const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    const testTotalPointsValues = {
        /*   totalPoints: {
            distance: distance points,
            hillSize: hill size,
            kPoint: ...,
            styleNotes: [note1, note2, note3, note4, note5],
            windFactor: wind compensation points,
            gateFactor: gate compensation points,
          }
       */
        131.8: {
            distance: 111,
            hillSize: 109,
            kPoint: 98,
            styleNotes: [19.0, 19.5, 19.0, 19.0, 19.0],
            windFactor: -14.4,
            gateFactor: 3.2,
        },
        139.1: {
            distance: 133.5,
            hillSize: 134,
            kPoint: 120,
            styleNotes: [19.0, 19.0, 19.0, 19.0, 19.0],
            windFactor: -2.2,
            gateFactor: 0,
        },
        193.6: {
            distance: 224,
            hillSize: 225,
            kPoint: 200,
            styleNotes: [18.5, 19.0, 18.5, 18.5, 18.0],
            windFactor: -10.7,
            gateFactor: 0,
        },
    };

    Object.entries(testTotalPointsValues).forEach(entry => {
        const totalPoints = entry[0];
        const distance = entry[1].distance;
        const hillSize = entry[1].hillSize;
        const kPoint = entry[1].kPoint;
        const styleNotes = entry[1].styleNotes;
        const windFactor = entry[1].windFactor;
        const gateFactor = entry[1].gateFactor;

        it('should return total points for hill size, K-Point, distance, style notes, wind compensation points, gate compensation points', () => {
            const actual = calculateTotalPoints(
                distance,
                hillSize,
                kPoint,
                styleNotes,
                windFactor,
                gateFactor
            );

            const expected = totalPoints;

            assert.equal(actual.toFixed(1), expected);
        });
    });
});