# ReactPress ( Rest API edition )

Reactpress is starter-kit to create a Next.js ( **SEO-friendly** React )front-end backed by Wordpress REST API. ⚡ There is also a GraphQL version : https://github.com/nyl-auster/reactpress-graphql 

<img width="200" src="https://raw.githubusercontent.com/nyl-auster/reactpress/master/themes/starter/images/hippogriff.png" />

Reactpress is built upon [Next.js](https://github.com/zeit/next.js/) for Server Side Rendering, so if your are not familiar with Next.js, you should take a quick look at it.

## Gettings started

### 1 - Wordpress : Make sure CORS are enabled on your Wordpress

Reactpress is only your **front-end**. It's up to you to install Wordpress as you would usually do. Reactpress is relying on [REST API v2](http://v2.wp-api.org), which is automatically enabled since Wordpress 4.7 😊. CORS are special HTTP headers that allows us to pull data from wordpress server API. You can add this to your wp-config.php to make sure Wordpress CORS are fully enabled.

```php
// allow CORS
header("Access-Control-Allow-Origin: *");
```

### 2 - Install Reactpress

Where do you install reactpress ? it's really up to you but, as an example, you can install it just next to your wordpress :
- www
  - wordpress
  - reactpress

Then in your reactpress directory:
```sh
# install dependencies
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

You can now start hacking / editing files from _themes/starter_ directory ! 

### (optionnal) 4 - Create your own theme

Instead of hacking starter theme, you can copy and rename starter directory to create your own theme directory.
You will have to tell reactpress in two places than you want to run another theme :

**package.json** : edit build script and change "themes/starter" to  "themes/your_theme"
```json
{
  "scripts": {
    "build": "node_modules/.bin/next build themes/starter",
  },
}
```

**server.js** - same thing for line 5 :
```js
const app = next({ dev, dir: `./themes/starter` });
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

- Woo Commerce components
- authentification
- comments

## CSS

there several available ways to manage your css with reactpress

- you can create classic css files and import them like this :

```js
import "../css/globals.css";
```

- css-in-js with styled-jsx, which is shipped by default with Next : https://github.com/zeit/styled-jsx

## deployment

Reactpress needs a node server, because on the first page load, html is served by a node server (that's why search engines are able to crawl your content). 

If you don't want to manage a server yourself, Next.js plays really well with now : this is a very easy way to deploy a next.js app : https://zeit.co/now
