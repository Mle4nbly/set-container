import Team from "../classes/Team.js";

test('Test add()', () => {
    const team = new Team();

    const character = {
        name: 'Boris',
        type: 'Sniper'
    };
    const result = [
        {
            name: 'Boris',
            type: 'Sniper'
        }
    ];

    team.add(character);

    expect(result).toEqual(team.toArray(character));
});

test('Test Error in add()', () => {
    const team = new Team();

    const character = {
        name: 'Boris',
        type: 'Sniper'
    };

    expect(() => {
        team.add(character);
        team.add(character);
    }).toThrow();
});

test('Test addAll()', () => {
    const team = new Team();

    const firstCharacter = {
        name: 'First',
        type: 'Sniper'
    };
    const secondCharacter = {
        name: 'Second',
        type: 'Sniper'
    };
    const result = [
        {
            name: 'First',
            type: 'Sniper'
        },
        {
            name: 'Second',
            type: 'Sniper'
        }
    ];

    team.addAll([firstCharacter, secondCharacter]);

    expect(result).toEqual(team.toArray());
});