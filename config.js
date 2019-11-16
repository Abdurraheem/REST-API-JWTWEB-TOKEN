const fs = require('fs')
const path = require('path')


function log (message /*: string */) {
  console.log(`[dotenv][DEBUG] ${message}`)
}

const NEWLINES_MATCH = /\n|\r|\r\n/

//Populates process.env from .env file
function config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {
  let dotenvPath = path.resolve(process.cwd(), '.env')
  let encoding /*: string */ = 'utf8'
  let debug = false
  let obj = {}
  if (options) {
    if (options.path != null) {
      dotenvPath = options.path
    }
    if (options.encoding != null) {
      encoding = options.encoding
    }
    if (options.debug != null) {
      debug = true
    }
  }

  try {

let env_vars =  fs
   .readFileSync(path.resolve(__dirname, './.env'))
   .toString()
   .split(NEWLINES_MATCH)
   .filter(x => x)
   .filter(x => !x.startsWith('#'))
   .map( data =>{
      obj[data.split('=')[0].trim()] = data.split('=')[1].trim()
    })
    Object.keys(obj).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
        process.env[key] = obj[key];
      } else if (debug) {
        log(`"${key}" is already defined in \`process.env\` and will not be overwritten`)
      }
    })
    return { obj }
  } catch (e) {
    return { error: e }
  }
}
module.exports.config = config;