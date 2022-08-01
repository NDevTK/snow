const {securely} = require('./securely');

function getArguments(oldArgs) {
    const args = [];
    for (let i = 0; i < oldArgs.length; i++) {
        args[i] = oldArgs[i];
    }
    return args;
}

function isTrustedHTML(node) {
    return securely(() => node.toStringS()) === '[object TrustedHTML]';
}

function getPrototype(node) {
    return securely(() => {
        switch (node.toStringS()) {
            case '[object HTMLDocument]':
                return DocumentS;
            case '[object DocumentFragment]':
                return DocumentFragmentS;
            default:
                return ElementS;
        }
    });
}

function isFrameElement(element) {
    return securely(() => [
        '[object HTMLIFrameElement]',
        '[object HTMLFrameElement]',
        '[object HTMLObjectElement]',
        '[object HTMLEmbedElement]',
    ].includesS(element.toStringS()));
}

function canNodeRunQuerySelector(node) {
    return securely(() => [
        ElementS.prototype.ELEMENT_NODE,
        ElementS.prototype.DOCUMENT_FRAGMENT_NODE,
        ElementS.prototype.DOCUMENT_NODE,
    ].includesS(node.nodeTypeS));
}

function getFramesArray(element, includingParent) {
    const frames = [];

    if (null === element || typeof element !== 'object') {
        return frames;
    }

    if (isTrustedHTML(element) || !canNodeRunQuerySelector(element)) {
        return frames;
    }

    const list = securely(() => {
        return getPrototype(element).prototype.querySelectorAll.call(element, 'iframe,frame,object,embed');
    });

    fillArrayUniques(frames, securely(() => Array.prototype.sliceS.callS(list)));
    if (includingParent) {
        fillArrayUniques(frames, [element]);
    }

    return frames;
}

function fillArrayUniques(arr, items) {
    let isArrUpdated = false;

    securely(() => {
        for (let i = 0; i < items.length; i++) {
            if (!arr.includesS(items[i])) {
                arr.pushS(items[i]);
                isArrUpdated = true;
            }

        }
    });

    return isArrUpdated;
}

module.exports = {getArguments, getFramesArray, isFrameElement};