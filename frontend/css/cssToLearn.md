Most used css stuff

**_All 3 ways of adding CSS styles to an element_**

- Inline style: `<div style="color: red;"></div>`
- `<style>` tag in `<head>` section
- External stylesheet: `<link rel="stylesheet" href="styles.css">`

**_Selector, declaration, rule, property, value structure_**

- Selector: what you are targeting (e.g., `.class`, `#id`, `div > p`)
- Declaration: `property: value;` pair inside `{ }`
- Rule: selector + declarations together
- Property: style attribute to change (e.g., `color`)
- Value: what you assign to property (e.g., `red`)

**_How to target elements_**

- Nested: `div p` → all `p` inside `div`
- Direct child: `div > p` → only `p` that are direct children of `div`
- Adjacent sibling: `div + p` → first `p` immediately after `div`
- General sibling: `div ~ p` → any `p` after `div`
- First/last element: `div:first-child`, `div:last-child`
- Only element: `div:only-child`

**_Various selectors_**

- `.class`
- `#id`
- `*` universal selector
- Nested: `div p`
- Child: `div > p`
- Adjacent sibling: `div + p`
- Group: `div, p, span`

**_Specificity, best practices, !important_**

- Inline styles > IDs > Classes > Elements
- Avoid `!important` unless absolutely necessary (harder to override later)
- Read more: [The Cascade — The Odin Project](https://www.theodinproject.com/lessons/foundations-the-cascade)

**_Pseudo-classes and their uses_**

- `input:checked`, `input:disabled`, `input:focus`, `input:valid`
- `div:first-child`, `div:nth-child(2)`
- Check CSS cheatsheets for more pseudo-classes

**_CSS units_**

- `px` — fixed pixels, precise control
- `em` — relative to parent font size
- `rem` — relative to root font size
- `vw`, `vh`, `dvh` — viewport units
- `ch` — width of “0” character
- `%` — relative to parent size
- Tips: use `rem` for scalable typography; `px` for precise spacing

**_Text (fonts)_**

- `text-align: start | center | end`
- `color: red`
- `text-transform: uppercase`
- Popular fonts: Roboto, Inter, system fonts as fallback
- Font weight: 400–700
- Use Google Fonts or host custom fonts (woff2 recommended)
- Example custom font:

```css
@font-face {
  font-family: myFont;
  src: url(sansation_light.woff2);
}
p {
  font-family: myFont;
}
```

**_Box model (margin, padding, box-sizing, CSS reset)_**

- Margin vs padding: margin = outside spacing, padding = inside spacing
- Vertical margin can collapse in some cases, causing unexpected spacing
- `box-sizing: border-box` is preferred (includes padding & border in element width)
- Border and `border-radius` control edges and corners
- CSS reset: removes native browser margins, sets `box-sizing: border-box`
- Example reset: [Meyerweb CSS Reset](https://meyerweb.com/eric/tools/css/reset/)

**_Display property (block, inline, none, grid, flex)_**

- `block` elements take full row width
- `inline` elements only take content width
- `display: none` hides element from layout, not rendered
- Difference vs `visibility: hidden` (element takes space) or `opacity: 0` (invisible but clickable)

**_Positioning (fixed | static | sticky | absolute | relative)_**

- Normal flow: block elements take whole row
- Parent `relative` + child `absolute` → position corners
- Offsets: `top`, `right`, `bottom`, `left`
- `z-index` controls stacking order
- Docs: [MDN — position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

normal flow (block elements take whole row etc) -->
how to position something to top / bottom corner , parent relative child absolute
offsets, top, right, bottom, left
z-index

**_Flex, Grid_**

- Flexbox: parent = flex container, children = flex items
- `flex-direction: row | column` affects main axis
- Use `justify-content` and `align-items` to align children
- Grid: better for full-page layouts (header, nav, aside, footer)
- Flexbox guide: [CSS-Tricks Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Grid guide: [CSS-Tricks Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- Flexbox practice game: [Flexbox Froggy](https://flexboxfroggy.com/#hr)

mostly you can get away with flexbox, grid can be nicer for layouts of whole page, think of header nav aside etc

learn about flex parent, child, flexDirection row / column, what it means for axis and how to justify-content / align-items, how to center a div :P

**_Media Queries_**

- Make designs responsive for different screen sizes
- Smallest phone: 320px
- Tablet: 768px
- Desktop: above 768px
- Ultra-wide monitors: be careful with max-width
- Syntax examples:

```css
@media (min-width: 768px) {
  /* styles for screens above 768px */
}
@media (max-width: 768px) {
  /* styles for screens up to 768px */
}
```

**_Overflow_**

- `visible` — default, content spills outside the element
- `hidden` — content that exceeds the box is clipped
- `scroll` — always shows scrollbars, even if content fits
- `auto` — shows scrollbars only when content overflows
- `overflow-x` / `overflow-y` — control horizontal or vertical overflow independently

**_Transform (alter element position relative to itself)_**

- Example: center an element both vertically and horizontally

```css
.center-me {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

_*css_variables*_
you set variables to :root (visible from everywhere e.g. primaryColor) so you have 1 source of turth when it comes to changing you only change 1 value

```css
:root {
  --primary-color: #3498db;
}
body {
  background-color: var(--primary-color);
}
```
