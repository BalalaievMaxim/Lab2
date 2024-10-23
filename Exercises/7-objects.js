'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
    let varUser = {name: "Biba"};
    const constUser = {name: "Boba"};

    varUser.name = "Phineas";
    constUser.name = "Ferb";

    // varUser = {name: "Rick"};
    // constUser = {name: "Morty"};
}

module.exports = { fn };
