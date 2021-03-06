const shipFactory = (name, length) => {
    //body is an array of booleans
    //true if it has been hit or false if not
    //length of arr is the ship length
    const body = [];

    for (var i = 0; i < length; i++) {
        body.push(false);
    }

    const shipInfo = { name: name, body: body };

    return shipInfo;
};

export default shipFactory;
