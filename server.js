let url = require('url')
let baseURL = "https://airindia.com/fares/calculate?from=delhi&to=detroitand"
let parsedUrl = url.parse(baseURL, true)
console.log(parsedUrl.query)
console.log(parsedUrl.pathname)
console.log(parsedUrl.protocol)