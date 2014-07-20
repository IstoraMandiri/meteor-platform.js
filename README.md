# Platform.js Meteor Package

**A platform detection library that works on nearly all JavaScript platforms.**

For full library documentation please refer to [platform.js on github](https://github.com/bestiejs/platform.js/).

## Usage

Install using meteorite

```
$ mrt add platform.js
```

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


## Credits / License

* Lib & Package Available under MIT
* [Platform.js](http://mths.be/platform) by [John-David Dalton](http://allyoucanleet.com/), 2010
* Packaged for Meteor by [Chris Hitchcott](mailto:hitchcott@gmail.com), 2014

