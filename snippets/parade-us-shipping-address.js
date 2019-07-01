const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// https://github.com/facebook/react/issues/11488#issuecomment-347775628
const setValue = (input, value) => { 
  let lastValue = input.value;
  input.value = value;
  let event = new Event('input', { bubbles: true });
  // hack React15
  event.simulated = true;
  // hack React16 内部定义了descriptor拦截value，此处重置状态
  let tracker = input._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }
  input.dispatchEvent(event);
}

setValue($('input[name=email]'), 'richard.scarrott@paradeworld.co');
setValue($('input[name=shippingAddress\\.firstName]'), 'Shippy');
setValue($('input[name=shippingAddress\\.lastName]'), 'Shippington');
setValue($('input[name=shippingAddress\\.line1]'), '20 Cooper Street');
setValue($('input[name=shippingAddress\\.line2]'), '');
setValue($('input[name=shippingAddress\\.city]'), 'New York');
setValue($('input[name=shippingAddress\\.postCode]'), '10003');
setValue($('input[name=shippingAddress\\.phone]'), '076653297564');