import _ from 'lodash';
import path from 'path'
import printMe from './print'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button')
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    let mypath = path.resolve(__dirname, 'dist');
    console.log(__dirname)
    console.log(mypath)

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn)

    return element;
}

document.body.appendChild(component());