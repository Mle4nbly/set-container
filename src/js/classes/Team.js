export default class Team {
    constructor() {
        this.members = new Set;
    }

    add(character) {
        if(this.members.has(character)) {
            throw Error('This is character is not unique!');
        };
        this.members.add(character);

        return `${character} added`;
    };

    addAll(data) {
        data.forEach(char => {
            this.members.add(char);
        });

        return `${data} added`;
    };

    toArray() {
        const membersList = Array.from(this.members);

        return membersList;
    };
};