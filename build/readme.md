# Welcome to Phone1st - html
#### A light, clean, starter theme that starts _phone first_

![](tile-wide.png)

>A light and basic html starter theme to get you off to a quick start with your web developments. The CSS is put together using SCSS, a popular way of creating quick, organised stylesheets. Using Phone1st will save you time, building quicker, smarter projects. Once you start using Phone1st you'll keep using it.

All startup files are in place ready for building your site. You can view the theme [here](https://phone1st-theme.netlify.com/)

### CodeKit
Phone1st scripts are set to minify and the css styles are set to compress on output to the build folder.

The theme should build when added to Codekit, but if not:

+ Set style.scss to path /build/css/style.css
+ Set app.js to path /build/js/app.js

To view the _test page_

+ Set test.kit to path /build/test/test.html
+ Set test.scss to path /build/test/test.css
+ Set app.js to path /build/test/app.js
 
### Scss
Phone1st uses _Scss_ to write css styles. If your not using scss you should be, _it’s a real time saver_.

### The Test Folder
The _test_ folder can be removed when no longer required it will not effect the theme.

#### Test Page
See the _test_ page before you start building your site. Use this page to set the basics.

### No Menu
Because of the many _responsive menus_ now available it’s pointless adding one to the theme.

### No Icon Library
Same reason as _no menu_, there are too many _icon libraries_ around.

### Basic SEO
The following _variables_ for Meta Data are available with some _Facebook_ and _Twitter_ meta. These are optional and you should add or subtract what you require.

Meta variables available on the pages:

`<!-- $title Page title -->` - Basic page title for use with navigation etc. eg `Home` `About`
`<!-- $SEO-title -->`- A more descriptive title - 60ish characters
> Note: Your sitename is added after the $SEO-title

`<!-- $description Page description -->` - 120ish characters  
`<!-- $keyword Home -->` - word or words  
`<!-- $url index.html -->` - exact url  
`<!-- $post-image eg tile-wide.png -->` - image to use for Facebook and Twitter meta image _ie post header image_  

See _includes/\_meta.kit_, set the website path and sitename at the top of the page. The page variables, your website path and sitename will be used to set the meta data.

sitename is usually the name in your web address ie _www.mysitename.com_ - your sitename would be _mysitename_

__Important__ - Check the meta data in your _page head_ in the browser inspector

### Contact Info:   
email [h@bylucas.co.uk](mailto:h@bylucas.co.uk)  
View the theme [here](https://phone1st-theme.netlify.com/)

