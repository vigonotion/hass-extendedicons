const extendedIcons = require('extended-icons');

async function getIcon(name) {
    var ei = extendedIcons.get(name);

    if (ei === undefined) return {};

    return {
        path: ei.path,
        viewBox: "-1 -1 26 26",
    };
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["ei"] = getIcon;
