'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    { name: "Biba", phone: "+38044565776" },
    { name: "Boba", phone: "+38044239876" },
    { name: "Phineas", phone: "+38050565776" },
    { name: "Ferb", phone: "+38044865776" },
    { name: "Rick", phone: "+38044565776" },
    { name: "Morty", phone: "+38044239876" },
];

const findPhoneByName = (name) => {
    for (const sub of phonebook){
        if (sub.name === name) return sub;
    }
};

module.exports = { phonebook, findPhoneByName };
