# Welcome to Phone1st

## A light, clean, starter theme that starts... _phone1st_

![](tile-wide.png)

>A light and basic html starter theme to get you off to a quick start with your web developments. The CSS is put together using SCSS, a popular way of creating quick, organised stylesheets. Using Phone1st will save you time, building quicker, smarter projects. Once you start using Phone1st you'll keep using it.

___

### CodeKit

Phone1st is designed to be used with [CodeKit](https://codekitapp.com/) (*Mac only*). Taking advantage of *CodeKits* - *kit* templates and *kit* variables.

If you don't have *CodeKit* the *css* folder could be adapted to suit your use. 

The theme should build correctly when imported into Codekit, but if not:

+ Set style.scss to path /build/css/style.css
+ Set app.js to path /build/js/app.js
+ Set images to path /build/images/

To view the _test folder pages_

+ Set test.kit to path /build/test/test.html
+ Set about.kit to path /build/test/about.html
+ Set scss.kit to path /build/test/scss.html
+ Set extras.kit to path /build/test/extras.html

+ Set base.scss to path /build/test/css/base.css
+ Set extras.scss to path /build/test/css/extras.css

+ Set app.js to path /build/test/app.js
+ _all javascript extra files go into the js folder_ /build/test/js/

+ Set all test images to path /build/test/test-images/

___

### The Test Folder

The _test_ folder can be removed when no longer required it will not effect the theme.

#### Test Page

Use the _test_ page to set the basic elements.

#### Extras Page

A few javascript extras to start you off.

#### Scss Page

User and *Bourbon* mixins.

___

### Basic SEO

The following _variables_ for Meta Data are available with some _Facebook_ and _Twitter_ meta. These are optional and you should add or subtract what you require.

Meta variables available:

`<!-- $title Page title -->` - Basic page title for use with navigation etc. eg *Home About*

`<!-- $SEO-title -->`- A more descriptive title - 60ish characters
> Note: Your sitename is added after the $SEO-title

`<!-- $description Page description -->` - 120ish characters  

`<!-- $keyword Home -->` - word or words  

`<!-- $url index.html -->` - exact url  

`<!-- $post-image eg tile-wide.png -->` - image to use for Facebook and Twitter meta image  

See _includes/\_meta.kit_, set the website path and sitename at the top of the page. The page variables *(from the top of each page)*, along with your website path and sitename will be used to set the meta data.

sitename is usually the name in your web address ie _www.mysitename.com_ - your sitename would be _mysitename_

__Important__ - Check the meta data in your _page head_ with the browser inspector

___

### NOTES

#### Dart Scss

The math division is changing in *Dart Scss*

`@use "sass:math";//already in style.scss`

`// WRONG, will not work in future Sass versions.
@debug (12px/4px); // 3`

`// RIGHT, will work in future Sass versions.
@debug math.div(12px, 4px); // 3`

for more information [click here](https://sass-lang.com/documentation/breaking-changes/slash-div)
___

### Contact Info:

email: [h@bylucas.co.uk](mailto:h@bylucas.co.uk)

