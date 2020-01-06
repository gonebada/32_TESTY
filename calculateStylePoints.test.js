const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    const testStyleValues = {
        // stylePoints: [note1, note2, note3, note4, note5];
        49.5: [16, 16.5, 17, 16, 18],
        52: [17.5, 17.5, 17.5, 17.0, 17.0],
        51.5: [17.0, 17.0, 17.5, 17.0, 17.5],
        55: [18.0, 18.5, 17.5, 18.5, 18.5],
        55.5: [18.5, 18.5, 18.5, 18.0, 18.5],
    };
    Object.entries(testStyleValues).forEach(entry => {
        const stylePoints = entry[0];
        const notes = entry[1];

        it('should return style points for notes', () => {
            const actual = calculateStylePoints(notes);
            const expected = stylePoints;

            assert.equal(actual, expected);
        });
    })
});