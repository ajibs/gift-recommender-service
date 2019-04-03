class Utils {
    static transformLabelToCode (label) {
        return label.trim().toLowerCase().split(' ').join('_');
    }
}

module.exports = Utils;
