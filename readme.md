# Pagination Helper

## Your assistant for easy work with pagination!


## Installing

### Package manager

Using npm:

```bash
$ npm install pagination-helper
```

Once the package is installed, you can import the library using import or require approach:

```js
import {PaginationHelper} from 'pagination-helper';
```

```js
const {PaginationHelper} = require('pagination-helper');
```

## Example

```js
import {PaginationHelper} from 'pagination-helper';

const helper = new PaginationHelper(itemCount, itemsPerPage);

console.log(helper.pageCount());
```
