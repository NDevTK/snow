const {getArguments} = require('./utils');

// https://github.com/weizman/snow/issues/2
const ISSUE_2_SOLVED = false;

function hookOpen(win, cb) {
    const realOpen = win.open;
    win.open = function() {
        if (!ISSUE_2_SOLVED) {
            return null;
        }

        const args = getArguments(arguments);
        const opened = realOpen.apply(this, args);
        cb(opened);
        return opened;
    }
}

module.exports = hookOpen;