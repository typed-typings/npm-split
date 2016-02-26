import split = require('split')
import stream = require('stream')
import fs = require('fs')

const readable = new stream.Readable()

readable
  .pipe(split())
  .pipe(fs.createWriteStream('foo.js'))


split(/\n/, null, { maxLength: 1000 })
split(JSON.parse, null, { maxLength: 1000 })
split(null, JSON.parse, { maxLength: 1000 })
