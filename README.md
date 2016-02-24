[ { id: 'module:enum',
    longname: 'module:enum',
    name: 'enum',
    kind: 'module',
    description: 'Immutable Enum without any dependencies.',
    examples: 
     [ 'Import `ES5`\n```js\nconst Enum = require(\'enum\');\n```\nImport `ES6`\n```js\nimport Enum from \'enum\';\n```',
       'Create from array values:\n```js\nconst MyEnum = Enum([\n    \'FIRST\',\n    \'SECOND\',\n]);\n```\nWill return an immutable javascript object:\n```json\n{\n    "FIRST": "FIRST",\n    "SECOND": "SECOND"\n}\n```\n_Note_: An error will be throw if you tried to modify the `Enum`.' ],
    version: '1.0.0',
    meta: 
     { lineno: 1,
       filename: 'index.js',
       path: '/home/remi/Documents/astri/nw/weedoo/quiz-crawler/packages/enum/src' },
    order: 0 },
  { id: 'module:enum--Enum',
    longname: 'module:enum',
    name: 'Enum',
    scope: 'global',
    kind: 'function',
    isExported: true,
    memberof: 'module:enum',
    alias: 'module:enum',
    params: [ [Object] ],
    examples: [ 'From `ES6` string:\n```js\nimport Enum from \'enum\';\n\nexport default Enum(\'FIRST SECOND\');\n```\nWhich equals to:\n```js\nimport Enum from \'enum\';\n\nexport default Enum(`\n    FIRST\n    SECOND\n`);\n```' ],
    returns: [ [Object] ],
    meta: 
     { lineno: 24,
       filename: 'Enum.js',
       path: '/home/remi/Documents/astri/nw/weedoo/quiz-crawler/packages/enum/src' },
    order: 1 },
  options: { template: '{{log .}}\n{{#module name="enum"~}}\n{{> header~}}\n{{> body~}}\n{{> member-index~}}\n{{> members~}}\n{{/module~}}\n\n## Testing\n\n```shell\nnpm test\n```\n\n## Benchmark\n\n```shell\nnpm run bench\n```\n',
    'heading-depth': 2,
    'example-lang': 'js',
    plugin: [],
    helper: [],
    partial: [],
    separators: false,
    'module-index-format': 'dl',
    'global-index-format': 'dl',
    'param-list-format': 'table',
    'property-list-format': 'table',
    'member-index-format': 'grouped',
    'group-by': [ 'scope', 'category' ],
    verbose: true,
    conf: 'docs/jsdoc.json',
    src: [ 'package.json', 'src/index.js', 'src/Enum.js', 'src/index.js' ],
    _depth: 0,
    _indexDepth: 0 } ]

<a name="module_enum"></a>
## enum
Immutable Enum without any dependencies.

**Version**: 1.0.0  
**Example**  
Import `ES5`
```js
const Enum = require('enum');
```
Import `ES6`
```js
import Enum from 'enum';
```
**Example**  
Create from array values:
```js
const MyEnum = Enum([
    'FIRST',
    'SECOND',
]);
```
Will return an immutable javascript object:
```json
{
    "FIRST": "FIRST",
    "SECOND": "SECOND"
}
```
_Note_: An error will be throw if you tried to modify the `Enum`.
<a name="exp_module_enum--Enum"></a>
### Enum(values) ⇒ <code>Object</code> ⏏
**Kind**: global method of <code>[enum](#module_enum)</code>  
**Returns**: <code>Object</code> - Frozen object corresponding to given arguments.  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Object</code> &#124; <code>Array</code> &#124; <code>Map</code> &#124; <code>Set</code> &#124; <code>String</code> | Input arguments. |

**Example**  
From `ES6` string:
```js
import Enum from 'enum';

export default Enum('FIRST SECOND');
```
Which equals to:
```js
import Enum from 'enum';

export default Enum(`
    FIRST
    SECOND
`);
```
## Testing

```shell
npm test
```

## Benchmark

```shell
npm run bench
```
