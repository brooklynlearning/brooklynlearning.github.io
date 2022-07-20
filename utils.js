var templaterRE = /\$(\w+(?:-\w+)*)/g
var numberRE = '^-?\\d+(?:\\.\\d+)?%?'
var comparisonRE = '\\b(?:(?:more|less) than|of)\\b'
var equalRE = / *= */
let eLastValue
onlyWordCommaRE = / *, *(?=\w)/
var commaRE = / *, *(?=\w)/
let quoteRE = /^(?:".*?"|'.*?')/
original = console.log
const consoleColors = {
    Reset: '\x1b[0m',
    Bright: '\x1b[1m',
    Green: '\x1b[32m',
    Blue: '\x1b[34m',
    Red: '\x1b[31m',
}
function blank() {
    return '$input'
}

const seasons = ['autumn', 'winter', 'spring', 'summer']
const nestedobj = {
    a: 1,
    b: 2,
    c: { a: 1, b: 22, D: { a: 1, b: 2, ccc: 33 } },
}
const aobj = { a: 1, b: 2, c: 3 }
const bobj = { aa: 1, bb: 2, cc: 3 }
const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
const TABINPUT = '\n\t$c\n'
const HTMLTAGS = [
    'p',
    'div',
    'a',
    'section',
    'main',
    'img',
    'svg',
]
const AGAIN = 'again'
const SKIP = 'skip'
const NEXT_LEVEL = 'nextlevel'
const INCORRECT = 'incorrect'
const CONTINUE = 'CONTINUE'
const DONE = 'DONE'
const CORRECT = 'CORRECT'
const IN_PROGRESS = 'IN_PROGRESS'
const NEXT = 'NEXT'
const STOP = 'STOP'
const z = 'z'
const SUCCESS = 'SUCCESS'

const LEADER_KEY = ';'
boop = 'BOOP'
a = 'a'
b = 'b'
alist = ['a', 'b', 'c', 'd', 'e']
const nativeConstructors = [
    'Array',
    'Function',
    'Object',
    'Promise',
    'String',
    'Number',
    'Null',
    'Undefined',
    'RegExp',
]






function isReferenceError(e) {
    return e.constructor.name == 'ReferenceError'
}

function isSyntaxError(e) {
    return e.constructor.name == 'SyntaxError'
}
function blue(s, key = 'blue') {
    const reset = '\x1b[0m'
    const bright = '\x1b[1m'
    const green = '\x1b[32m'
    const blue = '\x1b[34m'
    const red = '\x1b[31m'
    const dict = {
        green,
        blue,
        red,
    }
    if (!dict.hasOwnProperty(key)) {
        s += ': ' + key
        key = 'blue'
    }
    return console.log(bright + dict[key] + s + reset)
}
function dogLogFactory() {
    const Reset = '\x1b[0m'
    const Bright = '\x1b[1m'
    const Red = '\x1b[31m'
    const Green = '\x1b[32m'
    const Blue = '\x1b[34m'

    function info() {
        const [name, lineNumber] = getStackInfo()
        return name + ': ' + lineNumber
    }

    let count = 1

    return function lambdaDisplay(...args) {
        let message = `   [count ${count++}]`
        original(
            Bright + Red + info() + Blue + message + Reset,
            ...args
        )
    }
}

const WordToNumberDictionary = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    oneThousand: 1000,
    nineThousand: 9000,
    million: 1000000,
    billion: 1000000000,
    trillion: 1000000000000,
}

function trace(fn) {
    return function lambda(...args) {
        try {
            return fn(...args)
        } catch (e) {
            console.log({ e, args })
            throw 'trace error'
        }
    }
}
function getFunctionInfo(s) {
    s = s.toString().trim()
    let type = getFirstWord(s)
    let parameters
    let properties
    let returnValues

    let name = getFunctionName(s)
    if (!name) return
    if (test(/^[A-Z]\w*?Component$/, name)) type = 'component'

    switch (type) {
        case 'component':
        case 'function':
        case 'class':
            break
        case 'var':
        case 'const':
            type = 'variable'
            break
        case 'async':
            type = 'function'
            break
        case 'if':
        case 'for':
        case 'while':
        case 'let':
            return
        default:
            return
    }

    if (type == 'function') {
        parameters = getParameters(s)
        returnValues = findall(/return (\w+) *$/gm, s)
    }

    if (type == 'class') {
        properties = getClassPropertiesFromString(s)
    }

    return {
        body: s,
        name,
        type,
        properties: properties,
        parameters,
        returnValues,
    }
}
var dog = display
var pairlog = display

function display(s, b) {
    const Reset = '\x1b[0m'
    const Bright = '\x1b[1m'
    const Blue = '\x1b[34m'
    const Red = '\x1b[31m'
    const [name, lineNumber] = getStackInfo()
    const message = name + ': ' + lineNumber
    original(Bright + Red + message, Blue, s, Reset, b)
}

if (typeof window !== 'undefined') {
    module = {}
    module.exports = {}
    require = () => ({})
}
function noop() {
    return
}
function isUrl(s) {
    return s.startsWith('http')
}

function getNumbersAndVariables(s) {
    return match(/-?\d+(?:\.\d+)?%?|\b[abcxyz]\b/g, s)
}

function getNumberAndVariable(s) {
    return search(/(\d+)([a-zA-Z]*)/, s).map(toNumber)
}

function moveToFront(items, target) {
    items.sort((a, b) =>
        a == target ? -1 : b == target ? 1 : 0
    )
    return items
}

function lowHigh(x) {
    if (isObject(x)) {
        const items = Object.entries(x)
        if (items[0][1] > items[1][1]) {
            return [items[1][0], items[0][0]]
        }
        return [items[0][0], items[1][0]]
    }
}

function pairWith(fn, ...args) {
    return function lambda(x, i, arr) {
        return [x, fn(x, ...args)]
    }
}

function isImport(s) {
    return test(/^import|const {|require|^from/, s)
}

function replaceInner(r, f, s) {
    return s.replace(r, (_, x) => {
        const regex = RegExp(boundary(rescape(x)))
        //console.log([_, x, regex])
        return _.replace(regex, f)
    })
}

function reWrap(s, capture) {
    if (isString(s)) {
        if (/^\(/.test(s)) {
            return s
        }
    }

    if (isArray(s)) {
        s = s.join('|')
    }

    if (isObject(s)) {
        s = Object.keys(s).join('|')
    }

    capture = capture ? '' : '?:'
    return `(${capture}${s})`
}

function reStr(r) {
    return r.toString().replace(/^\/|\/\w*$/g, '')
}

function runDemo(fn) {
    function runCodeTest(fn, a, b) {
        /* not in use */
        let equality = stringify
        let code = stringcall(fn, a)
        let A = eval(code)
        let B = eval(parens(b))
        return equality(A) == equality(B)
    }
    let answer
    function getDemoStringFromInsideTheFunction(fn) {
        let s = search(/\/\*(.*?)\*\//s, fn.toString())
        s = s.replace(/^ *\**/gm, '')
        s = smartDedent(s)
        if (/-->/.test(s)) {
            let [a, b] = split(s, /-->/)
            answer = b
            return a
        }
        return s
    }

    const s = getDemoStringFromInsideTheFunction(fn)
    const value = fn(parseJSON(s))
    if (!value) return null
    if (answer) {
        answer = parseJSON(answer)
        console.log(stringify(answer) == stringify(value))
        console.log({ answer, value })
    } else {
        console.log(value)
    }
    return value
}

function mode(a) {
    const count = {}

    a.forEach((e) => {
        if (!(e in count)) {
            count[e] = 0
        }
        count[e]++
    })

    let bestElement
    let bestCount = 0

    Object.entries(count).forEach(([k, v]) => {
        if (v > bestCount) {
            bestElement = k
            bestCount = v
        }
    })

    return bestElement
}

function trimAround(s) {
    const ar = s.split('\n').filter(exists)
    const start = ar.map(getIndent)
    const startValue = mode(start)

    const end = ar.map((x) => search(/ *$/, x).length)
    const endValue = mode(end)
    return ar.map((x) => {
        return endValue
            ? x.slice(startValue, -endValue)
            : x.slice(startValue)
    })
}

function isExpression(s) {
    return /\bx\b/.test(s)
}

const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

function filterf(x) {
    return (a) => filter(a, x)
}
function logf(f) {
    return function lambda(x) {
        const value = f(x)
        if (!value) {
            console.log('[NO VALUE @logf]')
            return value
        }
        blue('-'.repeat(20))
        console.log(value)
        blue('-'.repeat(20))
        return value
    }
}

function timeoutf(f, delay = 100) {
    return function lambda(x) {
        stamp('Starting Timeout')
        setTimeout(() => {
            const value = f(x)
            stamp('Finished with Timeout')
        }, delay)
    }
}

class StandardObject {
    constructor(store = {}) {
        this.store = store
    }
    get length() {
        return Object.keys(this.store).length
    }
    get keys() {
        return Object.keys(this.store)
    }
    get values() {
        return Object.values(this.store)
    }
    get entries() {
        return Object.entries(this.store)
    }
    has(key) {
        return this.store.hasOwnProperty(key)
    }
    get(key) {
        return this.store[key]
    }
}

function isError(x) {
    return x.constructor.name.includes('Error')
}

function isSet(x) {
    return x.constructor.name == 'Set'
}

function normalizePath(a, b) {
    return a + b
}

function stringify(s, birth) {
    return !exists(s)
        ? ''
        : isPrimitive(s)
        ? s
        : isFunction(s)
        ? s.toString()
        : JSON.stringify(s, birth, 2)
}

function isLast(i, a) {
    return a.length - 1 == i
}

function variableExists(v) {
    const expr = `typeof ${v} != 'undefined'`
    return eval(expr)
}

function functionStringBirth(s) {
    const watcher = new Watcher()
    return !exists(s)
        ? ''
        : isPrimitive(s)
        ? s
        : isFunction(s)
        ? s.toString()
        : JSON.stringify(s, replacer, 2)

    function replacer(k, v) {
        const name = v.constructor.name
        if (k.startsWith('_')) return //isPrivate//
        if (name == 'Object' || name == 'Array') {
            return v
        }

        if (name == 'Function' || name == 'AsyncFunction') {
            return v.toString()
            // a lambda function ... wont remember the state
        }
        if (name == 'String' || name == 'Number') {
            return stringify(v)
        } else if (v) {
            return {
                constructorName: v.constructor.name,
                constructorValue: mapState(v),
            }
        }
    }
}

function log(s) {
    console.log(s)
}

function panify(s, i, a) {
    if (i == 0) s += ''
    else if (i == a.length - 1) {
        if (s.length > 1) s = ' ' + s
    }
    //else if ( a[i + 1] == '.')
    else s = ' ' + s
    //else s = wrap(s, ' ')
    return divify('span', '', s)
}

function vueColor(item, key, extra = '') {
    item = item.replace(/\$/, '')
    return `<span :style="{color: colors[${
        key || item
    }]}">{{${item}}}${extra}</span>`
}

function isPrivate(s) {
    return s.startsWith('_')
}

function reconfigure(state, options) {
    if (!state.hasOwnProperty('config')) {
        console.log(
            'reconfigure always targets the config property'
        )
        return
    }
    assignExisting(state.config, options)
}

function toFunction(options = {}) {
    let name = options.name || ''
    let params = options.params || []
    let body = options.body || ''
    let mode = options.mode || Function
    if (mode == String) {
        return toStringFunction(name, params, body)
    }

    if (options.return) {
        body = 'return ' + options.return
    }
    return new Function(...params, body)
}

function getArgsFromCallable(s) {
    let [a, b] = search(/(\w+)\((.*?)\)$/, s)
    return {
        caller: a,
        args: split(b, /, +/),
    }
}

function oncef(fn) {
    let done = 0
    return function lambda(...args) {
        if (done) {
            console.log('already done')
            return
        }
        done = 1
        return fn(...args)
    }
}

function editStorage(storage, fn) {
    for (let [a, b] of storage.entries) {
        for (let [aa, bb] of Object.entries(b)) {
            const value = fn(aa, bb, a)
            if (value == null) continue
            storage.store[a][aa] = value
        }
    }
    return storage
}

function enforce(s) {
    s = s.replace(/[a-zA-Z]+$/, (x) => {
        return singlequote(x)
    })
    let allGood = eval(s)
    if (!allGood) {
        let code = s.replace(/==/, '=')
        eval(code)
    }
}

function isCodeExpression(s) {
    const regex = /^(?:[a-zA-Z]\w+\()/
}
function isColor(s) {
    return roygbiv.includes(s) || /^#/.test(s)
}

function arithmetic(operator, a, b) {
    const answer = eval(`${a} ${operator} ${b}`)

    if (operator == '*') operator = '\\times'
    if (operator == '/') operator = '\\div'

    const question = `${a} ${operator} ${b} =\\medspace?`
    const expression = `${a} ${operator} ${b} = ${answer}`
    const payload = { answer, question, expression }
    return payload
}

function coerceTo(x, mode) {
    assert(mode)
    if (mode == 'array' || mode == Array) {
        if (isArray(x)) {
            return x
        }
        if (isString(x)) {
            return /\n/.test(x)
                ? x.split(/\n/)
                : / /.test(x)
                ? x.split(' ')
                : x.split('')
        }
        throw 'not done'
    }

    if (mode == 'string' || mode == String) {
        if (isString(x)) {
            return x
        }
        if (isArray(x)) {
            return x.join(' ')
        }
        throw 'not done'
    }
    throw 'not done'
}

function stringDictionaryEntry(a, b) {
    const parse = (x) => {
        if (isString(x)) {
            return quotify(x)
        }
        return toStringArgument(x)
    }
    return `'${a}': ${parse(b)},`
}

function notIn(ref) {
    if (isObject(ref)) {
        ref = Object.keys(ref)
    }

    return function lambda(s) {
        return !ref.includes(s)
    }
}

function lineFilter(s, fn) {
    return join(s.split('\n').filter(fn))
}

function info(state, ...keys) {
    const value = reduce(keys, (key) => state[key])
    console.log('INFO!!!', value)
    return value
}

function isCssWord(s) {
    return /^[\w-]+$/.test(s)
}

function isMp3(x) {
    const e = ['m4a', 'wav', 'mp3']
    return e.includes(getExtension(x))
}

function getProseWords(s) {
    return s.match(/\b\w[\w\'-]*\w\b/g)
}

function puppetVisitor(x, parent) {
    return
    if (x == null) return `[Primitive]: null`
    const name = x.constructor.name
    const known = {
        TreeCursor: lookNode,
        BufferNode: lookNode,
        BufferNode$1: lookNode,
        Tree: lookNode,
        TreeNode: lookNode,
    }

    if (name.endsWith('Error')) {
        console.log()
        return x.stack
    }

    if (name == 'Object' || name == 'Array') {
        return x
    }

    if (name == 'Function' || name == 'AsyncFunction') {
        return x.name
        return `[Primitive]: ${x.name}`
    }

    if (name == 'Boolean') {
        return x
        return `[Primitive]: ${x}`
    }

    if (name == 'Number') {
        return x
        return `[Primitive]: ${x}`
    }

    if (name == 'String') {
        return x
        return `[Primitive]: [${x || 'empty-string'}]`
    }

    if (name in known) {
        const value = known[name](x)
        return value
    }
    return `[Name]: ${name || 'undefined'}`
}

function lookDiv(x) {
    return {
        name: x.className || x.tagName,
        text: x.textContent,
        pos: getBoundingClientRect(x),
        color: x.style.background,
    }
}

function forIterationArg(s) {
    if (s.endsWith('s')) {
        return s.slice(0, -1)
    }
    const dict = {
        children: 'child',
    }

    let match = search(/children$/i, s) || ''
    return dict[match.toLowerCase()] || 'item'
}
const knownAttrs = {
    //submit: ['@submit', 'onSubmit'],
    //click: ['@click', 'onClick'],
    //x: ['@x', 'onX'],
    //x: ['@x', 'onX'],
    //x: ['@x', 'onX'],
    //x: ['@x', 'onX'],
    //submit: ['@submit', 'onSubmit'],
}
function vueHelper(key, value) {
    let [a, b] = _vueHelper(key, value)
    return `${a}="${b}"`
}
function _vueHelper(key, value) {
    if (key == '@') {
        return ['@' + value, value]
    }

    if (key == ':') {
        if (value.includes('=')) {
            let [a, b] = value.split('=')
            return [':' + a, b]
        }
        return [':' + value, value]
    }
    if (value == null && key in knownAttrs) {
        return knownAttrs[key]
    }
    let vKey = vmap[key] || key
    if (key == 'for') {
        value = `(${forIterationArg(value)}, i) in ${value}`
    }

    return [vKey, value]
}

function singleWordParser(s) {
    if (s.includes('=')) {
        let [a, b] = split(s, '=')
        let div = 'div'
        if (a == 'for') {
            let arg = depluralize(b)
            let stuff = `(${arg}, index) in ${b}`
            className = toDashCase(arg) + '-item'
            return toOpeningTag('div', {
                class: className,
                'v-for': stuff,
            })
        }
    }
    if (s == 'div' || s == 'container') {
        let containerClass = 'container-' + 100
        return toOpeningTag(div, {
            class: containerClass,
        })
    }

    if (s == 'transition') {
        return toOpeningTag(s, {
            mode: 'out-in',
            name: 'fade',
        })
    }

    if (s == 'component') {
        return divify(s, {
            ':is': 'currentComponent',
        })
    }
    if (test(/^item\.\w+$/, s)) {
        let className = state.forArg
            ? state.forArg + '-' + toDashCase(s)
            : toDashCase(s)

        return divify('div', { class: className }, vueText(s))
    }

    return divify('div', { class: toDashCase(s) }, vueText(s))
    return toOpeningTag(div, { class: s })
}

function announceError(e) {
    console.log(['ERROR', getCaller(), e.toString()])
}

function repf(a, b, flags = 'g') {
    return function replacerLambda(s) {
        return replace(a, b, s, flags)
    }
}

function hasOverlap(a, b) {
    return a.some((x) => b.includes(x))
}

function typeOf(x) {
    if (x == null) return 'null'
    const name = x.constructor.name
    switch (name) {
        case 'String':
            return name + '-variable'
        default:
            return name
    }
}

function jshint(source) {
    const JSHINT = require('../jshint.js')

    const predef = {
        Vue: true,
        prettier: true,
        clearTimeout: true,
        setTimeout: true,
        console: true,
    }

    const options = {
        asi: true,
        debug: true,
        evil: true,
        eqnull: true,
        esversion: 8,
        expr: true,
        funcscope: true,
    }

    JSHINT.jshint(source.toString(), options, predef)
    return JSHINT.data()
}

function puppetVisitorDeep(x) {
    return runner(x)
    function runner(x) {
        if (x == null) return `[Primitive]: null`
        if (isPrimitive(x)) {
            return x
        }

        if (isSet(x)) {
            return Array.from(x)
        }

        const name = x.constructor.name
        if (name == 'Object' || name == 'Array') {
            return x
        }

        if (name == 'Function' || name == 'AsyncFunction') {
            return `[Primitive]: ${x.name}`
        }
        return reduceObject(x, (k, v) => {
            return [k, runner(v)]
        })
    }
}

function shortValue(s) {
    if (s.includes('\n')) {
        return (
            s.match(/.+/)[0] +
            ' ... ' +
            opposite(search(/[\[\{]/, s))
        )
    }
    return s
}

function lookNode(x, s) {
    if (!s) return x.name
    if (!x) return
    const value = shortValue(s.slice(x.from, x.to))
    const o = {
        name: x.name,
        from: x.from,
        to: x.to,
        value: value,
        //long: s.slice(x.from, x.to)
    }
    return o
}

function isZdate(s) {
    return isString(s) && s.length  == 20 && s.endsWith('z')
}
function datestamp(date) {
    if (isZDate(date)) {
        date = new Date(date)
    }
    if (isNumber(date) && len(date) === 10) {
        date *= 1000
    }
    const [month, day, year] = getMDY(date)
    let _month = month.toString().padStart(2, 0)
    let _day = day.toString().padStart(2, 0)
    let _year = year
    return `${_month}-${_day}-${year}`
}

function getHMSM(date) {
    if (!date) date = new Date()
    else if (isString(date)) {
        date = new Date(date)
    }
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const ms = date.getMilliseconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    return [
        hours >= 12 ? hours - 12 : hours,
        minutes,
        seconds,
        ms,
        ampm,
    ]
}
function mutate(x, fn, ...args) {
    for (let [k, v] of Object.entries(x)) {
        const value = fn(v, ...args)
        if (value) x[k] = value
    }
}

function getDayAndMonth(date) {
    if (!date) date = new Date()

    var day = DAYS[date.getDay()]
    var month = MONTHS[date.getMonth()]
    return [day, month]
}
function datePhrase(s) {
    if (!s) s = 'day, month number year'
    const date = new Date()
    const [day, month] = getDayAndMonth(date)
    const [_, dayNumber, year] = getMDY(date)
    const number = ordinal(dayNumber)
    return templater(s, {number, day, month, year})
    
}

function ordinal(n, s = '') {
    return (
        n +
        ([, 'st', 'nd', 'rd'][(n % 100 >> 3) ^ 1 && n % 10] ||
            'th') +
        s
    )
}

function getMDY(date) {
    date = isPrimitive(date) ? new Date(date) : new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return [month, day, year]
}

function isString(s) {
    return typeof s === 'string'
}

function conditional(fn, condition) {
    return function lambda(x) {
        if (ftest(condition, x)) return fn(x)
        return x
    }
}

function isArray(a) {
    return Array.isArray(a)
}

function isObject(x) {
    return (
        Object.prototype.toString.call(x) == '[object Object]'
    )
}
function getConstructorName(x) {
    return x && x.constructor && x.constructor.name
}
function isObjectLiteral(x) {
    return getConstructorName(x) == 'Object'
}

function seeInfo(x) {
    //
    //waiting on me...
    //v=new x((vv) => vv()).then((y) => console.log(y))
    //console.log(v)
    //console.log(Object.keys(v))
    //console.log(v)
    //Object.getOwnPropertyNames(new x(identity))
    //console.log(Object.getOwnPropertyNames(new x(identity)))
    //Object.getOwnPropertyNames(x)
    //Object.getOwnPropertyNames
    //console.log(Object.getPrototypeOf({}).hasOwnProperty('__defineGetter__'))
    //return Object.getPrototypeOf(x).hasOwnProperty('__defineGetter__')
}

function mapState(state) {
    const name = state.constructor.name
    const ref = {
        Set: Array.from,
        RegExp: String,
        Watcher: 'seen',
        //'Storage': 'store',
    }
    if (ref.hasOwnProperty(name)) {
        const key = ref[name]
        return isFunction(key) ? key(state) : state[key]
    }
}

function reduceIterableHelper(acc, value, k) {
    if (isArray(value) && value.length == 2) {
        acc[value[0]] = value[1]
    } else if (!isNull(value)) {
        acc[k] = value
    }
    return acc
}
function reduceObject(o, fn = (k, v) => [k, v]) {
    return Object.entries(o || {}).reduce((acc, item, i) => {
        const value = fn(...item, i)
        return reduceIterableHelper(acc, value, item[0])
    }, {})
}
function reduceArray(a, fn) {
    if (isNestedArray(a)) {
        return a.reduce((acc, item, i) => {
            const value = fn(...item, i)
            return reduceIterableHelper(acc, value, item[0])
        }, {})
    } else {
        return a.reduce((acc, item, i) => {
            const value = fn(item, i)
            return reduceIterableHelper(acc, value, item)
        }, {})
    }
}
function reduce(items, fn) {
    if (!exists(items)) return {}
    const objectReducer = (k, v) => [k, v]

    if (isObject(items)) {
        return reduceObject(items, fn || objectReducer)
    }

    return reduceArray(items, fn || objectReducer)
}

function uncomment(s) {
    //return s.replace(/^\/\/ */, '')
    return s.replace(/^(?:\/\/|"|#) */, '')
}

function escapeNewlinesAndQuotes(s) {
    return s.replace(/[\n\'\"]/g, (x) => {
        switch (x) {
            case '\n':
                return '\\n'
            case "'":
                return "\\'"
            case '"':
                return '\\"'
        }
    })
}

function yes() {
    return true
}

function longShort(a, b) {
    if (isNumber(a)) {
        return a >= b ? [a, b] : [b, a]
    }
    return len(a) >= len(b) ? [a, b] : [b, a]
}

function shortLong(a, b) {
    if (isNumber(a)) {
        //console.log(a <= b, 'hi')
        //console.log(); throw ''
        return a <= b ? [a, b] : [b, a]
    }
    return len(a) <= len(b) ? [a, b] : [b, a]
}

function getLines(s, a, b) {
    let regex = ''
    let marker = '\\n.*'
    if (b) {
        if (a) {
            regex += '^.*\n'
            regex += marker.repeat(a - 1)
        }
        regex += '('
        regex += `(?:.*\\n){0,${b - 1}}.*`
        regex += ')'
    } else {
        regex += '('
        regex += '^.*'
        regex += `(?:\\n.*){0,${a - 1}}`
        regex += ')'
    }
    //console.log(regex)
    return search(regex, s)
}
function isSimilar(a, b) {
    //function runner(s) {
    //const words = getWords(getLines(s.trimStart(), 3), {mode:'code'})
    //return words
    //}

    function runner(s) {
        return s.trimStart().slice(0, 10).trim()
    }

    function runner(s) {
        return getLines(s.trimStart(), 0, 1).trim()
    }

    if (type(a) !== type(b)) return false
    if (!a || !b) return false
    if (isString(a)) {
        return runner(a) == runner(b)
        return (
            unique(...longShort(runner(a), runner(b))).length <
            3
        )
    }
    return true
}
function push(items, x, unique) {
    if (!x) return items
    if (isSet(x)) {
        x = Array.from(x)
    }
    if (unique) {
        if (isArray(x)) {
            for (let item of x) {
                if (!items.includes(item)) items.push(item)
            }
        } else if (!items.includes(x)) {
            items.push(x)
        }
    } else {
        isArray(x) ? items.push(...x) : items.push(x)
    }
    return items
}
function mergeState(state, key, value) {
    state[key] = merge(state[key], value)
    return state
}

function mergeProperty(state, key, value) {
    state[key] = merge(state[key], value)
    return state
}
function iterTest(s, items) {
    for (let i = 0; i < items.length - 1; i += 2) {
        if (test(items[i], s)) {
            return items[i + 1]
        }
    }
    return getLast(items)
}

function hasPeriod(s) {
    return s.includes('.')
}

function getFunction(key, s) {
    const functionRE = `^(?:(?:async )?function|const|var|class) ${key}[^]+?\\n}`
    return search(regex, s)
}

function argumentGetter(args) {
    if (args.length == 1) {
        return
    }
    return Array.from(args)
}
function argumentFiller(args, ...fillers) {
    if (args.length == 1) {
        return [fillers[0], args[0]]
    }
    return args
}

function toMilliseconds(s) {
    s = Number(s) || 0
    if (s >= 50) {
        return s
    }
    return s * 1000
}

function isAsync(x) {
    return x.constructor.name == 'AsyncFunction'
}

function partition(items, n = 2) {
    if (!isNumber(n)) {
        return partitionWithFunctions(...arguments)
    }
    const store = []
    for (let i = 0; i < items.length; i++) {
        if (i % n == 0) {
            store.push([])
        }
        getLast(store).push(items[i])
    }
    assert(store[0].length == n)
    return store
}

function getInterestingBindings(s) {
    const regex = /[a-zA-Z][\w.]{2,}(?=[\(\[\]])/g
    return Array.from(s.match(regex) || [])
}

function hasBracket(s) {
    return test(/{/, s)
}

function throwError(...args) {
    console.log(args)
    throw ''
}

function coinflip(n = 0.1) {
    return Math.random() > 1 - n
}

function isUtf(s) {
    const utfe = [
        'txt',
        'lang',
        'drafts',
        'js',
        'py',
        'vim',
        'json',
        'css',
        'html',
    ]
    return utfe.includes(getExtension(s))
}

s = `

`

function smartMore(s) {}
function opposite(s) {
    const dict = {
        '{': '}',
        visible: 'hidden',
        hidden: 'visible',
        '[': ']',
        '(': ')',
        true: false,
        false: true,
        '^': '$',
        '}': '{',
        ']': '[',
        ')': '(',
        1: 0,
        0: 1,
    }
    s = s.toString()
    return dict.hasOwnProperty(s) ? dict[s] : s
}

class CumulativeStorage {
    constructor(store) {
        this.store = store || {}
    }
    get value() {
        return this.store
    }
    add(...args) {
        addProperty(this.store, ...args)
    }
}

function addProperty(o, ...args) {
    if (args.length == 2) {
        return addPropertyLambda2(o, ...args)
    }

    if (args.length == 3) {
        if (args[2] == Array) {
            return addPropertyLambdaArray(o, ...args)
        }
        return addPropertyLambda3(o, ...args)
    }

    function addPropertyLambdaArray(o, key, value) {
        if (!o.hasOwnProperty(key)) {
            o[key] = []
        }
        isArray(value)
            ? o[key].push(...value)
            : o[key].push(value)

        return o
    }
}

function exists(input) {
    if (input == null) return false
    if (isString(input)) return input.trim().length > 0
    if (isArray(input)) return input.filter(exists).length > 0
    if (isObject(input)) return Object.keys(input).length > 0
    return true
}

function addPropertyLambda2(o, key, value) {
    if (o[key]) {
        if (isObject(value)) {
            Object.assign(o[key], value)
        } else if (isArray(value)) {
            o[key] = [...o[key], ...value]
        } else {
            if (isArray(o[key])) {
                push(o[key], value)
            }
            else {
                o[key] = [o[key], value]
            }
        }
        return o
    }

    o[key] = value
    return o
}

function addPropertyLambda3(o, parentKey, key, value) {
    if (!o.hasOwnProperty(parentKey)) {
        o[parentKey] = {}
    }
    o[parentKey][key] = value
    return o
}

function iterRange(...args) {
    const store = []
    args = gatherArgs(args)
    for (let i = args[0]; i <= args[1]; i++) {
        store.push(i)
    }
    return store
}

function isPureObject(x) {
    return x && x.constructor.name == 'Object'
}

function isThisFunction(s) {
    s = s.toString()
    return test(/\bthis\b/, s)
}

function rainbow(a, b = 10, stops = 20) {
    return rainbowStops(a, b, stops)

    function rainbowStop(h) {
        let f = (n, k = (n + h * 12) % 12) => {
            return (
                0.5 -
                0.5 * Math.max(Math.min(k - 3, 9 - k, 1), -1)
            )
        }
        let rgb2hex = (r, g, b) =>
            '#' +
            [r, g, b]
                .map((x) =>
                    Math.round(x * 255)
                        .toString(16)
                        .padStart(2, 0)
                )
                .join('')
        return rgb2hex(f(0), f(8), f(4))
    }

    function rainbowStops(a, length, stops) {
        let store = []
        let base = a
        for (let i = 0; i < length; i++) {
            let start = base + i
            let increment = start / stops
            console.log(increment)
            const value = rainbowStop(
                increment / length,
                1,
                0.5
            )
            store.push(value)
        }
        return store
    }
}

function average(a, b) {
    return (a + b) / 2
}

class Indexed extends StandardObject {
    constructor(store = {}) {
        super(store)

        this.tracker = exists(store)
            ? reduce(store, (k, v) => [
                  k,
                  { index: 0, done: !exists(v) },
              ])
            : {}

        this.key = this.keys[0]
        this.config = {
            autoIncrement: true,
            autoIncrement: false,
            modulus: false,
        }
    }

    get(index) {
        return this.store[this.key][index]
    }

    get index() {
        return this.tracker[this.key].index
    }

    set index(n) {
        if (this.isDone()) {
            if (this.config.autoIncrement) {
                this._incrementKey(this.key)
            }
            return
        }
        this.tracker[this.key].index = n
    }

    set indexOld(val) {
        if (this.get(val)) {
            this.tracker[this.key].index = val
        } else {
            this.tracker[this.key].done = true
            const done = this._incrementKey(this.key)
            if (done) {
                this.finished = true
            }
        }
    }

    get value() {
        return this.store[this.key][this.index]
    }
    get length() {
        return this.store[this.key].length
    }

    _incrementKey(key) {
        let count = 0
        while (count++ < this.keys.length) {
            key = modularIncrement(this.keys, key)
            if (this.tracker[key].done === false) {
                this.key = key
                return false
            }
        }
        return true
    }

    set(key) {
        this.key = key
    }

    isDone() {
        const done = this.index == this.length
        if (done) {
            this.tracker[this.key].done = true
        }
        return done
    }
}

function isObject(x) {
    return type(x) == 'Object'
}

function type(x) {
    return search(
        /object (\w+)/,
        Object.prototype.toString.call(x)
    )
}

function breaker(limit = 5) {
    if (typeof __once__ == 'undefined') {
        __once__ = 0
    }
    if (++__once__ == limit) {
        console.log()
        throw 'limit reached'
    }
}

function isNumber(s) {
    return (
        typeof s == 'number' || test('^-?\\d+(?:\\.\\d+)?$', s)
    )
}

function test(regex, s, flags = '') {
    try {
        return prepareRegex(regex).test(s)
    } catch (e) {
        console.log({ s })
        throw ''
    }
}

function range(...args) {
    let a
    let b
    let c
    if (args.length == 2 && isFunction(args[1])) {
        let store = []
        for (let i = 1; i <=  args[0]; i++) {
            store.push(args[1](i))
        }
        return store
    }
    if (!isPrimitive(getLast(args))) {
        c = args.pop()
    }

    if (args.length == 1) {
        if (isStringNumberRange(args[0])) {
            ;[a, b] = split(args[0], '-').map(Number)
            console.log(a, b)
        } else {
            b = args[0]
            a = 1
        }
    } else {
        ;[a, b] = args
    }

    if (isArray(b)) {
        b = b.length - 1
        a = 0
    }

    const store = []
    for (let i = Number(a); i <= Number(b); i++) {
        if (c) {
            if (c.toString() == [].toString()) store.push([])
            else if (c.toString() == {}.toString())
                store.push({})
        } else {
            store.push(i)
        }
    }
    return store
}

function isPrimitive(value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'symbol' ||
        typeof value === 'boolean'
    )
}

function textTable(items) {
    const matrix = new Matrix(items, { width: 4 })
    let t = ''
    matrix.iterate((value, k, v, i, linebreak) => {
        t += i + '. ' + value + '   '
        if (linebreak) t += '\n'
    })
    return t
}

function isDoubleIterable(items) {
    return isObject(items) || isNestedArray(items)
}

function isYouQuestion(s) {
    return isQuestion(s) && /\byou\b/.test(s)
}

function isQuestion(s) {
    const questionRE = RegExp(
        '^(?:[@$]?\\w+, )?' + ncg('', questionWords),
        'i'
    )
    return questionRE.test(s)
}

function isQuote(s) {
    return test(/^['"]/, s)
}

function isStringNumberRange(s) {
    return /^\d+-\d+$/.test(s)
}

class Tally {
    static toJSON() {
        return this.storage.value
    }
    constructor(items) {
        this.storage = tally(items || [], null)
    }
    highest() {
        const longest = getLongest(this.storage.values)
        const store = mapfilter(this.storage.entries, (x) => {
            return x[1] == longest && x[0]
        })
        return coerceToNullIf(store.length > 1, store[0])
    }

    lowest() {
        const lowest = getShortest(this.storage.values)
        const store = mapfilter(this.storage.entries, (x) => {
            return x[1] == lowest && x[0]
        })
        return coerceToNullIf(store.length > 1, store[0])
    }
}
function coerceToNullIf(condition, value) {
    if (condition) return null
    return value
}
function tally(arr, mode = Object) {
    const storage = new Storage({ _mode: Number })
    for (let item of arr) {
        storage.add(item)
    }
    return mode == Object ? storage.value : storage
}

function spellcheckf(dict) {
    if (!dict && isNode()) {
        dict = require('/home/kdog3682/pmwb.json')
    }
    let regex = RegExp(`\\b${reWrap(dict)}(?![\'\"\\w])`, 'g')
    return function spellcheck(s) {
        return trim(s).replace(regex, (x, offset, o) => {
            if (/[.\'\"]/.test(o.charAt(offset - 1))) {
                return x
            }
            return dict[x] || x
        })
    }
}

function isNestedArray(x) {
    return isArray(x) && isArray(x[0])
}

function changeDollars(s, replacement = '') {
    return s.replace(/\$(?=[a-zA-Z])/g, replacement)
}

function removeEs6(s) {
    return s.replace(/^import.+\n*|^export /gm, '')
}

function isLink(s) {
    return getExtension(s) == 'css'
}

function regexElongation(s) {
    return `(?:${s})+`
}

function getBindingName(s) {
    const bindingRE =
        /^(?:def|class|const|var|(?:async )?function) (\w+)/
    return search(bindingRE, s)
}

function getFunctionName(s) {
    if (isFunction(s)) return s.name
    return search(
        /^(?:def|class|const|var|(?:async )?function) (\w+)/,
        s
    )
}

function isFunction(x) {
    return typeof x === 'function'
}

function isPlural(s) {
    return test(/s$/, s)
}

function toSpaces(n = 4, tabs = 0) {
    if (!n) {
        return ''
    }
    if (tabs)
        return isNumber(n)
            ? '\t'.repeat(n / 4)
            : '\t'.repeat(n.length / 4)
    return isNumber(n) ? ' '.repeat(n) : n
}

function replace(regex, replacement, s, flags = 'gm') {
    return s.replace(prepareRegex(regex, flags), replacement)
}

class Watcher {
    constructor(fn) {
        this.fn = fn || identity
        this.seen = new Set()
        this.count = 0
    }
    filter(items) {
        return items.filter((item, i) => {
            return this.isFresh(item)
        })
    }
    isFresh(key) {
        let value = this.fn(key)
        if (this.seen.has(value)) {
            this.count += 1
            return false
        }
        this.seen.add(value)
        this.count = 0
        return true
    }
    has(key) {
        return this.seen.has(key)
    }
}

function isHtmlFile(s) {
    return /\.html$/.test(s)
}

function isCssFile(s) {
    return /\.css$/.test(s)
}

function isJavascriptFile(s) {
    return /\.js$/.test(s)
}

function getQuotes(s) {
    return findallStrings(s)
    //
}

function findKeyFactory(mode, index = 0) {
    const method = mode == 'single' ? 'find' : 'filter'
    return function findKeyRunner(x, kt, vt) {
        const value = Object.entries(x)[method]((x) => {
            if (kt) return kt(x[0])
            if (vt) return vt(x[1])
        })

        if (mode == 'single') {
            return value && value[index]
        }

        if (mode == 'multiple') {
            return value.map((x) => x[index])
        }
    }
}

const findKey = findKeyFactory('single')
const findKeys = findKeyFactory('multiple')

function getShortestLongest(mode) {
    const compare =
        mode == 'longest' ? (a, b) => a > b : (a, b) => a < b
    const mathFn = mode == 'longest' ? Math.max : Math.min
    const defaultMode = null
    //const defaultMode = mode == 'longest' ? Number : null

    return function getter(
        arr,
        measure = len,
        mode = defaultMode
    ) {
        let asObject
        let keys
        if (isObject(arr)) {
            keys = Object.keys(arr)
            arr = Object.values(arr)
            asObject = true
        }
        if (arr.every(isNumber)) {
        }

        const value = arr.reduce(
            (acc, item, i) => {
                if (!item) return acc
                const itemLength = measure(item, i)
                if (mode == Number)
                    return mathFn(itemLength, acc)
                const accLength = isNumber(acc)
                    ? acc
                    : measure(acc, i)
                return compare(accLength, itemLength)
                    ? acc
                    : item
            },
            mode == Number ? 0 : arr[0]
        )
        if (asObject) {
            let index = arr.indexOf(value)
            console.log(index)
            return keys[index]
        }
        return value
    }
}

const getShortest = getShortestLongest('shortest')
const getLongest = getShortestLongest('longest')

function findCaller(target, offset = 0) {
    const stack = getStackTrace()
    console.log(stack, target)
    console.log()
    throw ''
    const index =
        stack.findIndex((x) => test(target, x[0])) + offset
    const [name, line] = index
    return { name, line }
}

function hasSymbol(s) {
    return test(/[^\sa-zA-Z]/, s)
}

function toArray(val) {
    if (isPrimitive(val)) return [val]
    return Array.from(val)
}
function looksLikeRegex(s) {
    return test(/^\//, s)
    return test(/^\/.*?\/\w*$/, s)
}

function prepareRegex(r, flags) {
    if (!isString(r)) return r
    if (looksLikeRegex(r)) {
        return RegExp(...search(/^\/(.*?)\/(\w*)$/, r))
    }
    return RegExp(r, flags || '')
}

function wordToNumber(s) {
    return numberWords.indexOf(s.toLowerCase())
}

function toStringDictionaryEntry(k, v) {
    return singlequote(k) + ': ' + singlequote(v) + ','
}

function comment(s) {
    return '// ' + s
}

function hasSelector(s) {
    return test(/^[.#]/, s)
}

function isUndefined(x) {
    return x == undefined
}

function isSelector(s) {
    return test(/^[.#][\w-]{1,30}$/, s)
}

function boundary(s) {
    if (isArray(s)) {
        s = ncgRunner(s)
    }
    return wrap(s, '\\b')
}

function getVueErrorInfo(e) {
    return e.stack
        .replace(/file.*?(?=\w+\.js)|at invo[^]+/g, '')
        .trim()
    let s = e.stack.replace(/vue.js.+/s)

    let [name, message] = search(/(\w+): *(.*)/, s)
    let regex = /^ *at (\S+) \((.*?):(\d+):(\d+)/gm
    let stack = findall(regex, s)
    let result = stack.map(([caller, file, line, ch], i) => {
        line = Number(line)
        ch = Number(ch)
        if (caller.includes('.')) {
            let [className, method] = caller.split('.')
            return {
                class: className,
                method,
                file,
                line: Number(),
                ch,
            }
        }
        return { caller, file, line }
        return { caller, file, line, ch }
    })
    result[0].message = message
    return result
    return result[0]
}

function hasSpaces(s) {
    return s.includes(' ')
}

function isNull(x) {
    return x == null
}

function toStringCallable(a, b) {
    return a + parens(b)
}

function uncapitalize(s) {
    return s.replace(/\w/, (x) => x.toLowerCase())
}

function insertBelow(s, key, payload) {
    const regex = '^.*?' + key + '.*'
    return replace(
        regex,
        (x) => {
            const indentation = getIndent(x) + 4
            return x + '\n' + indent(payload, indentation)
        },
        s,
        'm'
    )
}

function linebreak(s) {
    return wrap('-'.repeat(20))
}

function hasNewline(s) {
    return s.trim().includes('\n')
}

function toNumber(val) {
    return isNumber(val) ? Number(val) : val
    if (isString(val) && test(/[\/ ]/, val)) return val
    var n = parseFloat(val)
    return isStringMathExpression(val) || isNaN(n) ? val : n
}

function removeQuotes(s) {
    if (test(/^[\'\"]/, s)) {
        return s.slice(1, -1)
    }
    return s
}

function blockComment(s) {
    return `/* ${s} */`
}

function modularIncrementNumber(current, increment, min, max) {
    if (!current) current = 0
    if (current + increment > max) {
        if (current == max) return min
        return max
    }
    if (current + increment < min) {
        if (current == min) return max
        return min
    }

    return current + increment
}

function unique(a, b) {
    if (isNestedArray(a)) {
        const seen = []
        const store = a.filter((x) => {
            if (seen.includes(x[0])) return false
            seen.push(x[0])
            return true
        })
        return store
    }

    if (b) {
        return Array.from(
            new Set(
                a.filter(
                    (item) => !Array.from(b).includes(item)
                )
            )
        )
    }
    return isArray(a) && a.length > 1
        ? Array.from(new Set(a))
        : a
}

function numbered(text) {
    if (!text) return ''
    let count = 0

    if (isArray(text)) {
        return text
            .map((item, i) => 1 + i + '  ' + item)
            .join('\n')
    }

    function parser(s) {
        return ++count + '  ' + s
    }

    return replace('^', parser, text, 'gm')
}

function getLast(arr, n = -1) {
    return arr[arr.length + n]
}

function find(items, fn, reverse) {
    if (reverse) {
        for (let i = items.length - 1; i >= 0; i--) {
            if (ftest(fn, items[i])) {
                return items[i]
            }
        }
    } else {
        return items.find(fn)
    }
}
function matchall(regex, s) {
    regex = addGFlag(regex)
    let match
    let store = []
    while (exists((match = regex.exec(s)))) {
        store.push(match)
    }
    return store
}

function toggleFunction(a, b, duration) {
    a()
    setTimeout(() => {
        b()
    }, duration)
}

class ErrorWatcher {
    constructor() {
        this.threshold = 20
        this.count = 0
    }
    watch() {
        if (this.count++ > this.threshold) {
            throw new Error('surpasses threshold')
        }
    }
}

function getClassString(x) {
    if (!x) {
        return ''
    }
    let s = x.toString()
    if (s == '[object Object]') {
        return x.constructor.toString()
    }
    return s
}

function getClassMethods(s) {
    return findall(
        /^    (?:async |def )?(\w+)\(/gm,
        s.toString()
    )
}
function hasSharedKeys(a, b) {
    return (
        intersection(Object.keys(a), Object.keys(b)).length > 0
    )
}
function isPublic(s) {
    return test(/^\w+$/, s)
}

function getClassPropertiesFromString(s) {
    const matches = findall(
        /^    (?:(async|get|set) )?(\w+) *\(/gm,
        s.toString()
    )
    return matches.map(([a, name]) => {
        let type = 'method'
        if (a == 'get') type = 'getter'
        else if (a == 'set') type = 'setter'
        return { type, name }
    })
}
function readableProperties(obj) {
    function runner(obj) {
        if (isFunction(obj)) {
            return obj.nam
        }
        if (
            isSet(obj) ||
            isFunction(obj) ||
            isArray(obj) ||
            isPrimitive(obj)
        )
            return obj
        let keys = Object.keys(obj)
            //let keys = Object.getOwnPropertyNames(obj)
            .filter(isPublic)

        //console.log(keys)
        return keys.reduce((acc, key, i) => {
            const value = obj[key]
            //console.log(value)
            //console.log(key)
            acc[key] = runner(value)
            return acc
        }, {})
    }
    return runner(obj)
}
function getClassProperties(obj) {
    const props = reduce(
        Object.getOwnPropertyNames(obj).filter(isPublic),
        (x) => [x, obj[x]]
    )
    const methods = Object.getOwnPropertyNames(
        Object.getPrototypeOf(obj)
    )
    pop(methods, 'constructor')
    return { name: obj.constructor.name, methods, ...props }

    return Object.getOwnPropertyNames(s)
    console.log(s)
    let match
    let regex =
        /^ *(?:this\.(\w+) *= *(\w+)?|(?:async )?(\w+)\(|get (\w+))/gm
    //let s = vars()
    const storage = new Storage({ unique: 1 })
    while ((match = regex.exec(s))) {
        if (match[3]) {
            storage.add('methods', match[3])
        } else if (match[1]) {
            storage.add('properties', match[1])
        } else if (match[4]) {
            storage.add('properties', match[4])
        }
    }
    storage.pop('methods', 'constructor')
    //console.log(storage.value); throw ''
    return storage.value
}

function findall(regex, s, flags = 'g', filtered = false) {
    if (isString(regex)) regex = RegExp(regex, flags)

    let store = []
    let match
    s = s.trim()

    while (exists((match = regex.exec(s)))) {
        if (match.length == 1) {
            store.push(match[0])
        } else if (filtered) {
            store.push(smallify(match.slice(1).filter(exists)))
        } else if (match.length == 2) {
            store.push(match[1])
        } else {
            store.push(match.slice(1))
        }
    }
    return store
}

function smallify(x) {
    return x.length == 0 ? null : x.length == 1 ? x[0] : x
}

function deletef(r) {
    return (s) => {
        return s.replace(r, '')
    }
}
function functiongetter(x) {
    if (isFunction(x)) {
        return x
    }
    if (window.hasOwnProperty(x)) {
        return window[x]
    }
    return eval(parens(x))
}

function removeAllComments(s) {
    return s.replace(
        /^ *([#]|<!--[^]*?-->|\/\/|\/\*[^]*?\*\/).*\n*/gm,
        ''
    )
    return s.replace(/^ *\/\/.+\n*/gm, '')
}

function getLastWord(x) {
    return search('\\w+$', x)
}

function getSecondWord(x) {
    return search('\\w+ (\\w+)', x)
}

function getFirstWord(x) {
    return search('\\w+', x)
}

function getFirst(x, mode = '') {
    if (isObject(x)) {
        return Object[mode || 'keys'](x)[0]
    }
    if (mode == String) {
        return search(/^\S+/, x)
    }
    if (isString(x)) {
        return search('\\w+', x)
    }

    if (isArray(x)) {
        return x[0]
    }
}

function xsplit(s) {
    if (isArray(s)) {
        return s
    }
    return split(s, / +|([,\.])/)
}

function removeAllJavascriptComments(s, mode) {
    return s.replace(/^ *(?:\/\/|\/\*[^]*?\*\/).*\n*/gm, '')
}

function removeJavascriptComments(s, mode) {
    return s
        .replace(/^ *(?:\/\/|\/\*[^]*?\*\/).*\n*/gm, '')
        .trim()
}

function removeComments(s, mode) {
    return s
        .replace(/^ *(\/\/|\/\*[^]*?\*\/).*\n*/gm, '')
        .trim()
    if (mode == 'js')
        return s.replace(/^ *\/\/|\/\*[^]*?\*\/.*\n*/gm, '')
    return s.replace(
        /^ *([#]|<!--[^]*?-->|\/\/|\/\*[^]*?\*\/).*\n*/gm,
        ''
    )
}

function search(regex, s, flags = '') {
    if (isString(regex)) regex = RegExp(regex, flags)

    const match = s.match(regex)
    return matchgetter(match)
}

function matchgetter(match) {
    return !match
        ? null
        : match.length == 1
        ? match[0]
        : match.length == 2
        ? match[1] || match[0]
        : match.slice(1)
}

function prepareIterable(data, mode) {
    if (!data) {
        return []
    }
    if (isStorage(data)) {
        return data.store
    }

    if (isNumber(data)) {
        return range(1, data)
    }
    if (isString(data)) {
        return [data]
    }
    if (isClass(data)) {
        return Array.from(data)
    }

    if (isObject(data)) {
        if (mode == Array) mode == 'values'
        else if (mode == Object) mode == 'entries'
        else if (!mode) {
            mode = 'values'
        }
        return Object[mode](data)
    }

    return data

    //if (data.constructor.name == 'IndexedMap')
}

function indent(s, n = 4, tabs = 0) {
    if (!s) return ''
    if (!n) return s
    if (!s.includes('\n')) return toSpaces(n, tabs) + s
    if (isArray(s)) return s.map((x) => indent(x, n))
    return replace('^', toSpaces(n, tabs), s, 'gm')
}

function joined(arr) {
    if (arguments.length > 1) {
    let delimiter = '\n'
        arr = flat(Array.from(arguments))
            .filter(exists).map(String)
        if (test(/^[, .] *$/, getLast(arr))) {
            delimiter = arr.pop()
            return arr.join(delimiter)
        }
    }

    let s = '\n'
    for (let item of arr) {
        s += item
        s += item.includes('\n') ? '\n\n' : '\n'
    }
    return s
}

function getYear() {
    const date = new Date()
    const year = date.getFullYear()
    return year
}

function difference(a, b) {
    a = prepareIterable(a, 'keys')
    b = prepareIterable(b, 'keys')
    return a.filter((x) => !b.includes(x))
}

function errorWrap(fn) {
    return (...args) => {
        try {
            let value = fn(args[0])
            return { value }
        } catch (e) {
            return {
                error: e.stack,
                input: smallify(args),
            }
        }
    }
}

function insertText(s, regex, payload, moreSpaces) {
    regex = '^( *).*?' + regex + '.*'
    return replace(
        regex,
        (original, spaces) => {
            if (moreSpaces) spaces += '    '
            const value = indent(payload, spaces)
            return original + '\n' + value
        },
        s,
        'm'
    )
}

function isIterable(x) {
    if (!x) return
    if (isString(x)) {
        return false
    }
    return typeof x[Symbol.iterator] === 'function'
    return isArray(x) || isObject(x) || isSet(x)
}

function linegetter(x, regex = /\n+/) {
    return isArray(x) ? x : split(x, regex)
}

function isDefined(x) {
    return x != null
}

function isBoolean(x) {
    return x === true || x === false
}

function addGFlag(regex) {
    if (isString(regex)) {
        return new RegExp(regex, 'g')
    }
    if (!regex.flags.includes('g')) {
        regex = new RegExp(regex, regex.flags + 'g')
    }
    return regex
}

function isFirst(key, state = $$) {
    if (!state[key]) {
        state[key] = true
        return true
    }
    return false
}

function isWordFragment(s) {
    return test(/^(?:[-a-zA-Z]+)(?: [-a-zA-Z]+)*$/, s)
}

function isWord(s) {
    return test(/^[a-zA-Z]+$/, s)
}

function isPromise(x) {
    return x.constructor.name == 'Promise'
}

function isJsonParsable(s) {
    return /^[{\[]/.test(s)
}

function isRegExp(x) {
    return x.constructor.name == 'RegExp'
}

function isFalse(x) {
    return x === false
}

function isTrue(x) {
    return x === true
}

function isClassObject(x) {
    const runner = (x) => x && x.toString().startsWith('class')
    return runner(x) || runner(x.constructor)
}

function isClass(x) {
    const natives = [
        'String',
        'Function',
        'Number',
        'Object',
        'Array',
        'Set',
        'Promise',
    ]
    return x && !natives.includes(x.constructor.name)
}

function isNode() {
    return typeof window === 'undefined' || window.isNodeWindow
}

function isJson(x) {
    return x.endsWith('.json')
}

function isElement(s) {
    return s.constructor.name.startsWith('HTML')
}

function isInteger(n) {
    return Number.isInteger(Number(n))
}

function isPositive(n) {
    return n >= 0
}

function isCapitalized(s) {
    return /^[A-Z]/.test(s)
}

function isYesterday(date) {
    return changeDate(datestamp(), -1) == date
}

function isDate(s) {
    return test(/^\d{1,2}[-/]\d{1,2}[-/](?:\d{2}|\d{4})$/, s)
}
function isToday(date) {
    return datestamp() == date
}

function zeroPad(x) {
    return String(x).length == 1 ? '0' + x : x
}

function backspaced(s) {
    return s ? s.slice(0, -1) : ''
}

function indexgetter(arr, index) {
    if (!index) return 0
    if (!isNumber(index)) index = arr.indexOf(index)
    return index
}

function insert(arr, item, index) {
    index = indexgetter(arr, index)
    arr.splice(index, 0, item)
    return arr
}

function getTabs(s) {
    return (search(/^[\t ]*/, s) || '').replace(/    /g, '\t')
}

function getSpaces(s) {
    return search(/^ */, s) || ''
}

function rescape(s, delimiters) {
    const rescapeRE = isString(delimiters)
        ? RegExp(
              `[${delimiters.replace(/[\[\]]/g, '\\$&')}]`,
              'g'
          )
        : /[.\\[*+?()|^${}\[\]]/g
    return s.replace(rescapeRE, '\\$&')
}

function replaceTemplaterHelper(s, ref) {
    if (!s.includes('$')) return s
    let regex = /\$(\d)/g
    return s.replace(regex, (_, x) => {
        return ref[Number(x)]
    })
}

function spicyReplace(regex, rep, s) {
    const parser = (...args) => {
        return spicyTemplater(rep, args.slice(1, -2))
    }
    console.log(prepareRegex(regex))
    return s.replace(prepareRegex(regex), parser)
}

function templaterWithBackup(s, ref, backup, functionArgs) {
    if (!s.includes('$')) return s
    let regex = /\$(\d+(?:\|[a-zA-Z]+)?|\{.*?\})/g
    return runner(s)

    function runner(s, fn) {
        return s.replace(regex, (_, x) => {
            if (x == 'c') {
                return '$c'
            }
            if (x == 0) return s
            if (test(/^{/, x)) {
                x = x.slice(1, -1)
                x = runner(x, quotify)
                x = eval(x)
                return x
            }

            let [n, other] = search(/^(\d+)\|?(\w*)/, x)
            let value = ref[Number(n) - 1]
            if (value == null && other) {
                value = backup[other]
                if (value == null) value = other
            }
            if (isFunction(value)) {
                value = value(...functionArgs)
            }

            return fn ? fn(value) : value
        })
    }
}

function spicyTemplater(s, ref, ...args) {
    if (!s.includes('$')) return s
    let regex = /\$(\d+|\w+|\{.*?\})/g
    return runner(s)

    function runner(s, fn) {
        return s.replace(regex, (_, x) => {
            //console.log([x, 'st'])
            if (x == 'c') {
                return '$c'
            }
            if (x == 0) return s
            if (test(/^{/, x)) {
                x = x.slice(1, -1)
                x = runner(x, quotify)
                x = eval(x)
                return x
            }

            let val = isArray(ref) ? ref[Number(x) - 1] : ref[x]
            if (val == null) val = ''
            if (isFunction(val)) {
                val = val(...args)
                //val = val(x, ...args)
            }
            return fn ? fn(val) : val
        })
    }
}

function reverse(s) {
    if (isArray(s)) {
        return s.reverse()
    }
    if (isObject(s)) {
        return zip(Object.values(s), Object.keys(s))
    }
    return split(s).reverse().join('')
}

function katexAttributer(a, b, c) {
    return wrap(`\\${a}{${b}}{${c}}`, '{}')
}

function katexColorer(x, color) {
    return katexAttributer('textcolor', color, x)
}
function latexTemplater(s, ref, regex = '\\w+') {
    const ignore = ['left', 'right', 'frac', 'cdot', 'times']
    const ignoreRE = ignore.join('|')
    if (isArray(ref)) {
        regex = RegExp(ignoreRE + '|' + regex, 'g')
        let count = 0
        return s.replace(regex, (x) => {
            if (x.length > 1 && !isNumber(x)) return x
            let item = ref[count++]
            if (item == null) return x
            if (isColor(item)) {
                return katexColorer(x, item)
            }
            return fparse(item, x)
        })
    }
    if (isObject(ref)) {
        return s.replace(ncg(ref), (x) => {
            let item = ref[x]
            if (isColor(item)) {
                return katexColorer(x, item)
            }
            return item || x
        })
    }
}
function templater(s, ref, keep) {
    if (!s.includes('$')) {
        if (isObject(ref)) {
            return dreplace2(s, ref)
        }
        return s
    }

    if (!ref)
        return s.replace(/\$\{(.*?)\}/g, (_, x) => eval(x))
    let regex = /\$(\w)/g
    if (isPrimitive(ref)) {
        ref = [ref]
    } else {
        regex = /\$(\w+)/g
    }

    let functionals = []
    let offset = s.includes('$0') ? 0 : 1
    let value = s.replace(regex, (_, x) => {
        if (x == 'c') return '$c'
        let val = isArray(ref)
            ? ref[Number(x) - offset]
            : ref[x]
        if (val == null) {
            return keep ? '$' + x : ''
        }
        if (isFunction(val)) {
            functionals.push(val)
            return '###'
        }
        return val
    })

    if (exists(functionals)) {
        let parts = value.split(/###(?:\(.*?\))?/)
        return (a, b, c) => {
            let s = ''
            for (let i = 0; i < parts.length; i++) {
                let part = parts[i]
                s += part
                if (i < parts.length - 1) {
                    s += functionals[i](a)
                }
            }
            return s
        }
    }
    return value
}

function hasCaptureGroup(s) {
    return test(/[^\\]\((?!\?)/, s)
}

function getIndent(s) {
    if (isNumber(s)) return s
    const match = s.match(/^[\t ]*/g)
    if (!match) return 0
    return match[0].split('').reduce((acc, item, i) => {
        return (acc += item == '\t' ? 4 : 1)
    }, 0)
}

function identity(...args) {
    return args.length == 1 ? args[0] : args
}

function identity(s) {
    return s
}

function trim(s) {
    return s.trim()
    if (s.trim().length == '') return s
}
class AssertionErrorHandler {
    constructor(fn) {
        try {
            fn()
        } catch (e) {
            console.log([e.name, e.line])
        }
    }
}
class AssertionError extends Error {
    constructor(x) {
        super()
        const { name, line } = getCaller('assert')
        this.name = name
        this.line = line
    }
}
function assert(condition) {
    if (!condition || !exists(condition)) {
        throw new AssertionError()
    }
    return condition
    return
    if (!condition || !exists(condition)) {
        const stack = getStackTrace()
        //console.log(stack)
        const name =
            stack[
                stack.findIndex((x) => x[0] == 'assert') + 1
            ][0]
        const error = assert.caller
            .toString()
            .match(/assert\((.*?)\) *(?=\n|$)/)[1]
        const message = `[assertion error] @${name}: undefined ${error}`
        console.log(message)
        throw ''
    }
}

function parens(s) {
    return '(' + s + ')'
}

function len(x) {
    if (!exists(x)) {
        return 0
    }
    if (isNumber(x)) return x.toString().replace(/0?[-.]/g, '').length
    return x.length || Object.keys(x).length || 0
}

function hasNumber(x) {
    return (
        (isString(x) && test(/\d/, x)) || typeof x == 'number'
    )
}

function sum(items, fn) {
    return items.reduce(
        (acc, item, i) => (acc += fn ? fn(item, i) : item),
        0
    )
}

function recursiveFlat(...args) {
    const store = []
    function runner(args) {
        for (let arg of args) {
            if (isArray(arg)) {
                runner(arg)
            } else {
                store.push(arg)
            }
        }
    }
    runner(args)
    return store
}
function flat(arr) {
    const store = []
    for (let item of arr) {
        push(store, item)
    }
    return store
}

function doublequote(s) {
    return '"' + s + '"'
}

function delta(a, b) {
    return Math.abs(a - b)
}

function toVariable(name, value, lang, prefix = 'var ') {
    if (arguments.length == 1) {
        value = name
        lang = 'js'
        switch (type(value)) {
            case 'String':
                name = 's'
                break

            case 'Array':
                name = 'arr'
                break

            case 'Object':
                name = 'obj'
                break

            case 'Number':
                name = 'n'
                break
        }
    }
    //console.log(value)
    const payload = isString(value)
        ? isJsonParsable(value)
            ? value
            : quotify(
                  value
                      .replace(/\`/g, '\\`')
                      .replace(/\$\{/g, '\\$\\{')
              )
        : toStringArgument(value)

    return prefix + name + ' = ' + payload
}

function quotify(s, mode = '`') {
    if (mode == '`') return '`' + s + '`'
    if (mode == "'") return "'" + s + "'"
    if (mode == '"') return '"' + s + '"'
    return '"' + s + '"'
}

function tail(s) {
    return getLast(s.split('/')).replace(/^\W+/, '')
}

function bindObject(state, object, key) {
    if (!exists(object)) {
        return
    }

    if (key) {
        if (isFunction(object)) {
            store[key] = object.bind(state)
        }
        const store = {}
        for (let [k, v] of Object.entries(object)) {
            store[k] = v.bind(state)
        }
        return
    }

    /* hmm ... this is for the comment part */
    for (let [k, v] of Object.entries(object)) {
        if (isFunction(v)) {
            state[k] = v.bind(state)
        } else {
            state[k] = v
        }
    }
}

function initializeStateVariable(state, key, value) {
    if (!state.hasOwnProperty(key)) {
        state[key] =
            arguments.length == 4
                ? {}
                : key.endsWith('s')
                ? []
                : null
    }
    const f = type(state[key])
    switch (f) {
        case 'Set':
            return state[key].add(value)
        case 'Array':
            return state[key].push(value)
        case 'Object':
            return (state[key][arguments[2]] = arguments[3])
        default:
            state[key] = value
    }
}

function bind(state, key, arg) {
    if (arguments.length == 3) {
        if (!arg) return
        if (isFunction(arg)) {
            state[key] = arg.bind(state)
        }

        state[key] = map(arg, (x) => x.bind(State))
    }
    return state[key].bind(state)
}
function fparse(x, ...args) {
    return isFunction(x) ? x(...args) : x
}
class Cache {
    constructor(cache = {}) {
        this.cache = isFunction(cache) ? new cache() : cache
        const name = this.cache.constructor.name
        this.get = this['get' + name]
        this.set = this['set' + name]
        this.clear = this['clear' + name]
        this.update = this['update' + name]
    }
    updateWeakMap(key, value) {
        const prev = this.get(key)
        this.cache.set(key, merge(prev, value))
    }

    setWeakMap(key, value) {
        this.cache.set(key, value)
    }

    setObject(key, value) {
        this.cache[key] = value
    }

    updateObject(key, value) {
        const prev = this.get(key)
        this.set(key, merge(prev, value))
    }

    clearObject() {
        this.cache = {}
    }
    clearWeakMap() {
        this.cache = new WeakMap()
    }
    getWeakMap(key, value) {
        if (this.cache.has(key)) {
            const cachedValue = this.cache.get(key)
            return cachedValue
        }
        if (isFunction(value)) value = value(key)
        this.cache.set(key, value)
        return value
    }

    getObject(key, value) {
        if (this.cache.hasOwnProperty(key)) {
            return this.cache[key]
        }
        if (isFunction(value)) value = value(key)
        this.cache[key] = value
        return value
    }
}
class Cacheold extends StandardObject {
    constructor() {
        super()
    }

    get(key, fallback) {
        if (!this.has(key)) {
            this.store[key] = fparse(fallback, key)
        }
        return this.store[key]
    }

    set(key, value) {
        if (isObject(key)) {
            this.store = key
        } else {
            this.store[key] = value
            return value
        }
    }

    clear() {
        this.store = {}
    }
}

function getLongestOld(arr, measure = len, mode = Number) {
    const value = arr.reduce(
        (acc, item, i) => {
            if (!item) return acc
            const itemLength = measure(item, i)
            if (mode == Number) return Math.max(itemLength, acc)
            const accLength = isNumber(acc)
                ? acc
                : measure(acc, i)
            return accLength > itemLength ? acc : item
        },
        mode == Number ? 0 : arr[0]
    )

    return value
}

function splitSpellcheck(s, dict) {
    if (isNumber(s)) {
        return s
    }
    return split(s)
        .map((x) => dict[x] || x)
        .join(' ')
}
function dreplacef(a, b) {
    if (isObject(a)) {
        let dict = Object.assign({}, ...arguments)

        const symbols = ['*', '[', ']', '{', '}', '. ', ' = ?']
        const filter = (x) => symbols.includes(x)
        const [a, b] = partition(Object.keys(dict), filter)
        const rA = exists(a)
            ? `(?:${a.map((x) => '\\' + x).join('|')})|`
            : ''
        const rB = `\\b(?:${b.join('|')})\\b`
        const _regex = rA + rB
        const regex = RegExp(_regex, 'g')

        return (s) =>
            s.replace(regex, (x, offset, s) => {
                if (/[@$]/.test(s[offset - 1])) return x
                return dict[x]
            })
    }
    return (s) => s.replace(a, (_, x) => b[x] || x)
}
function dreplace(
    s,
    dict,
    regexTemplate = '\\b(?:$1)\\b',
    flags = 'g'
) {
    let escape
    if (regexTemplate === null) {
        regexTemplate = '(?:$1)'
    } else if (regexTemplate == 'ge') {
        flags = regexTemplate
        regexTemplate = '(?:$1)'
    } else if (regexTemplate == 'ge') {
        flags = regexTemplate
        regexTemplate = '(?:$1)'
    } else if (regexTemplate.length < 5) {
        flags = regexTemplate
        regexTemplate = '\\b(?:$1)\b'
    }
    if (flags.includes('e')) {
        escape = true
        flags = flags.replace('e', '')
    }

    if (flags.includes('b')) {
        flags = flags.replace('b', '')
        regexTemplate = '\\b(?:$1)\\b'
    }

    const regex = ncg(regexTemplate, dict, true)

    function fixB(x) {
        if (isCapitalized(x)) {
            value = dict[x.toLowerCase()]
            return capitalize(value)
        }
        return dict[x]
    }
    const parser = hasCaptureGroup(regexTemplate)
        ? (_, x) => fixB(x)
        : (x) => fixB(x)

    return replace(regex, parser, s, flags)
}

function ncg(template, ref, escape) {
    if (typeof template == 'object' && !ref) {
        return regexTemplater(/\b(?:$1)\b/g, template)
    }

    if (template == boundary) {
        return regexTemplater(/\b(?:$1)\b/g, ref)
    }

    if (isRegExp(template)) {
        return regexTemplater(template, ref)
    }
    if (template === '') template = '(?:$1)'
    if (arguments.length == 1) {
        return '(?:' + ncgRunner(template) + ')'
    }

    if (!ref && isIterable(template)) {
        return '\\b(?:' + ncgRunner(template, escape) + ')\\b'
    } else if (
        !isPrimitive(ref) &&
        ref[0] &&
        !isPrimitive(ref[0])
    ) {
        let value = templater(
            template,
            ref.map((el) => ncgRunner(el, escape))
        )
        if (escape) return RegExp(value, escape)
        return value
    } else {
        return templater(template, ncgRunner(ref, escape))
    }
}

function ncgRunner(ref, escape) {
    return isBoolean(escape)
        ? prepareIterable(ref, 'keys').map(rescape).join('|')
        : prepareIterable(ref, 'keys').join('|')
}

function filterObjectHelper(items, fn) {
    if (isFunction(fn)) {
        if (getParameters(fn).length == 2) {
            return Object.entries(items).filter(([a, b]) => {
                return fn(a, b)
            })
        } else {
            return Object.entries(items).filter(([a, b]) => {
                return fn(b)
            })
        }
    } else if (isArray(fn)) {
        return Object.entries(items).filter(([a, b]) => {
            return fn.includes(a)
        })
    }
}

function filter(items, fn, mode) {
    if (isObject(items)) {
        const value = filterObjectHelper(items, fn)

        return mode == 'keys'
            ? value.map((x) => x[0])
            : mode == 'values'
            ? value.map((x) => x[1])
            : mode == Array
            ? value
            : toDictionary(value)
    }
    if (isArray(items)) {
        if (isIterable(fn)) {
            fn = prepareIterable(fn, 'keys')
            return items.filter((x) => fn.includes(x))
        } else if (!fn) {
            fn = exists
        } else if (!isFunction(fn)) {
            fn = testf(fn)
        }
        return items.filter(fn)
    }
}

function filterObject(items, fn, mode) {
    const value = Object.entries(items).filter((x) => fn(...x))
    if (mode == 'keys') return value.map((x) => x[0])
    if (mode == 'values') return value.map((x) => x[1])
    return value.reduce(
        (acc, [a, b]) => ({ ...acc, [a]: b }),
        {}
    )
}

function oldfilterObject(items, fn) {
    function reducer(items, gn) {
        const store = {}
        for (let [a, b] of prepareIterable(items, 'entries')) {
            const value = gn(a, b)
            if (exists(value)) {
                if (value.length == 2 && isArray(value)) {
                    store[value[0]] = value[1]
                } else {
                    store[a] = value
                }
            }
        }
        return store
    }
    return getParameters(fn).length == 1
        ? reducer(items, (k, v) => (fn(v) ? v : null))
        : reducer(items, (k, v) => (fn(k, v) ? v : null))
}

function filtered(items, fn) {
    if (isObject(items)) {
        return reduce(items, (k, v) => (fn(k, v) ? v : null))
    }

    items = Array.from(items)
    if (isString(fn))
        return items.filter(
            (x) => exists(x) && test(fn, x, 'i')
        )
    if (isFunction(fn)) return items.filter(fn)
    if (isArray(fn)) return items.filter((x) => !fn.includes(x))
}

function getIndentAndLine(s) {
    return [getIndent(s), s.trim()]
}

function capitalize(s) {
    return s.replace(/^['"]?[a-zA-Z]/, (x) => x.toUpperCase())
}

function singlequote(s) {
    return "'" + s + "'"
}

function ftest(x, s, flags = 'i') {
    if (isArray(x)) {
        for (let item of x) {
            if (ftest(item, s, flags)) {
                return true
            }
        }
    }

    if (isFunction(x)) {
        return x(s)
    }

    if (s === x) {
        return true
    }

    if (s == '' && x.toString() == '/^$/') {
        return true
    }

    return test(x, s, flags)
}

function atBoth(a, b) {
    return (k, v) => [a(k), b(v)]
}
function map(x, f, ...args) {
    if (isString(f)) {
        let arg = f
        f = (x) => {
            if (isObject(x)) {
                return x[arg]
            }
            return templater2(x, arg)
        }
    }

    if (isString(x)) {
        return [f(x)]
    }
    if (isIterable(x)) {
        return Array.from(x, f)
    }

    if (isObject(x)) {
        if (isFunction(f)) {
            let lambda = f
            if (!/^.*?\(.*?\,.*?\)/.test(f.toString())) {
                lambda = (k, v) => [k, f(v)]
            }
            return reduceObject(x, lambda)
        }
    }
}
function mapObject(a, b) {
    if (isObject(b)) {
        return reduce(a, (k, v) => {
            return b[k] ? [k, b[k]] : null
        })
    }
}
function mapConditional(a, b, c) {
    return (x, i, arr) => {
        if (isRegExp(a)) {
            let match = x.match(a)
            if (match) {
                if (match.length == 2) {
                    if (isString(b)) {
                        return templater(b, match[1])
                    }
                    return b(match[1], i)
                } else {
                    if (isString(b)) {
                        return templater(b, x)
                    }
                    return b(x, i)
                }
            } else if (c) {
                if (isString(c)) {
                    return templater(c, x)
                }
                return c(x, i, arr)
            } else {
                return x
            }
        }

        if (isFunction(a)) {
            if (a(x)) {
                if (isString(b)) {
                    return templater(b, x)
                }
                return b(x)
            } else if (c) {
                if (isString(c)) {
                    return templater(c, x)
                }
                return c(x, i, arr)
            } else {
                return x
            }
        }

        if (isString(a)) {
            throw new Error(
                'must be regex or function for mapconditional'
            )
        }
    }
}

function merge(a, b) {
    if (!b) return a
    if (!a) return b
    if (isObject(a)) {
        return Object.assign({}, ...arguments)
    }
    if (isArray(a)) {
        const store = []
        map(arguments, (x) => push(store, x, true))
        return store
        return push(a, b, true)
    }
    if (isString(a)) {
        return a + b
    }
    return b
}
function mergeAll(...args) {
    args = args.filter(exists)
    let first = args[0]

    if (args.length == 1) {
        return args[0]
    }

    if (isObject(first)) {
        const store = {}
        for (let arg of args) {
            Object.assign(store, arg)
        }
        return store
    }

    if (isArray(first)) {
        for (let arg of args) {
            if (arg)
                isArray(arg)
                    ? first.push(...arg)
                    : first.push(arg)
        }
        return first
    }

    if (isString(first)) {
        if (first.includes('\n')) return args.join('\n')
        if (first.includes(' ')) return args.join(' ')
        return args.join('\n')
    }

    if (isNumber(first)) {
        return sum(args.map(Number))
    }
}

function tryval(s, ...args) {
    try {
        if (isFunction(s)) {
            return {
                value: s(...args),
                input: smallify(args),
            }
        }
        return {
            input: smallify(s),
            value: eval(s),
        }
    } catch (e) {
        return {
            input: smallify(s),
            error: getDetailedErrorInfo(e),
        }
    }
}

function shuffle(arr) {
    const ref = Array.from(arr)
    let m = arr.length
    while (m) {
        let i = ~~(Math.random() * m--)
        let t = ref[m]
        ref[m] = ref[i]
        ref[i] = t
    }
    return ref
}
class Clock {
    finish() {
        this._stop = true
        clearTimeout(this.timerID)
        this.onEnd()
    }
    constructor(options) {
        this.increment = 1000
        this.speed = 1
        this.onTick = console.log
        const kt = (x) => {
            if (x == 'end' || x == 'start' || x == 'tick') {
                return 'on' + capitalize(x)
            }
            return x
        }
        Object.assign(this, edit(options, kt))
        this.delta = this.increment / this.speed
        if (this.duration <= 100) this.duration *= 1000
        assert(this.duration)
        if (options.autoStart) this.start()
    }
    pause() {
        this._pause = true
    }
    async start() {
        if (this._pause) {
            this._pause = false
            this.count += 1
        } else {
            this.count = 0
            this._stop = false
        }
        return await this.runner()
    }

    stop() {
        this._stop = true
    }
    async resume() {
        this._stop = false
        await this.runner()
    }

    runner() {
        if (this._onStart) {
            this._onStart()
            this._onTick()
        } else {
            this._onTick()
        }

        return new Promise((resolve, reject) => {
            const runner = () => {
                if (this.isDone()) {
                    clearTimeout(this.timerID)
                    if (this._onEnd) {
                        this._onEnd()
                    }
                    resolve()
                } else if (this._pause) {
                    clearTimeout(this.timerID)
                    resolve()
                } else {
                    this.count += 1
                    this.timerID = setTimeout(() => {
                        if (this._onTick) this._onTick()
                        runner()
                    }, this.delta)
                }
            }

            runner()
        })
    }

    at(n, fn) {
        let current = this._onTick
        this._onTick = () => {
            this.count == n ? this.handle(fn(this)) : current()
        }
    }

    set onTick(fn) {
        this._onTick = () => this.handle(fn(this.timeLeft))
    }
    set onStart(fn) {
        this._onStart = () => fn(this.timeLeft)
    }

    set onEnd(fn) {
        this._onEnd = () => fn(this.timeLeft)
    }
    get onEnd() {
        return this._onEnd
    }

    isDone() {
        return this.count >= this._duration || this._stop
    }
    get elapsed() {
        return this.count
    }
    get timeLeft() {
        return this._duration - this.count
    }
    get _duration() {
        return Math.floor(this.duration / 1000)
    }

    handle(result) {
        if (result === 'DONE') {
            this._stop = true
        } else if (isNumber(result)) {
            this.duration += result * 1000
        }
    }
}

function addExtension(file, ext) {
    if (getExtension(file)) {
        return file
    }
    return file + '.' + ext
}

function getExtension(file) {
    return search(/\.(\w+)$/, file)
}

function sorted(items, fn, reverse = 0, implicitSecond = 0) {
    const defaultObjectSort = (s) => s[1]
    const defaultNumberSort = (s) => s
    let asObject = false

    if (items.store) {
        items = Object.entries(items.store)
        asObject = true
    } else if (isObject(items)) {
        items = Object.entries(items)
        asObject = true
    }

    if (!fn) {
        fn = isDoubleIterable(items)
            ? defaultObjectSort
            : isNumber(items[0])
            ? defaultNumberSort
            : char2n
    } else if (implicitSecond && asObject) {
        fn = ([k, v]) => fn(v)
    }

    function runner(a, b) {
        if (reverse) return Number(fn(b)) - Number(fn(a))
        return Number(fn(a)) - Number(fn(b))
    }

    items.sort(runner)
    return asObject ? reduce(items) : items
}

function n2char(n) {
    return String.fromCharCode(n + 97)
}
function char2n(ch) {
    return ch.toLowerCase().charCodeAt(0) - 97
}

function newlineIndent(s, n = 4) {
    if (!s) {
        return ''
    }
    s = isArray(s) ? s.join('\n') : s
    return wrap(indent(s.replace(/^\n+/, '').trimEnd(), n))
}

class Storage {
    [Symbol.iterator]() {
        this.items = this.entries
        this.index = 0
        return this
    }
    init(names) {
        for (let name of names) {
            this.add(name)
        }
    }
    next() {
        const value = this.items[this.index++]
        const done = this.index > this.items.length
        return {
            value,
            done,
        }
    }
    constructor() {
        this.store = {}
        this.watcher = new Watcher()
        const options = {
            _mode: Array,
            unique: false,
            delimiter: '\n',
            mergeArray: true,
        }
        Object.assign(this, options)
        if (arguments.length == 2) {
            this.store = arguments[0]
            Object.assign(this, arguments[1])
        } else if (arguments.length == 0) {
            Object.assign(this, options)
        } else if (arguments.length == 1) {
            if (hasSharedKeys(arguments[0], options)) {
                Object.assign(this, arguments[0])
            } else if (arguments[0] == Number) {
                this._mode = Number
            } else {
                this.store = arguments[0]
            }
        }
        //console.log(this)
    }

    delete(k) {
        delete this.store[k]
    }
    get value() {
        return this.store
    }
    get keys() {
        return Object.keys(this.store)
    }
    get values() {
        return Object.values(this.store)
    }
    get entries() {
        return Object.entries(this.store)
    }

    get(k) {
        if (arguments.length > 1) {
            return (
                (this.store[arguments[0]] &&
                    this.store[arguments[0]][arguments[1]]) ||
                ''
            )
        }
        return this.store[k] || this.fallback
    }

    get fallback() {
        switch (this._mode) {
            case Array:
                return []
            case Number:
                return 0
            case String:
                return ''
            case Object:
                return {}
        }
    }

    has(k) {
        return this.store.hasOwnProperty(k)
    }
    forEach(fn) {
        return Object.entries(this.store).forEach(([k, v]) =>
            fn(k, v)
        )
    }
    reset(k) {
        if (!k) {
            this.store = {}
            return
        }

        switch (this._mode) {
            case Array:
                this.store[k] = []
                break
            case Number:
                this.store[k] = 0
                break
            case String:
                this.store[k] = ''
                break
            case Object:
                this.store[k] = {}
                break
            case null:
                this.store[k] = null
                break
        }
    }

    pop(k, v) {
        if (v) {
            return pop(this.store[k], v)
        } else {
            return pop(this.store, k)
        }
    }

    map(k, fn) {
        this.store[k] = this.get(k).map(fn)
    }

    set(k, v) {
        this.store[k] = v || null
    }

    toString() {
        return stringify(this.store)
    }
    add(k, v) {
        if (k == null) return
        if (arguments.length == 3) {
            this.addObject(...Array.from(arguments))
            return
        }

        switch (this._mode) {
            case Array:
                this.addArray(k, v)
                break
            case Object:
                this.addObject(...Array.from(arguments))
                break
            case String:
                this.addString(k, v)
                break
            case Number:
                return this.addNumber(k, v)
                break
            default:
                this.set(k, v)
                break
        }

        return this.get(k)
    }

    addNumber(k, v) {
        v = v == null ? 1 : Number(v)
        return this.store[k]
            ? (this.store[k] += v)
            : (this.store[k] = v)
    }

    addString(k, v) {
        if (!exists(v)) {
            return
        }
        this.store[k]
            ? (this.store[k] += this.delimiter + v)
            : (this.store[k] = v)
    }

    addArray(k, v) {
        if (!exists(v)) {
            return
        }
        if (this.unique && this.get(k).includes(v)) {
            return
        }

        if (isArray(v) && this.mergeArray) {
            this.store[k]
                ? this.store[k].push(...v)
                : (this.store[k] = v)
        } else {
            this.store[k]
                ? this.store[k].push(v)
                : (this.store[k] = [v])
        }
    }

    addObject(parent, child, value) {
        if (!exists(value)) {
            return
        }
        if (!this.store[parent]) this.store[parent] = {}
        this.store[parent][child] = value
    }
}

function modularIncrement(arr, item, increment = 1) {
    if (isNumber(arr)) {
        return modularIncrementNumber(
            item,
            increment,
            arguments[3] || 0,
            Number(arr) - 1
        )

        return modularIncrementNumber(
            Number(arr),
            item,
            increment,
            arguments[3] || 9
        )
    }
    if (isFunction(increment)) {
        return modularIncrementFn(arr, item, increment)
    }
    if (increment == '+') increment = 1
    else if (increment == '-') increment = -1

    if (isObject(arr)) {
        arr = Object.keys(arr)
    }

    if (!item) {
        return arr[0]
    }
    const i = arr.indexOf(item)
    if (i < 0) return arr[0]

    let newIndex

    if (i + increment < 0) {
        newIndex = arr.length - 1
    } else {
        newIndex = (i + increment) % arr.length
    }

    const p = arr[newIndex]
    return p
}

function modularIncrementFn(arr, index, fn) {
    index = indexgetter(arr, index)

    for (let i = index; i < arr.length; i++) {
        let item = arr[i]
        if (fn(item)) return item
    }

    for (let i = 0; i < index; i++) {
        let item = arr[i]
        if (fn(item)) return item
    }

    return null
}

function mreplaceObject(o) {}
function mreplace(
    regex,
    replacement,
    s,
    flags = 'g',
    singular = false
) {
    if (arguments.length == 1) {
        return mreplaceObject(regex)
    }

    if (arguments.length == 2) {
        replacement = ''
        s = arguments[1]
    }

    if (arguments.length == 3 && arguments[2] == true) {
        replacement = ''
        s = arguments[1]
        singular = arguments[2]
    }

    //console.log('hiiiiiiiiiiiiiiiiiiii', regex)
    if (!regex.flags || !flags.includes('g')) singular = true

    const store = []
    const sliceBy = hasCaptureGroup(regex) ? 1 : 0

    function parser(...args) {
        args = args.slice(sliceBy, -2).filter((x) => x != null)
        store.push(smallify(args))
        return isString(replacement)
            ? replacement
            : replacement(...args)
    }

    const text = replace(regex, parser, s, flags)
        .replace(/^\n+/, '')
        .trimEnd()

    if (singular) return [text, smallify(store)]
    return [text, store]
}

function sleep(delay = 3000) {
    delay = toMilliseconds(delay)
    return new Promise((resolve) => setTimeout(resolve, delay))
}

function parseJSON(s, functionStringRevive) {
    if (/^[\d/]+$/.test(s)) {
        return Number(s)
    }
    return isJsonParsable(s)
        ? JSON.parse(s, functionStringRevive)
        : s
}

function splitonce(s, delimiter = '\\s+') {
    if (!s) {
        return ['', '']
    }
    if (isArray(s)) return [s[0], s.slice(1)]
    if (isRegExp(delimiter)) delimiter = delimiter.source
    let regex = '^(.*?)' + delimiter + '([^]+)$'

    return search(regex, s) || [s, '']
}

function pop(arr, key, fallback) {
    if (isObject(arr)) {
        if (!key in arr) return fallback
        let value = arr[key]
        delete arr[key]
        return value
    }

    if (isArray(arr)) {
        const index = isFunction(key)
            ? arr.findIndex(key)
            : isNumber(key)
            ? key
            : arr.indexOf(key)
        if (index < 0) {
            if (fallback) {
                return pop(arr, fallback)
            } else {
                return
            }
        } else {
            return arr.splice(index, 1)
        }
    }
}

function fill(arr, n) {
    while (arr.length <= n) {
        arr.push(null)
        counter()
    }
}

function splitOnceReverse(s, deli) {
    if (isArray(s)) {
        return [s.slice(0, -1), getLast(s)]
    }
    const items = s.split(deli)
    return [items.slice(0, -1), getLast(items)]
}
function split(s, regex = / +/, flags = '') {
    if (isNumber(s)) {
        return s.toString().split('').map(Number)
    }

    if (isArray(s)) {
        let temp = []
        let big = []
        for (let i = 0; i < s.length; i++) {
            let item = s[i]
            if (test(regex, item)) {
                big.push(temp)
                temp = []
                //return [s.slice(0, i), s.slice(i + 1)]
            } else {
                temp.push(item)
            }
            //if (i == s.length - 1) {
            //return [s, null]
            //}
        }
        if (exists(temp)) {
            big.push(temp)
        }
        return big
    }
    if (isNumber(regex))
        return [s.slice(0, regex), s.slice(regex)]
    regex = isString(regex) ? regex : regexed(regex, flags)
    return s.trim().split(regex).filter(exists).map(trim)
}

function regexed(regex, flags = '') {
    if (regex == '.') return regex
    const addMultiLine = (x) =>
        /^.?\^/.test(regex) ? x + 'm' : x
    return isString(regex)
        ? RegExp(regex, addMultiLine(flags))
        : regex
}
function paired(list, mode = Array) {
    const store = mode == Object ? {} : []
    const start = list[0] == '' ? 1 : 0
    for (let i = start; i < list.length - 1; i += 2) {
        if (mode == Object) store[list[i]] = list[i + 1]
        else {
            store.push([list[i], list[i + 1]])
        }
    }
    return store
}

function toUpperCase(s) {
    return s.toUpperCase()
}

function depluralize(s) {
    return s.replace(/s$/, '')
}

function intersects(a, b) {
    a = prepareIterable(a, 'keys')
    b = prepareIterable(b, 'keys')
    return b.some((x) => a.includes(x))
}

function intersection(a, b) {
    return (
        a.filter((x) => b.includes(x)) ||
        b.filter((x) => a.includes(x))
    )
}

function shared(a, b) {
    return a.filter((x) => b.includes(x))
}

function changeDate(s, increment) {
    if (!increment) return s
    return s.replace(
        /-\d+/,
        (x) => '-' + zeroPad(Number(x.slice(1)) + increment)
    )
}

function sortByDependencies(items, reducer, ref) {
    const dependencies = items.reduce((acc, item, i) => {
        acc[item] = isFunction(reducer)
            ? reducer(item)
            : findall(reducer, item)
        return acc
    }, {})

    const keys = Object.keys(dependencies)
    const seen = new Set()
    const result = []
    let i
    let item
    let length

    do {
        length = keys.length
        i = 0
        while (i < keys.length) {
            if (
                dependencies[keys[i]].every(
                    Set.prototype.has,
                    seen
                )
            ) {
                item = keys.splice(i, 1)[0]
                result.push(item)
                seen.add(item)
                continue
            }
            i++
        }
    } while (keys.length && keys.length !== length)

    return ref ? result.map((key) => ref[key]) : result
}

function copy(x) {
    // what could go wrong with this?
    return JSON.parse(JSON.stringify(x))
}

function toDashCase(s) {
    let prefix = ''
    if (/^[A-Z]{2}/.test(s)) {
        prefix = s[0].toLowerCase() + '-'
        s = s.slice(1)
    }
    return (
        prefix +
        s
            .replace(/[a-z][A-Z]|\W/g, (x) => {
                return x.length == 1 ? '-' : x[0] + '-' + x[1]
            })
            .toLowerCase()
    )
}

function toSnakeCase(s) {
    if (s.includes(' ')) {
        return s.replace(/ /g, '-').toLowerCase()
    }
    return s
        .replace(/[a-z][A-Z]/g, (x) => x[0] + '-' + x[1])
        .toLowerCase()
}

function toStringObject(x) {
    function parseObj(obj) {
        let s = '{\n'
        for (let [k, v] of Object.entries(obj)) {
            s += indent(k + ': ' + parse(v)) + ',\n'
        }
        s += '}'
        return s
    }

    function parseArr(arr) {
        let s = '[\n'
        for (let item of arr) {
            s += indent(parse(item)) + ',\n'
        }
        s += ']'
        return s
    }

    function parsePrimitive(s) {
        if (s == '') return "''"
        const known = []
        if (known.includes(s)) return s
        return s.toString()
    }

    function parse(s) {
        if (isObject(s)) {
            return parseObj(s)
        }

        if (isArray(s)) {
            return parseArr(s)
        }

        if (s == null) return 'null'

        return parsePrimitive(s)
    }

    return parse(x)
}

function toArgument(s) {
    s = s.trim()

    if (isQuote(s)) {
        return s.slice(1, -1)
    }
    if (s == '0') return 0
    if (isNumber(s)) return Number(s)
    if (s == 'false') return false
    if (s == 'true') return true
    if (s == 'null') return null
    if (s == 'Number') return Number
    if (s == 'String') return String
    return s
}

function toString(x) {
    if (isObject(x)) return JSON.stringify(x, null, 2)
    if (isArray(x)) return join(x)
    if (isRegExp(x)) return x.source
    return x.toString()
}

function toAttr(a, b) {
    return a + '=' + doublequote(b)
}
function toPascal(s) {
    return capitalize(toCamelCase(s))
}

function toCamelCase(s) {
    return uncapitalize(
        s
            .trim()
            .replace(/[- ]\w/g, (x) => x.slice(1).toUpperCase())
    )
}

function toggleVue(state, key, value, duration = 1000) {
    let from = state[key]
    let to = value
    toggle(state, key, from, to, duration)
}
function toggle(state, key, from, to, duration = 750) {
    let value
    if (arguments.length == 2) {
        value = !state[key]
        if (isBoolean(state[key])) state[key] = value
        return value
    }

    if (arguments.length == 3) {
        if (isFunction(state)) {
            return toggleFunction(...arguments)
        }
        if (isBoolean(state[key])) {
            from = state[key]
            to = !state[key]
            duration = arguments[2]
        } else {
            to = from
            from = state[key]
        }
    }

    state[key] = to
    setTimeout(() => {
        state[key] = from
    }, duration)
}

function toDictionary(items, kt, vt) {
    if (!exists(items)) {
        return {}
    }
    if (!isNestedArray(items)) items = partition(items)
    return reduce(items, (k, v) => [
        kt ? kt(k) : k,
        vt ? vt(v) : v,
    ])
}

function toLiteralArray(s) {
    return s.slice(1, -1).split(',')
}

function toInteger(x) {
    return Math.round(x)
}

const roygbiv = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'white',
    'black',
    'purple',
    'pink',
]

function numberWord(n) {
    return numberWords[n]
}

function numberToWord(n) {
    return numberWords[n]
}
const numberWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
]

function hasComma(s) {
    return s.includes(',')
}

function hasLetter(s) {
    return test(/[a-zA-Z]/, s)
}

function hasWord(s) {
    return /[a-zA-Z]{3,}/.test(s)
}

function hasLookBehind(s) {
    return test(/\(\?\</, s.toString())
}

function hasLookAround(s) {
    return test(/\(\?\</, s.toString())
}

function endsWithWord(s) {
    return test(/\w$/, s)
}
function endsWithNumber(s) {
    return test(/\d+$/, s)
}

function wordToNumber(s) {
    return numberWords.indexOf(s.toLowerCase())
}

function stringcall(fn, ...args) {
    if (isFunction(fn)) {
        fn = fn.name
    }
    function f(s) {
        if (isNumber(s)) {
            return s
        }
        if (hasNewline(s)) {
            return quotify(s)
        }
        return s
    }
    return (
        fn + parens(map(gatherArgs(args).filter(exists), f).join(', '))
    )
}

function dedent(s, unit) {
    if (unit) {
        return replace('^' + unit, '', s)
    }
    s = s.trimEnd().replace(/^\n+/, '')
    const spaces = getSpaces(s)
    return replace('^' + spaces, '', s)
}

function getWords(s, { mode = 's', min = 3, max = 50 } = {}) {
    let numbers = ''
    let extra = ''
    if (mode == 'code') {
        extra += '.'
        numbers += '\\d*'
    }

    if (mode == 'css') {
        extra += '-'
    }

    const regex = RegExp(
        `[a-zA-Z${extra}]{${min},${max}}${numbers}`,
        'g'
    )
    return s.match(regex) || []
}

function unzip(a) {
    return a.reduce(
        (acc, [x, y], i) => {
            acc[0].push(x)
            acc[1].push(y)
            return acc
        },
        [[], []]
    )
}
function zip(a, b = null, mode) {
    if (isNestedArray(a)) {
        b = a[1]
        a = a[0]
    }

    if (mode == Array) {
        const store = []
        for (let i = 0; i < a.length; i++) {
            store.push([a[i], b[i]])
        }
        return store
    }
    const store = {}
    for (let i = 0; i < a.length; i++) {
        store[a[i]] = b[i]
    }
    return store
}

function cartesianProduct(arr) {
    return arr.reduce(
        function (a, b) {
            return a
                .map(function (x) {
                    return b.map(function (y) {
                        return x.concat([y])
                    })
                })
                .reduce(function (a, b) {
                    return a.concat(b)
                }, [])
        },
        [[]]
    )
}

function curry(fn, ...kwargs) {
    return (...args) => {
        let count = 0
        for (let i = 0; i < kwargs.length; i++) {
            let kwarg = kwargs[i]
            if (kwarg === null) kwargs[i] = args[count++]
        }
        return fn(...kwargs)
    }
}

function force(x, n = 2, fallback = '') {
    if (x == null) x = []
    while (x.length < n) {
        x.push(fallback)
    }
    return x
}

function isStorage(x) {
    return test(/Storage/, x.constructor.name)
}

function isNewLine(s) {
    return /^\n+$/.test(s)
}

function colorToHex(color) {
    const dict = {
        black: '000000',
    }
    return '#' + dict[color] || dict.black
}

function iter(items, fn, ...args) {
    if (isNumber(items)) {
        const store = []
        for (let i = 0; i < items; i++) {
            store.push(fn(i, ...args))
        }
        return store
    }

    if (isObject(fn)) {
        for (let item of items) {
            if (fn[item]) {
                if (isFunction(fn[item])) {
                    fn[item](...args)
                }
            }
        }
    }

    return toArray(items).map((item, i) => {
        return fn(item, i, ...args)
    })
}

const StringMixins = {
    trim() {
        this.s = this.s.trim()
    },
    mreplace(regex) {
        const [s, match] = mreplace(regex, this.s)
        this.s = s.trim()
        return match
    },
}

function mixin(state, mixin, ...keys) {
    if (keys.length == 0) keys = Object.keys(mixin)
    for (let key of gatherArgs(keys)) {
        const value = mixin[key]
        if (isObject(value)) {
            Object.defineProperty(state, key, value)
        } else {
            state[key] = value.bind(state)
        }
    }
}

function eat(s, regex) {
    let m = search(regex, s.trim())
    if (m) return [s.slice(m.length).trim(), m]
    return [s, null]
}
class Eater {
    static eatStart(regex, s) {
        let m = search('^' + regex, s.trim())
        s = s.trim()
        if (m) return [s.slice(m), m]
        return [s, null]
    }

    constructor(regex) {
        this.regex = regex
        this.store = []
        mixin(this, StringMixins, 'trim', 'mreplace')
    }
    eatStart(regex) {
        const [s, match] = Eater.eatStart(regex, s)
        if (!match) return 1
        this.store.push(match)
    }

    eat(regex) {
        const match = this.mreplace(regex || this.regex)
        if (!match) return 1
        this.store.push(match)
    }

    run(s) {
        this.s = s.trim()
        while (true) {
            const done = this.eat()
            this.trim()
            if (done) break
        }
        return [this.s, this.store]
    }
}

function notNull(s) {
    return s !== null
}

function trimSpaces(s) {
    return s.replace(/^ +| +$/g, '')
}

class Matrix {
    iterate(fn) {
        let count = 0
        let linebreak
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let value = this.get(x, y)
                if (value == null) continue
                count++
                fn(value, x, y, count, linebreak)
                linebreak = false
            }
            linebreak = true
        }
    }
    constructor(x, width) {
        if (isNumber(arguments[0]) && isNumber(arguments[1])) {
            this.width = arguments[0]
            this.height = arguments[1]
            this.store = []
        } else if (isNestedArray(x)) {
            this.store = flat(x)
            this.width = x[0].length
            this.height = x.length
        } else if (isArray(x)) {
            if (!width) width = 3
            if (isObject(width)) {
                width = width.width
            }

            this.store = x
            this.width = width
            this.height = Math.ceil(
                this.store.length / this.width
            )
        }
    }

    [Symbol.iterator]() {
        this.index = 0
        return this
    }

    get(x, y) {
        return this.store[y * this.width + x]
    }

    set(x, y, value) {
        this.store[y * this.width + x] = value
    }

    getColumn(n) {
        const store = []
        let y = 0
        while (y < this.height) {
            store.push(this.get(n, y))
            y += 1
        }
        return store
    }

    getRow(n) {
        const store = []
        let x = 0
        while (x < this.width) {
            store.push(this.get(x, n))
            x += 1
        }
        return store
    }

    getColumns() {
        return iter(this.width, (i) => this.getColumn(i))
    }

    getRows() {
        return iter(this.height, (i) => this.getRow(i))
    }
}

function getStrings(s) {
    return findall(/\'.*?\'|\".*?\"/g, s).map((x) =>
        x.slice(1, -1)
    )
}

function normalizeSpaces(s) {
    return s.replace(/^ +/gm, (x) => {
        return ' '.repeat(fixSpaceLength(x.length))
    })

    function fixSpaceLength(n) {
        switch (n) {
            case 1:
                return 0
            case 2:
                return 4
            case 3:
                return 4
            case 4:
                return 4
            case 5:
                return 4
            case 6:
                return 8
            case 7:
                return 8
            case 8:
                return 8
            case 10:
                return 12
            case 11:
                return 12
            default:
                return n
        }
    }
}

function partial(fn, ...args) {
    return function(arg) {
        return fn(arg, ...args)
    }
}

function toStringArgument(x, quotes) {
    function parseObj(obj) {
        let s = '{\n'
        for (let [k, v] of Object.entries(obj)) {
            s +=
                indent(singlequote(k) + ': ' + parse(v)) + ',\n'
        }
        s += '}'
        return s
    }

    function parseArr(arr) {
        let s = '[\n'
        for (let item of arr) {
            s += indent(parse(item)) + ',\n'
        }
        s += ']'
        return s
    }

    function parseString(s) {
        if (test(/^[a-z].*?[A-Z]/, s)) return s
        return singlequote(s.toString())
        if (quotes) return s.toString()
        if (test(/^\+\(/, s)) return s
        if (s.includes(' ')) return singlequote(s)
        if (test(/[a-z]\.[a-z]/, s)) return s
    }

    function parse(s) {
        if (isObject(s)) {
            return parseObj(s)
        }

        if (isFunction(s)) {
            return s.toString()
        }

        if (isArray(s)) {
            return parseArr(s)
        }

        if (s == null) return 'null'
        if (s == undefined) return 'undefined'
        if (s == '') return "''"

        if (isNumber(s)) {
            return s
        }

        return parseString(s)
    }

    return parse(x)
}

function createVariable(a, b, quotes = true, prefix = 'const') {
    if (prefix) prefix += ' '
    switch (b) {
        case '':
            b = 'go'
    }

    let value = stringify(b)
    return `${prefix}${a} = ${value}`
}

function splitmapfilter(s, regex, fn, ...args) {
    const runner = (x, i, arr) => fn(x, ...args, i)
    return split(s, regex).map(runner).filter(exists)
}
function splitMapJoin(s, delimiter, fn) {
    return split(s, delimiter).map(fn).join(delimiter)
}

function argsplit(s, ref, regex = '($1)(\\w+)') {
    let match = search(ncg(regex, ref), s)
    return match ? match : [null, null]
}

function partitionWithFunctions(items, ...args) {
    const store = range(args.length + 1, [])
    for (let item of items.filter(exists)) {
        for (let i = 0; i < args.length; i++) {
            let arg = args[i]

            if (ftest(arg, item)) {
                store[i].push(item)
                break
            }

            if (i == args.length - 1) {
                store[store.length - 1].push(item)
            }
        }
    }
    return store
}
function isOnlyWords(s) {
    return test(/^[a-zA-Z](?: [a-zA-Z]+)*$/, s)
}
function warn(s) {
    console.log('warn'.repeat(20))
    console.log(s)
    console.log(getCaller())
    console.log('---------------------------')
}
function getSingleAndDoubleAttrs(s, mode) {
    const [text, doubles] = mreplace(/(\S+?) *= *('.*?'|".*?"|\S+)/g, s)
    const singles = split(text)
    if (mode == Object) {
        const store = {}
        for (let single of singles) {
            store[single] = true
        }

        for (let [a, b] of doubles) {
            store[a] = b
        }
        return store
    }
    return [singles, doubles]
}
function getOptions(s, mode) {
    if (mode == Object) {
        const [text, doubleAttrs] = mreplace(
            /(\S+?) *= *(\S+)/g,
            s
        )
        return [
            text,
            toDictionary(doubleAttrs, null, toArgument),
        ]
    }
    function runner(s) {
        if (isOnlyWords(s)) {
            return ['', reduce(split(s), (x) => [x, true])]
        }
        if (test(/:\w/, s)) {
            let [a, b] = mreplace(/:(\w+)/g, '', s)
            return [a, reduce(b, (x) => [x, true])]
        }

        if (test(/=/, s)) {
            let [a, b] = mreplace(/(\w+)=(\w+)/g, '', s)
            const p = [a, reduce(b, (k, v) => [k, v])]
            return p
        } else {
            let [a, b] = mreplace(/[;@](\w+)/g, '', s)
            return [a, reduce(b, (x) => [x, true])]
        }
    }

    let [a, b] = runner(s)
    if (exists(b)) {
        b = mapObject(b, dict)
    }
    return [a, b]
}

function aggregate(s, regex, kt, vt) {
    const storage = new Storage()
    const matches = isString(s) ? findall(regex, s) : s

    for (let [a, b] of matches) {
        if (kt) a = kt(a)
        if (vt) b = vt(b)
        storage.add(a, b)
    }
    return storage.value
}

function pipe(...a) {
    if (isArray(a[0])) a = a[0]
    if (isFunction(a)) return a
    return (...args) =>
        a
            .filter((x) => x)
            .reduce(
                (y, f) => (isArray(y) ? f(...y) : f(y)),
                args
            )
}

function createError() {
    try {
        throw new Error()
    } catch (e) {
        return e
    }
}

function replaceFromIndex(s, index, original, replacement) {
    let length = isNumber(original) ? original : original.length
    let before = s.slice(0, index)
    let after = s.slice(index + length)
    return before + replacement + after
}

function freplace(regex, replacement, s, flags = '') {
    if (isFunction(regex)) {
        return regex(s)
    }

    const parser = (...args) => {
        return isFunction(replacement)
            ? replacement(...args)
            : replaceTemplaterHelper(replacement, args)
        //: templater([getLast(args), ...args])
    }

    return replace(regex, parser, s, flags)
}

class Table extends Matrix {
    constructor(items, width) {
        super(items, width)

        this.simulate()
    }
    simulate() {
        const widths = this.getWidthes()
        const heights = this.getHeights()
        console.log(widths)
    }

    getWidthes() {
        return this.getColumns().map((item, i) => {
            return getLongest(item, len, null)
        })
    }

    getHeights() {
        return this.getRows().map((item, i) => {
            return getLongest(item)
        })
    }
}

function regexgetter(template, dict) {
    assert(template.startsWith('/'))
    let [regex, flags] = search(/\/(.*?)\/(\w+)$/, template)
    let keys = isObject(dict) ? Object.keys(dict) : dict
    let boundary = false

    if (flags.includes('e')) {
        keys = keys.map(mapConditional(/^\W+$/, rescape))
        flags = flags.replace('e', '')
    }

    if (flags.includes('b')) {
        boundary = true
        flags = flags.replace('b', '')
    }

    regex = regex.replace(/\$1/g, keys.join('|'))
    if (boundary) regex = '\\b' + regex + '\\b'
    return RegExp(regex, flags)
}

function hasGFlag(r) {
    return r.flags.includes('g')
}

function regexStartsWithSpaces(r) {
    return /^\^?    /.test(r.source ? r.source : r)
}
function inferlang(s) {
    if (!s) return 'js'
    let match = getExtension(s)
    if (match) {
        if (match == 'vimrc') return 'vim'
        if (match == 'bash_aliases') return 'bash'
        if (match == 'bashrc') return 'bashrc'
        return match
    }

    const dict = {
        '<': 'html',
        function: 'js',
        var: 'js',
        const: 'js',
        let: 'js',
        def: 'py',
        '.': 'css',
    }

    match = s.match(regexgetter('/^($1)/me', dict))
    if (!match)
        match = s.match(regexgetter('/^ *($1)/me', dict))
    return dict[match[0]]
}

function isAllCaps(s) {
    return /^[A-Z]+$/.test(s)
}

function abbreviate(s, mode) {
    s = s.replace(/^\W+/, '')
    if (s.length <= 3 || (isWord(s) && s == s.toLowerCase()))
        return s.toLowerCase()
    const regex = /[ \._-]|(\d+|[A-Z]+[a-z]*)/
    const letters = split(s, regex).map((x) => x[0])
    return mode == Array
        ? letters
        : letters.join('').toLowerCase()
}
class TextTokenizer {
    constructor(key) {
        const dictRE = ncg('^($1) *(.+)', dict)
        const splitRE =
            /(\n+|    +|bold \S+|bte.*|@.+|#\w+?(?:e .*?(?:\$|$)| \w+))/
        const items = split(s, splitRE)
        const store = []
        this.run
    }
    run(s) {
        this.s = s
        this.items = split(this.s, this.regex)
        console.log(this.items)
    }
    //new TextTokenizer('reddit')
}

function hasCode(s) {
    let r = /^(?:var|const|class|(?:async )?function)/m
    return r.test(s)
}
function getFunctionNames(s) {
    return unique(
        findall(
            '^(?:var|const|class|(?:async )?function(?:\\*|!)?) (\\w+)',
            s,
            'gm'
        )
    )
}

function removeSpaces(s) {
    return s.replace(/ /g, '')
}

function smallify(x) {
    if (isString(x)) {
        x = x.trim()
        if (lineCount(x) > 3) {
            return getFirstLine(x) + '\n...\n' + getLastLine(x)
        }
        return x
    }
    return x.length == 0 ? null : x.length == 1 ? x[0] : x
}

function spaceToCamel(s) {
    if (isNumber(s)) {
        return Number(s)
    }
    //return s.join('')
    let cap
    let lower
    return listgetter(s, ' ')
        .map((item, i, arr) => {
            if (i == arr.length - 1 && item == 'to') {
                return 2
            }

            if (item == 'new') {
                cap = true
                return 'new'
            }

            if (item == 'lowercase') {
                lower = true
                return ''
            }

            if (item == 'cap' || item == 'capitalize') {
                cap = true
                return ''
            }
            if (cap) {
                if (lower) {
                    lower = false
                } else {
                    item = capitalize(item)
                }
                cap = false
            }

            return item.length == 1 ||
                i == 0 ||
                arr[i - 1].endsWith('.')
                ? item
                : capitalize(item)
        })
        .join('')
}

function listgetter(x, regex) {
    if (isArray(x)) {
        return x
    }
    return split(x, regex)
}

function spaceToSnake(s) {
    return listgetter(s, ' ').join('_')
}

function createConfig(s, presets) {
    if (arguments.length > 1) {
        return reduce(partition(Array.from(arguments)))
    }
    if (!s) return {}
    if (isWord(s)) {
        if (presets && presets.hasOwnProperty(s)) {
            return presets[s]
        }
        return { [s.trim()]: true }
    }
    if (isObject(s)) {
        return s
    }
    s = s.trim()
    //if(/\w+ *= *\w/.test(s)) {
    //return split(s, /=/)
    //}
    let regex = /\w+ *= *\w/.test(s)
        ? /(\w+) *= *(.*?)(?=\w+ *=|$)/g
        : /  /.test(s)
        ? /(\w+) (.*?)(?=  \w+ |$)/g
        : test(/^\w+ \w+$/, s)
        ? /(\w+) (\w+)/g
        : test(/  /, s)
        ? /(\S.*?) (\S.*?)(?=  |$)/g
        : /(.*?) *[:=] *(.*?)(?:$|, ?|  )/g
    return reduce(findall(regex, s), (k, v) => {
        return [k.trim(), v ? toArgument(v) : true]
    })
}

function jspy(lang, key, ...args) {
    function commentCSS(s) {
        if (hasNewline(s)) {
            return '/*\n' + s + '\n*/'
        }
        return `/* ${s} */`
    }

    function commentJS(s) {
        if (hasNewline(s)) {
            return '/*' + newlineIndent(s) + '*/'
        }
        return '// ' + s
    }

    function commentPY(s) {
        if (hasNewline(s)) {
            return '"""' + newlineIndent(s) + '"""'
        }
        return '# ' + s
    }

    const indexes = ['js', 'py', 'vim', 'bash', 'css', 'html']
    const ref = {
        compiler: ['node', 'python3', 'bash'],
        runtime: ['node', 'python3', 'bash'],
        const: ['const ', '', 'let'],
        name: [spaceToCamel, spaceToSnake],
        params: [spaceToCamel, spaceToSnake],
        comment: [
            commentJS,
            commentPY,
            (x) => `" ${x}`,
            (x) => `# ${x}`,
            commentCSS,
            (x) => `<!-- ${x} -->`,
        ],
        //'variablefn': [variablejs, variablepy]
    }

    if (key == lang) {
        let index = indexes.indexOf(lang)
        return reduce(ref, (k, v) => [k, v[index]])
    }
    const value = ref[key][indexes.indexOf(lang)]
    return isFunction(value) && exists(args)
        ? value(...args)
        : value
}
function curryStart(...kwargs) {
    const fn = kwargs.pop()
    return function (...args) {
        fn(...kwargs, ...args)
    }
}
function stateCurryEnd(state, key, ...kwargs) {
    return function stateCurry(...args) {
        state[key](...args, ...kwargs)
    }
}

function stateCurryStart(state, key, ...kwargs) {
    return function stateCurry(...args) {
        return state[key](...kwargs, ...args)
    }
}

function curryEnd(...kwargs) {
    const fn = kwargs.shift()
    return function (...args) {
        fn(...args, ...kwargs)
    }
}

function timestamp(date) {
    let [h, m, s, ms, ampm] = getHMSM(date)
    //h = zeroPad(h)
    m = zeroPad(m)
    s = zeroPad(s)
    return `${h}:${m}${ampm}`
    return `${h}:${m}:${s}${ampm} ms: ${ms}`
}

function wordCount(s) {
    return split(s).length
}

function exporter(state, key, ...args) {
    if (isClassObject(state)) {
        return state[key] && state[key].bind(state)
    }
    state = new state(...args)
    return state[key].bind(state)
}

function stateTrace(state, fnKey) {
    state[fnKey] = trace(state[fnKey].bind(state))
}
class CodeLibrary {
    constructor(s) {
        const functions = getfunctions(s.toString())
        this.store = mapfilter(functions, getFunctionInfo)
    }
    get lib() {
        if (!this._lib) {
            this._lib = reduce(this.store, (x) => {
                return [x.name, x.body]
            })
        }
        return this._lib
    }

    get(key) {
        if (isNumber(key)) {
            const value = this.store[key - 1]
            return value || {}
        }
        if (isArray(key)) {
            return key.map((x) => this.lib[x]).filter(exists)
        }
        const item = this.find(key)
        return item
    }
    find(name) {
        let item = this.store.find((x) => x.name == name)
        if (!item) item = this.store.find((x) => test(name, x))
        if (!item) item = {}
        return item
    }
}

function getfunctions(s, mode = 'js') {
    return split(
        s,
        /\n+(?=export \w+|const|async|class|(@.+\n)*function|var|let)/
    ).map(trim)
}

function mapfilter(items, fn, filter) {
    //console.log([items])
    const store = []
    for (let i = 0; i < items.length; i++) {
        let item = items[i]
        if (!item) continue
        let value = fn(item, i)
        if (value) {
            if (filter && !filter(value)) continue
            store.push(value)
        }
    }
    return store
}

function getParamInfo(s) {
    const params = getParameters(s)
    let length = params.length
    if (params.includes('...')) {
        length += 99
    }
    return { params, length }
}
function countParameters(v) {
    if (!v) return 0
    if (getFirstLine(v.toString()).includes('...')) {
        return 100
    }
    return getParameters(v).length
}
function getParameters(s) {
    let r1 = /^function \w+ *\((.*?(?:} = {[^]+?)?)\) {/
    let r2 = /^\w+ *\((.*?(?:} = {[^]+?)?)\) {/
    let r3 = /^.*?=>/
    let m = itersearch(s.toString(), r1, r2, r3)
    //console.log(m)
    if (!m) return []
    return findall(/(?:\.\.\.)?(\w+)(?:,|$| *=>|\))/g, m)
}

async function foo() {
    timer = new Clock(12)
    timer.onTick = console.log
    await timer.start()
    console.log('ooo')
}

function scopedEval(expr, context) {
    if (!exists(context)) {
        return eval(expr)
    }
    const evaluator = Function.call(
        null,
        ...Object.keys(context),
        'expr',
        "return eval('expr = undefined;' + expr)"
    )
    return evaluator.call(null, ...Object.values(context), expr)
}

function timegetter(message) {
    let time = Date.now()
    return time
    console.log(timestamp(), message || '')
    return time
}
function getErrorInfo(e, options = {}) {
    if (isString(e)) {
        return console.log({ myError: e })
    }

    let s = e.stack
    let match = search(/<anonymous>:(\d+):(\d+)/, s)
    if (!match) {
        return
    }
    match = match.map(Number)
    if (options.offset) {
        match = match.map((x, i) => x - options.offset[i])
    }

    let [name, message] = search(/(\w+): *(.*)/, s)
    let value
    let proposedFixFn
    let template
    if (name == 'ReferenceError') {
        value = search(/[\w.]+/, message)
    }

    if (name == 'SyntaxError') {
        value = search(/[\w.]+/, message)
        //template = `let ${value} = ''\n$1`
        //proposedFixFn = templateToFunction(template)
        //console.log(proposedFixFn.toString(), 'fixfn')
    }
    return {
        line: match[0],
        ch: match[1],
        name,
        message,
        value,
        proposedFixFn,
    }
}

function getDetailedErrorInfo(e) {
    let s = e.stack.slice(0, -465)
    let [name, message] = search(/(\w+): *(.*)/, s)

    let regex = /^ *at (\S+) \((.*?):(\d+):(\d+)/gm
    let stack = findall(regex, s).map(
        ([caller, file, line, ch], i) => {
            line = Number(line)
            ch = Number(ch)
            if (caller.includes('.')) {
                let [className, method] = caller.split('.')
                return {
                    class: className,
                    method,
                    file,
                    line: Number(),
                    ch,
                }
            }
            return { caller, file, line, ch }
        }
    )
    return {
        name,
        message,
        stack,
    }
}

class ItemIter {
    constructor(items) {
        this.load(items)
    }
    next() {
        if (this.index > this.items.length - 1) return false
        this.value = this.items[this.index++]
        return true
    }
    load(s) {
        if (!s) return
        const items = xsplit(s)
        this.items = items
        this.index = 0
        this.ei = 0
        this.value = this.items[this.index++]
        return items
    }
}

function forEach(items, fn, options) {
    const iter = new Iter(items)
    const clock = new Clock(iter.size)
    clock.setOptions(options)
    clock.onTick = () => {
        fn(iter.value)
        iter.next()
    }
    return clock.start()
}

function getCaller(target, simple = true) {
    //console.log(getStackTrace())
    let stack = getStackTrace()
        .slice(3)
        .filter(([a, b]) => {
            return !test(/proxy|invoke/i, a)
        })
    //console.log(stack)
    if (simple) stack = stack.map((x) => x[0])
    switch (target) {
        case '':
        case null:
        case undefined:
        case 0:
            return stack[0]
        case -1:
        case -2:
        case -3:
        case 1:
            return stack[Math.abs(target)]
        case 2:
            return stack[2] + '-' + stack[1]
        case 3:
            return stack[3] + '-' + stack[2] + '-' + stack[1]
        default:
            return stack.find(testf(target))
    }
}

function vars(obj) {
    let s
    let name
    let _type
    if (!obj.prototype) {
        s = obj.constructor.toString()
        name = obj.constructor.name
        _type = 'class'
    } else if (obj.name) {
        name = obj.name
        s = obj.toString()
        _type = type(obj)
    }
    const info = { name, type: _type }

    let props = getClassProperties(s)
    if (!exists(props)) {
        props = Object.getOwnPropertyNames(props)
    }

    return { props, ...info }
}

function trywrap(fn, handler) {
    return (...args) => {
        try {
            return fn(...args)
        } catch (e) {
            return handler(e)
        }
    }
}
function stringIIFEWrap(s) {
    const value = parens(brackify('() =>', s)) + '()'
    //console.log(value)
    //console.log(value); throw ''
    return value
}
function stringTryWrap(s) {
    const fix = `return getErrorInfo(e, {offset: [3, 9]})`
    return stringIIFEWrap(
        brackify('try', s) + ' ' + brackify('catch(e)', fix)
    )
}

function getLoggableProperties(x) {
    let value = isClass(x)
        ? getClassProperties(x)
        : stringify(x)
    return value
}

function removeStrings(s) {
    return s.replace(/\'.*?\'|\".*?\"|\`[^]*?\`/g, '')
}

function addf(s) {
    return (x) => x + s
}

function lineCount(s) {
    return count('\n', s) + 1
}

function saybye(s = '') {
    console.log('bye')
    return 'bye ' + s
}

function sayhi(x = '', greeting = 'Hello') {
    if (!isString(x)) {
        console.log('donald')
    }
    const message = `${greeting} from ${x}`
    console.log(message)
    return message
}

function captureRegex(regex, flags) {
    if (isString(regex)) {
        return RegExp(parens(regex, flags))
    } else {
        return RegExp(parens(regex.source), regex.flags)
    }
}

function splitLast(s, regex, flags) {
    const items = s.split(captureRegex(regex, flags))
    let a = items[0]
    let b = ''
    //console.log(items)
    for (let i = 1; i < items.length - 1; i += 2) {
        let item = items[i]
        let next = items[i + 1]

        if (i == items.length - 2) {
            b += item
            b += next
            return [a, b]
        } else {
            a += item
            a += next
        }
    }
}
function replaceLast(regex, replacement, s) {
    let match
    let lastMatch
    regex = addGFlag(regex)
    while (exists((match = regex.exec(s)))) {
        lastMatch = match
    }
    let index = lastMatch.index
    let length = lastMatch[0].length
    return (
        s.slice(0, index) +
        replacement +
        s.slice(index + length)
    )
}
function bringFunctionToLife(s) {
    let [text, isAsync] = mreplace(/^async /, s)
    if (isStringObjectFunction(text)) {
        text = 'function ' + text
    }

    //if (isStringLambdaFunction(text)) {
    //text = text.replace(
    ///(.*?) *=> *({?)/,
    //(_, x, bracket) => {
    //let payload = x.startsWith('(') ? x : parens(x)
    //if (bracket) {
    //payload += '{'
    //}
    //return 'function lambda' + k + payload
    //}
    //)
    //}

    if (isAsync) text = 'async ' + text
    const fnString = parens(text)
    const fn = tryval2(fnString)
    return fn
}

function bringToLife(s, context) {
    if (!isString(s)) return s
    if (context) return scopedEval(s, context)
    if (isStringFunction(s)) {
        return bringFunctionToLife(s)
    }
    if (isWord(s)) {
        return eval(s)
    }
    let template = `(${getVariables(s).join(', ')}) => ${s}`
    return bringFunctionToLife(template)
    return toArgument(s)
}

function getVariable(s) {
    const regex = /\b[abcdexyzsir]\b/g
    return search(regex, s)
}

function getVariables(s, mode) {
    const regex = /\b[abcdexyzsir]\b/g
    if (mode == Object) {
        return tally(s.match(regex))
    }
    return unique(match(regex, s))
}

function addNestedProperty(base, ...args) {
    let ref = base
    if (args[0].includes('.')) {
        args.unshift(...args.shift().split('.'))
    }
    for (let i = 0; i < args.length; i++) {
        let arg = args[i]

        if (i == args.length - 2) {
            ref[args[i]] = args[i + 1]
            break
        } else {
            if (!ref.hasOwnProperty(arg)) {
                ref[arg] = {}
            }
            ref = ref[arg]
        }
    }
    return base
}
function addDeepKey(ref, key, value) {
    let [keys, last] = splitOnceReverse(key, '.')
    keys.forEach((item, i) => {
        if (!ref.hasOwnProperty(item)) {
            ref[item] = {}
        }
        ref = ref[item]
    })
    ref[last] = toArgument(value)
    return ref
}

function collectObjectFromString(s) {
    split(s, deli)
}
function isProse(s) {
    if (/\\/.test(s)) return false
    const p = test(/^(?:[\.\,] )?[a-zA-Z]{2,}/, s)
    return p
}

function looksLikeProse(s) {
    if (/\\/.test(s)) return false
    const p = test(/^(?:[\.\,] )?[a-zA-Z]{2,}/, s)
    return p
}

function getFirstParameter(fn) {
    return search(/\((\w+)/, String(fn))
}
function isStandardHtml(s) {
    const natives = [
        //'html',
        //'main',
        'body',
        'div',
        'p',
        'a',
        'section',
        'iframe',
        'ul',
        'li',
        'header',
        'footer',
    ]
    return natives.includes(s)
}

function fixUrl(s) {
    s = s.replace(/view-source:/, '')
    if (!test('^http', s)) s = 'https://' + s
    if (!s.includes('.')) s += '.com'
    return s
}

function isSymbol(s) {
    return test(/^[\W\s]\W*$/, s)
}

function consoleThrow(...args) {
    console.log(...args)
}

function getChunks(s, regex) {
    if (!regex) regex = /\n+(?=[\w.#])/
    return s.trim().split(regex).map(trim)
}

function pluralize(word, amount) {
    //console.log({word, amount})
    if (amount !== undefined && amount === 1) {
        return word
    }
    const plural = {
        '(quiz)$': '$1zes',
        '^(ox)$': '$1en',
        '([m|l])ouse$': '$1ice',
        '(matr|vert|ind)ix|ex$': '$1ices',
        '(x|ch|ss|sh)$': '$1es',
        '([^aeiouy]|qu)y$': '$1ies',
        '(hive)$': '$1s',
        '(?:([^f])fe|([lr])f)$': '$1$2ves',
        '(shea|lea|loa|thie)f$': '$1ves',
        sis$: 'ses',
        '([ti])um$': '$1a',
        '(tomat|potat|ech|her|vet)o$': '$1oes',
        '(bu)s$': '$1ses',
        '(alias)$': '$1es',
        '(octop)us$': '$1i',
        '(ax|test)is$': '$1es',
        '(us)$': '$1es',
        '([^s]+)$': '$1s',
    }
    const irregular = {
        move: 'moves',
        foot: 'feet',
        goose: 'geese',
        sex: 'sexes',
        child: 'children',
        man: 'men',
        tooth: 'teeth',
        person: 'people',
    }
    const uncountable = [
        'sheep',
        'fish',
        'deer',
        'moose',
        'series',
        'species',
        'money',
        'rice',
        'information',
        'equipment',
        'bison',
        'cod',
        'offspring',
        'pike',
        'salmon',
        'shrimp',
        'swine',
        'trout',
        'aircraft',
        'hovercraft',
        'spacecraft',
        'sugar',
        'tuna',
        'you',
        'wood',
    ]
    if (uncountable.indexOf(word.toLowerCase()) >= 0) {
        return word
    }
    for (const w in irregular) {
        const pattern = new RegExp(`${w}$`, 'i')
        const replace = irregular[w]
        if (pattern.test(word)) {
            return word.replace(pattern, replace)
        }
    }

    for (const reg in plural) {
        const pattern = new RegExp(reg, 'i')
        if (pattern.test(word)) {
            return word.replace(pattern, plural[reg])
        }
    }
    return word
}

function depluralize(word, amount) {
    if (amount !== undefined && amount !== 1) {
        return word
    }
    const singular = {
        '(quiz)zes$': '$1',
        '(matr)ices$': '$1ix',
        '(vert|ind)ices$': '$1ex',
        '^(ox)en$': '$1',
        '(alias)es$': '$1',
        '(octop|vir)i$': '$1us',
        '(cris|ax|test)es$': '$1is',
        '(shoe)s$': '$1',
        '(o)es$': '$1',
        '(bus)es$': '$1',
        '([m|l])ice$': '$1ouse',
        '(x|ch|ss|sh)es$': '$1',
        '(m)ovies$': '$1ovie',
        '(s)eries$': '$1eries',
        '([^aeiouy]|qu)ies$': '$1y',
        '([lr])ves$': '$1f',
        '(tive)s$': '$1',
        '(hive)s$': '$1',
        '(li|wi|kni)ves$': '$1fe',
        '(shea|loa|lea|thie)ves$': '$1f',
        '(^analy)ses$': '$1sis',
        '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$':
            '$1$2sis',
        '([ti])a$': '$1um',
        '(n)ews$': '$1ews',
        '(h|bl)ouses$': '$1ouse',
        '(corpse)s$': '$1',
        '(us)es$': '$1',
        s$: '',
    }
    const irregular = {
        move: 'moves',
        foot: 'feet',
        goose: 'geese',
        sex: 'sexes',
        child: 'children',
        man: 'men',
        tooth: 'teeth',
        person: 'people',
    }
    const uncountable = [
        'sheep',
        'fish',
        'deer',
        'moose',
        'series',
        'species',
        'money',
        'rice',
        'information',
        'equipment',
        'bison',
        'cod',
        'offspring',
        'pike',
        'salmon',
        'shrimp',
        'swine',
        'trout',
        'aircraft',
        'hovercraft',
        'spacecraft',
        'sugar',
        'tuna',
        'you',
        'wood',
    ]
    // save some time in the case that singular and plural are the same
    if (uncountable.indexOf(word.toLowerCase()) >= 0) {
        return word
    }
    // check for irregular forms
    for (const w in irregular) {
        const pattern = new RegExp(`${irregular[w]}$`, 'i')
        const replace = w
        if (pattern.test(word)) {
            return word.replace(pattern, replace)
        }
    }
    // check for matches using regular expressions
    for (const reg in singular) {
        const pattern = new RegExp(reg, 'i')
        if (pattern.test(word)) {
            return word.replace(pattern, singular[reg])
        }
    }
    return word
}

function findallStrings(s) {
    return findall(/\'.*?\'|\".*?\"/g, s).map((x) =>
        x.slice(1, -1)
    )
}

function isStandardCss(s) {
    if (test(/^.*?{/, s)) return true
}
function isDoubleIterable(x) {
    return isArray(x[0]) && x[0].length == 2
}
function reduceToString(iterable, fn, options = 'entries') {
    if (!fn && isObject(iterable)) {
        fn = (k, v) => v
    }
    let mode = 'entries'
    let delimiter
    if (isObject(options)) {
        mode = options.mode
        delimiter = options.delimiter || null
    }
    iterable = prepareIterable(iterable, mode)
    const runner = isDoubleIterable(iterable)
        ? (x, i) => fn(...x, i)
        : fn
    const values = iterable.map(runner).filter(exists)
    return join(values, delimiter)
}

function join(arr) {
    if (!exists(arr)) {
        return ''
    }

    let delimiter = '\n'

    if (arguments.length > 1) {
        let args = flat(Array.from(arguments))
        if (/^\s+$/.test(getLast(args))) {
            delimiter = args.pop()
        }
        arr = args.filter(exists).map(String)
    } else if (isString(arr)) {
        return arr
    } else if (isObject(arr)) {
        arr = Object.values(arr)
    } else {
        arr = Array.from(arr)
    }
    if (delimiter) return arr.join(delimiter)

    let s = ''
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (item == '') continue
        s += item
        if (i < arr.length) {
            let next = arr[i + 1] || ''
            s +=
                item.includes('\n') || next.includes('\n')
                    ? '\n\n'
                    : '\n'
        }
    }
    return s
}

function joinold(arr) {
    if (!exists(arr)) {
        return ''
    }
    if (arguments.length > 1) {
        arr = Array.from(arguments).filter(exists).map(String)
    } else if (isString(arr)) {
        return arr
    } else if (isObject(arr)) {
        arr = Object.values(arr)
    } else {
        arr = Array.from(arr)
    }

    let s = ''
    for (let item of arr) {
        s += item
        s += item.includes('\n') ? '\n\n' : '\n'
    }
    return s
}

function wrap(s, delimiter = '\n') {
    if (delimiter == '[]') return `[${s}]`
    if (delimiter == '{}') return `{${s}}`
    if (delimiter == '()') return `(${s})`
    return delimiter + s + delimiter
}

function hasOwn(obj, key) {
    return obj.hasOwnProperty(key)
}

function startsWithSymbol(s) {
    const startsWithSymbolRE = /^[^\w\s]/
    return test(startsWithSymbolRE, s)
}

function splitOnceSymbolOrWord(s) {
    const value = startsWithSymbol(s)
        ? search(/^([^\w\s]+)(.*)/, s)
        : search(/^(\w+) (\w.*)/, s)

    if (!value) return [null, null]
    if (value.length == 1) return [value, null]
    return value
}

class IndexError extends Error {
    constructor(...args) {
        super(...args)
    }
}

function mergeProps(...args) {
    const store = {}

    function childRunner(store, k, v) {
        let current = store[k]
        if (isObject(v)) {
            runner(v, current)
        } else if (isArray(v)) {
            for (let item of v) {
                if (!current.includes(item)) {
                    store[k].push(item)
                }
            }
        } else if (isFunction(v)) {
            store[k] = mergeFunction(current, v)
        }
    }
    function runner(arg, store) {
        if (!arg) return
        for (let [k, v] of Object.entries(arg)) {
            if (store.hasOwnProperty(k)) {
                childRunner(store, k, v)
            } else {
                store[k] = v
            }
        }
    }

    for (let arg of args) {
        runner(arg, store)
    }
    return store
}

function mergeFunction(current, next) {
    return function mergedFunction(...args) {
        let a = current(...args)
        let b = next(...args)
    }
}
function compose(...functions) {
    return function lambda(...args) {
        for (let i = functions.length - 1; i >= 0; i--) {
            if (i == functions.length - 1) {
                val = functions[i](...args)
            }
            else {
                val = functions[i](val)
            }
        }
        return val
    }
    return (x) => fns.reduceRight((acc, f) => f(acc), x)
}

function coerceToArray(x) {
    if (x == null) return []
    if (isString(x)) {
        return split(x)
    }
    return [x]
}

function coerceToString(x) {
    return x.toString()
}

function coerceToNumber(x) {
    //console.log([x])
    if (isNumber(x)) {
        return Number(x)
    }
    if (isString(x)) {
        let y = wordToNumber(x)
        if (y > -1) return x
        return Number(x.replace(/\D+/g, ''))
    }
}

function startsWithPeriod(s) {
    return test(/^\./, s)
}

function splitOptionalComma(s) {
    return s.trim().split(/,? +/)
}

function brackify(name, value) {
    return (
        (name ? name + ' ' : '') +
        '{' +
        newlineIndent(value) +
        '}'
    )
}

function hasColon(s) {
    return test(/:/, s)
}

function curryEnd(fn, ...args) {
    return (...bargs) => fn(...bargs, ...args)
}

function curryStart(fn, ...args) {
    if (!isFunction(fn)) {
        return stateCurryStart(fn, ...args)
    }
    return (...bargs) => fn(...args, ...bargs)
}

function hasDash(s) {
    return test(/-/, s)
}
function getFirstLine(s) {
    return s.match(/^.*/)[0]
}

function removeStartingSpaces(s) {
    return s.toString().replace(/^\n*/, '').trimEnd()
}

function toFunctionRegex(s, flags = 'm') {
    const ignore = ['run']
    if (s.length <= 2 && !ignore.includes(s)) {
        s = toAbbreviationRegex(s)
    }
    return RegExp(
        '^(?:(?:async )?function|class|const|var) ' +
            s +
            '\\b[\\w\\W]*?\\n}',
        flags
    )
}

function getSpacesFromOffset(offset, original) {
    let ch
    let s = ''
    let a = offset
    while (a > 0 && ch != '\n') {
        ch = original.charAt(a--)
        s += ch
    }
    let spaces = search(/ +(?=\n)/, s)
    return (spaces && spaces.length) || 0
}

function countParentheses(s) {
    return count(/[()]/, s)
    //return (match(/(?:[^\\]|^)\((?![\?])/g) || []).length
}

function countCaptureGroups(regex) {
    let s = regex.source || regex
    return (s.match(/(?:[^\\]|^)\((?![\?])/g) || []).length
}

function getLastLine(s) {
    return s.match(/.*?$/)[0]
}

function iterSearch(s, regexes, mode = 'match') {
    for (let regex of regexes) {
        let value =
            mode == 'search' ? search(regex, s) : s.match(regex)

        if (value) {
            return value
        }
    }
    return null
}

function itersearch(s, ...regexes) {
    if (!s) return
    s = s.trim()
    for (let regex of regexes) {
        let value = search(regex, s)
        if (value) {
            return value
        }
    }
    return null
}

function findError(s) {
    const chunks = getChunks(s)
    const store = []

    for (let chunk of chunks) {
        try {
            eval(chunk)
        } catch (e) {
            if (e.constructor.name == 'ReferenceError') {
                continue
            }
            store.push([e.toString(), chunk])
        }
    }
    console.log(store)
    console.log(store.length)
    return store
}

function hasCamelCase(s) {
    return test(/[a-z][A-Z]/, s)
}

function lbreplace(regex, replacement, s, flags) {
    let lbRegex
    let newRegex

    if (isRegExp(regex)) {
        regex = regex.toString()
        flags = regex.match(/\/(\w+)$/)
        flags = (flags && flags[1]) || ''
        regex = regex.slice(1).replace(/\/\w*$/, '')
        //console.log(regex)
    }

    if (test(/\?<=/, regex)) {
        let temp = ''
        let index = 0
        let close = 0
        let open = 0
        while (true) {
            let prev = regex[index - 1]
            let char = regex[index++]
            if (prev != '\\') {
                if (char == '(') {
                    open += 1
                } else if (char == ')') {
                    close += 1
                }
            }
            temp += char
            if (open == close) {
                break
            }
        }

        newRegex = regex.replace(/\?<=/, '?:')
        lbRegex = temp.replace(/\?<=/, '?:')
        return replace(newRegex, parser, s, flags)
    } else {
        return replace(regex, replacement, s, flags)
    }

    function parser(...args) {
        let x = args[0]
        //console.log(lbRegex); throw ''
        //console.log(x); throw ''
        let [text, lb] = mreplace(
            lbRegex,
            '',
            x,
            flags.replace('g', '')
        )
        //console.log([text, lb]); throw ''
        let value = isFunction(replacement)
            ? replacement(text, ...args.slice(1))
            : replacement
        return lb + value
    }
}

function sreplace(s, r, f, flags = 'g') {
    r = rescape(r).replace(/\\\$1/g, '(\\w+)')
    return s.replace(RegExp(r, flags), (_, x) => {
        return eval(f.replace(/\$1/, singlequote(x)))
    })
}

function toRequireString(s) {
    return `const ${removeExtension(s)} = require('${s}')`
}

function removeFunctionPrefix(s) {
    return s.replace(/function /, '')
}
function removeExtension(s) {
    return s.replace(/\.\w+$/, '')
}

function getStackInfo(e) {
    // DONT WRITE CONSOLE.LOG
    const stack = getStackTrace(e)
    //original(stack)
    //throw ''
    const ignore = ['reduce', 'filter']
    for (let i = stack.length - 1; i >= 0; i--) {
        let now = stack[i]
        let next = stack[i + 1]
        let name = now[0]
        //original(name)
        switch (name) {
            //case 'args.map':
            case 'display':
            case 'lambdaDisplay':
            case 'proxyAssertion':
            case 'Console.display':
            case 'console.display':
                return next

            case '<anonymous>':
                if (stack[i - 1][0] == 'Console.display')
                    return ['global', stack[i][1]]
        }
    }
    return stack[0]
}
function getStackTrace(e) {
    if (!e) e = createError()
    const s = isString(e) ? e : e.stack
    const r = /at (?:new |Object\.)?([<>a-zA-Z0-9\.]+) .*?(\d+):\d+\)/g
    return findall(r, s)
}

function isCss(s) {
    return test(/^\./, s)
}
class IndexedMap {
    combine(...args) {
        const map = new IndexedMap()
        map.keys = this.keys
        map.values = this.values

        for (let arg of args) {
            map.set(...arg)
        }
        return map
    }

    [Symbol.iterator]() {
        this.index = 0
        return this
    }
    next() {
        const value = this.values[this.index++]
        const done = this.index > this.values.length
        return { value, done }
    }

    constructor() {
        this.index = 0
        this.values = []
        this.keys = []
    }
    has(k) {
        return this.keys.includes(k)
    }
    set(k, v) {
        if (this.has(k)) {
            const index = this.keys.indexOf(k)
            this.values[index] = v
        } else {
            this.keys.push(k)
            this.values.push(v)
        }
    }
    get size() {
        return this.keys.length
    }
    get(key, update = true) {
        let index = this.index
        if (!key) {
            index = 0
        } else if (key == 1 || key == -1) {
            index += key
            if (index == this.size) index = 0
            else if (index == -1) index = this.size - 1
        } else if (isNumber(key)) {
            index = Number(key)
            if (index >= this.size) index = this.size - 1
            if (index < 0) index = 0
        } else if (isString(key)) {
            key = fuzzyMatch(key, this.keys)
            if (key) {
                index = this.keys.indexOf(key)
            } else {
                return [null, null]
            }
        }
        if (update) {
            this.index = index
            this.key = this.keys[this.index]
            this.value = this.values[this.index]
            return [this.key, this.value]
        } else {
            return [this.keys[index], this.values[index]]
        }
    }
}

function isSingleCssProperty(s) {
    return test(/^.*?{\n.+\n}/, s)
}

function smartDedent(s) {
    s = replace(/^\n*|\n$/g, '', s, 'g')
    const spaces = search(/^ *(?=\S)/m, s)
    const secondLineSpaces = search(/\n *(?=\S)/, s)
    if (
        !spaces &&
        secondLineSpaces &&
        secondLineSpaces.length > 4
    ) {
        return replace(
            '^' + secondLineSpaces.slice(5),
            '',
            s,
            'gm'
        ).trim()
    } else {
        s = replace('^' + spaces, '', s, 'gm')
        s = removeComments(s)
        return s.trim()
    }
}

class Iter {
    set parser(fn) {
        this._parser = fn
    }
    get size() {
        return this.items.length
    }
    constructor(x) {
        this.items = xsplit(x)
        this.index = 0
    }
    test(x) {
        return ftest(x, this.value)
    }
    break() {
        this.index--
    }
    peek() {
        return this.items[this.index]
    }
    get remaining() {
        return this.items.slice(this.index)
    }
    replace(x) {
        this.items[this.index] = fparse(x, this.value)
    }
    next() {
        if (this.index > this.items.length - 1) return false
        this.value = this.items[this.index++]
        this.nextValue = this.items[this.index]
        if (this._parser) this.parsed = this._parser(this.value)
        if (this._sets) {
            for (let [k, v] of Object.entries(this._sets)) {
                this[k] = v(this.value)
            }
        }
        return true
    }

    set(key, fn) {
        if (!this._sets) this._sets = {}
        this._sets[key] = fn
    }
}

class LineEdit {
    static LineEdit(s, fn) {
        return s
            .trim()
            .split('\n')
            .map(fn)
            .filter((x) => x != null)
            .join('\n')
    }
    toString() {
        return this.getValue()
    }

    insertLineBelow(index, content) {
        this.getset(index, (line, spaces) => {
            const spacing = isEnterBlock(line) ? 4 : 0
            return indent(content, spacing) + '\n' + line
        })
    }

    insertLineAbove(index, content) {
        this.getset(index, (line, spaces) => {
            return content + '\n' + line
        })
    }

    get(n) {
        return this.lines[n]
    }

    delete(n) {
        this.lines[n] = null
    }

    get prev() {
        return this.lines[this.index - 1]
    }

    get next() {
        let count = this.index + 1
        let line = this.get(count)
        while (!exists(line)) {
            line = this.get(count++)
        }
        return line
    }

    get isLast() {
        return this.index == this.lines.length - 1
    }
    get last() {
        return this.lines[this.lines.length - 1]
    }

    getset(index, fn, ...args) {
        let line = this.get(index)
        let spaces = getSpaces(line)
        let payload = fn(line, spaces.length, ...args)
        this.set(payload)
    }

    find(regex, n = -1) {
        let a = this.index - 1
        let match
        let line
        let count = 0

        do {
            line = this.getLine(a)
            match = search(regex, line)
            a += n
        } while (!match || count++ < 100)
        return match
    }

    peek(x) {
        if (x) {
            let a = this.index + 1
            let next = this.lines[a]
            while (a < this.lines.length && !ftest(x, next)) {
                next = this.lines[a++]
            }
            return next
        }
        return this.lines[this.index + 1]
    }

    getValue() {
        return join(this.store.filter(String))
    }

    deleteRange(range) {
        let [from, to] = range
        for (let i = from; i < to; i++) {
            this.deleteLine(i)
        }
    }

    replaceRange(range, fn) {
        const block = this.getRange(...range)
        this.deleteRange(range)
        const replacement = fn(block)
        this.setLine(range[0], replacement)
        this.lastIndex = range[1]
    }

    getRange(from, to) {
        return this.lines
            .slice(from, to || this.lines.length)
            .join('\n')
    }

    constructor(parser, config) {
        if (parser) this.parser = parser.bind(this)
        this.tabWidth = 4
        this.config = { trim: true }
        Object.assign(this.config, config)
    }

    reset() {
        this.tracker = {}
        this.store = []
        this.index = 0
    }

    run(s) {
        this.reset()
        this.lines = (this.s || s).trim().split('\n')

        for (let i = 0; i < this.lines.length; i++) {
            const original = this.lines[i]
            const [indentation, line] =
                getIndentAndLine(original)
            const lineValue = this.config.trim ? line : original

            this.spaces = indentation
            this.index = i
            this.parser(lineValue, indentation, i)
        }
        return this
    }

    insert(index, value) {
        let [spaces, line] = getSpacesAndLine(this.get(index))
        const payload =
            spaces + (isFunction(value) ? value(line) : value)
        insert(this.lines, payload, index)
    }

    set(value, spaces) {
        const payload = indent(
            value,
            spaces == null ? this.spaces : spaces
        )
        if (isArray(payload)) {
            this.store.push(...payload)
        } else {
            this.store.push(payload)
        }
    }
}

function isEnterBlock(s) {
    return /[:{(\[] *$/.test(s)
}

function fixSpaceLength(n) {
    switch (n) {
        case 1:
            return 0
        case 2:
            return 4
        case 3:
            return 4
        case 4:
            return 4
        case 5:
            return 4
        case 6:
            return 8
        case 7:
            return 8
        case 8:
            return 8
        case 10:
            return 12
        case 11:
            return 12
    }
    return n
}

function isHtml(s) {
    if (test(/<\w/, s)) {
        return true
    }
}

function isHtmlAttr(s) {
    if (test(/^\.|foo/, s)) {
        return true
    }
}

class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(e, listener) {
        if (isObject(e)) {
            for (let [k, v] of Object.entries(e)) {
                this.on(k, v)
            }
            return
        }

        if (typeof this.events[e] !== 'object') {
            this.events[e] = []
        }
        this.events[e].push(listener)
        return () => this.removeListener(e, listener)
    }
    removeListener(e, listener) {
        if (typeof this.events[e] === 'object') {
            const index = this.events[e].indexOf(listener)
            if (index > -1) {
                this.events[e].splice(index, 1)
            }
        }
    }
    emit(e, ...args) {
        if (typeof this.events[e] === 'object') {
            this.events[e].forEach((listener) => {
                listener.apply(this, args)
            })
        }
    }
    once(e, listener) {
        const remove = this.on(e, (...args) => {
            remove()
            listener.apply(this, args)
        })
    }
}

function testf(regex, flags = '') {
    if (isString(regex) && isWord(regex)) {
        regex = RegExp(boundary(regex), 'i')
    }
    return (s) => test(regex, s, flags)
}

const vmap = {
    'v-bind': 'v-bind',
    style: ':style',
    enter: '@keydown.enter',
    tc: 'textContent',
    t: 'textContent',
    ih: 'innerHTML',
    bind: 'v-bind',
    ref: 'ref',
    show: 'v-show',
    click: '@click',
    tg: 'transition-group',
    if: 'v-if',
    elif: 'v-else-if',
    else: 'v-else',
    key: ':key',
    for: 'v-for',
    fori: 'v-for',
    vfor: 'v-for',
    html: 'v-html',
    model: 'v-model',
}

function atObject(o) {
    if (isObject(o)) {
        return (x) => {
            for (let [k, v] of Object.entries(o)) {
                x[k] = v(x[k])
            }
            return x
        }
    }
    return (x) => {
        return {
            [o]: arguments[1] ? arguments[1](x) : x,
        }
    }
}

function atFirst(fn, ...args) {
    return (x) => [fn(x[0], ...args), x[1]]
}

function atSecond(fn, ...args) {
    return (x) => [x[0], fn(x[1], ...args)]
}

function log(s) {
    return `console.log(${s})`
}
function logger(x) {
    //dumb
    if (isClassObject(x)) {
        return x
    } else if (isPrimitive(x)) {
        return x
    } else {
        return stringify(x)
    }
}

function run(State, ...args) {
    try {
        const state = new State()
        const value = state.run(...args)
        console.log(value)
        //console.log(logger(value))
        return
    } catch (e) {
        console.log(e)
        //const value = State(...args)
        //console.log(logger(value))
        //l e
    }
}

class IncrementalBuilder {
    constructor() {}
}

function getUniqueLetters(s) {
    return unique(findall(/\w/g, s))
}

function isAllEqual(x) {
    return x.every((item) => item == item[0])
}

function fillTo(items, item, amount) {
    if (arguments.length == 2) {
        amount = item
        item = getLast(items)
    }

    while (items.length < amount) {
        items.push(item)
    }
    return items
}
class Builder {
    constructor() {
        this.start = []
        this.end = []
    }
    append(x) {
        this.end.push(x)
    }
    prepend(x) {
        this.start.push(x)
    }
    toString() {
        const lines = [...this.start.reverse(), ...this.end]
        return join(lines)
    }
}

function getVariablesFromString(s) {
    const regex =
        /\w+\(|\b(?:if|else|while|for|do)\b|\/.*?\/\w*|'.*?'|".*?"/g
    return getWords(s.replace(regex, ''))
}

function toStringFunction(
    name,
    params,
    body,
    { lambda = false, private = false, mode = String } = {}
) {
    if (arguments.length == 1) {
        return toStringFunction('hi', 'hi', arguments[0], {
            mode: Function,
            lambda: true,
        })
    }
    if (isArray(params)) {
        params = params.join(', ')
    }
    params = params ? params : ''

    let fn
    if (lambda) {
        fn = brackify(`(${params}) =>`, body)
        return mode == String ? fn : bringToLife(fn)
    }
    name = name.trim()
    if (private) name = '__' + name
    fn = brackify(`function ${name}(${params})`, body)
    return mode == String ? fn : bringToLife(fn)
}

function checkjs(s) {
    s = s.replace(
        /^[\w\.]+\( *(?:\n[^]+?\n\)|\{ *\n[^]+?\n\}\)|.+)/gm,
        ''
    )
    //console.log(s)
    try {
        return true
        eval(s)
    } catch (e) {
        console.log(e)
        return false
    }
}

function toAbbreviationRegex(input, splatLength = 1) {
    let letters = split(input, '')
    let s = ''
    //let m = '\\w'
    let m = '[a-z]'
    //let fg = {${splatLength - 1},}
    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i]
        if (i == 0) {
            s += `[${letter}${capitalize(letter)}]`
            s += `${m}*`
        } else if (i == letters.length - 1) {
            s += `(?:[-_.][${letter}${capitalize(letter)}]`
            s += `|${capitalize(letter)})`
            s += '\\w*'
        } else {
            s += `(?:[-_.][${letter}${capitalize(letter)}]`
            s += `|${capitalize(letter)})`
            s += `${m}*`
        }
    }
    //console.log([s, 'abr'])
    return s
}

function expensiveFuzzyMatch(input, choices, mode) {
    choices = prepareIterable(choices, 'keys')

    const FuzzyMatchTests = [
        (x) => test('^' + input, x, 'i'),
        //(x) => test('^' + toAbbreviationRegex(input) + '$', x),
        (x) =>
            test(
                '^' + toAbbreviationRegex(input) + '$',
                removeExtension(x)
            ),
    ]

    if (choices.includes(input)) {
        return input
    }

    if (hasSymbol(input)) {
        let results = choices.filter(FuzzyMatchTests[0])
        return getLongest(results)
    }

    const [a, b] = FuzzyMatchTests.map((x) => choices.filter(x))
    //console.log([a, b])
    /* a = startswith */
    /* b = abbreviate */

    if (a.length == 0 && b.length == 0) return
    if (a.length != 1 && b.length == 1) {
        return b[0]
    }
    if (b.length != 1 && a.length == 1) {
        return a[0]
    }
    if (a.length == 1 && b.length == 1) {
        return b[0]
    }
    if (mode == Array) return recursiveFlat(a, b)
    return getLongest(getShortest([a, b]))
}

function fuzzyMatch(input, choices) {
    if (!choices || choices.length == 0) return
    if (isObject(choices)) choices = Object.keys(choices)
    const cachedRegex = toAbbreviationRegex(input)
    const fuzzyMatchTests = [
        (x) => test('^' + cachedRegex + '$', x),
        (x) => test('^' + input, x, 'i'),
        (x) => test(input, x),
    ]

    let count = 0
    for (let test of fuzzyMatchTests) {
        if (count == 2) {
            return choices.find(test)
            let m = choices.map(test).filter(String)
            return getLongest(m, len, String)
        }

        let r = choices && choices.filter(test)
        if (exists(r)) {
            return getLongest(r, len, String)
        }
        count++
    }
}

function isAllSingleWords(s) {
    return test(/\w+/, s) && !test(/\w+ \w+/, s)
}

function startsWithSingleWord(s) {
    return test(/^(\w+)\n/m, s)
}

function count(regex, s, flags = 'g') {
    // error forgetting s
    if (isArray(s)) return s.filter(regex).length

    if (isString(regex)) {
        if (!test(/\\/, regex)) {
            regex = rescape(regex)
        }
        if (isWord(regex)) regex = '\\b' + regex + '\\b'
        regex = RegExp(regex, flags)
    }

    regex = addGFlag(regex)
    const matches = s.match(regex)
    return matches ? matches.length : 0
}

function isLogicFunction(s) {
    return test(/^(is|start|end|has)/, s)
}

function isGetFunction(x) {
    return test(/^get/, x)
}

function sortByOccurence(items, source, reverse = true) {
    const store = []
    for (let item of items) {
        store.push([item, count('\\b' + item + '\\(', source)])
    }
    return sorted(store, null, reverse).map((x) => x[0])
}

function toVimVariable(key, items) {
    if (arguments.length == 3) {
        let value = isPrimitive(arguments[2])
            ? doublequote(arguments[2])
            : toStringArgument(arguments[2])
        return `let g:${arguments[0]}[${arguments[1]}] = ${value}`
    }
    let value = isPrimitive(items)
        ? items
        : JSON.stringify(items)
    return `let g:${key} = ${value}`
}

function toConfig(s) {
    return reduce(s, (x) => [x, true])
}

function toVimDict(dict, key, value) {
    if (arguments.length == 4) {
        const [a, b, c, d] = Array.from(arguments)
        return `let g:${a}["${b}"]["${c}"] = "${d}"`
    }
    return `let g:${dict}["${key}"] = "${value}"`
}
function splitparsef(dict, fallback, regex = ' ') {
    return function splitparse(s) {
        let [a, b] = splitonce(s, regex)
        if (a in dict) {
            return dict[a](b)
        }
        return fallback(a, b, s)
    }
    // reminds me of argsplit...
}

function splitCamelCase(x, preserveCase) {
    return x
        .trim()
        .replace(
            /[a-z][A-Z]/g,
            (s) =>
                s[0] +
                ' ' +
                (preserveCase ? s[1] : s[1].toLowerCase())
        )
        .split(' ')
}

function mergeSingleLetters(s) {
    return s.replace(/(?:(?:^| )[a-zA-Z]\b){2,}/g, (x) => {
        let value = removeSpaces(x)
        return ' ' + value
    })
}

function fixPath(s) {
    if (test(/^[\'\"]/, s)) {
        s = s.slice(1, -1)
    }
    return test(/^\w/, s) ? './' + s : s
}
function once(fn, ...args) {
    if (typeof __once__ == 'undefined') {
        let value = fn(...args)
        if (value) {
            __once__ = value
            return value
        }
        return null
    }
    return __once__
}

const randomWords = ['APPLE', 'BANANA', 'CUCUBMBER']
function exciting() {
    if (typeof __once__ == 'undefined') {
        __once__ = copy(randomWords)
    }
    return { exciting: __once__.pop() }
}

function seen(x) {
    if (typeof __seen__ == 'undefined') {
        __seen__ = new Set()
    }
    if (__seen__.has(x)) {
        return true
    }
    __seen__.add(x)
    return false
}

class FunctionBuilder extends Builder {
    constructor() {
        super()
        this.params = []
        this.name = 'hiya'
    }
    setParams(...params) {
        this.params = params
    }
    getValue() {
        const value = parens(this.toString(String))
        //console.log('value of brought to life fn', value)
        return eval(value)
    }
    toString() {
        return toStringFunction(
            this.name,
            this.params,
            super.toString()
        )
        return `function ${this.name}(${this.params.join(
            ', '
        )}) {${newlineIndent(super.toString())}}`
    }
}

function splitNumberBoundary(s) {
    return split(s, /(\d+)/).filter(exists).map(toNumber)
}

function functionProxy(context, method, fn) {
    return function functionProxyRunner(...args) {
        if (fn) fn()
        method.call(context, ...args)
    }
    //console.warn = functionProxy(console, console.warn, vueWarn)
}

s = `

<span class="test1 test2"></span>
<div class="test">
    <div>
        <input class="a" />
        <input class="b" />
    </div>
</div>

<span class="test1 ok test2"></span>
<div class="test fo">
    <div class="const">
        <input class="a" />
        <input class="c" />
    </div>
</div>


`

function isStorageSchema(x) {
    const entries = isObject(x) && Object.entries(x)
    return entries && entries[0] && isArray(entries[0][1])
}

function toStorageSchema(data) {
    const entries = isObject(data) && Object.entries(data)
    if (!exists(entries)) {
        return {}
    }
    const first = entries[0]
    if (isArray(first)) {
        return data
    }
    if (isObject(first)) {
        return reduce(entries, (k, v) => [k, [v]])
    }

    if (isString(first)) {
        console.log('is a stirng')
        return reduce(entries, (k, v) => [k, [v]])
    }
    return data
    //return entries && entries[0] && isArray(entries[0][1])
}

function getModuleExports(s) {
    const r = /^module\.exports\.(\w+)/gm
    return unique(findall(r, s))
}

const catpics = [
    //'dancing.jpg',
    'fist on chin.jpg',
    'flying.jpg',
    'like a boss.jpg',
    'ocean sunset.jpg',
    'pose f.jpg',
]

function regexTemplater(r, dict) {
    let s = r.source.replace(/\$(\w+)/g, (_, x) => {
        if (x == '1')
            return prepareIterable(dict, 'keys').join('|')
    })
    let value = RegExp(s, r.flags)
    return value
}

function dynamicGetterSetter(state, key, callback) {
    const get = () => {
        if (!state['_' + key]) {
            console.log('returning cached value of ', key)
            state['_' + key] = callback(state)
        }
        return state['_' + key]
    }

    const set = (val) => {
        state['_' + key] = val
    }
    Object.defineProperty(state, key, { get, set })
}

function hasReturnValue(s) {
    return test(/return \S/, s.toString())
}

function defineFunctionProperty(state, k, v) {
    if (hasReturnValue(v)) {
        const get = () => {
            const value = v(state)
            return value
        }
        Object.defineProperty(state, k, { get })
    } else {
        state[k] = (...args) => v(state, ...args)
    }
}
function defineProperty(state, k, v) {
    const get = () => {
        const value = v(state)
        return value
    }

    Object.defineProperty(state, k, { get })
}

function toArrayOrObjectList(s, mode) {
    const [a, b] = mode == Array ? ['[', ']'] : ['{', '}']
    return a + newlineIndent(s.join(',\n') + ',') + b
}

function isEven(n) {
    return n % 2 == 0
}

function isOdd(n) {
    return n % 2 == 1
}

function removeStartingSymbols(s) {
    return s.replace(/^\W+/, '')
}
function removeSymbols(s) {
    return s && s.replace(/[^\w-]+/g, '')
}

function edit(x, ...args) {
    /* functions are internal */
    if (isArray(x)) {
        return editArray(x, ...args)
    }

    if (isObject(x)) {
        return editObject(x, ...args)
    }

    function editArray(items, index, value) {
        if (isNumber(index) && index < 0) {
            index = items.length + index
        }
        if (isNestedArray(items)) {
            index = items.findIndex((x) => x[0] == index)
            items[index][1] = fparse(value, items[index][1])
        }
        else {
            items[index] = fparse(value, items[index])
        }
        return items
    }

    function editObject(object, kt, vt) {
        return reduce(object, (k, v) => {
            if (kt) k = kt(k)
            if (vt) v = vt(v)
            return [k, v]
        })
    }

    function editObject(obj, key, fn) {
        obj[key] = fn(obj[key])
        return obj
    }

    function editObject2(obj, fn) {
        const value = fn(key, obj[key])

        if (isArray(value) && value.length == 2) {
            obj[value[0]] = value[1]
        } else if (value != null) {
            obj[key] = value
        }
        console.log(obj)
        return obj
        /* not in use */
    }

}

function isWordy(s) {
    const regex = /[a-zA-Z\']+ [a-zA-Z\']+ [a-zA-Z\']+/
    return test(regex, s)
}

s = `

        #katex-question katex=question
        #math-quill ref @onEnter focusIt
`

s = `


hi
`

function stringify2(x, options) {
    // hard.
    function stringWrapper(s) {
        return h('string', s)
    }

    const checkpoint = isVueElement

    function runner3(x) {
        const type = typeOf(x)
        const value = options[type](x, type)
        return checkpoint(value) ? value : runner3(value)
    }

    function runner(x) {
        const value = runner2(x)
        return options.condition(value) ? value : runner(value)
    }

    function runner2(x) {
        if (isFunction(x)) {
            return options.functionWrapper(x)
        }
        if (isPrimitive(x)) {
            return options.stringWrapper(x)
        }
        if (isArray(x)) {
            return options.arrayWrapper(x.map(runner))
        }
        if (isObject(x)) {
            return options.objectWrapper(
                Object.entries(x).map(atSecond(runner))
            )
        }
    }
    /* this will create a component */
    return runner(x)
}
function walk(x, fn, depthLimit = 7) {
    function walker(x, depth, a) {
        if (depth > depthLimit) {
            return evaluator(x)
        }
        if (isArray(x)) {
            return x.map((y) => walker(y, depth + 1))
        }

        if (isObjectLiteral(x)) {
            return Object.entries(x).reduce((acc, [a, b]) => {
                acc[a] = walker(b, depth + 1, a)
                return acc
            }, {})
        }
        return evaluator(x, depth, a)
    }

    function evaluator(x, depth, a) {
        const value = fn(x, depth, a)
        return value == null ? x : value
    }
    return walker(x, 0)
}

function simpleWalk(x, fn) {
    function walker(x) {
        if (isArray(x)) {
            return x.map(walker)
        }

        if (isObjectLiteral(x)) {
            return Object.entries(x).reduce((acc, [a, b]) => {
                acc[a] = walker(b)
                return acc
            }, {})
        }
        return evaluator(x)
    }

    function evaluator(x) {
        const value = fn(x)
        return value == null ? x : value
    }
    return walker(x)
}

function allowIgnoreFilterFactory(allow, ignore, ignoreRE) {
    const filter = (x) => {
        if (allow.includes(x)) return true
        if (ignore.includes(x)) return false
        if (test(ignoreRE, x)) return false
        return true
    }
    return filter
}

function toHtmlRegex(tag, capture) {
    const content = capture ? '([^]+?)' : '[^]+?'
    return `<${tag}.*?>${content}</${tag}>`
}

function removeHtmlComments(s) {
    return s.replace(/<!--[^]+?--> *\n*/g, '')
}

function stop() {
    throw 'stoping'
}

function assign(state, ref) {
    for (let [k, v] of Object.entries(ref)) {
        if (v != null) state[k] = v
    }
}

function assignAliases(state, ref, ...keys) {
    for (let key of gatherArgs(keys)) {
        state[key] = ref[key].bind(ref)
    }
}
function assignFresh(to, from, callback) {
    for (let [k, v] of Object.entries(from)) {
        if (!to.hasOwnProperty(k)) {
            if (v != null) to[k] = v
        } else if (callback) {
            callback(k, v)
        }
    }
}
function mergeOnTop(a, b) {
    for (let [k, v] of Object.entries(b)) {
        if (a.hasOwnProperty(k)) {
            a[k] = merge(a[k], v)
        } else {
            a[k] = v
        }
    }
    return a
}

function assignExisting(base, incumbent) {
    for (let k of Object.keys(base)) {
        const v = incumbent[k]
        if (v != null) base[k] = v
    }
}

function rng(min = 1, max = 10) {
    if (min == max) return min
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomPick(items) {
    if (!isArray(items)) return items
    return items[Math.floor(Math.random() * items.length)]
}

function onceFactory(fn) {
    let touched
    return function once(x) {
        if (!touched && (fn ? fn(x) : x)) {
            touched = true
            return true
        }
    }
}

function getIndexesOf(items, fn) {
    return items
        .map((item, i) => {
            return fn(item) ? i : null
        })
        .filter(notNull)
}

function schemaMatch(schema, s, flags = 'g') {
    const captureDictionary = {
        quote: '(?:\'(.*?)\'|"(.*?)")',
        mathvar: '\\w+(?:\\^\\w+)?',
        //line: '(?:^|\\n)(.+)(?=\\n|$)',
        line: '\\S.+',
        mathop: '[+-/\\*] *',
        rest: '[^]+',
        para: '.*',
        char: '\\S',
        word: '[a-zA-Z]{1,}',
        w: '[\\w-$]{1,}',
        a: '.*?',
        A: '[^]+?',
        sym: '\\S{1,}',
        symbol: '[\\W]{1,}',
        nonspace: '\\S{1,}',
    }

    const noCaptureDictionary = {
        q: '\\?',
        s: '\\s*',
        ws: '\\s+',
        to: '[^]+?',
        linebreak: ' *(?:\\n+|$)',
    }

    let keys = []
    let names = []
    let count = 0
    let regex
    schema = prepareSchema(schema)
    regex = schema.replace(/\$(\w+)#?/g, regexParser)
    regex = regex.replace(/\*\?(?=\)(?:$|\|))/g, '*')
    regex = RegExp(regex, flags)

    function prepareSchema(s) {
        const SchemaDictionary = {
            arr: '[$1,$1]',
            config: '$word $any(?=  |$)',
            config: '$sym $sym',
        }

        if (s in SchemaDictionary) s = SchemaDictionary[s]
        return s.replace(
            / *([\[\]. :,]) */g,
            (_, x, offset, o) => {
                if (x == '[' || x == ']' || x == '.')
                    return '\\' + x
                if (x == ' ') return ' +'
                if (x == ':' && o[offset - 1] == '?') return ':'
                if (x == ':' || x == ',') return ` *${x} *`
            }
        )
    }

    function regexParser(_, x) {
        if (x in noCaptureDictionary) {
            return noCaptureDictionary[x]
        }

        count++

        if (x in captureDictionary) {
            let value = captureDictionary[x]
            let groups = countCaptureGroups(value)
            if (groups == 0) return parens(value)
            else {
                count += groups - 1
                return value
            }
        }

        if (isPlural(x)) {
            let regexValue = captureDictionary[depluralize(x)]
            keys[count] = regexValue
            names[count] = x
            const all = '(\\S[^]+?)'
            return all
            //return parens(regexElongation(regexValue))
        }

        const value = parens(regexParserHelper(x))
        return value
    }

    function regexParserHelper(x) {
        switch (x) {
            case 'mc':
                keys[count - 1] = '\\w+'
                names[count - 1] = x
                return '\\S+ \\S+ \\S+ \\S+(?= *(?:$|\\n))'
        }
    }

    // ------------------------------------------ start
    //console.log(regex)
    s = smartDedent(s)
    if (flags.includes('g')) {
        let matches
        let output = []
        while (exists((matches = regex.exec(s)))) {
            let store = []
            for (let i = 1; i < matches.length; i++) {
                let index = i
                let match = matches[i]
                if (match == undefined) {
                    continue
                }
                match = match.trim()
                console.log({
                    name: names[index],
                    match,
                    keys,
                    index,
                    r: keys[index],
                })
                if (keys[index]) {
                    store.push(findall(keys[index], match))
                } else {
                    store.push(toArgument(match))
                }
            }
            output.push(store)
        }
        return smallify(output)
        return output
        return store
    } else {
        let match = s.match(regex)
    }
}

s = `

dog {
   sfgf dffd 
    hog
}

foo {
    bog
    hog
}
`

s = `
x + 2 : red
x^2 : blue
x^2 + 5x + 6 : green
[2,3] : red
[2,5] : blue
`

class MathRearrangement {
    constructor(s) {
        this.s = s
    }
    generate() {}
    //const arrange = new MathRearrangement('y = x + 4')
}

s = `

The graph of f(x) crosses the yax at the coordinate point (a,b).
wmtv of a be? ans cbd a b 0      
`

sc = '$A$q$s(?:ans)? *(?:$mc|$para)'

function getOptionsFromSchema(s, schema) {
    const options = {}
    const keys = []
    schema = schema.replace(/\$(\w+)/g, (_, x) => {
        keys.push(x)
        return '(\\w+)'
    })
    schema = schema.replace(/[\[\]]/g, '\\$&')
    schema = schema.replace(/ *, */, ' *, *')
    //console.log(schema); throw "";
    s = s.replace(RegExp(schema, 'g'), (...args) => {
        for (let i = 1; i < args.length - 2; i++) {
            if (!args[i]) continue
            options[keys[i - 1]] = toArgument(args[i])
        }
        return ''
    })
    return [s.trim(), options]
}

s = `

            case 'symbol':
                return '[\\W]{1,}'
            case 'nonspace':
                return '\\S{1,}'
`

s = `
bb
nn

h
h
h
`

function defineAliases(state, object, dict) {
    for (let [k, v] of Object.entries(dict)) {
        state[k] = object[v].bind(v)
    }
}

class KVStorage {
    constructor() {
        this.store = []
    }

    add(key, value, data) {
        const payload = data
            ? { ...data, key, value }
            : { key, value }
        this.store.push(payload)
        return value
    }

    getKeys(fn = identity) {
        return this.store.filter(fn).map((x) => x.key)
    }

    getValues(fn = identity) {
        return this.store.filter(fn).map((x) => x.value)
    }

    getValue(fn) {
        const value = this.store.find(fn)
        return value && value.value
    }
}

function letterRange(x) {
    let [a, b] = split(x, '-')
    a = char2n(a)
    b = char2n(b)
    let store = []
    for (let i = a; i <= b; i++) {
        store.push(n2char(i))
    }
    return store
}
function partitionLetterGroups(groupSize, groupAmount) {
    const store = []
    const n = groupSize * groupAmount
    for (let i = 0; i < n; i++) {
        if (i % groupSize == 0) {
            store.push([])
        }
        getLast(store).push(n2char(i))
    }
    return store
}

function recursiveDataBuilder(depth) {
    const store = {}
}

function debounce(fn, delay = 250) {
    let id
    return function debouncedFunction(...args) {
        clearTimeout(id)
        id = setTimeout(() => {
            fn.call(this, ...args)
        }, delay)
    }
}

s = ['a', 'b', 'c', 'd', 'e']

class Breaker {
    constructor(limit) {
        this.limit = limit || 3
    }
    singleton(key) {
        if (!this.storage) this.storage = new Storage(Number)
        this.raise(this.storage.add(key), key)
    }
    init(key) {
        if (!this.key || key != this.key) {
            this.key = key
            this.count = 0
        }

        this.raise(++this.count, key)
    }

    raise(n, message) {
        if (n >= this.limit) {
            throw new Error(message)
        }
    }
}
function BreakerFactory(n = 5) {
    let count = 0
    return function lambda(fn) {
        if (++count == n) {
            if (fn) {
                fn()
                return true
            }
            throw 'breaker'
        }
    }
}

function getAndGetAgain(fn, delay = 100) {
    let id
    let breaker = BreakerFactory(5)
    return new Promise((resolve, reject) => {
        id = setInterval(() => {
            breaker()

            console.log('hi')
            const value = fn()
            if (value) {
                resolve(value)
                clearInterval(id)
                return
            }
        }, delay)
    })
}
function tryAndTryAgain(fn, ...args) {
    let count = 0
    let id = setInterval(() => {
        try {
            fn(...args)
            clearInterval(id)
        } catch (e) {
            if (count++ > 10) {
                clearInterval(id)
                throw 'try error'
            }
            console.log('trying agan')
        }
    }, 1000)

    function runner() {
        try {
            fn(...args)
        } catch (e) {}
    }
}

function buildFileRelations() {
    /* he */
}

function superbf(...args) {
    args = gatherArgs(args)
    const store = []
    for (let i = 0; i < args.length; i++) {
        let el = args[i]
        if (isFunction(el)) {
            store.push([el, []])
        } else {
            getLast(store)[1].push(el)
        }
    }
    return function lambda(s) {
        for (let [a, b] of store) {
            s = a(s, ...b)
        }
        return s
    }
}

function gatherArgs(args) {
    if (isArray(args[0]) && args.length == 1) {
        return args[0]
    }
    if (args.some(isArray)) {
        return flat(args)
    }
    return args
}

function assertion(x) {
    if (x == null) {
        throw new AssertiongError()
    } else {
        //console.log('the value of x has been asserted')
        return x
    }
}

async function actions(n, fn, delay = 1000, state) {
    for (let i = 0; i < n; i++) {
        await sleep(delay)
        state ? fn.call(state) : fn()
    }
}

function optiongetter(s) {
    return mreplace(/^# *(\w+) *(.*)/gm, s.toString())
}
function waterfall(items, onTick, callback) {
    let id
    let i = 0
    let max = items.length
    let delay

    function runner(x) {
        let item = items[i++]
        //console.log(item)
        delay = item.delay || 1000
        onTick(item)
        if (i == max) {
            clearTimeout(id)
            setTimeout(() => {
                callback()
            }, delay + 250)
            return
        }
        id = setTimeout(() => {
            runner()
        }, delay)
    }
    runner()
}

function waterfall2(promises) {
    return promises.reduce((acc, promise, i) => {
        return acc.then(() => {
            return promise.then(() => {
                return true
            })
        })
    }, Promise.resolve([]))
}

function incrementName(name, offset = 1) {
    return test(/\d$/, name)
        ? name.replace(/\d+$/, (x) => Number(x) + offset)
        : name + '1'
}
function defineVariable(a, b) {
    eval(`${a} = ${b}`)
}

function datemark04082022() {}

function getThis(state, regex) {
    const value = mapfilter(Object.entries(state), (x) => {
        return (
            !isFunction(x[1]) &&
            test(regex, x[0]) && [x[0], x[1]]
        )
    })
    return reduce(value)
}

s = `

component circle-data
props h,k,r
colors h,k,r

the circle currently
has a h value of :h
has a k value of :k
is centered around the point (:h,:k)
has a radius of :r
has the equation #equation(circle, h, k, r)
`

const standards = {
    equations: {
        circle(h, k, r) {
            return `(x - ${h})^2 + (y - ${k})^2 = ${r}^2`
        },
    },
}

function lineNeedsEndingColon(s) {
    if (test(/[^a-zA-Z]$/, s)) {
        return false
    }
    const words = ['is', 'of', 'currently', 'has', 'be']
    let word = getLastWord(s)
    if (words.includes(word)) {
        return true
    }
}

function infuseVue(s) {
    return s.replace(/:([a-z]+)/g, (_, x) => {
        return `{{${x}}}`
    })
}

function infuseSpanColors(s, colors) {
    if (isArray(colors)) {
        colors = reduce(colors, rainbow)
    }
    const regex = ncg('\\b($1)\\b|({{(?:$1)}})', colors)
    return replace(
        regex,
        (_, a, b) => {
            let value = a || b
            let color = colors
                ? colors[getFirstWord(value)]
                : rainbow()
            return spanify(value, { style: { color } })
        },
        s,
        'g'
    )
}
function createClassFromValue(s) {
    let match = search(/^\w+(?: \w+)?/, s)
    return toDashCase(match)
}
function spanify(value, options) {
    if (isString(options)) {
        options = {
            style: cssEvaluator(options),
        }
    } else if (!options) {
        options = {
            class: createClassFromValue(value),
        }
    }
    //console.log(options); throw ''
    const attrs = Object.entries(options)
        .reduce((acc, [a, b], i) => {
            acc += a + '="'
            if (a == 'style') {
                if (isObject(b)) {
                    for (let [k, v] of Object.entries(b)) {
                        acc += k + ': ' + v + '; '
                    }
                }
                acc = acc.trim()
            } else {
                acc += b
            }

            acc += '" '
            return acc
        }, '')
        .trim()
    //console.log(attrs); throw ''
    return `<span ${attrs}>${value}</span>`
}

function validArgs(args) {
    return args.filter((x) => x != null && x != '')
}

function schemaRegexFactory(schema, fn) {
    let [a, template] = split(schema, / *\.\.\. */)
    const dict = {
        wallu: '[^]+?',
        function: 'function',
        //'\\n': '\\\\n',
        //'\\cw': '(\\\\w+)',
        //'\\w': '\\\\w+',
        n: '\\n',
        cw: '(\\w+)',
        w: '\\w+',
        dotu: '.*?',
        s8: ' {8}',
        s4: ' {4}',
    }
    let flags = 'g'
    let r = RegExp(dreplace(a, dict, null), flags)
    console.log(r)
    return function lambda(s) {
        //console.log({s})
        const matches = findall(r, s)
        //console.log(matches); throw ''
        //console.log('matches.length', matches.length)
        return matches.map((x) => spicyTemplater(template, x))
    }
}

function removeThis(s) {
    return s.replace(/\bthis\./g, '')
}
s = `
Chapter 4: Circles

To make a circle, all you need is a [point (:h, :k)],
and a radius :r
`

function bindObjectToState(obj, state, transformer) {
    if (!transformer)
        transformer = (x, state) => {
            return x.bind(state)
        }

    return walk(obj, (x) => {
        if (isFunction(x)) {
            return transformer(x, state)
        }
    })
}

function bringFunctionsToLife(dict, state, transform) {
    return reduce(dict, (k, v) => {
        if (isFunction(v)) {
            return [k, v]
        }

        const fn = new FunctionBuilder()
        fn.name = toCamelCase(k)
        if (transform) {
            v = transform(v)
        }

        if (isThisFunction(v) && state) {
            fn.append(v)
            fn.params.push('...args')
            return [k, fn.getValue().bind(state)]
        } else if (isThisFunction(v)) {
            v = v.replace(/\bthis\b/g, 'state')
            fn.params.push('state')
            if (v.includes('...args')) fn.params.push('...args')
            fn.append(v)
            return [k, fn.getValue()]
        } else {
            const param = itersearch(v, 'app', 'state', 'vue')
            fn.params.push(param)
            fn.params.push('...args')
            fn.append(v)
            //console.log(fn.toString())
            return [k, fn.getValue()]
        }
    })
}

s = `

var board = JXG.JSXGraph.initBoard('jsxgraph', {
    grid: false,
    zoom: {
        factorX: 'cv',
        factorY: gogo,

        wheel: false,
        needshift: false,
        eps: 0.1,
    },
})

var ax1 = board.create('line', [
`

s = `

const HTMLBuilderTemplate = \`
    <!doctype html><html>
        <head>
            $dependencies

\`
`

function schemaReplace(s, schema) {
    let [a, b] = split(schema, / \.\.\. /)
    let regex = rescape(a).replace(/\\\$(\w+)/g, (_, x) => {
        if (x == 1) x == 'w'
        return '(\\' + x + '+)'
    })
    regex = regex.replace(/[\'\"]/g, '[\'"]')
    regex = RegExp(regex, 'g')
    console.log(regex)
    //console.log(regex); throw ''
    const replacement = test(/\$\d/, b)
        ? b
        : bringToLifeLambda(b)
    console.log(replacement)
    const value = s.replace(regex, replacement)
    return value
    return s.replace(regex, value)
}

function xveryMagicLogicHandler(s) {
    const info = {
        Array: [
            'length',
            'concat',
            'fill',
            'find',
            'findIndex',
            'lastIndexOf',
            'pop',
            'push',
            'reverse',
            'shift',
            'unshift',
            'slice',
            'sort',
            'splice',
            'includes',
            'indexOf',
            'join',
            //"keys",
            //"entries",
            //"values",
            //"forEach",
            //"filter",
            //"flat",
            //"flatMap",
            //"map",
            'every',
            'some',
            //"reduce",
            //"reduceRight",
        ],
        //"Number": [
        //"toExponential",
        //"toFixed",
        //"toPrecision",
        //"toString",
        //"toLocaleString"
        //],
        String: [
            'length',
            //"anchor",
            //"big",
            //"blink",
            //"bold",
            //"charAt",
            //"charCodeAt",
            //"codePointAt",
            //"concat",
            'endsWith',
            //"fontcolor",
            //"fontsize",
            //"fixed",
            'includes',
            'indexOf',
            //"italics",
            //"lastIndexOf",
            //"link",
            //"localeCompare",
            //"match",
            //"matchAll",
            //"normalize",
            //"padEnd",
            //"padStart",
            'repeat',
            'replace',
            //"replaceAll",
            //"search",
            'slice',
            //"small",
            'split',
            //"strike",
            //"sub",
            //"substr",
            //"substring",
            //"sup",
            'startsWith',
            'toString',
            'trim',
            'trimStart',
            //"trimLeft",
            'trimEnd',
            //"trimRight",
            //"toLocaleLowerCase",
            //"toLocaleUpperCase",
            'toLowerCase',
            'toUpperCase',
            //"at"
        ],
    }
    s = 'ifhnl'
    obj = { ifo: 'if (isObject($1)) {\n    $c\n}' }
    const { spaces, first, second } = getLineInfo(s)
    const { sol, eol, mol } = getCursorInfo()
}
function xnothingInfront(s) {}

function defineEmitProperty(state, key) {
    function get() {
        return this['_' + key]
    }

    function set(value) {
        this['_' + key] = value
        this.emit(key, value)
    }

    Object.defineProperty(state, key, { get, set })
}

function endsWithParentheses(s) {
    return test(/\)$/, s)
}

const StorageMixin = {
    reduce(fn, checkpoint = exists) {
        return Object.entries(this.store).reduce(
            (acc, [a, b]) => {
                const value = fn(b)
                if (value && checkpoint(value)) acc[a] = value
                return acc
            },
            {}
        )
    },
    has(x) {
        return this.store.hasOwnProperty(x)
    },
    set(key, value) {
        if (key == null || value == null) return
        this.store[key] = value
    },
    get(key) {
        return this.store[key] || ''
    },
}

function lengthDelta(a, b) {
    const runner = (x) => (isNumber(x) ? x : x.length)
    return Math.abs(runner(a), runner(b))
}

function indentAfterFirstLine(s, n) {
    return replace('\n', '\n' + toSpaces(n), s, 'gm')
}

function templateToFunction(s) {
    s = smartDedent(s)
    let items = s.split(/(\$[a-zA-Z0-9]+)/)
    let template = ''
    let variables = new Set()
    for (let i = 0; i < items.length; i++) {
        let item = items[i]
        if (item.startsWith('$')) {
            item = item.slice(1)
            if (isNumber(item)) {
                item = n2char(Number(item) - 1)
            }
            variables.add(item)
            let prev = items[i - 1]
            let spaces = prev && search(/\n( *).*$/, prev)
            let value = spaces
                ? `indentAfterFirstLine(${item}, ${spaces.length})`
                : item
            template += wrap(value, ' + ')
        } else {
            template += singlequote(
                escapeNewlinesAndQuotes(item)
            )
        }
    }
    //const body = 'return ' + dreplace(template, {
    //'\n': '\\n',
    //'\'': '\\\'',
    //'\"': '\\\"',
    //})
    const body = 'return ' + template
    variables = Array.from(variables).sort()
    let params = variables.map((x, i) => `${x} = ''`)

    if (variables[0] != 'a') {
        params = `{${params.join(', ')}} = {}`
    }
    //console.log(variables)
    const fn = toStringFunction('lambda', params, body)
    //console.log(fn); throw "";
    //console.log([fn])
    //
    return bringToLife(fn)
}

s = `fb(`

function runit(s, evaluater = eval) {
    let value
    let count = 0
    while (++count <= 3) {
        breaker(3)
        try {
            console.log('v')
            value = evaluater(stringTryWrap(s))
            console.log('hi')
        } catch (e) {
            console.log('unreachable syntax error')
            console.log(e)
            return
        }
        if (!value) {
            return true
            /* true usually means everything is okay */
            /* however it also means terminate onTick... or to stop something. it usually ends up meaning the case u want it to be. */
            return console.log('done without errors')
        }
        if (value.proposedFixFn) {
            s = value.proposedFixFn(s)
            console.log(s)
        }
    }
}

allowIgnoreFilterFactory

function rigidCompareFactory(preset, transform = identity) {
    return function compare1(x) {
        const value = preset.indexOf(transform(x))
        return value > -1 ? value : preset.length + 1
    }
}
function sortHtmlAttrs(items) {
    const preset = ['v-for', 'v-if', 'v-show']
    const compare1 = rigidCompareFactory(preset, onFirst)
    const compare2 = (x) => x.join('').length
    return multiSort(items, compare1, compare2)
}
function rigidSort(items, preset, transform) {
    const compare1 = rigidCompareFactory(preset, transform)
    return multiSort(items, compare1)
}
function multiSort(items, ...criteria) {
    if (getLast(criteria) != identity) criteria.push(identity)

    const sort = (a, b) => {
        for (let i = 0; i < criteria.length; i++) {
            const fn = criteria[i]
            const A = fn(a)
            const B = fn(b)

            let value
            if (isNumber(A)) {
                value = Number(A) - Number(B)
            } else if (isString(A)) {
                value = charPointScore(A) - charPointScore(B)
            }
            if (value) return value
        }
        return 0
    }
    return items.sort(sort)
}

function charPointScore(s) {
    let score = 0
    for (let i = 0; i < s.length; i++) {
        let c = s.codePointAt(i)
        score += c * Math.pow(10, -2 * i)
    }
    return score
}

function isStringClass(s) {
    return test(/^class/, s)
}

function isStringFunction(s) {
    return test(
        /^(?:async )?(?:.*?=>|function|class|\w+\(.*?{)/,
        s
    )
}

function isStringObjectFunction(s) {
    return test(/^(?:async )?\w+\(.*?{/, s)
}
function isStringLambdaFunction(s) {
    return test(/^(?:async )?.*?=>/, s)
}

function functionStringRevive(k, v) {
    if (isStringFunction(v)) {
        return bringFunctionToLife(v)
    }
    return v
}

function magicComplete(line, upline, state) {
    let baseWords = line.match(/\w+/g)
    // ways to map the state
    // calenderTracker

    function ifMagic(args, line, upline) {
        let words = upline.match(/\w+/g)
        let targets = args.map((x) => words[x - 1])

        // count the targets
        return pairs.map((item, i) => {
            let value = dreplace(upline, [targets, item])
            return value
        })
    }
    const ref = {
        if: ifMagic,
        ef: ifMagic,
    }

    upline = "if (key == 'a') left = 1"
    line = 'w up d right s down Escape escape Enter enter'
    magicArgs = '$3 $4'
    let words = upline.match(/\w+/g)
    if (!words) return
    let runner = ref[words[0]]
    let value = runner(magicArgs, line, upline)
    console.log(words)
    // sprawl to the upline
    // return
}

class InfiniteStorage {
    ccumulative(ref, key, value) {
        const current = ref[key]
        if (isArray(current)) {
            ref[key] = push(current, value, 1)
        } else if (current !== value)
            ref[key] = [current, value]
    }
    set(...keys) {
        let ref = this
        for (let i = 0; i < keys.length - 1; i++) {
            let key = keys[i]
            if (i == keys.length - 2) {
                if (
                    this.cumulative &&
                    ref.hasOwnProperty(key)
                ) {
                    this.cumulative(ref, key, keys[i + 1])
                } else {
                    ref[key] = keys[i + 1]
                }
                break
            }

            if (!ref.hasOwnProperty(key)) {
                ref[key] = {}
            }

            if (isObject(ref[key])) {
                ref = ref[key]
            }
        }
    }
}

function getParenOffset(s) {
    const value = search(/[\'\"\)}\]]*$/, s)
    return (value && value.length) || 0
}

function walker(value, depth, key) {
    return key + 'HI'
}
function objectWalk(o) {
    let lastKeys = []

    function runner(x) {
        for (let [k, v] of Object.entries(x)) {
            if (isObject(v)) {
                lastKeys.push(k)
                runner(v)
            } else {
                //console.log(...lastKeys)
                //store.push(lastKeys.concat(v).join('-'))
            }
        }
    }
    runner(o)
}

function visitor() {}
//console.log(readableProperties(new Storage()))
//console.log(Object.entries(new Storage))

function jshintErrorInfo(s) {
    return jshint(s)
        .errors.slice(0, -1)
        .filter((x) => {
            return x.code.startsWith('E')
        })
        .map((item, i) => {
            return {
                line: item.line,
                ch: item.character,
                reason: item.reason,
                code: item.code,
                evidence: item.evidence,
            }
        })
}
function tryval2(s, f) {
    try {
        return eval(s)
    } catch (e) {
        console.log(e)
        if (f) return f(s)
        return e.toString()
    }
}
function evaluate(s) {
    try {
        const success = eval(s) || true
        return { success }
    } catch (e) {
        console.log(e.stack)
        const error =
            getErrorInfo(e) ||
            prettierErrorInfo(s) ||
            jshintErrorInfo(s)
        return { error }
    }
}

s = `  console.log(' bye)`

function surpassFunction(fn, gn) {
    return (...args) => {
        if (gn(...args)) return
        fn(...args)
    }
}
function wrapFactory(before, after) {
    if (!after) after = before
    return function lambda(fn) {
        if (isAsync(fn)) {
            return async function lambda(...args) {
                const beforeValue = before()
                console.log('before', beforeValue)
                const value = await fn(...args)
                const afterValue = after()
                console.log('after', afterValue)
                return value
            }
        } else {
            return function lambda(...args) {
                before()
                const value = fn(...args)
                after()
                return value
            }
        }
    }
}

function codeWords(s) {
    let words = s.match(/[a-zA-Z][\w.]{6,}/g)
    if (!words) return
    let ignore = ['function']
    words = unique(words, ignore)
    return words
}

function bigWords(s) {
    return unique(findall(/[\w.]{10,}/g, s))
}
function onFirst(fn) {
    if (isFunction(fn)) {
        return function lambda(k, v) {
            return fn(k)
        }
    }
    if (isArray(fn)) {
        return fn[0]
    }
}

function onlyFirst(fn) {
    return (x, i) => (i == 0 ? fn(x) : x)
}

function onlySecond(fn) {
    return (x, i) => (i == 1 ? fn(x) : x)
}

function onSecond(fn) {
    if (isFunction(fn)) {
        return function lambda(k, v) {
            return fn(k)
        }
    }
    if (isArray(fn)) {
        return fn[1]
    }
}

function getLongestDollar(s) {
    return getLongest(
        (s.match(/\$\d+/g) || []).map((item, i) => {
            return Number(item.slice(1))
        })
    )
}

function doubleReplace(s, regex, childRegex, fn) {
    //console.log(childRegex)
    return s.replace(regex, (_, x, offset) => {
        return _.replace(x, x.replace(childRegex, fn)).replace(
            /  +/g,
            ' '
        )
    })
}

function assetObject(items, insideObject, lang = 'js') {
    const delimiter = insideObject ? ': ' : ' = '
    const ending = insideObject ? ',\n' : ''

    if (items.length == 1) {
        return `${insideObject ? '' : jspy(lang, 'const')}${
            items[0]
        }${delimiter}{\n\t\n}`
    }
    return (
        jspy(lang, 'const') +
        items[0] +
        delimiter +
        items.slice(1).reduce((acc, item, i) => {
            if (i % 2 == 0)
                acc += '    ' + toStringArgument(item)
            else {
                acc += ': ' + toStringArgument(item) + ',\n'
            }
            return acc
        }, '{\n') +
        '}' +
        ending
    )
}
function removeNumbers(s) {
    return s.replace(/\d/g, '')
}
function assetArray(items, lang = 'js') {
    /* insideObject can be done later */
    if (items.length == 1) {
        return `${jspy(lang, 'const')}${items[0]} = [\n\t\n]`
    }
    return (
        jspy(lang, 'const') +
        ' = ' +
        items[0] +
        wrap(items.slice(1).map(singlequote).join(', '), '[]')
    )
}

function unquote(s) {
    return s.slice(1, -1)
}

function lineDitto(template, args) {
    const key = search(/\w+(?= *=)/, template)
    const regex = key
        ? key.length > 2
            ? key + '\\b'
            : `\\b${key}\\b`
        : args.shift()

    const runner = (x) => {
        return replace(regex, x, template)
    }
    return args.map(runner).join('\n')
}

function loremMath(n = 1, mode) {
    function loremSimpleMathQuestion(a, b) {
        if (a == null) a = rng(1, 10)
        if (b == null) b = rng(1, 10)
        let question = `${a} * ${b}`
        let answer = eval(question)
        return { question, answer }
    }
    return (mode == Array ? identity : smallify)(
        range(n).map(loremSimpleMathQuestion)
    )
}

function abbreviateObject(o) {
    return reduceObject(o, (k, v) => {
        return [abbreviate(k), v]
    })
}

function extractConfig(s) {
    let [a, b] = mreplace(/(\w+) *= *(\w+)/g, s)
    if (b) {
        b = reduce(b)
    }
    return [a, b]
}
function Factory(fn, ...args) {
    if (args.includes(null)) {
        let [a, b] = partition(args, isNull)
        return function lambda(s) {
            return fn(...a, s, ...b)
        }
    }
    return function lambda(s) {
        return fn(...args, s)
    }
}
//console.log(coerceTo('gg'))

function generateTiles() {
    s = `

    2 3
    2 4

    3 4
    2 8
    4 6

    3 6
    4 4
    5 5
    1 7
`
    let numbers = splitter(s, /(\d+) (\d+)/g)
    numbers = walk(numbers, toNumber)
    return flat(numbers.map(parser))

    function splitter(s, r) {
        return split(smartDedent(s), /\n\n+/).map((x) =>
            findall(r, x)
        )
    }

    function parser(a, id) {
        let tiles = []

        a.forEach((item, i) => {
            //const {question, answer} =  mathSum(item)
            //push(question, 'question')
            //push(answer, 'answer')
            item.forEach((x) => push(x))
        })

        function push(value, type) {
            tiles.push({ value, id })
        }
        return tiles
        //const addColor = exporter(MathColors, 'color')
        const addColor = identity
        push(addColor(base.question), 'question')
        push(addColor(base.answer), 'answer')
        push(
            [
                addColor(sum.expression),
                addColor(product.expression),
            ],
            'setup'
        )
        //console.log(tiles); throw ''
        return tiles
        return {
            question: base.question,
            answer: base.answer,
            setup: [sum.expression, product.expression],
        }
        /* separating the data-layer from the presentation-layer */
    }
}
function mathConditionFromString(s) {
    if (isFunction(s)) {
        return s
    }

    return fastFunction(s)
}
function match(regex, s) {
    let match
    if (regex.flags.includes('g')) {
        let store = []
        while ((match = regex.exec(s))) {
            let value = matchGetter(match)
            store.push(value)
        }
        return store
    } else {
        match = s.match(regex)
        return matchGetter(match)
    }

    function matchGetter(match) {
        return !match
            ? null
            : match.length == 1
            ? match[0]
            : match.length == 2
            ? match[1] || match[0]
            : match.slice(1)
    }
}
function fastFunction(s) {
    if (isFunction(s)) {
        return s
    }
    let variables = unique(match(/\b[abcdexyzin]\b/g, s))
    const dict = {
        and: '&&',
        or: '||',
    }
    s = dreplace(s, dict)
    let fnCode = `(${variables.join(', ')}) => ${s}`
    return bringToLife(fnCode)
}
//console.log(generateNumbers({
//condition: 'a + b < 10 and a * b < 10 and a > 1'
//}))

s = `
Sometimes, you will have to carry a number over.
To enjoy reading.
creating education games
why did i let this happen

`

class TileMatch {
    constructor(tiles) {
        this.load(tiles)
    }

    load(tiles) {
        if (!tiles) {
            return
        }

        this.tiles = tiles.map((x) => {
            return {
                ...x,
                /* type, value, id */

                active: false,
                done: false,
                rotation: 0,
                style: {
                    background: 'white',
                    color: 'black',
                },
            }
        })

        this.matchLength = this.filterById(tiles[0].id).length
        const n = Math.ceil(tiles.length / this.matchLength)
        this.styles = generateStyles(n)
        return this.tiles
    }

    filterById(id, match = true) {
        return this.tiles.filter((x) => {
            return match ? x.id == id : x.id != id
        })
    }

    click(index) {
        let tile = this.tiles[index]
        if (tile.done) {
            return
        }

        tile.rotation += tile.active ? 1 : -1

        if (tile.active) {
            tile.active = false
            return
        }

        tile.active = true
        const possibles = this.filterById(tile.id)

        if (possibles.every((x) => x.active)) {
            const style = this.styles.pop()
            possibles.forEach((x) => {
                x.done = true
                x.style = style
            })
            return true
        } else {
            console.log('still waiting')
        }
    }
}
function generateTiles2() {
    return [1, 2, 3].map((x) => ({ value: x, id: 4 }))
    //return [[1,2], [3,4]]
}

function generateStyles(n) {
    //const backgrounds = Object.values(tailwind)
    const backgrounds = roygbiv
    let color = 'white'
    return range(n).map((item, i) => {
        return {
            color: color,
            background: backgrounds.pop(),
        }
    })
}

class EquationDisplay {
    load(equation, ref, colors) {
        this.template = this.cache.get(equation, () =>
            nerdamer.convertToLaTeX(equationLibrary[equation])
        )
        this.colors = colors
        if (colors) {
            this.template = infuseKatexColors(
                this.template,
                colors
            )
        }
        this.ref = ref
    }
    constructor() {
        this.cache = new Cache()
        const equationLibrary = {
            circle: '(x - h)^2 + (y - k)^2 = r^2',
            1213: '1a * 1b = 1cd',
        }
    }
    toKatex() {
        let template = infuseVariables(this.template, this.ref)
        console.log(template)
        return template
    }
    color(s) {}
}

function rungen(Generator, ...args) {
    let x = new Generator(...args)
    const value = x.generate()
    console.log(value)
    return value
}

function timeline(aa) {
    if (!isNestedArray(aa)) {
        aa = partition(aa, 2)
    }
    let index = 0
    let id
    function runner() {
        if (index == aa.length) {
            console.log('done')
            clearTimeout(id)
            return
        }

        let item = aa[index]
        let [delayBefore, callback] = item
        id = setTimeout(() => {
            callback(index++)
            runner()
        }, delayBefore)
    }
    runner()
}

function tryf(fn) {
    return function lambda(...args) {
        try {
            return fn(...args)
        } catch (e) {
            return null
        }
    }
}

function toggleForward(state, key, value, duration) {
    const current = state[key]
    state[key] = value
    console.log('toggle forward', key)
    setTimeout(() => {
        state[key] = current
    }, duration)
}
function getNumbers(s) {
    const regex = /-?\d+\.?\d*/g
    const match = s.match(regex)
    return match ? match.map(Number) : []
}

function randomGeneratorFactory(arr) {
    let copy = shuffle(arr)
    return function lambda() {
        const value = copy.pop()
        if (copy.length == 0) copy = shuffle(arr)
        return value
    }
}

function findall2(regex, s) {
    let store = []
    let match
    s = s.trim()

    while (exists((match = regex.exec(s)))) {
        match.length == 1
            ? store.push(match[0])
            : store.push(
                  smallify(match.slice(1).filter(exists))
              )
    }
    return store
}

function defineStateVariable(state, key, value) {
    if (state.hasOwnProperty(key)) {
        return
    }
    state[key] = value

    function runner(value) {
        const name = getConstructorName(value)
        console.log(name)
        switch (name) {
            case 'Array':
                return []
            case 'Set':
                return {}
            case 'Object':
                return {}
            default:
                return value
        }
    }
}

function lowerCase(s) {
    return s.toLowerCase()
}

function replacef(a, b, flags = 'g') {
    function smartRescape(s) {
        if (test(/\[\^\]|\(\?[:!=]|\\[wsdWSD]/, s)) {
            return s
        }
        return rescape(s)
    }
    const r = RegExp(smartRescape(a), flags)
    console.log(r)
    return function lambda(s) {
        return s.trim().replace(r, b)
    }
}

console.log(timestamp())

function calculateColorPortions({
    text,
    colors,
    max = 4,
    defaultColor = 'black',
    index = null,
} = {}) {
    /* used for adding on portions of color to the text */
    let words = split(text)
    if (words.length == max) {
        return colors
            .map((color, i) => {
                let word = words[i]
                if (!word) return
                if (index != null && i >= index) {
                    return [word, defaultColor]
                }
                return [word, color]
            })
            .filter(exists)
    }
    let colorLength = colors.length
    if (!colorLength) return [[text, defaultColor]]

    let store = []
    let textLength = text.length
    let length = Math.floor(textLength / max)
    let remainder = textLength - length * max
    //console.log(remainder, length); throw "";

    for (let i = 0; i < colorLength; i++) {
        let sliceLength = length
        if (remainder) {
            remainder -= 1
            sliceLength += 1
        }
        //
        //if (i == colorLength - 1) {
        //if (text.length)
        //}

        store.push(text.slice(0, sliceLength))
        text = text.slice(sliceLength)
    }
    if (text) store.push(text)
    //console.log('bbbbbbbbbbbbbbbbb')
    return store.map((item, i) => {
        if (colors[i]) {
            return [item, colors[i]]
        }
        return [item, defaultColor]
    })
}

const smartAggregateActions = [
    /^.*?:/,
    (x) => partition(split(x, /^(.*?):/m), 2),
]

function sxxxxxxxxxxxxxxchemaRegexFactory(schema, fn) {
    let [a, template] = split(schema, / *\.\.\. */)
    const dict = {
        wallu: '[^]+?',
        function: 'function',
        //'\\n': '\\\\n',
        //'\\cw': '(\\\\w+)',
        //'\\w': '\\\\w+',
        n: '\\n',
        cw: '(\\w+)',
        w: '\\w+',
        dotu: '.*?',
        s8: ' {8}',
        s4: ' {4}',
    }
    let flags = 'g'
    let r = RegExp(dreplace(a, dict, null), flags)
    console.log(r)
    return function lambda(s) {
        //console.log({s})
        const matches = findall(r, s)
        //console.log(matches); throw ''
        //console.log('matches.length', matches.length)
        return matches.map((x) => spicyTemplater(template, x))
    }
}

function aggregatef(actions) {
    return function lambda(s) {
        let [a, b] = split(s, /^--+/m)
        if (b) {
            /* a represents the schema string */
            /* b represents the text */
            const fn = schemaSomethingFoobar(a)
            a = fn(b)
        }
        s = a.trim()
        for (let [a, b] of partition(actions, 2)) {
            if (ftest(a, s)) return fget(b, s)
        }
    }
}
function fget(b, s) {
    return isFunction(b) ? b(s) : findall2(b, s)
}
function createArrowRefFromString(s) {
    s = s.replace(/\bthis\b/g, 'state')
    const matches = smartAggregate(s)
    const ref = {
        up: 'ArrowUp',
        top: 'ArrowUp',
        bottom: 'ArrowDown',
        left: 'ArrowLeft',
        down: 'ArrowDown',
        right: 'ArrowRight',
        esc: 'Escape',
        escape: 'Escape',
        ent: 'Enter',
        enter: 'Enter',
        spc: ' ',
        space: ' ',
        bs: 'Backspace',
        backspace: 'Backspace',
        tab: 'Tab',
    }

    return reduce(partition(matches, 2), (k, body) => {
        if (!exists(body)) {
            return
        }
        const name = ref[k] || k
        const fnName = name == ' ' ? 'Space' : name
        const fn = toStringFunction(name, 'state', body, {
            private: true,
            lambda: true,
            mode: Function,
        })
        return [name, fn]
    })
}
//console.log(createArrowRefFromString('foo:\nbasdfs sdfs dfsd\ndfg \n\n\ndffg \nbar:\noka\nbov:'))

function fractionForms(s) {
    let [a, b] = getNumbers(s)
    if (!b) {
        b = a
        a = 1
    }
    let base = b
    //console.log([a,b])
    let x = 'x'
    if (a == b) throw 'cant equal each other'
    let complement = b - a
    let operator = '-'
    let neg = complement < 0
    if (neg) {
        complement *= -1
        operator = '+'
    }
    //console.log(base, complement)

    let aa = `${x} ${operator} ${x}/${fraction(
        base,
        complement
    )}`
    let bb = `${x} ${operator} ${complement}${x}/${base}`
    let cc = `${x} ${operator} ${x}/${decimal(
        base,
        complement
    )}`
    if (/\.\d{5}/.test(cc)) cc = null
    return [aa, bb, cc, s]

    //x - x / 1.5 is the same as
    //x - x / 3/2
    //x - 2x / 3
    //x/3
    //console.log(fractionForms('3x/5'))
}
function decimal(a, b) {
    return a / b
}
function utfChars() {
    let store = []
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let symbols = '!@#$%^&*(){}[]\'":;,.<>/?~|\\=-+_'.split('')
    let ALPHABET = alphabet.map((x) => x.toUpperCase())
    let emojis = []
    store.push(...alphabet)
    store.push(...ALPHABET)
    store.push(...numbers)
    store.push(...symbols)
    store.push(...emojis)
    return store
}

function waterfall3(items, callback) {
    let i = 0
    let length = items.length
    return new Promise((resolve) => {
        function runner(items) {
            function done() {
                i += 1
                if (i == length) {
                    return resolve()
                } else {
                    runner(items)
                }
            }
            const value = callback(items[i], i, done)
            if (isPromise(value)) {
                done()
            }
            /* somehow, the value gets looped in */
        }
        return runner(items)
    })
}

function schemaSomethingFoobar(s) {
    const dict = {
        ns: '(\\S+)',
    }
    let schemaRegex = dreplacef(/\$(\w+)/g, dict)

    const actions = linegetter(s).map((item, i) => {
        let [s, noBoundary] = mreplace(/nb/, item)
        let [a, b] = splitonce(s)
        a = schemaRegex(a)
        if (!noBoundary) {
            a = boundary(a)
        }
        a = new RegExp(a, 'g')
        return [a, b]
    })

    return function lambda(s) {
        for (let [a, b] of actions) {
            s = s.replace(a, b)
        }
        //console.log(s)
        return s
    }
}
const smartAggregate = aggregatef(smartAggregateActions)

function endAdderF(s, value) {
    const regex = (x) => !RegExp(s).test(x)
    return conditional(addf(value || s), regex)
}

function classMixin(Base, ...mixins) {
    for (let mixin of mixins) {
        for (let [k, v] of Object.entries(mixin)) {
            if (isObject(v)) {
                Object.defineProperty(Base.prototype, k, v)
            } else {
                console.log('setting prototype', k, v)
                Base.prototype[k] = v
            }
        }
    }
}

function extractArg(s) {
    return search(/\((.*?)\)/, s)
}

function dreplace2(s, dict) {
    const symbols = ['*', '[', ']', '{', '}', '. ', ' = ?']
    const filter = (x) => symbols.includes(x)
    const [a, b] = partition(Object.keys(dict), filter)
    const rA = exists(a)
        ? `(?:${a.map((x) => '\\' + x).join('|')})|`
        : ''
    const rB = `\\b(?:${b.join('|')})\\b`
    const regex = rA + rB

    return s.replace(RegExp(regex, 'g'), (x, offset, s) => {
        if (/[@$]/.test(s[offset - 1])) return x
        return dict[x]
    })
}
//console.log(variableExists('bvvcr'))
//
function escapeHtml(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
}

//console.log(removeExtension(tail('f-ga.ttf')))

class ItemParser {
    constructor(fn) {
        if (fn) this.parser = fn.bind(this)
    }
    parse(s) {
        this.store = []
        this.index = 0
        this.lines = isArray(s) ? s : s.trim().split('\n')
        while (this.index < this.lines.length) {
            let i = this.index++
            let prev = this.lines[i - 1]
            let line = this.lines[i]
            let next = this.lines[i + 1]
            let res = this.parser(line, next, prev, i)
            push(this.store, res)
        }
        return this.store
    }
}
function getValue(classObj, ...args) {
    let method = 'parse'
    let value = new classObj(p)[method](...args)
    console.log(value)
    function p(s) {
        return s
    }
}
s = `


It represents the faster worker because 3x>1x. It represents the fraction of the job done in 1 hour because the entire job is done in 7 hours and 7t1/7 is 1.
okay cool
`

//function p(s) {
//return s + "HI"
//}
//i = s.trim().split(/(\W+)/)
//t=(new ItemParser(p)).parse(i)
//console.log(t)

function quoteTheVeryInside(s) {
    const items = split(s, /([a-z]{2,}\()/i)
    const length = items.length - 1
    const target = items.pop().slice(0, -length)
    return (
        items.join('') +
        singlequote(target) +
        ')'.repeat(length)
    )
}
//s = "toLatex(nerdSolver(toLatex(r-2 /6 = 5)))"
//console.log(quoteTheVeryInside(s))

//console.log(dreplace('sgvgh', {g:'a'}, null))

//const regex = RegExp(ncg('^(?:($1|@\\w+) (.+))', ['a']), 'm')
//console.log(regex)

function unCamelCase(s) {
    if (test(/[a-z][A-Z]/, s)) {
        return capitalize(
            s.replace(
                /[a-z][A-Z]/g,
                (x) => x[0] + ' ' + capitalize(x[1])
            )
        )
    }
    return s
}
//obj = {a:1, b:2, c:3}
//s = reduceToString(obj, (fontFamily, weights) => {
//console.log(fontFamily, weights)
//})

function templater2(s, ref, keep) {
    /* for the spaceOrNothing html fn located in r6 */
    if (!s.includes('$')) {
        return isObject(ref) ? dreplace2(s, ref) : s
    }

    let regex = /\$(\{.*?\}|\w+\(.*?\)(?!\))|\d+|[\w-]+\b)/g
    if (isPrimitive(ref)) {
        ref = [ref]
    }

    let functionals = []
    let offset = s.includes('$0') ? 0 : 1

    function runner(s) {
        const value = _runner(s)
        return value
    }

    function _runner(s) {
        return s.replace(regex, (_, x) => {
            if (x == 'c') return '$c'
            //if (x == 'last') return eLastValue
            if (x.startsWith('{')) {
                let a = x.slice(1, -1)
                let b = _runner(a)
                b = b.replace(/\(([-a-zA-Z]+)\)/g, '("$1")')
                let eValue = eval(b)
                eLastValue = eValue
                return eValue
            }

            if (x.includes('(')) {
                let [a, b] = search(/(\w+)\((.*?)\)$/, x)
                if (isWordFragment(b)) {
                    b = quotify(b)
                }
                let c = _runner(b)
                if (isWordFragment(c)) {
                    c = quotify(c)
                }
                let t = `${a}(${c})`
                let eValue = eval(t)
                eLastValue = eValue
                return eValue
            }
            let val = isArray(ref)
                ? ref[Number(x) - offset]
                : ref[x]

            if (val == null) {
                return keep ? '$' + x : ''
            }
            return val
        })
    }
    return runner(s)
}


function templaterf(ref, options = {}) {

    if (isString(ref)) {
        return lambda(...arguments)
    }
    let lastValue
    let ordinalCount = 1
    let store
    let regex = /\$(\{.*?\}|\w+\(.*?\)(?!\))|\d+|[\w-]+\b)/g
    return lambda

    function lambda(s, _ref, config = {}) {
        if (_ref) ref = _ref
        if (isPrimitive(ref)) {
            ref = [ref]
        }

        if (!s.includes('$')) {
            return isObject(ref) ? dreplace2(s, ref) : s
        }
        return _runner(s, config)
    }

    function _runner(s, config = {}) {
        return s.replace(regex, (_, x) => {

            if (config.blank && config.blank.includes(_)) {
                //console.log('sup')
                return '$input'
            }
            if (x == 'ordinal') {
                if (config.ordinal) {
                    return ordinal(config.ordinal)
                }
                return ordinal(ordinalCount++)
            }

            if (x == 'c') return '$c'
            if (x == 'last') return lastValue
            if (x.startsWith('{')) {
                let a = x.slice(1, -1)
                let b = _runner(a)
                b = b.replace(/\(([-a-zA-Z]+)\)/g, '("$1")')
                lastValue = eval(b)
                return lastValue
            }

            if (x.includes('(')) {
                let [a, b] = search(/(\w+)\((.*?)\)$/, x)
                if (isWordFragment(b)) {
                    b = quotify(b)
                }
                let c = _runner(b)
                if (isWordFragment(c)) {
                    c = quotify(c)
                }
                lastValue = eval(`${a}(${c})`)
                return lastValue
            }
            let val = isArray(ref)
                ? ref[Number(x) - offset]
                : (ref[x] || ref['$' + x])

            if (val == null) {
                return options.keep ? '$' + x : ''
            }
            return val
        })
    }
}

function skip(x, y) {
    if (y == null) {
        console.log('skipping because null', x)
        return true
    }
}
//console.log(timestamp())

function stamp(text) {
    let [h, m, s, ms, ampm] = getHMSM()
    return blue(`${s}:${ms}  ${text}`)
}
function debug() {
    if (arguments.length == 1 && arguments[0]) {
        return
    }
    console.log('starting debug')
    const stack = getStackTrace()
    console.log(stack)
    console.log('end of debug')
}
s = `
goo:
d
f
f
f
d
a: sdf
df: fdsgfg
`
//console.log(smartAggregate(s))

function createAccessorsFromString(s) {
    const opts = {
        prefix: true,
        lambda: false,
        mode: Function,
    }

    const items = smartAggregate(s)

    return reduce(items, (a, b) => {
        let bodyA = `return this._${a}`
        let bodyB = `this._${a} = arg\n${b}`
        let get = toStringFunction(a, '', bodyA, opts)
        let set = toStringFunction(a, 'arg', bodyB, opts)
        return [a, { get, set }]
    })

    /*  first used in lego.js to add in accessor properties for the LegoElement class mixin.
     *  
        el this.el
        es this.el.style 
        pp$ns toPixel($1) nb
        --------------------------------
        pos:
        el.style.left = pparg[0]
        el.style.top = pparg[1]
        text: el.innerText = arg 
     * */
}
//console.log(pipe([sayhi, saybye])())

function empty() {
    blue('empty return value')
}

function isRegExpString(s) {
    return /^\/.{3,}\/\w* *$/.test(s)
}

function doubleLines(s) {
    return s.replace(/\n/g, '\n\n')
}

function toRegExp(s, ref, flags = '') {
    if (!ref) {
        /* s is an iterable
         * and there is no template
         * so we set the template*/
        if (isIterable(s)) {
            ref = s
            s = '(?:$1)'
        } else {
            return RegExp(s)
        }
    }
    let keys = prepareIterable(ref, 'keys')
    let regex = s.replace(/\$1/g, keys.join('|'))
    return RegExp(regex, flags)
}

function resolveSimilarities(storageValue) {
    /* it is used for resolving similarities between names.
     * often times, u may have a set of functions which have the same abbreviation. This function works to resolve that*/
    /* {"ab": ["appleBanana", "appleBox"]} --> {"ab": "appleBanana", "ab1": "appleBox"}*/
    const store = {}
    for (let [k, v] of Object.entries(storageValue)) {
        sorted(v).forEach((item, i) => {
            if (i == 0) {
                store[k] = item
            } else {
                store[k + i] = item
            }
        })
    }
    return store
}

function cleanupHtmlSpaces(s) {
    //s = s.replace(/<\w+>\s+<\/[\w-]+>\n/g, '')
    //s = s.replace(/<\w.*?["'\w]>\n +/g, '')
    s = s.replace(/ *<style>\s+<\/style>\n/g, '')
    s = s.replace(/ *<script>\s+<\/script>\n/g, '')
    return s
}
function undoComment(s) {
    return s.replace(/^(?:\/\/|#) */gm, '')
}
function removeEmptyLines(s) {
    s = s.replace(/^\S.*?\n\n+(?=\S)/, (x) => x.trim())
    return s.replace(/\n *\n *\n+/g, '\n\n')
}
function toFunctionNameRegex(name) {
    return RegExp('^(?:async )?function ' + name, 'm')
}
function tryCatchWrap(a, b) {
    if (!b) {
        b = 'console.log(e)'
    }
    return brackify('try', a) + ' ' + brackify('catch(e)', b)
}

//runDemo(resolveSimilarities)
//const stylediv = curryStart(divify, 'style', '')
//console.log(stylediv('hi\nbye'))

function toModuleImports(path, items) {
    return `${brackify(
        'var',
        toArray(items).map(addf(','))
    )} = require("${localPath(path)}")`
}

function toModuleExports(items) {
    return '\n' + join(map(items, 'module.exports.$1 = $1'))
}

function localPath(s, e = 'js') {
    s = addExtension(s, e)
    if (test(/^[\/.]/, s)) {
        return s
    }
    return './' + s
}

//console.log(toModuleImports('dfg', [1]))

function slicef(a, b) {
    if (b == null) return (x) => x.slice(a)
    return (x) => x.slice(a, b)
}

function arrayf(...keys) {
    return (x) => {
        return prepareIterable(x, 'entries').map((item, i) => {
            return map(keys, (k) => item[k])
        })
    }
}

function objectf(...keys) {
    return (x) => {
        return reduce(x, (k, v) =>
            keys.includes(k) ? v : null
        )
    }
}

//console.log(templater2('$1hi', 'f""'))

function getWord(s) {
    return match(/[a-z][\w]+/, s)
}

function splitf(
    x,
    { maxLength = 2, config = 0, presets = 0, clean = 1, first = 0 } = {}
) {
    /*
     * when x is a regex, it acts like @splitThePage
     * when x is a dict, it is used with splitonce
     * many parsers have the first element as a key
     * that is arg[0] of splitonce
     * arg[1] is then passed into it
     *
     * */
    if (isRegExp(x)) {
        return function lambda(s, n, ignoreClean) {
            if (clean && !ignoreClean) s = removeComments(s)
            let items = split(s, x)
            if (n == Array) return items.slice(0, 2)
            if (n) return items[n]
            //console.log(items)
            if (items.length > maxLength) {
                first = 1
                error = console.log
                error = identity
                error(`
                    For certain regexes, 
                    only a certain number of splits are ok
                    @splitThePage
                    maxLength represents this number of splits
                `)
            }
            if (first) return items[0]
        }
    }
    if (isObject(x)) {
        return function lambda(s) {
            let [a, b] = splitonce(s)
            try {
                return config
                    ? x[a](createConfig(b, presets), a)
                    : x[a](b, a)
            } catch (e) {
                console.log([a, b, s])
            }
        }
    }
}

function isComponentTag(s) {
    return /^[A-Z]|^v-/.test(s)
}

function isCapitalized(s) {
    return /^[A-Z]/.test(s)
}

function preview(s) {
    console.log(s)
    return s
    throw ''
}

const stopString = splitf(/^\/+ *stop.*/m, { first: 1 })
const splitThePage = splitf(/^--+/m, { first: 1, clean: 1 })

function Export(...args) {
    if (!isNode()) return
    if (args.length == 1) {
        module.exports = args[0]
    } else {
        map(args, (x) => (module.exports[x.name] = x))
    }
}
function matchf(r, cleanIt) {
    return (x) => {
        const value = match(r, x)
        return unique(cleanIt ? flat(value.map(partial(filter))) : value)
    }
}
function mtest(tests, s, fallback) {
    for (let [a, b] of tests) {
        if (test(b, s)) {
            return a
        }
    }
    return fallback || s
}

//console.log({a:join(filter(map([null, '2'], (x) => x)))})

//console.log(dreplacef(aobj)('a'))


function exports() {
    sort = sorted
    module.exports = {alphabet,isReferenceError,isSyntaxError,pairlog,WordToNumberDictionary,trace,getFunctionInfo,dog,display,noop,isUrl,seasons,StandardObject,isError,isSet,stringify,datestamp,getHMSM,getMDY,isString,isArray,reduce,uncomment,escapeNewlinesAndQuotes,yes,longShort,shortLong,getLines,isSimilar,push,iterTest,hasPeriod,getFunction,argumentGetter,argumentFiller,toMilliseconds,isAsync,partition,getInterestingBindings,hasBracket,throwError,coinflip,isUtf,opposite,CumulativeStorage,addProperty,exists,addPropertyLambda2,addPropertyLambda3,iterRange,isPureObject,isThisFunction,rainbow,average,Indexed,isObject,type,breaker,isNumber,test,range,isPrimitive,textTable,isDoubleIterable,isQuote,isStringNumberRange,Tally,coerceToNullIf,tally,isNestedArray,removeEs6,isLink,regexElongation,getFunctionName,isFunction,isPlural,toSpaces,replace,Watcher,isHtmlFile,isCssFile,isJavascriptFile,getQuotes,findKeyFactory,findKey,findKeys,getShortestLongest,getShortest,getLongest,findCaller,hasSymbol,toArray,looksLikeRegex,prepareRegex,wordToNumber,toStringDictionaryEntry,comment,hasSelector,isUndefined,isSelector,boundary,getVueErrorInfo,hasSpaces,isNull,toStringCallable,uncapitalize,insertBelow,linebreak,hasNewline,toNumber,removeQuotes,blockComment,modularIncrementNumber,unique,numbered,getLast,find,matchall,toggleFunction,ErrorWatcher,getClassString,getClassMethods,hasSharedKeys,isPublic,getClassProperties,findall,smallify,deletef,functiongetter,removeAllComments,getLastWord,getFirstWord,getFirst,xsplit,removeComments,search,matchgetter,prepareIterable,indent,joined,getYear,difference,errorWrap,insertText,isIterable,linegetter,isDefined,isBoolean,addGFlag,isFirst,isWord,isPromise,isJsonParsable,isRegExp,isFalse,isTrue,isClassObject,isClass,isNode,isJson,isElement,isInteger,isPositive,isCapitalized,isYesterday,isDate,isToday,zeroPad,backspaced,indexgetter,insert,getSpaces,rescape,replaceTemplaterHelper,spicyReplace,spicyTemplater,reverse,templater,hasCaptureGroup,getIndent,identity,trim,AssertionErrorHandler,AssertionError,assert,parens,len,hasNumber,sum,recursiveFlat,flat,doublequote,delta,toVariable,quotify,tail,bindObject,initializeStateVariable,bind,fparse,Cache,getLongestOld,dreplace,ncg,filterObjectHelper,filter,filterObject,filtered,getIndentAndLine,capitalize,singlequote,ftest,mapObject,mapConditional,merge,mergeAll,tryval,shuffle,Clock,addExtension,getExtension,sorted,n2char,char2n,newlineIndent,Storage,modularIncrement,modularIncrementFn,mreplace,sleep,parseJSON,splitonce,pop,fill,splitOnceReverse,split,regexed,paired,toUpperCase,depluralize,intersection,shared,changeDate,sortByDependencies,copy,toDashCase,toSnakeCase,toStringObject,toArgument,toString,toAttr,toPascal,toCamelCase,toggleVue,toggle,toDictionary,toLiteralArray,toInteger,roygbiv,numberToWord,numberWords,hasComma,hasLetter,hasWord,hasLookBehind,hasLookAround,endsWithWord,endsWithNumber,stringcall,dedent,getWords,zip,cartesianProduct,curry,force,isStorage,isNewLine,colorToHex,iter,StringMixins,mixin,Eater,notNull,trimSpaces,Matrix,getStrings,normalizeSpaces,partial,toStringArgument,splitmapfilter,splitMapJoin,argsplit,isOnlyWords,warn,getSingleAndDoubleAttrs,getOptions,aggregate,pipe,createError,replaceFromIndex,freplace,Table,evaluate,regexgetter,hasGFlag,regexStartsWithSpaces,inferlang,isAllCaps,abbreviate,TextTokenizer,getFunctionNames,removeSpaces,spaceToCamel,listgetter,spaceToSnake,createConfig,jspy,curryStart,stateCurryEnd,stateCurryStart,curryEnd,timestamp,wordCount,exporter,stateTrace,CodeLibrary,getfunctions,mapfilter,foo,getParameters,scopedEval,timegetter,getErrorInfo,getDetailedErrorInfo,ItemIter,forEach,getCaller,vars,trywrap,stringIIFEWrap,stringTryWrap,getLoggableProperties,removeStrings,addf,lineCount,saybye,sayhi,captureRegex,splitLast,replaceLast,bringToLife,addDeepKey,collectObjectFromString,looksLikeProse,getFirstParameter,isStandardHtml,fixUrl,isSymbol,consoleThrow,getChunks,pluralize,findallStrings,isStandardCss,reduceToString,join,wrap,hasOwn,startsWithSymbol,splitOnceSymbolOrWord,IndexError,mergeProps,mergeFunction,compose,coerceToArray,coerceToString,coerceToNumber,startsWithPeriod,splitOptionalComma,brackify,hasColon,hasDash,getFirstLine,removeStartingSpaces,toFunction,toFunctionRegex,getSpacesFromOffset,countParentheses,countCaptureGroups,getLastLine,iterSearch,itersearch,findError,hasCamelCase,lbreplace,sreplace,toRequireString,removeFunctionPrefix,removeExtension,getStackInfo,getStackTrace,isCss,IndexedMap,isSingleCssProperty,smartDedent,Iter,LineEdit,isEnterBlock,fixSpaceLength,isHtml,isHtmlAttr,EventEmitter,testf,vmap,atFirst,atSecond,logger,run,IncrementalBuilder,getUniqueLetters,isAllEqual,fillTo,Builder,getVariablesFromString,toStringFunction,checkjs,toAbbreviationRegex,expensiveFuzzyMatch,fuzzyMatch,isAllSingleWords,startsWithSingleWord,count,isLogicFunction,isGetFunction,sortByOccurence,toVimVariable,toConfig,toVimDict,splitparsef,splitCamelCase,mergeSingleLetters,fixPath,once,seen,FunctionBuilder,splitNumberBoundary,functionProxy,isStorageSchema,toStorageSchema,getModuleExports,catpics,regexTemplater,dynamicGetterSetter,hasReturnValue,defineFunctionProperty,defineProperty,toArrayOrObjectList,isEven,isOdd,removeSymbols,edit,isWordy,walk,allowIgnoreFilterFactory,toHtmlRegex,removeHtmlComments,stop,assignAliases,assignFresh,assignExisting,rng,randomPick,onceFactory,getIndexesOf,schemaMatch,MathRearrangement,getOptionsFromSchema,defineAliases,KVStorage,letterRange,partitionLetterGroups,recursiveDataBuilder,debounce,Breaker,BreakerFactory,getAndGetAgain,tryAndTryAgain,buildFileRelations,gatherArgs,assertion,actions,optiongetter,waterfall,incrementName,defineVariable,datemark04082022,getThis,standards,lineNeedsEndingColon,infuseVue,infuseSpanColors,spanify,validArgs,schemaRegexFactory,removeThis,bindObjectToState,bringFunctionsToLife,schemaReplace,xveryMagicLogicHandler,xnothingInfront,defineEmitProperty,endsWithParentheses,lengthDelta,indentAfterFirstLine,templateToFunction,runit,mergeProperty,mergeOnTop,mapfilter,multiSort,rigidCompareFactory,getSecondWord,isObject,isObjectLiteral,conditional,announceError,countParameters,createVariable,repf,conditional,addNestedProperty,getParamInfo,coerceTo,intersects,latexTemplater,lineFilter,getNumbers,findall2,lowerCase,notIn,editStorage,getConstructorName,log,smartAggregate,partial,match,pairWith,atObject,normalizePath,extractArg,map,bindObject,removeJavascriptComments,dreplace2,getVariables,quoteTheVeryInside,spellcheckf,blue,doubleLines,toRegExp,empty,isRegExpString,cleanupHtmlSpaces,undoComment,removeEmptyLines,tryCatchWrap,toFunctionNameRegex,spellcheckf,removeComments,superbf,sort,runDemo,logf,filterf,toModuleImports,toModuleExports,slicef,objectf,atBoth,hasCode,reWrap,templater2,reWrap,reStr,toCamelCase,dogLogFactory,Export,splitThePage}
}

exports()
module.exports.matchf = matchf
module.exports.arrayf = arrayf

function mooLexer(s, states) {
    const moo = require('moo')
    const first = getFirst(states)
    const lexer = states[first].match ? 
        moo.compile(states) : moo.states(states)

    lexer.reset(s)
    const value = map(lexer, objectf('type', 'value'))
    console.log(value)
    return value
    return map(lexer, arrayf('type', 'value'))
}
module.exports.mooLexer = mooLexer
module.exports.replacef = replacef
module.exports.incrementf = incrementf
module.exports.toJSON = toJSON

function toJSON(x) {
    if ('store' in x) {
        return x.store
    }

    if ('storage' in x) {
        return x.storage.store
    }

    if ('getValue' in x) {
        return x.getValue()
    }
}



function incrementf(template) {
    let count = 0
    return function lambda() {
        if (!template) return count++
        return template.replace(/\$1|[ija1]/i, (x) => {
            count++
            switch (x) {
                case 'A': return capitalize(n2char(count))
                case 'i': return count
                case '$1': return count
            }
        })
    }
}


module.exports.unCamelCase = unCamelCase



module.exports.isComponentTag = isComponentTag


function addQuotes(s) {
    if (test(quoteRE, s)) {
        return s
    }
    return quotify(s, '"')
}
function removeVPrefix(s) {
    return toCamelCase(s.replace(/^[a-zA-Z]+-/, ''))
}
module.exports.addQuotes = addQuotes
module.exports.removeVPrefix = removeVPrefix
//console.log(templater2( '${removeVPrefix($1)}', 'v-boo'))
//
var getIndex = incrementf()

function aggregator0711(s, a, b) {
    a = 'd'
    b = 'ex?'
    const regex = RegExp(
        '([^]+?)\\n${a} *\\n([^]+?)(?:${b}|$)', 'g'
    )
    const m = findall(regex, s)
    console.log(m)
}
module.exports.isProse = isProse
module.exports.endAdderF = endAdderF
module.exports.fastFunction = fastFunction
//console.log(map([{a:1, b:2, c:3}, {a:31, b:2, c:3}], 'a'))
//
//




s = 'table(1/x, evaluate) from 1 to 5 [fraction, decimal value]'
/* it returns a object with type table */
function addRegexCaret(s, flags = '') {
    if (/^\/?\^/.test(s.toString())) {
        return s
    }

    if (isString(s)) {
        return RegExp('^' + s, flags)
    }
    if (!flags) flags = s.flags
    s = reStr(s)
    return RegExp('^' + s, flags)
}
const tableRegexSet = {
    columns: /\w*\((.*?)\)/,
    headers: /\[(.*?)\]/,
    from: /from (\w+)/,
    to: /to (\w+)/,
}
mutate(tableRegexSet, addRegexCaret)

function aggTableArgs(s, regexSet, parserRef = {
    headers: capitalize
}) {
    
const store = new Storage()
const regexes = Object.entries(regexSet)
let found
while (true) {
    s = s.trim()
    found = false
    for (let [k, v] of regexes) {
        let m = s.match(v)
        if (!m) continue 
            found = true
            s = s.slice(m[0].length)
            let value = matchgetter(m)
            if (isPlural(k)) {
                value = split(value, commaRE)
            } else if (isNumber(value)) {
                value = Number(value)
            }
            if (parserRef[k]) {
                if (isArray(value)) {
                    value = value.map(parserRef[k])
                }
                else {
                    value = parserRef[k](value)
                }
            }
            store.add(k, value)
    }
    if (!found) break
}
return toJSON(store)
}




function tabler({
    from = 1,
    to = 10,
    headers,
    columns,
}) {
    const type = 'table'
    const store = []
    let lastVal
    for (let i = from; i <= to; i++) {
        store.push(columns.map(col => {
            if (isExpression(col)) {
                lastVal = col.replace(/x/, i)
                return toLatex(lastVal)
            }
            if (col == 'evaluate') {
                return nerdSolver(lastVal)
            }
            return eval(col.replace(/\(\w\)/, (x) => {
                return parens(lastVal)   
            }))
        }))
    }
    return {headers, store, type}
}
module.exports.mutate = mutate


module.exports.classMixin = classMixin
s = `

series(20/100, 2000/100000, 3000/1000000 blank($n, $eval))
    $n = log10($2)
    $n2 = log10($2)
    $1/$2 means take $1, and shift the decimal left $n places.
    $map($n, $ordinal shift: $eval($1/Math.pow(10, $i)))
    Final Answer: $last
`
ss = `

series(10, 100 b, 1000 b, 10000 b, 100000)
    $n = $i
    $p = pluralize('place', $n)
    Dividing by $1 shifts the decimal point to the left by $n $p.
`
const seriesRegexSet = {
    args: /series\((.*?)\)$/m,
    headers: /\[(.*?)\]/,
    vars: /\$\w+ *= *.+/,
    code: /.+/,
}


function log10(n, base = 10) {
    return Math.round(Math.log(n) / Math.log(base))
}
function seriesParser(s) {
    const {args, code, vars} = aggTableArgs(s, seriesRegexSet)
    const templater = templaterf()
    const argValues =  args.map((arg, i) => {
        let blankRE = /\b(b) *$|blank\((.*?)\)/
        let [item, blank] = mreplace(blankRE, arg)
        blank = blank ? split(blank, / *, */) : []
        if (blank[0]  == 'b') { blank = ['$n'] }
        //console.log(blank)
        let potentials = findall(/\w+/g, item)
        let varDictionary = {}

        potentials.forEach((item, i) => {
            varDictionary[i + 1] = item
        })

        function fn(acc, item) {
            let [a,b] = splitonce(item, equalRE)
            if (b  == '$count' || b  == '$i') {
                acc[a] = i + 1
            } else {
                acc[a] = tryval2(templater(b, acc))
            }
        }

        mutateInPlace(vars, fn, varDictionary)

        return code.map((item, i) => {

            if (isCallable(item)) {
                let [n,b] = match(/([\w$]+), *(.+)\)$/, item)
                n = varDictionary[n]

                return range(n).map(i => {
                    varDictionary.i = i

                    return templater(b, varDictionary, {
                        blank, ordinal: i
                    })
                })
            } else {
                return templater(item, varDictionary, {blank})
            }
        })
        return codeValue
    })

   return argValues.every((x) => x.length  ==1) ?
        argValues.map((x) => x[0]) : argValues
}
//console.log = display

//console.log(['$n'].includes('$n'))



function isCallable(s) {
    return test(/^[$\w]+\(/, s)
}


function mutateInPlace(items, f, acc) {
    for (let item of items) {
        f(acc, item)
    }
}


function R0714(s, flags = '', capture = 1) {

    RSTR = `

    TOKENS:
    fraction \\d+/\\d+|[a-z]+-[a-z]+
    word-number [a-z]+-[a-z]+
    number -?\\d+(?:\\.\\d+)?%?
    REGEXES:

    number (?:$number|$word-number)
    comparison (?:more|less) than|(?:times )?of|(?:times|less)
    `
    const {REGEXES, TOKENS} = aggregateRegexes(RSTR)
    mutate(REGEXES, replacer, String, TOKENS)
    //console.log(REGEXES)

    function replacer(x, mode, TOKENS) {
        let flags = ''
        let r =  x.replace(/\$([a-zA-Z]+\d*)/g, (_, x) => {
            let value = TOKENS[x]
            if (isPlural(x) && /\w+(?: \w+)*/.test(value))  {
                return reWrap(split(value))
            }
            return value 
        })  
        if (mode == String) return r
        r = r.replace(/\\\\/g, '\\')
        let regex = RegExp(r, flags)
        return {
            match: regex
        }
    }

    const regex = s.replace(templaterRE, (_, x) => {
        const value = REGEXES[x]
        if (capture) return parens(value)
        return value
    })

    return RegExp(regex, flags)
}

function del(r, s, {
    after = '.*',
    flags = '',
} = {}) {
    let regex
    if (isString(r)) {
        regex = `(?:${r})${after}`
    } else {
        flags = r.flags
        regex = r
    }
    regex = RegExp(regex, flags)

    return s.replace(regex, '').trim()
}
function aggregateRegexes(s) {
    let splitRE = /^(\w+):$/m
    let splitonceRE = /^(\w+) +(.+)$/gm
    let fn = compose(toDictionary, matchf(splitonceRE))

    return toDictionary(map(partition(split(smartDedent(s), splitRE)), atSecond(fn)))
}
function hasValue(s) {
    return s != null
}
function greeting(name, mood = 'default') {
    const templates = [
        {value: 'hi', mood: 'default'},
        {value: 'hi', mood: 'default'},
        {value: 'how\'s it going!', mood: 'upbeat'},
    ]

    let template = templates.filter((x) => x.mood  == mood)[0]
    if (template.direction) {
        return coinflip() ? 
          capitalize(name) + ', ' + addComma(template.value) :
          capitalize(template.value) + ' ' + name + ','
    } else {
        return capitalize(template.value) + ' ' + name + ','
    }
    return templater(template, name)
}
module.exports.del = del
module.exports.R0714 = R0714



function topOf(s, percent = 0.4) {
    let length = s.length
    let portion = Math.round(length * percent)
    return s.slice(0, portion)
}
function btest(regex, s) {
    return RegExp('\\b' + regex + 's?\\b', 'i').test(s)
}
module.exports.btest = btest
module.exports.topOf = topOf
//console.log(join(['a', 'b'],[], ['v', 'fff']))
//console.log(len(3.32))
//console.log(bringToLife('(100 + a) * b / 100')(10,20))
