import React from 'react'

import bn from '../utilities/bemnames';
const bem = bn.create('simillarpg');
const Simillarpg = () => (
    <div className={bem.e("content")}>
        <a href="/" className={bem.e("simillar_pgs")}>PG 1</a>
    </div>
)
export default Simillarpg;