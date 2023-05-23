'use strict'

const { faker } = require('@faker-js/faker');

var users_schema_v1 = [];

users_schema_v1.push({ name: faker.internet.userName() });
users_schema_v1.push({ name: faker.internet.userName() });
users_schema_v1.push({ name: faker.internet.userName() });

var users_schema_v2 = [...users_schema_v1].map(x => ({ username: x.name, email: faker.internet.email() }));

module.exports = { users_schema_v1, users_schema_v2 };