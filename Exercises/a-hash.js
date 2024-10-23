'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    "Biba": "+38044565776",
    "Boba": "+38044239876",
    "Phineas": "+38050565776",
    "Ferb": "+38044865776",
    "Rick": "+38044565776",
    "Morty": "+38044239876",
};

const findPhoneByName = (name) => phonebook[name]

module.exports = { phonebook, findPhoneByName };
