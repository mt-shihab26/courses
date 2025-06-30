export const mapFromTargetToObjects = (target, length) => {
    const object = {};
    for (let i = 0; i < length; i++) {
        object[target[i].name] = target[i].value;
    }
    return object;
};
