class Utils {
    static transformLabelToCode (label) {
        return label.trim()
            .toLowerCase()
            .split(' ')
            .join('_')
            .replace('-', '_');
    }

    /**
     * Durstenfeld shuffle algorithm, courtesy:
     * https://stackoverflow.com/a/12646864
     */
    static shuffleArray (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }
}

module.exports = Utils;
