import shipFactory from './ship.js';

test('ship creation', () => {
    const testShip = shipFactory('Cruiser', 3);
    expect(testShip.name).toEqual('Cruiser');
    for (const spot of testShip.body) {
        expect(spot.hitMarker).toEqual(false);
        expect(spot.cord).toEqual('');
    }
});

test('shipCheckDeath returns true if all body hitmarkers true', () => {
    const testShip = shipFactory('Cruiser', 3);
    expect(testShip.checkForDeath()).toEqual(false);
    testShip.body[0].hitMarker = true;
    testShip.body[1].hitMarker = true;
    testShip.body[2].hitMarker = true;
    expect(testShip.checkForDeath()).toEqual(true);
});
