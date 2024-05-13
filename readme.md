# Pagination Wizard

## Your assistant for easy work with pagination!


## Installing

### Package manager

Using npm:

```bash
$ npm install pagination-wizard
```

Once the package is installed, you can import the library using import or require approach:

```js
import {PaginationWizard} from 'pagination-wizard';
```

```js
const {PaginationWizard} = require('pagination-wizard');
```

## Example

```js
import {PaginationWizard} from 'pagination-wizard';

const wizard = new PaginationWizard(itemCount, itemsPerPage);

console.log(wizard.pageCount());
```
