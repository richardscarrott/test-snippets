const $$ = document.querySelectorAll.bind(document);

$$('[data-id]').forEach((el) => {
   console.log(el.getAttribute('data-id'))
});
