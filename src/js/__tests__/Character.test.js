import Character from "../classes/Character";

test('Test Character', () => {
    const character = new Character('Boris', 'Sniper');
    const result = {
        name: 'Boris',
        type: 'Sniper'
    };

    expect(result).toEqual(character);
});