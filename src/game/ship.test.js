import shipFactory from './ship.js';

test('ship creation', () => {
    const testShip = shipFactory('Cruiser', 3);
    expect(testShip).toEqual({ name: 'Cruiser', body: [false, false, false] });
});
