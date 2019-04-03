class Utils {
    static transformLabelToCode (label) {
        return label.trim()
            .toLowerCase()
            .split(' ')
            .join('_')
            .replace('-', '_');
    }
}

module.exports = Utils;
