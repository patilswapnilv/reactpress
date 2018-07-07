# REACT + WORDPRESS = REACTPRESS 💛

Start a **SEO-friendly** Decoupled Wordpress with React in minutes, without configuring boring stuff.<br /><br />
Under the hood, Reactpress is using [Next.js](https://github.com/zeit/next.js/).

## Gettings started

### make sur CORS is enabled on Wordpress

add this to your wp-config.php to make sure CORS are enabled :

```php
// allow CORS
header("Access-Control-Allow-Origin: *");
```

### install

```sh
# install dependencis
npm install
# start the dev server on http://localhost:3000
npm run dev
```

You can already start hacking / editing **pages** and **components** directories ! <br /><br />

By default, reactpress uses a demo API. To connect your own API, edit **reactpress.config.js** file and edit variable **wordpressApiUrl** so that it points to your wordpress API. Don't forget the **wp-json** at the end of the url.

```js
module.exports = {
  wordpressApiUrl: "https://dev-reactpress.pantheonsite.io/wp-json"
};
```

## Features

### current features

- SEO Friendly : Server Side Rendering with Next.js
- Nices seo-friendly urls using wordpress slugs
- Post, Posts list, posts by category, posts by tag
- Page
- Page loader (progress bar)
- Pagination

### planned features

- authentification
- comments

## CSS

there several available ways to manage your css with Reactpress

- css-in-js with styled-jsx, which is shipped by default with Next : https://github.com/zeit/styled-jsx
- you can create classic css files and import them like this :

```js
import "../css/globals.css";
```
