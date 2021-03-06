const shipFactory = (name, length) => {
    //arr representing body of ship
    let body = [];

    for (var i = 0; i < length; i++) {
        body.push({ hitMarker: false, cords: [] });
    }

    const shipInfo = { name: name, body: body };

    return shipInfo;
};

export default shipFactory;
