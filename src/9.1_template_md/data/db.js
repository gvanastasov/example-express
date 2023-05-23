'use strict'

const { faker } = require('@faker-js/faker');

const ADR_STATUS = ['Proposed', 'Considered', 'Approved', 'Overrides', 'Declined']

var adrs = Array.from(Array(5).keys()).map(x => ({
    id: x,
    title: faker.lorem.words({ min: 3, max: 5}),
    status: faker.helpers.arrayElement(ADR_STATUS),
    context: faker.lorem.paragraphs({ min: 1, max: 4 }),
    decision: faker.lorem.sentence({ min: 3, max: 8 }),
    consequences: faker.lorem.sentence({ min: 3, max: 8 })
}));

module.exports = { adrs };