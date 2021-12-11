const booleanToWord = boolean => {
    const a = boolean.toString();
    if (a == 'true')
    return 'Yes';

    if (a == 'false')
    return 'No';
    
};

module.exports = booleanToWord;
