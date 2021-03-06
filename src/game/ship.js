const shipFactory = (name, length) => {
    //arr representing body of ship
    let body = [];

    for (var i = 0; i < length; i++) {
        body.push({ hitMarker: false, cord: '' });
    }

    const checkForDeath = () => {
        let isDead = true;
        for (const bodyPart of body) {
            if (bodyPart.hitMarker === false) {
                isDead = false;
                break;
            }
        }
        return isDead;
    };

    const shipInfo = { name: name, body: body, checkForDeath };

    return shipInfo;
};

export default shipFactory;
