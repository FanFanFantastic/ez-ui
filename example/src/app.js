
/*** examples/src/app.js ***/
import React from 'react';
import { render } from 'react-dom';
import { Demo, Button } from '../../src'; // 引入组件

const App = () => {
    return (
        <>
        <Demo />
        <Button label={"example"}/>
        </>
    )
}

render(<App />, document.getElementById('root'))
