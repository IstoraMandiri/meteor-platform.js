# Platform.js Meteor Package

**A platform detection library that works on nearly all JavaScript platforms.**

The [platform.js](https://github.com/bestiejs/platform.js/) library packaged for Meteor.

## Installation

|Meteor >= 0.9 | Meteor < 0.9 |
|--------------|--------------|
| `meteor add hitchcott:platform` | `mrt add platform.js` |


## Usage

Simply refer to the `platform` object within your app, which gives you access to the values below:


### Access `platform` on Client

```
{
  "description": "Chrome 36.0.1985.125 on OS X 10.9.2",
  "layout": "Blink",
  "manufacturer": null,
  "name": "Chrome",
  "prerelease": null,
  "product": null,
  "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36",
  "version": "36.0.1985.125",
  "os": {
    "architecture": 32,
    "family": "OS X",
    "version": "10.9.2"
  }
}
```


### Access `platform` on Server

```
{ description: 'Node.js 0.10.28 on Darwin 64-bit',
  layout: null,
  manufacturer: null,
  name: 'Node.js',
  prerelease: null,
  product: null,
  ua: null,
  version: '0.10.28',
  os:
   { architecture: 64,
     family: 'Darwin',
     version: null,
     toString: [Function] },
  parse: [Function: parse],
  toString: [Function: toStringPlatform]
}
```

### Use `platform.parse` anywhere

```
var info = platform.parse('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7.2; en; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 11.52');
info.name; // 'Opera'
info.version; // '11.52'
info.layout; // 'Presto'
info.os; // 'Mac OS X 10.7.2'
info.description; // 'Opera 11.52 (identifying as Firefox 4.0) on Mac OS X 10.7.2'
```

For the full API check out the [platform.js github page](https://github.com/bestiejs/platform.js/).


## Credits / License

* Library & Package Available under MIT
* [Platform.js](http://mths.be/platform) by [John-David Dalton](http://allyoucanleet.com/), 2010
* Packaged for Meteor by [Chris Hitchcott](mailto:hitchcott@gmail.com), 2014

