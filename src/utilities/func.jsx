// import { withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history';

export const copyObj = (obj)=>JSON.parse(JSON.stringify(obj))
export const deleteRow = (func,...rest)=>{
    const r = window.confirm( "Are you sure want to delete ?. Changes Cannot be reverted");
    if (r === true) {
        
     func(...rest);
    }
}

export const urlValidate = (url) => {
var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9.-]+.[a-zA-Z]{2,5}[.]{0,1}/
if (!re.test(url)) {  return true}
return false
}
export const History = createBrowserHistory();
// export const wraper=props=>{props.children};