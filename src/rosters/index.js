const uniqueId = () => `id-${Math.random().toString(36).substr(2, 16)}`;

const simpleRosters = [
    {
        name: 'June 2019',
        roster: [
            'Aly S',
            'Anthony A',
            'Daniel A',
            'David W',
            'Drew P',
            'Elias R',
            'Emily C',
            'Emily R',
            'Ibrahim Y',
            'Jason M',
            'Jeremy M',
            'John D',
            'Johnny M',
            'Julia C',
            'Keith N',
            'Kenneth P',
            'Maria S',
            'Markus M',
            'Michael H',
            'Michael N',
            'Nathaniel C',
            'Nik A',
            'Peter R'
        ]
    }, {
        name: 'Dummy Roster',
        roster: [
            'Morty Smith',
            'Rick Sanchez',
            'Summer Smith',
            'Beth Smith',
            'Jerry Smith',
            'Mr. Meeseeks',
            'Birdperson',
            'Squanchy',
            'Abradolf Lincler',
            'Unity',
            'Mr. Poopybutthole',
            'Morty Jr.',
            'Pencilvester',
            'Sleepy Gary',
            'Tinkles',
            'Uncle Steve',
            'Cousin Nicky',
            'Ghost in a Jar',
            'Mr. Beauregard',
            'Mrs. Refrigerator',
            'Photography Raptor',
            'Reverse Giraffe',
            'Krombopulos Michael',
            'Revolio "Gearhead" Clockberg, Jr'
        ]
    }
]

let rosters = []

simpleRosters.forEach((roster) => {
    const newRoster = roster.roster.map(student => {
        return { name: student, isPresent: true, id: uniqueId() }
    })

    rosters.push({ cohort: roster.name, roster: newRoster })
});

export default rosters;