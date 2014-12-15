Swap.js
=======

### A native JS plugin that swaps the things

Usage:

1. Include swap.js in your project (preferably in the footer below your content)
```html
<script src="path/to/swap.js"></script>
```

2. Include your navigation items – those that will be used to swap out content. Make sure you use anchor links that point to your swappable elements, and give them a class of `.swap-trigger`.
```html
<a href="#swap-item-1" class="swap-trigger">Show Item 1</a>
<a href="#swap-item-2" class="swap-trigger">Show Item 2</a>
<a href="#swap-item-3" class="swap-trigger">Show Item 3</a>
```

3. Include your swappable elements, making sure to give them IDs that match your navigation respective items, as well as a class of `.swappable`.
```html
<section id="swap-item-1" class="swappable">Content in `#swap-item-1`</section>
<section id="swap-item-2" class="swappable">Content in `#swap-item-2`</section>
<section id="swap-item-3" class="swappable">Content in `#swap-item-3`</section>
```

4. Style to your heart's content. Included is some barebones CSS to get you started. This bit of the plugin is left pretty ambiguous, considering each project will be different.

Need an example? Simply download the *Demo Folder* in this project and get to it!

#### Note: This plugin uses **zero** dependencies, so include away. Also, you'll notice that in modern browsers the hash is changed. That means you can point to a particular section on page load. Enjoy!