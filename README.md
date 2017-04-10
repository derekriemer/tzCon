# tzCon
Automatic and simple timezone conversion for online global conferences, designed to work seemlessly in the background.

## Usage:

To use this library, simply add tzcon.js into your page. When the onload event occurs, it'll register itself seemlessly and automatically convert any times on the page to the users local time.
This library converts times, only if presented in a specific format. The rules are outlined below.

* any element with a class of `tzcon` whose innerText is a properly formatted date, as specified in RFC 2822. 
* This date is in UTC. If you don't put `-0000` at the end of your dates, and -\d{4} is not present, the library adds it. It is an error to include timezones other than -0000.
* This library intentionally does not penetrate into frames or iframes. To penetrate into frames or iframes, load the script in the iframe.
* If the date is wrong and I can't convert it, "Invalid date" is put in the page.

Also, this library checks for, and if present removes, an element with a class of `tzutcwarning`. This message is intended for people who don't use javascript, so that they realize times are in UTC. Example text is below.
```html
<p class="tzutcwarning">
Note: You have javascript disabled. Thus, all dates and times are indicated in the UTC timezone. Enable javascript to receive friendly conversion of dates to your local timezone.
</p>
```

## Example HTML page

```html
blah blah blah HTML bloat crap
In the head:
<script type="text/javascript" src="path-to-tzcon.js"></script>
</head>
<body>

blah blah blah
<p class="tzutcwarning">
Note: You have javascript disabled. Thus, all dates and times are indicated in the UTC timezone. Enable javascript to receive friendly conversion of dates to your local timezone.
</p>
<h2> Why you should eat chocolate</h2>
<p> Chocolate, chocolate, come learn all about chocolate with alice and bob, at <span class="tzcon">5 Jun 2018 00:00</span></p>
<h2> The future of AI</h2>
<p> Come learn from Victor and jane about AI at <span class="tzcon">30 Dec 2199 21:34:18 -0000</span>. Since We'll all be superhuman by then, this talk will end at <span class="tzcon">30 Dec 2199 21:34:19 -0000</span>.</p>
Blah blah blah blah blah
```

## Get in touch

```
If you find a bug,
That's not good;
Create an issue,
Or code a PR.

If you wish to say thanks,
To me for this lib;
You can tweet me a note,
or open an issue of graditude.
```