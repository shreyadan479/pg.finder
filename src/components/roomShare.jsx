import React from 'react'
import bn from '../utilities/bemnames';
const bem = bn.create('room');
const Roomshare = () => (
    <div className={bem.e("table_wrapper")}>
        <table >
            <tr className={bem.e("header")}>
                <th className={bem.e("header_left")}>Room Sharing</th>
                <th className={bem.e("header_right")}>cost per room</th> 
            </tr>
            <tr className={bem.e("data")}>
                <td className={bem.e("data_left")}>x1</td>
                <td className={bem.e("data_right")}><input type="number" placeholder="7000"/></td>
            </tr>
            <tr className={bem.e("data")}>
                <td className={bem.e("data_left")}>x2</td>
                <td className={bem.e("data_right")}><input type="number" placeholder="7000"/></td>
            </tr>
            <tr className={bem.e("data")}>
                <td className={bem.e("data_left")}>x3</td>
                <td className={bem.e("data_right")}><input type="number" placeholder="7000"/></td>
            </tr>
            <tr className={bem.e("data")}>
                <td className={bem.e("data_left")}>x4</td>
                <td className={bem.e("data_right")}><input type="number" placeholder="7000"/></td>
            </tr>
            <tr className={bem.e("data")}>
                <td className={bem.e("data_left")}>x5</td>
                <td className={bem.e("data_right")}><input type="number" placeholder="7000"/></td>
            </tr>
            <tr className={bem.e("data")}>
                <td className={bem.e("data_left")}>x6</td>
                <td className={bem.e("data_right")}><input type="number" placeholder="7000"/></td>
            </tr>
            <tr className={bem.e("data")}>
                <td className={bem.e("data_left")}>x7</td>
                <td className={bem.e("data_right")}><input type="number" placeholder="7000"/></td>
            </tr> 
        </table>    
    </div>    
)
export default Roomshare;