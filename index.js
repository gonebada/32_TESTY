const formatDate = (timeInSeconds) => {

    if (!timeInSeconds) {
        return `0s`
    }
    
    let seconds = timeInSeconds;

    let minutes = timeInSeconds > 60 ? Math.floor(timeInSeconds / 60) : 0;

    let hours = timeInSeconds > 3600 ? Math.floor(timeInSeconds / 3600) : 0;

    minutes = minutes - hours * 60;
    seconds = seconds - minutes * 60 - hours * 3600;

    const result = (hours > 0 ? `${hours}h ` : ``) + (minutes > 0 ? `${minutes}m ` : ``) + (seconds > 0 ? `${seconds}s ` : ``);

    return result.substring(0, result.length - 1);
};

module.exports = formatDate;