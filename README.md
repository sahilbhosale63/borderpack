# What is borderpack?

Borderpack is a package which allows you to add different types of borders to any html element.

# Installation

`npm i borderpack --save`

After installing the package, create a new JS file and add the following lines of code inside it.

```
import {borderpack} from 'borderpack';

borderpack({
    border_type: 'dashed',
});

```
## Options

Borderpack supports 4 options, all of them are optional.

* *border_type* - _dashed / dotted_ / _solid / double_