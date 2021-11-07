# alpinejs-plugin-anime

## Usage

```html

<div x-data x-anime="{targets:'.element', translateY:100,
  rotate: '3turn',translateX:-100,duration:5000
}">

    <div class="element"></div>
</div>

```


```html
// usage in current element you are free to remove targets
<div x-data x-anime="{translateY:100,
  rotate: '3turn',translateX:-100,duration:5000
}">

    <div class="element"></div>
</div>

```


also $anime magic is available
