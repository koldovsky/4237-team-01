# HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].
And htmx to load partials

```html
<main data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-get="index.main.partial.html"></main>
```


```js
function init() {
    import('...js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
```

Add the data-proofer-ignore attribute to any tag to ignore it from every check.

```html
<a href="https://notareallink" data-proofer-ignore>Not checked.</a>
```


## List of the students

- Pavlo Konelskiy
- Semen Levchenko
- Oleksandr Lazarets
- Tetiana Hazzaieva
- Olga Buhanska
- Bohdan Butuzov
<<<<<<< HEAD
- Diana Dubenok
- Ivan Popov
=======
<<<<<<< HEAD
- Alona Zahychenko
=======
- Olga Balabukh
>>>>>>> e78101b083e4445899b0b74db92886bc06c9a32d
>>>>>>> 170ae386405db1f9963b0112f444a15ac0f245f5
