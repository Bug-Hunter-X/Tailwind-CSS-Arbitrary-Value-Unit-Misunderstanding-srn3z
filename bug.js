```javascript
// Example using Tailwind's arbitrary value feature
<div class="w-100px"></div>
```
This will not work as expected, resulting in an element with an unexpected width.  Tailwind doesn't directly interpret `px` units within arbitrary values. This is a common misunderstanding.