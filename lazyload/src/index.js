
async function getComponent() {

        var element = document.createElement('div');
        const _ = await import('lodash')
        element.innerHTML =_.join(['hello', 'webpack'], ' ');
        return element;
}

getComponent().then(component => {
    document.body.appendChild(component)
})