import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../src';

import testData from 'json!./data.json';

window.i18n = {
    __: x => x
}

ReactDOM.render(<Component {...testData}/>, document.getElementById('root'));
