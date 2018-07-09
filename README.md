# reactpress : give wings to your Wordpress front-end

Reactpress is starter-kit to create a **SEO-friendly** React front-end for your Wordpress REST API, without configuring boring stuff. ⚡ <br /> There is also a GraphQL version : https://github.com/nyl-auster/reactpress-graphql 

<img width="200" src="https://raw.githubusercontent.com/nyl-auster/reactpress/master/themes/default/images/hippogriff.png" />

Reactpress is built upon the awesome [Next.js](https://github.com/zeit/next.js/) for Server Side Rendering.

## Gettings started

### 1 - Wordpress : Make sure CORS are enabled on your Wordpress

Reactpress is only your **front-end**. It's up to you to install Wordpress as you would usually do. reactpress is relying on [REST API v2](http://v2.wp-api.org), which is automatically enabled since Wordpress 4.7 😊. CORS are special HTTP headers that allows us to pull data from wordpress server API. You can add this to your wp-config.php to make sure CORS are enabled.

```php
// allow CORS
header("Access-Control-Allow-Origin: *");
```

### 2 - Install Reactpress

```sh
# install dependencis
npm install
# start the dev server on http://localhost:3000
npm run dev
```

### 3 - Add your wordpress api to reactpress.config.js

By default, reactpress uses a demo API. To connect your own API, edit **reactpress.config.js** file and edit variable **wordpressApiUrl** so that it points to your wordpress API. Don't forget the **wp-json** at the end of the url.

```js
module.exports = {
  wordpressApiUrl: "https://dev-reactpress.pantheonsite.io/wp-json"
};
```

You can now start hacking / editing files from _themes/default_ directory !

## Features

### current features

- SEO Friendly : Server Side Rendering with Next.js
- Nices seo-friendly urls using wordpress slugs
- Post, Posts list, posts by category, posts by tag
- Page
- Page loader (progress bar)
- Pagination

### planned features

- Woo Commerce components
- authentification
- comments

## How it works

Under the hood, reactpress is using the awesome [Next.js](https://github.com/zeit/next.js/).

## CSS

there several available ways to manage your css with reactpress

- you can create classic css files and import them like this :

```js
import "../css/globals.css";
```

- css-in-js with styled-jsx, which is shipped by default with Next : https://github.com/zeit/styled-jsx
