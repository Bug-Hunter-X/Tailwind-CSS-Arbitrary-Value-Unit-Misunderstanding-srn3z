```javascript
// Correct approach using standard Tailwind classes
<div class="w-[100px]"></div>

//Alternative: using CSS custom properties (variables)
:root {
  --my-width: 100px;
}
<div class="w-[var(--my-width)]"></div>
```