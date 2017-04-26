# bootstrap-modallery
Magically create images galleries in boostrap modals

* [Demo in JSFiddle](https://jsfiddle.net/lhcgoncalves/fLtsnqx7/)
* [Demo in Bootsnipp](http://bootsnipp.com/user/snippets/7Kg8l)

![Demo Screenshot](https://s16.postimg.org/gpj9eoqc5/Screenshot_from_2017-04-20_12_09_04.png)

# Installation

You'll need to import 2 files:

*   JS: `bootstrap.modallery.min.js`
*   CSS: `bootstrap.modallery.min.css` (Optional. Just import if you want to use navigation or customize)

Modallery also requires _bootstrap.min.js_ and _jquery.min.js_ to work.

## Usage

It's simple. Just import the files, call the plugin `$(document).modallery();` and add the class `.modallery` on every image you want to show with a data attribute `data-to` refering which image should open.

CDN:
JsDelivr: http://www.jsdelivr.com/projects/bootstrap-modallery

https://rawgit.com/lhcgoncalves/bootstrap-modallery/master/src/js/bootstrap.modallery.min.js
https://rawgit.com/lhcgoncalves/bootstrap-modallery/master/src/css/bootstrap.modallery.min.css

**Example:**

``` html
<div class="col-md-3">
<img src="img/sm-1.jpg" data-to="img/lg-1.jpg" class="modallery">
</div>
<div class="col-md-3">
<img src="img/sm-2.jpg" data-to="img/lg-2.jpg" class="modallery">
</div>
<div class="col-md-3">
<img src="img/sm-3.jpg" data-to="img/lg-3.jpg" class="modallery">
</div>
<div class="col-md-3">
<img src="img/sm-4.jpg" data-to="img/lg-4.jpg" class="modallery">
</div>
```

## Options

**- Data attributes**

**_data-to_** (required)

Defines which target image should be displayed in the modal.

**_data-caption_** (optional)

Just add this in the `<img>` tag and a caption will appear below the image.


 **- JavaScript attributes**

Set the options below inside `.modallery()` call.

**_size_**

Default: empty.

Sets the Bootstrap available sizes for modals: <u>sm</u> or <u>lg</u>

**_caller_**

Default: '.modallery'

Changes the class who Modallery should find.

**_title_**

Default: 'Image Gallery'

Changes the modal gallery title.

**_navigate_**

Default: false

Displays a modal footer with links to the others images on gallery.

**_arrows_**

Default: false

Displays two buttons for navigation between images on modal.

**_keypress_**

Default: false

Allows to navigate between images using arrows keys.
