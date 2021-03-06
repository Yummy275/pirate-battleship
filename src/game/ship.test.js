import shipFactory from './ship.js';

test('ship creation', () => {
    const testShip = shipFactory('Cruiser', 3);
    expect(testShip.name).toEqual('Cruiser');
    for (const spot of testShip.body) {
        expect(spot.hitMarker).toEqual(false);
        expect(spot.cord).toEqual('');
    }
});
