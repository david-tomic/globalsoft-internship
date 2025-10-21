<!-- More or less everything regarding html that one should know how to use in everyday's frontend work -->

_html structure, tag structure, comments and what they are for_

**Most Used HTML Tags**

- `<div>`
- `<p>`
- `<span>`
- `<a>`
- `<img>`
- `<ul>` / `<ol>`
- `<li>`
- `<input>`
- `<select>`
- `<button>`
- `<h1>` ... `<h6>`

**_Tag attributes_**

- `id`
- `class`
- `style`
- `src`
- `href`
- `alt`

**_Input attributes_**

- `type` — defines the input type (text, password, email, radio, checkbox, etc.)
- `name` — name of the input (used when submitting forms)
- `value` — initial value of the input
- `id` — unique identifier for referencing (e.g., with `<label for="">`)
- `class` — CSS class for styling
- `placeholder` — hint text shown when input is empty
- `readonly` — makes input non-editable but still focusable
- `disabled` — makes input non-editable and removes it from submission
- `checked` — for radio/checkbox

  **_Semantic tags and why is it better to use them than divs_**

- `main`
- `header`
- `aside`
- `nav`
- `footer`
- `section`
- `article`

**_Forms and what they are used for, native form submission, how it collects data, what is formData and actions, and default behaviour_**

- `<form action="/login" method="POST">`
- `<label>` — wraps an input with a description
- `<input type="text" name="username" required />`
- `<input type="password" name="password" required />`
- `<button type="submit">Login</button>`
- Form submission collects all `name=value` pairs from inputs
- `FormData` object can be used in JS to collect form data programmatically
- Default behaviour: submits to `action` URL with `method`, disabled inputs are ignored
