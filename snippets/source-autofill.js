var setInput = (input, value) => {
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
nativeInputValueSetter.call(input, value);
var ev2 = new Event('input', { bubbles: true});
input.dispatchEvent(ev2);
};

setInput($('[name="name"]'), 'Trainline Web')
setInput($('[name="api"]'), 'https://api.github.com')
setInput($('[name="accessToken"]'), '10b1b4f07f602f9c617c9a4ad245f45605c02820')
//setInput($('[name="accessToken"]'), '10b1b4f07f602f9c617c9a4ad245f45605c02820BUG')
setInput($('[name="owner"]'), 'richardscarrott')
setInput($('[name="repo"]'), 'test-snippets')
setInput($('[name="path"]'), 'snippets')
