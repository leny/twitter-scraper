# @leny/twitter-scraper

[![NPM version](http://img.shields.io/npm/v/%40leny%2Ftwitter-scraper.svg)](https://www.npmjs.org/package/%40leny%2Ftwitter-scraper) ![Downloads counter](http://img.shields.io/npm/dm/%40leny%2Ftwitter-scraper.svg)

> A simple scraper to gather users' stats from twitter profile.

* * *

## Usage

### Installation

To use **@leny/twitter-scraper**, you must at first install it.

    npm install --save @leny/twitter-scraper

### Usage

Simply import and call the function with the twitter username you want to scrap stats.

```javascript
	import scraper from "@leny/twitter-scraper";
	
	(async () => {
		const {
			tweets,
			following,
			followers,
			favorites,
		} = await scraper("leny_be");
	})();
```

The function returns and object with four properties, which are numbers or `null`, if the parsing fails.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.

## License
Copyright ©2019 Leny  
Licensed under the MIT license.
