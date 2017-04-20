# bootstrap-modallery
Magically create images galleries in boostrap modals

* [Demo](https://github.com/lhcgoncalves/bootstrap-modallery/blob/master/gallery.html)

# Installation

* * *

You'll need to import 2 files:

*   JS: `bootstrap.modallery.min.js`
*   CSS: `bootstrap.modallery.min.css` (Optional. Just import if you want to use navigation or customize)

Modallery also requires _bootstrap.min.js_ and _jquery.min.js_ to work.

* * *

## Usage

* * *

It's simple. Just import the files, call the plugin `$(document).modallery();` and add the class `.modallery` on every image you want to show with a data attribute `data-to` refering which image should open.

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

* * *

## Options

* * *

**- Data attributes**

**_data-caption_**
Just add this in the `<img>` tag and a caption will appear below the image.

 **- JavaScript attributes**

Set the options below inside `.modallery()` call.

**_size_**
Default: empty. Sets the Bootstrap available sizes for modals: <u>sm</u> or <u>lg</u>

**_caller_**
Default: 'modallery'
Changes the class who Modallery should find.

**_title_**
Default: 'Image Gallery'
Changes the modal gallery title.

**_navigate_**
Default: false
Displays a modal footer with links to the others images on gallery.
