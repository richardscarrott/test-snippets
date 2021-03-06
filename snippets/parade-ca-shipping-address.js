const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// https://github.com/facebook/react/issues/11488#issuecomment-347775628
const setValue = (selector, value) => { 
  const input = $(selector);
  if (!input) {
    console.warn(`Input not found: ${selector}`);
    return;
  }
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

setValue('input[name=email]', 'richard.scarrott@paradeworld.co');
setValue('input[name=shippingAddress\\.firstName]', 'Shippy');
setValue('input[name=shippingAddress\\.lastName]', 'Shippington');
setValue('input[name=shippingAddress\\.line1]', '4026 Munsee Street');
setValue('input[name=shippingAddress\\.line2]', '');
setValue('input[name=shippingAddress\\.city]', 'Cayuga');
setValue('input[name=shippingAddress\\.postCode]', 'N0A 1E0');
setValue('input[name=shippingAddress\\.phone]', '905-772-2386');
