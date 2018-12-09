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

setValue($('input[name=billingAddress\\.firstName]'), 'Billy');
setValue($('input[name=billingAddress\\.lastName]'), 'Billington');
setValue($('input[name=billingAddress\\.line1]'), '123 Billing Street');
setValue($('input[name=billingAddress\\.line2]'), 'Billingville');
setValue($('input[name=billingAddress\\.city]'), 'Billing-on-Sea');
setValue($('input[name=billingAddress\\.postCode]'), 'SW19 2BB');
setValue($('input[name=billingAddress\\.phone]'), '07654111111');
