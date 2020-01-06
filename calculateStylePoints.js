const calculateStylePoints = (styleNotes) => {
    const minNote = Math.min(...styleNotes);
    const maxNote = Math.max(...styleNotes);
    let sum = 0;
    for (let i=0; i < styleNotes.length; i++) {
        sum = sum + styleNotes[i];
    }

    return sum - (minNote + maxNote);

};

module.exports = calculateStylePoints;