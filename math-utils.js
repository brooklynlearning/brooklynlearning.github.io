/* import nerdamer */

const COMMON_FRACTIONS = ['1/2', '1/3', '1/4', '1/5', '1/6', '1/7', '1/8', '1/9', '2/3', '3/4', '4/5', '5/6', '6/7', '7/8', '8/9']
const PRIMES = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
    59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
    127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181,
    191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251,
    257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397,
    401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463,
    467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557,
    563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619,
    631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
    709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787,
    797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863,
    877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953,
    967, 971, 977, 983, 991, 997, 1009, 1013,
]

function primesFrom(a, b, n) {
    if (!b) {
        b = a
        a = 0
    }
    let c = PRIMES.findIndex((x) => x >= a)
    let d = PRIMES.findIndex((x) => x >= b)
    let primes = PRIMES.slice(c, d)
    if (n && primes.length < n) {
        primes.push(...PRIMES.slice(d, d + n - primes.length))
    }
    return primes
}

function coinflip(n = 0.5) {
    return Math.random() > 1 - n
}

function hasMultipleVariables(s) {
    return count(/\b[abcde]\b/g, s) > 1
}

function allEqual(arr) {
    return arr.every((x) => x == arr[0])
}

function hasEquals(s) {
    return test(/=/, s)
}

function hasVariableX(s) {
    return test(/x/, s)
}

function hasNaN(s) {
    return s.toString().includes('NaN')
}

function isPositive(n) {
    return n > 0
}
function isInteger(n) {
    return Number.isInteger(n)
}
function isNiceAnswer(n) {
    return n > 0 && isInteger(n) && n <= 10
}

function hasTerminatingDecimal(s) {
    return len(s) < 6 || isRepeatingDecimal(s)
}

function getPrimeFactors(n) {
    return getFactors(n).filter(isPrime)
}

function getDigitsFromString(x) {
    return String(x).split('').map(Number)
}

function notPrime(n) {
    return !isPrime(n)
}

function power10(n) {
    return Math.pow(10, n)
}

function getDecimalLength(n) {
    return search(/\.(.+)/, n).length || 0
}

function getOperators(s) {
    return s.match(/[\+\-\*]/g)
}

function hasMathOperator(x) {
    return test(/[^*+-]/, x)
}

function isNegativeAnswer(s) {
    return String(s).trim().startsWith('-')
}

function isLatexOperator(s) {
    const r = /[\+\-\*]/
    return test(r, s)
}

function isLatexFraction(s) {
    return test('frac', s)
}

function isLatexExponent(s) {
    return /^\w+\^/.test(s)
}

function simplifyRatio(a, b) {
    let g = gcd(a, b)
    return [a, b].map((x) => x / g)
}

function hasDecimal(x, n = 0) {
    return test('\\.' + '\\d'.repeat(n), String(x))
}

function isSquare(x) {
    return !hasDecimal(Math.sqrt(x))
}

function isCube(x) {
    return !hasDecimal(Math.cbrt(x))
}

function toPercent(s) {
    let value =  fixFloatingPoint(100 * s) + '%'
    //console.log(s, value)
    return value
}

function toPercentage(a, b) {
    return 100 * (a / b).toFixed(2) + '%'
}

function fractionToPercent(a, b) {
    return 100 * (a / b).toFixed(2) + '%'
}

function hasVariable(s) {
    return test(/\b[abcde]\b/, s)
}

function isTerminating(a, b) {
    if (isPrime(b)) return false
    return true
}

function lcm(a, b) {
    return (a * b) / gcd(a, b)
}

function countDecimalPlaces(n) {
    return (n.toString().split('.')[1] || '').length
}

function divmod(n, d) {
    return [Math.floor(n / d), Math.floor(n % d)]
}

function toRatio(a, b) {
    return simplifyRatio(a, b).join(':')
}

function isPercentage(s) {
    return s.toString().endsWith('%')
}

function isRepeatingDecimal(s) {
    s = s.toString()
    if (!s.includes('.')) return
    const decimal = s.split('.')[1]
    return allEqual(split(decimal.slice(4)))
}

function getFactorPairs(number) {
    const factors = []
    const seen = []
    for (var i = 1; i <= number; i++) {
        if (seen.includes(i)) continue
        if (number % i == 0) {
            let other = number / i
            seen.push(other)
            factors.push([i, other])
        }
    }
    return factors
}

function getFactors(number) {
    const factors = []
    for (var i = 1; i <= number; i++) {
        if (number % i == 0) {
            factors.push(i)
        }
    }
    return factors
}
function countFactors(n) {
    return getFactors(n).length
}

function gcd(a, b, ...args) {
    if (args.length > 0) {
        return [a, b, ...args].reduce((acc, item) =>
            gcd(acc, item)
        )
    }
    if (a == 0) return b

    while (b != 0) {
        if (a > b) a = a - b
        else {
            b = b - a
        }
    }
    return a
}

function removeDecimals(n, amount = 0) {
    return n.toString().replace(/\.\d+/, (x) => {
        if (amount)
            return '.' + Math.round(x.slice(1, 1 + amount))
        return ''
    })
}

function roundToNearestTen(n, boundary = 10) {
    return Math.round(n / boundary) * boundary
}

function roundToLowestTen(n) {
    if (n < 10) {
        return 0
    }

    if (n < 100) {
        return 10
    }

    if (n < 1000) {
        return 100
    }
}

function roundToNearest(n, boundary = 10) {
    return Math.ceil(n / boundary) * boundary
}

function isPrime(n) {
    //if (PRIMES.includes(n)) r
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false
    }
    return n > 1
}

function simplifyFraction(a, b) {
    if (!b) [a, b] = a.split('/')

    if (hasDecimal(a)) {
        let factor = Math.pow(10, countDecimalPlaces(a))
        a *= factor
        b *= factor
    }
    if (hasDecimal(b)) {
        let factor = Math.pow(10, countDecimalPlaces(b))
        a *= factor
        b *= factor
    }

    const g = gcd(a, b)
    const p = [a, b].map((x) => x / g).join('/')
    return p
}

function randomlyAddZeroes(n, decimals = 1) {
    let [a, b] = [0, decimals]
    let r = coinflip(0.5)
    if (r > 0.67) return n + '0'.repeat(rng(a, b))
    if (r > 0.33) return '0.' + '0'.repeat(rng(a, b)) + n
    return n
        .toString()
        .replace(/\d\d/, (x) => x[0] + '.' + x[1])
}

function isEquation(s) {
    return test(/=/, s)
}


class Calculation {
    constructor() {
        this._symbols = {}
        this.defineOperator('!', this.factorial, 'postfix', 6)
        this.defineOperator('^', Math.pow, 'infix', 5, true)
        this.defineOperator(
            '*',
            this.multiplication,
            'infix',
            4
        )
        this.defineOperator('/', this.division, 'infix', 4)
        this.defineOperator('+', this.last, 'prefix', 3)
        this.defineOperator('-', this.negation, 'prefix', 3)
        this.defineOperator('+', this.addition, 'infix', 2)
        this.defineOperator('-', this.subtraction, 'infix', 2)
        this.defineOperator(',', Array.of, 'infix', 1)
        this.defineOperator('(', this.last, 'prefix')
        this.defineOperator(')', null, 'postfix')
        this.defineOperator('min', Math.min)
        this.defineOperator('sqrt', Math.sqrt)
    }
    // Method allowing to extend an instance with more operators and functions:
    defineOperator(
        symbol,
        f,
        notation = 'func',
        precedence = 0,
        rightToLeft = false
    ) {
        // Store operators keyed by their symbol/name. Some symbols may represent
        // different usages: e.g. "-" can be unary or binary, so they are also
        // keyed by their notation (prefix, infix, postfix, func):
        if (notation === 'func') precedence = 0
        this._symbols[symbol] = Object.assign(
            {},
            this._symbols[symbol],
            {
                [notation]: {
                    symbol,
                    f,
                    notation,
                    precedence,
                    rightToLeft,
                    argCount: 1 + (notation === 'infix'),
                },
                symbol,
                regSymbol:
                    symbol.replace(
                        /[\\^$*+?.()|[\]{}]/g,
                        '\\$&'
                    ) + (/\w$/.test(symbol) ? '\\b' : ''), // add a break if it's a name
            }
        )
    }
    last(...a) {
        return a[a.length - 1]
    }
    negation(a) {
        return -a
    }
    addition(a, b) {
        return a + b
    }
    subtraction(a, b) {
        return a - b
    }
    multiplication(a, b) {
        return a * b
    }
    division(a, b) {
        return a / b
    }
    factorial(a) {
        if (a % 1 || !(+a >= 0)) return NaN
        if (a > 170) return Infinity
        let b = 1
        while (a > 1) b *= a--
        return b
    }
    static calc(s) {
        const calculator = new Calculation()
        return calculator.calculate(s)
    }

    static get(s) {
        const calculator = new Calculation()
        return calculator.calculate(s)
    }
    calculate(expression) {
        let match
        const values = [],
            operators = [this._symbols['('].prefix],
            exec = (_) => {
                let op = operators.pop()
                values.push(
                    op.f(
                        ...[].concat(
                            ...values.splice(-op.argCount)
                        )
                    )
                )
                return op.precedence
            },
            error = (msg) => {
                let notation = match
                    ? match.index
                    : expression.length
                return `${msg} at ${notation}:\n${expression}\n${' '.repeat(
                    notation
                )}^`
            },
            pattern = new RegExp(
                // Pattern for numbers
                '\\d+(?:\\.\\d+)?|' +
                    // ...and patterns for individual operators/function names
                    Object.values(this._symbols)
                        // longer symbols should be listed first
                        .sort(
                            (a, b) =>
                                b.symbol.length -
                                a.symbol.length
                        )
                        .map((val) => val.regSymbol)
                        .join('|') +
                    '|(\\S)',
                'g'
            )
        let afterValue = false
        pattern.lastIndex = 0 // Reset regular expression object
        do {
            match = pattern.exec(expression)
            const [token, bad] = match || [')', undefined],
                notNumber = this._symbols[token],
                notNewValue =
                    notNumber &&
                    !notNumber.prefix &&
                    !notNumber.func,
                notAfterValue =
                    !notNumber ||
                    (!notNumber.postfix && !notNumber.infix)
            // Check for syntax errors:
            if (
                bad ||
                (afterValue ? notAfterValue : notNewValue)
            )
                return error('Syntax error')
            if (afterValue) {
                // We either have an infix or postfix operator (they should be mutually exclusive)
                const curr =
                    notNumber.postfix || notNumber.infix
                do {
                    const prev = operators[operators.length - 1]
                    if (
                        (curr.precedence - prev.precedence ||
                            prev.rightToLeft) > 0
                    )
                        break
                    // Apply previous operator, since it has precedence over current one
                } while (exec()) // Exit loop after executing an opening parenthesis or function
                afterValue = curr.notation === 'postfix'
                if (curr.symbol !== ')') {
                    operators.push(curr)
                    // Postfix always has precedence over any operator that follows after it
                    if (afterValue) exec()
                }
            } else if (notNumber) {
                // prefix operator or function
                operators.push(
                    notNumber.prefix || notNumber.func
                )
                if (notNumber.func) {
                    // Require an opening parenthesis
                    match = pattern.exec(expression)
                    if (!match || match[0] !== '(')
                        return error(
                            'Function needs parentheses'
                        )
                }
            } else {
                // number
                values.push(+token)
                afterValue = true
            }
        } while (match && operators.length)
        return operators.length
            ? error('Missing closing parenthesis')
            : match
            ? error('Too many closing parentheses')
            : values.pop() // All done!
    }
}

function reverseMathString(s) {
    const items = s.split(' ')
    items.reverse()
    return items.join(' ')
}

function mathTruncate(answer, degree) {
    s = answer.toString()
    let match = search(/(^.*?\.0+)(.+)/, s)
    if (match) {
        let [a, b] = match
        return a + b.slice(0, 2)
    } else {
        return isDecimal(answer)
            ? answer.toFixed(2).replace(/0+$/, '')
            : answer
    }
}

function addMultiplicationSigns(s) {
    return s.replace(
        /[abcd\d][abcxyz]/g,
        (x) => x[0] + '*' + x[1]
    )
}

function fixFloatingPoint(number) {
    let flag = false
    function parser(x, offset, original) {
        if (original[offset - 1] != '.') {
            if (x.startsWith('9')) {
                flag = true
            }
        }
        return ''
    }
    let value = Number(
        String(number)
            .replace(/[09]{8,}[\d]+/, parser)
            .replace(/\.$/, '')
    )
    if (flag) value += 0.1
    if (value.toString().length > 8) {
        return mathTruncate(value)
        console.log(value)
        throw 'too long fix  floating point didnt work'
    }
    return value
}

function addZeroes(n, amount) {
    return n * Math.pow(10, amount)
}

function isDecimal(x) {
    return /^-?\d*?\.\d+/.test(x.toString())
}

function combinate(arr, comboLength = 2) {
    const sourceLength = arr.length
    if (comboLength > sourceLength) return []

    const combos = [] // Stores valid combinations as they are generated.

    const makeNextCombos = (
        workingCombo,
        currentIndex,
        remainingCount
    ) => {
        const oneAwayFromComboLength = remainingCount == 1

        // For each element that remaines to be added to the working combination.
        for (
            let sourceIndex = currentIndex;
            sourceIndex < sourceLength;
            sourceIndex++
        ) {
            // Get next (possibly partial) combination.
            const next = [...workingCombo, arr[sourceIndex]]

            if (oneAwayFromComboLength) {
                // Combo of right length found, save it.
                combos.push(next)
            } else {
                // Otherwise go deeper to add more elements to the current partial combination.
                makeNextCombos(
                    next,
                    sourceIndex + 1,
                    remainingCount - 1
                )
            }
        }
    }

    makeNextCombos([], 0, comboLength)
    return combos
}

function permute(arr) {
    const store = []

    function runner(len) {
        if (len === 1) store.push(arr.slice(0))
        for (let i = 0; i < len; i++) {
            runner(len - 1)
            len % 2
                ? ([arr[0], arr[len - 1]] = [
                      arr[len - 1],
                      arr[0],
                  ])
                : ([arr[i], arr[len - 1]] = [
                      arr[len - 1],
                      arr[i],
                  ])
        }
    }

    runner(arr.length)
    return store
}

function distance(x1, y1, x2, y2) {
    if (arguments.length == 2) {
        ;[x2, y2] = y1
        ;[x1, y1] = x1
    }
    let y = x2 - x1
    let x = y2 - y1
    return roundToNiceNumber(Math.sqrt(x * x + y * y))
}

function roundToNiceNumber(n) {
    return hasDecimal(n) ? n.toFixed(2) : n
}

// hohoo

function xxdecimalToFraction(dec) {
    let epsilon = 1e-7
    dec = Number(dec)
    //console.log(dec)
    if (isInteger(dec)) return dec
    let flag = false
    if (dec >= 1) {
        flag = true
        dec /= 100
    }
    var is_neg = dec < 0
    //console.log(Math.abs(-1))

    if (dec < 0) dec *= -1
    //console.log(Math.abs(0.3333)); throw "";
    //console.log(dec)
    var done = false
    var n1 = 0,
        d1 = 1,
        n = 1,
        d = 0,
        n = 0,
        q = dec
    while (!done) {
        if (n++ > 50) {
            console.log('done forced')
            done = true
        }

        var a = parseInt(q)
        //console.log(a)
        var num = n1 + a * n
        var den = d1 + a * d
        //console.log(num, den)
        if (num > 1000 || den > 1000) {
            num = n
            den = d
            break
        }
        var e = q - a
        if (e < epsilon) {
            done = true
        }
        q = 1 / e
        n1 = n
        d1 = d
        n = num
        d = den
        if (Math.abs(num / den - dec) < epsilon || n > 30) {
            done = true
        }
    }
    console.log(n, 'count')

    if (flag) {
        console.log('sup')
        den /= 100
        if (hasDecimal(den)) {
            den *= 100
            num *= 100
            let g = gcd(den, num)
            den /= g
            num /= g
        }
    }
    let p = [is_neg ? -num : num, den]
    console.log(p)
    //return toFraction(p)
}

function hasDecimal(x, n = 0) {
    return test('\\.' + '\\d'.repeat(n), String(x))
    // n is the number of decimal places to match.
}

function gcd(a, b) {
    return !b ? a : gcd(b, a % b)
}

function toFraction(a, b, mode = String) {
    if (isArray(a)) {
        b = a[1]
        a = a[0]
    }
    ;[a, b] = simplifyFraction(a, b)
    if (b == 1) return a
    if (mode == Array) return [a, b]
    if (mode == String) return a + '/' + b
    return '\\frac' + '{' + a + '}' + '{' + b + '}'
}

function simplifyFraction(a, b) {
    if (!b) [a, b] = a.split('/')

    if (hasDecimal(a)) {
        let factor = Math.pow(10, countDecimalPlaces(a))
        a *= factor
        b *= factor
    }
    if (hasDecimal(b)) {
        let factor = Math.pow(10, countDecimalPlaces(b))
        b *= factor
        a *= factor
    }
    let g = gcd(a, b)
    return [a, b].map((x) => x / g).join('/')
}

function countDecimalPlaces(n) {
    return (n.toString().split('.')[1] || '').length
}
const floatingPointRE = /(?:.(?:0{5,}|1{5,}|2{5,}|3{5,}|4{5,}|5{5,}|6{5,}|7{5,}|8{5,}|9{5,})(?:\d|e-\d+)$)/g

function fixFloatingPoint(number) {
    if (len(number) < 5) return number
    return String(number).replace(floatingPointRE, f)
    function f(x, offset, s) {
                let a = x[0]
                let b = Number(x[1])
                if (a == '.') {
                    return offset == 2 ? x[1] : x
                }
                if (b >= 5) return Number(a) + 1
                return a
            }
}

const floatingPointREGEX =
    '(?:.(?:' +
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        .map((x) => x + '{' + 5 + ',}')
        .join('|') +
    ')(?:\\d|e-\\d+)$)'
//console.log(floatingPointREGEX)

function normalizeMath(s) {
    s = s.toString().trim()
    return s
}

function isSimpleEquation(s) {
    return true
}

//console.log(toLatex('(3 + 3) * (3 + 4)'))
//console.log(toLatex(zeroDecimalToFraction('0.75*x')))
//console.log(decimalToFraction(0.3333333))

function decimalToFraction(dec, precision = 4) {
    if (/\.\d{1,2}$|[a-z]/.test(dec) && precision != 'force') {
        return dec
    }
    if (precision == 'force') {
        precision = 4
    }

    let epsilon = Math.pow(10, -1 * precision)
    dec = Number(dec)
    //console.log(dec)
    if (isInteger(dec)) return dec
    let flag = false
    if (dec >= 1) {
        flag = true
        dec /= 100
    }
    var is_neg = dec < 0
    dec = Math.abs(dec)
    //console.log(dec)
    var done = false
    var n1 = 0,
        d1 = 1,
        n2 = 1,
        d2 = 0,
        n = 0,
        q = dec
    while (!done) {
        if (n++ > 50) {
            console.log('done forced')
            done = true
        }

        var a = parseInt(q)
        //console.log(a)
        var num = n1 + a * n2
        var den = d1 + a * d2
        //console.log(num, den)
        if (num > 1000 || den > 1000) {
            num = n2
            den = d2
            break
        }
        var e = q - a
        if (e < epsilon) {
            done = true
        }
        q = 1 / e
        n1 = n2
        d1 = d2
        n2 = num
        d2 = den
        if (Math.abs(num / den - dec) < epsilon || n > 30) {
            done = true
        }
    }

    if (flag) {
        den /= 100
        if (hasDecimal(den)) {
            den *= 100
            num *= 100
            let g = gcd(den, num)
            den /= g
            num /= g
        }
    }
    let p = [is_neg ? -num : num, den]
    return p[0] + '/' + p[1]
}
function atMiddle(s) {
    function lambda(x) {
        return x[0] + s + x[1]
    }
}
function nerdSolver(a, b) {
    if (!test(/[x=\\]/, a)) return nerdEval(a)

    try {
        /* exclamations and factorials */
        if (test(/!\w/, a)) {
            a = a.replace(/!(?=\w)/, '! *')
        }

        if (/\d[a-z]/.test(a)) {
            a = a.replace(/\d[a-z]/g, atMiddle('*'))
        }

        //if (hasLatex(a)) {
        //a = nerdamer.convertFromLaTeX(a)
        //return _nerdSolver(a)
        //console.log(a)
        //return decimalToFraction(nerdEval(a), 'force')
        //}
        if (!test(/\b[=?a-z]\b/, a)) {
            a = a.replace(/c(?=frac)/g, '')
            a = nerdamer.convertFromLaTeX(a)
            return decimalToFraction(nerdEval(a), 'force')
        }
        let answer = _nerdSolver(a, b)
        if (test(/0\.\d+ *\*x/, answer)) {
            return answer.replace(/0\.(\d+) *\*/g, (x, y) => {
                return toLatexFraction(...simplifyRatio(y, 100))
            })
        }
        return answer
    } catch (e) {
        if (isString(e)) {
            throw e
        }
        console.log(s)
        throw e.toString()
        return null
    }
}

function _nerdSolver(a, b) {
    if (b == null) {
        if (a.includes('$input')) {
            let s = a.replace(/\$input/, 'q')
            return nerdamer(s)
                .solveFor('q')
                .toString()
                .replace(/,.+/, '')
        }
        if (a == '0^0') {
            return 1
        }
        /* get rid of brackets */
        if (!hasLatex(a)) a = a.replace(/[{}]/g, '')

        /* fix starting negatives */
        a = a.replace(/^-\w+(?=\^)/, (x) => parens(x))

        if (test(/= *$/, a)) {
            return nerdEval(a.replace(/= *$/, ''))
        }
        if (isEquation(a)) {
            let solveForVar = solveForVariable(a)
            if (solveForVar != null) return solveForVar
            b = search(/[xyz]/, a)
            const value = orderByPolynomialDegree(
                nerdEval(nerdamer(a).solveFor(b))
            )
            return value
        } else {
            return nerdEval(nerdamer(a))
        }
    }
    if (b.length < 2 && isSimpleEquation(a)) {
        const value = orderByPolynomialDegree(
            nerdEval(nerdamer(a).solveFor(b))
        )
        return b + ' = ' + value
    }
    if (isEquation(b)) {
        return equationSolver(a, b)
    }
}
function nerdConvert(s) {
    if (isString(s) && hasLatex(s)) {
        return nerdamer.convertFromLaTeX(s)
    }
    return nerdamer(s)
}
function solveFor(s, a) {
    let answer = nerdConvert(s)
        .solveFor(a)
        .toString()
        .replace(/,.+/, '')
    return answer
}
function solveForVariable(s) {
    let variables = getVariables(s, Object)
    let length = len(variables)
    if (length == 2) {
        let [a, b] = lowHigh(variables)
        return solveFor(s, a)
    } else if (length == 1) {
        let a = Object.keys(variables)[0]
        return solveFor(s, a)
    }
}
//console.log(nerdSolver('x/2 + x/4'))
//console.log(isInteger(4))

//console.log(primesFrom(40))

function romanCase(n) {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    var str = ''

    for (var i of Object.keys(roman)) {
        var q = Math.floor(n / roman[i])
        n -= q * roman[i]
        str += i.repeat(q)
    }
    return str
}

function randomNumbers(
    n,
    { min = 1, max = 10, prime = null } = {}
) {
    let base0 = prime
        ? primesFrom(min, max, n)
        : range(min, max)
    if (prime === false) {
        base0 = base0.filter((x) => !isPrime(x))
        if (base0.length < n) {
            base0.push(...range(max + 1, max + n + 1))
        }
    }
    let base = shuffle(base0)
    return base.slice(0, n)
}
//console.log(randomNumbers(20, {prime: true}))

function toLatex(s, styles) {
    return s
    s = fixExpression(s)

    if (!hasLatex(s)) {
        s = nerdamer.convertToLaTeX(s)
    }
    if (styles) {
        s = latexTemplater(s, styles)
    }
    console.log(s)
    return s
}

//console.log(nerdSolver('infinity^0'))
//console.log(toLatex('(3 + 3) * (3 + 4)'))
//console.log(toLatex('infinity^0'))

//console.log(nerdSolver('x^1 * x^2 * x^3 * x^4 * $input = x^100'))
//console.log(nerdSolver('2 + 3 ='))
//console.log(nerdSolver('1000^0'))
//console.log(toLatex('y^(y - y)'))
//s0 = '\\cfrac{\\frac{1}{2}}{1 + \\cfrac{1}{\\frac{2}{3}}}'
//console.log(nerdSolver(s0))
//From 5 choose 3

function numberFromNumber(n) {
    return permute(split(n)).map((x) => Number(x.join('')))
}
//console.log(combinate([1,2,3,4,5], 2))

function calculatePC(a, b, mode = 'C') {
    let template =
        mode == 'C' ? 'a! / ((a - b)! * b!)' : 'a! / (a - b)!'

    let expr = templater(template, { a, b })
    return nerdSolver(expr)
}

function nerdSolveMultipleSteps() {
    var dR = nerdamer('R=L*dR').solveFor('dR')
    var I = nerdamer('dR=c*I^2/A').sub('dR', dR).solveFor('I')
    //You can first start by reducing the first few equations since they are linear and you can solve them as a linear system
    var solutions = nerdamer.solveEquations(
        ['P = I * U', 'DV = R * I', 'DW = DV * I'],
        ['I', 'DW', 'P']
    )
    //the solutions come back as an array arrays in the form of [variable, value]
    //you can see what they look like. In your case all your solutions will be in terns of DV & U since these are the only actual knowns
    //You can see what the solutions look like
    solutions.map(function (x) {
        console.log('-' + x[0] + ' = ' + x[1])
    })
    console.log('------------------ R ----------------')
    var R = nerdamer
        .setEquation(I[0], solutions[0][1])
        .solveFor('R')
    //I will have 3 solutions since it's cubic. You can console.log them below
    R.map(function (x) {
        console.log('R = ' + x.toString())
    })
    /* no ... it simply is not appropriate */
}

//console.log(calculatePC(5, 3))

function splitKatex(s) {
    if (isArray(s)) {
        return s
    }
    //if (!hasLatex(s)) return [s]
    const regex =
        /(\bif |\.? (?:[a-zA-Z]{2,}(?: |$))+|\$\w+(?:\(.*?\))?)/i
    return split(s, regex).filter(exists)
}

function hasLatex(s) {
    return test(/\\\w|\^| [\+-] /, s)
}

function katexAttributer(a, b, c) {
    return wrap(`\\${a}{${b}}{${c}}`, '{}')
}

function katexColorer(x, color) {
    return katexAttributer('textcolor', color, x)
}

function colorTheMath(s) {
    let colors
    const items = splitKatex(s).map((item, i, arr) => {
        if (item.startsWith('$input')) {
            let arg = extractArg(item) || nerdSolver(arr[i - 1])
            let color = colors[arg] || 'fakeColor'
            return {
                type: 'input',
                value: {
                    colorIt: color,
                    answer: arg,
                },
            }
        }
        if (hasLatex(item)) {
            if (!colors) {
                colors = getColors(item)
            }
            return {
                type: 'katex',
                value: latexTemplater(item, colors),
            }
        }

        return {
            type: 'prose',
            value: latexTemplater(item, colors),
        }
    })

    return items

    function getColors(s) {
        const numbers = match(/\^(\w+)/g, s)

        const colors = [
            //'#09346d',
            //'#6c7fb4',
            //'#c5d4ff',
            'red',
            'blue',
            'green',
        ]
        //const colors = roygbiv
        return zip(numbers, colors)
    }
}

function math1213(a, b) {
    const base = mathProduct('1' + String(a), '1' + String(b))
    const sum = mathSum(a, b)
    const product = mathProduct(a, b)
    return [base, sum, product]
}

//console.log(splitKatex('x^1 * x^2 * x^3 * x^4 * x^5 = $input'))

function fixExpression(s) {
    /* fix symbols */
    s = dreplace2(s, {
        infinity: '\\infty',
        inf: '\\infty',
        pi: '\\pi',
        tan: '\\tan',
        sin: '\\sin',
        cos: '\\cos',
        ln: '\\ln',
        log: '\\log',
        '*': '\\cdot',
        '*': '\\times',
        //'. ': '.\\medspace ',
        //' = ?': ' \\medspace = \\medspace ?',
    })

    s = s.replace(/\?$/, '?\\medspace')
    s = s.replace(/\^(\(.*?\)|\w{2,})/g, (_, x) => {
        return '^' + wrap(x, '{}')
    })

    /* fix multiple-expressions ... x^2^3 --> (x^2)^3 */
    s = s.replace(/(?:\w\^){2,}\w/, (x) => {
        let items = split(x, /\^/)
        let temp = items[0]
        for (let i = 1; i < items.length; i++) {
            let item = items[i]
            if (i > 1) {
                temp = wrap(temp, '()')
            }
            temp += '^' + item
        }
        return temp
    })
    return s
}
//console.log(fixExpression('100^100 * 100^99 = x^198 * 100^y. x + y = ? $input(101)'))

function fraction(a, b) {
    return `${a}/${b}`
}

function fm1(s) {
    return s
}

function toLatex(s, styles) {
    return s
    s = fm1(s)
    s = s.replace(/cdot/g, 'times')

    if (!hasLatex(s)) {
        try {
            s = nerdamer.convertToLaTeX(s)
        } catch (e) {}
    }
    if (styles) {
        s = latexTemplater(s, styles)
    }
    return s
}

function toLatexFraction(a, b) {
    return '\\frac' + '{' + a + '}' + '{' + b + '}'
}
//const satMathData = fixMath1().map(splitKatex)
//console.log(satMathData)
//console.log(colorTheMath('2^3 * 2^4 = 2^7 because 3 + 4 = $input(7)'))

//s = "toLatex(nerdSolver(toLatex(r-2 /6 = 5)))"
//console.log(eval(quoteTheVeryInside(s)))

function tryval3(s) {
    try {
        return eval(s)
    } catch (e) {
        console.log('rrrrrrrrrrrrrrrrrrrr')
        console.log({
            error: e.stack.toString(),
            input: s,
        })
    }
}

function june24postassessmentangelanswers() {
    const data1 = {
        1: [
            {
                type: 'prose',
                value: 'The value of',
            },
            {
                type: 'katex',
                value: 'toLatex(r-2/6 = 5)',
            },
            {
                type: 'prose',
                value: 'is',
            },
            {
                type: 'katex',
                value: 'toLatex(nerdSolver(toLatex(r-2 /6 = 5)))',
            },
            {
                type: 'prose',
                value: '.',
            },
        ],
        2: [
            {
                type: 'prose',
                value: 'The value of',
            },
            {
                type: 'katex',
                value: 'toLatex((5p3i)p(-4p7i))',
            },
            {
                type: 'prose',
                value: 'is',
            },
            {
                type: 'katex',
                value: 'toLatex(nerdSolver(toLatex((5p3i)p(-4p7i))))',
            },
            {
                type: 'prose',
                value: '.',
            },
        ],
        3: [
            {
                type: 'prose',
                value: ' Not exceeds 100 means 99 is okay, 100 is okay, 101 is not okay. The answer is',
            },
            {
                type: 'katex',
                value: 'toLatex(s + b \\lte 100)',
            },
        ],
        4: [
            {
                type: 'prose',
                value: ' It represents the faster worker because',
            },
            {
                type: 'katex',
                value: 'toLatex(3x>1x)',
            },
            {
                type: 'prose',
                value: '. It represents the fraction of the job done in 1 hour because the entire job is done in 7 hours and',
            },
            {
                type: 'katex',
                value: 'toLatex(7 * 1/7)',
            },
            {
                type: 'prose',
                value: 'is 1.',
            },
        ],
        5: [
            {
                type: 'prose',
                value: 'The value of',
            },
            {
                type: 'katex',
                value: 'toLatex((3xe3-13xp4)-(3xe2-4xp5))',
            },
            {
                type: 'prose',
                value: 'is',
            },
            {
                type: 'katex',
                value: 'toLatex(nerdSolver(toLatex((3xe3-13xp4)-(3xe2-4xp5))))',
            },
            {
                type: 'prose',
                value: '.',
            },
        ],
        6: [
            {
                type: 'prose',
                value: ' Find the zeroes for',
            },
            {
                type: 'katex',
                value: 'toLatex(6xe2-13x-5)',
            },
            {
                type: 'prose',
                value: 'because that will be where the function is undefined. Using the AC-method, we can rewrite',
            },
            {
                type: 'katex',
                value: 'toLatex(6xe2-13x-5)',
            },
            {
                type: 'prose',
                value: 'into',
            },
            {
                type: 'katex',
                value: 'toLatex(6xe2-15xp2x-5)',
            },
            {
                type: 'prose',
                value: ' After factoring, it becomes',
            },
            {
                type: 'katex',
                value: 'toLatex(3x(2x-5)+(2x-5))',
            },
            {
                type: 'prose',
                value: 'which becomes',
            },
            {
                type: 'katex',
                value: 'toLatex((3xp1)(2x-5))',
            },
            {
                type: 'prose',
                value: '. Set them equal to 0 and find',
            },
            {
                type: 'katex',
                value: 'toLatex(x)',
            },
            {
                type: 'prose',
                value: '.',
            },
        ],
        7: [
            {
                type: 'prose',
                value: ' The x-coordinate of the vertex of a parabola occurs between the roots of the parabola.',
            },
            {
                type: 'katex',
                value: 'toLatex( y=3(x-4)(xp6))',
            },
            {
                type: 'prose',
                value: " Right in between 4 and -6 is 1. This is the x-coordinate we're looking for. The corresponding y-coordinate is -63.",
            },
            {
                type: 'prose',
                value: ' So now, we plug 1 into each equation and if it equals -63 then we will have found the equation.',
            },
        ],
        8: [
            {
                type: 'prose',
                value: ' if the diagonal is 12, each side of the square is',
            },
            {
                type: 'katex',
                value: 'toLatex(12/sqrt2x)',
            },
            {
                type: 'prose',
                value: '. The frame pads it by 2 inches on each side so to each side, we should add 2 (left side) and 2 (right side). The total area is ',
            },
            {
                type: 'katex',
                value: 'toLatex((12/sqrt+4)e2)',
            },
            {
                type: 'prose',
                value: 'The inner area is',
            },
            {
                type: 'katex',
                value: 'toLatex((12/sqrt)e2)',
            },
            {
                type: 'prose',
                value: ' the area of the frame is the total area - the inner area',
            },
            {
                type: 'prose',
                value: ' Subtracting, we get',
            },
            {
                type: 'katex',
                value: 'toLatex(16p48sq2)',
            },
        ],
        9: [
            {
                type: 'prose',
                value: ' A line parallel to',
            },
            {
                type: 'katex',
                value: 'toLatex(y=3x/2-7/4)',
            },
            {
                type: 'prose',
                value: 'is any line that has a slope of',
            },
            {
                type: 'katex',
                value: 'toLatex(3/2. -6x + 4y)',
            },
            {
                type: 'prose',
                value: 'has a slope of',
            },
            {
                type: 'katex',
                value: 'toLatex(3/2.)',
            },
        ],
        10: [
            {
                type: 'prose',
                value: ' The intersection of',
            },
            {
                type: 'katex',
                value: 'toLatex(m=3.65p0.35x)',
            },
            {
                type: 'prose',
                value: 'and',
            },
            {
                type: 'katex',
                value: 'toLatex(n=4.25p0.15x)',
            },
            {
                type: 'prose',
                value: 'can be found by setting the 2 equations equal to each other. After combining like terms,',
            },
            {
                type: 'katex',
                value: 'toLatex(m=0.2)',
            },
            {
                type: 'prose',
                value: 'and b equals 0.6.',
            },
            {
                type: 'katex',
                value: 'toLatex(0.6/0.2 = 3)',
            },
        ],
        11: [
            {
                type: 'prose',
                value: ' Normalize the expression by multiplying the numerator and denominator by',
            },
            {
                type: 'katex',
                value: 'toLatex(2pi)',
            },
            {
                type: 'prose',
                value: '. The answer is',
            },
            {
                type: 'katex',
                value: 'toLatex(-3/5)',
            },
        ],
        12: [
            {
                type: 'prose',
                value: ' The graph cannot be A because the yint is positive. Cannot be B because B has a negative slope. Cannot be D because it is a degree 2 polynomial and we have a degree 3 polynomial.',
            },
            {
                type: 'prose',
                value: '(Alsoit doesnt fit the shape of a cubic graph.)',
            },
        ],
        13: [
            {
                type: 'prose',
                value: ' Plugging in a x value of 6 yields 138 which means b has to be 3. Solving it again with a b-value of 3, the answer is 78.',
            },
        ],
        14: [
            {
                type: 'prose',
                value: ' 350 male students and 250 are science. So that means 100 are arts. There are a total of 200 arts. So left over is 100 female art students.',
            },
        ],
        15: [
            {
                type: 'prose',
                value: ' Solve for y by moving 11, 4, ',
            },
            {
                type: 'katex',
                value: 'toLatex(1.6x^2)',
            },
            {
                type: 'prose',
                value: ', and 2.6x',
            },
            {
                type: 'prose',
                value: 'to the other side.',
            },
        ],
        16: [
            {
                type: 'prose',
                value: ' The rate of decrease from 1950 to 2000 is',
            },
            {
                type: 'katex',
                value: 'toLatex((1/2)tx=1/3)',
            },
            {
                type: 'prose',
                value: 'where x represents the rate.',
            },
            {
                type: 'katex',
                value: 'toLatex(X=1/6)',
            },
            {
                type: 'prose',
                value: '. Therefore in 2050, the fraction should be',
            },
            {
                type: 'katex',
                value: 'toLatex(1/3*1/6=1/18.)',
            },
        ],
        17: [
            {
                type: 'prose',
                value: ' 75 base price for each month for 4 months is 300.',
            },
            {
                type: 'katex',
                value: 'toLatex(850-300=550. 550/10 = 55)',
            },
        ],
        18: [
            {
                type: 'prose',
                value: ' the 2 shorter sides of a triangle must be longer than the third side. The missing side has to be bigger than 4 and less than 18. The smallest possible is there 5, the largest possible is 17.',
            },
            {
                type: 'katex',
                value: 'toLatex(5t17=85)',
            },
        ],
        19: [
            {
                type: 'prose',
                value: ' The missing side AB is 80 because',
            },
            {
                type: 'katex',
                value: 'toLatex(60~80~100)',
            },
            {
                type: 'prose',
                value: 'corresponds to',
            },
            {
                type: 'katex',
                value: 'toLatex(6~8~10)',
            },
            {
                type: 'prose',
                value: 'corresponds to a',
            },
            {
                type: 'katex',
                value: 'toLatex(3~4~5)',
            },
            {
                type: 'prose',
                value: 'triangle.',
            },
            {
                type: 'prose',
                value: 'angle D corresponds to angle A.',
            },
            {
                type: 'katex',
                value: 'toLatex( cosA=60/100=3/5)',
            },
            {
                type: 'katex',
                value: 'toLatex( cosD=3/5)',
            },
        ],
        20: [
            {
                type: 'katex',
                value: 'toLatex(l = 5 *c- 6 arr 0.3c + 0.7 * l = 7.2)',
            },
            {
                type: 'prose',
                value: ' Solve for C by plugging the first equation into the second equation.',
            },
            {
                type: 'katex',
                value: 'toLatex(0.3 * c + 0.7(5*c-6) = 7.2)',
            },
            {
                type: 'prose',
                value: ' Rearranging,',
            },
            {
                type: 'katex',
                value: 'toLatex(0.3* c + 3.5 * c = 7.2-4.2)',
            },
            {
                type: 'prose',
                value: ' Combining like terms and solving for cucumbers, we get 3',
            },
        ],
    }

        let answers = [
            'C',
            'A',
            'C',
            'D',
            'A',
            'C',
            'C',
            'B',
            'B',
            'B',
            'C',
            'C',
            'C',
            'C',
            'B',
            '1/18',
            '55 days',
            '85',
            '3/5',
            '3',
        ]
    function h(data) {
        return map(data, g)
    }
    function g(data) {
        return data.map((x, i) => {
            if (x.type == 'katex') {
                const value = g1(x.value)
                return {
                    type: x.type,
                    value,
                }
            }
            return x
        })
    }

        function g1(value, depth, key) {
            return tryval3(quoteTheVeryInside(value))
        }
    //console.log(h(data1))
    return [h(data1), answers]
}
//write('temp4.json', june24postassessmentangelanswers())

const data123 = [
  {
    "1": [
      {
        "type": "prose",
        "value": "The value of"
      },
      {
        "type": "katex",
        "value": "\\frac{r-2}{6} = 5"
      },
      {
        "type": "prose",
        "value": "is"
      },
      {
        "type": "katex",
        "value": "32"
      },
      {
        "type": "prose",
        "value": "."
      }
    ],
    "2": [
      {
        "type": "prose",
        "value": "The value of"
      },
      {
        "type": "katex",
        "value": "(5+3i)+(-4+7i)"
      },
      {
        "type": "prose",
        "value": "is"
      },
      {
        "type": "katex",
        "value": "1+10\\cdot i"
      },
      {
        "type": "prose",
        "value": "."
      }
    ],
    "3": [
      {
        "type": "prose",
        "value": " Not exceeds 100 means 99 is okay, 100 is okay, 101 is not okay. The answer is"
      },
      {
        "type": "katex",
        "value": "s + b \\leq 100"
      }
    ],
    "4": [
      {
        "type": "prose",
        "value": " It represents the faster worker because"
      },
      {
        "type": "katex",
        "value": "3x>1x"
      },
      {
        "type": "prose",
        "value": ". It represents the fraction of the job done in 1 hour because the entire job is done in 7 hours and"
      },
      {
        "type": "katex",
        "value": "7 \\cdot \\frac{1}{7}"
      },
      {
        "type": "prose",
        "value": "is 1."
      }
    ],
    "5": [
      {
        "type": "prose",
        "value": "The value of"
      },
      {
        "type": "katex",
        "value": "(3x^{3}-13x+4)-(3x^{2}-4x+5)"
      },
      {
        "type": "prose",
        "value": "is found by combining like terms."
      },
      {
        "type": "katex",
        "value": "3x^{3} - 9x -1"
      },
      {
        "type": "prose",
        "value": "."
      }
    ],
    "6": [
      {
        "type": "prose",
        "value": " Find the zeroes for"
      },
      {
        "type": "katex",
        "value": "6x^{2}-13x-5"
      },
      {
        "type": "prose",
        "value": "because that will be where the function is undefined. Using the AC-method, we can rewrite"
      },
      {
        "type": "katex",
        "value": "6x^{2}-13x-5"
      },
      {
        "type": "prose",
        "value": "into"
      },
      {
        "type": "katex",
        "value": "6x^{2}-15x+2x-5"
      },
      {
        "type": "prose",
        "value": " After factoring, it becomes"
      },
      {
        "type": "katex",
        "value": "3x(2x-5)+(2x-5)"
      },
      {
        "type": "prose",
        "value": "which becomes"
      },
      {
        "type": "katex",
        "value": "(3x+1)(2x-5)"
      },
      {
        "type": "prose",
        "value": ". Set them equal to 0 and find"
      },
      {
        "type": "katex",
        "value": "x"
      },
      {
        "type": "prose",
        "value": "."
      }
    ],
    "7": [
      {
        "type": "prose",
        "value": " The x-coordinate of the vertex of a parabola occurs between the roots of the parabola."
      },
      {
        "type": "katex",
        "value": "y = 3 \\left(x - 4\\right) \\left(x + 6\\right)"
      },
      {
        "type": "prose",
        "value": " Right in between 4 and -6 is 1. This is the x-coordinate we're looking for. The corresponding y-coordinate is -63."
      },
      {
        "type": "prose",
        "value": " So now, we plug 1 into each equation and if it equals -63 then we will have found the equation."
      }
    ],
    "8": [
      {
        "type": "prose",
        "value": " If the diagonal is 12, each side of the square is"
      },
      {
        "type": "katex",
        "value": "12/\\sqrt{2x}"
      },
      {
        "type": "prose",
        "value": ". The frame pads it by 2 inches on each side so to each side, we should add 2 (left side) and 2 (right side). The total area is "
      },
      {
        "type": "katex",
        "value": "(\\frac{12}{\\sqrt{2}}+4)^{2}"
      },
      {
        "type": "prose",
        "value": "The inner area is"
      },
      {
        "type": "katex",
        "value": "(12/\\sqrt{2})^{2}"
      },
      {
        "type": "prose",
        "value": " the area of the frame is the total area - the inner area"
      },
      {
        "type": "prose",
        "value": " Subtracting, we get"
      },
      {
        "type": "katex",
        "value": "16+48\\sqrt{2}"
      }
    ],
    "9": [
      {
        "type": "prose",
        "value": " A line parallel to"
      },
      {
        "type": "katex",
        "value": "y=\\frac{3x}{2}-\\frac{7}{4}"
      },
      {
        "type": "prose",
        "value": "is any line that has a slope of"
      },
      {
        "type": "katex",
        "value": "\\frac{3}{2}. -6x + 4y"
      },
      {
        "type": "prose",
        "value": "has a slope of"
      },
      {
        "type": "katex",
        "value": "\\frac{3}{2}."
      }
    ],
    "10": [
      {
        "type": "prose",
        "value": " The intersection of"
      },
      {
        "type": "katex",
        "value": "m=3.65+0.35x"
      },
      {
        "type": "prose",
        "value": "and"
      },
      {
        "type": "katex",
        "value": "n=4.25+0.15x"
      },
      {
        "type": "prose",
        "value": "can be found by setting the 2 equations equal to each other. After combining like terms,"
      },
      {
        "type": "katex",
        "value": "m = \\frac{1}{5}"
      },
      {
        "type": "prose",
        "value": "and b equals "
      },
      {
        "type": "katex",
        "value": "0.6",
      },
      {
        "type": "prose",
        "value": ". "
      },

      {
        "type": "katex",
        "value": "{0.6}{0.2} = 3"
      }
    ],
    "11": [
      {
        "type": "prose",
        "value": " Normalize the expression by multiplying the numerator and denominator by"
      },
      {
        "type": "katex",
        "value": "2 + i"
      },
      {
        "type": "prose",
        "value": ". The answer is"
      },
      {
        "type": "katex",
        "value": "-\\frac{3}{5}"
      }
    ],
    "12": [
      {
        "type": "prose",
        "value": " The graph cannot be A because the yint is positive. Cannot be B because B has a negative slope. Cannot be D because it is a degree 2 polynomial and we have a degree 3 polynomial."
      },
      {
        "type": "prose",
        "value": "(Alsoit doesnt fit the shape of a cubic graph.)"
      }
    ],
    "13": [
      {
        "type": "prose",
        "value": " Plugging in a x value of 6 yields 138 which means b has to be 3. Solving it again with a b-value of 3, the answer is 78."
      }
    ],
    "14": [
      {
        "type": "prose",
        "value": " 350 male students and 250 are science. So that means 100 are arts. There are a total of 200 arts. So left over is 100 female art students."
      }
    ],
    "15": [
      {
        "type": "prose",
        "value": " Solve for y by moving 11, 4, "
      },
      {
        "type": "katex",
        "value": "1.6x^2"
      },
      {
        "type": "prose",
        "value": ", and 2.6x"
      },
      {
        "type": "prose",
        "value": "to the other side."
      }
    ],
    "16": [
      {
        "type": "prose",
        "value": " The rate of decrease from 1950 to 2000 is"
      },
      {
        "type": "katex",
        "value": "(\\frac{1}{2})x = \\frac{1}{3}"
      },
      {
        "type": "prose",
        "value": "where x represents the rate."
      },
      {
        "type": "katex",
        "value": "x=\\frac{1}{6}"
      },
      {
        "type": "prose",
        "value": ". Therefore in 2050, the fraction should be"
      },
      {
        "type": "katex",
        "value": "\\frac{1}{3} \\cdot \\frac{1}{6}=\\frac{1}{18}."
      }
    ],
    "17": [
      {
        "type": "prose",
        "value": " 75 base price for each month for 4 months is 300."
      },
      {
        "type": "katex",
        "value": "850-300=550. \\frac{550}{10} = 55"
      }
    ],
    "18": [
      {
        "type": "prose",
        "value": " the 2 shorter sides of a triangle must be longer than the third side. The missing side has to be bigger than 4 and less than 18. The smallest possible is there 5, the largest possible is 17."
      },
      {
        "type": "katex",
        "value": "5 \\cdot 17=85"
      }
    ],
    "19": [
      {
        "type": "prose",
        "value": " The missing side AB is 80 because"
      },
      {
        "type": "katex",
        "value": "60~80~100"
      },
      {
        "type": "prose",
        "value": "corresponds to"
      },
      {
        "type": "katex",
        "value": "6~8~10"
      },
      {
        "type": "prose",
        "value": "corresponds to a"
      },
      {
        "type": "katex",
        "value": "3~4~5"
      },
      {
        "type": "prose",
        "value": "triangle."
      },
      {
        "type": "prose",
        "value": "angle D corresponds to angle A."
      },
      {
        "type": "katex",
        "value": "cosA=\\frac{60}{100}=\\frac{3}{5}"
      },
      {
        "type": "katex",
        "value": ". cosD=\\frac{3}{5}"
      }
    ],
    "20": [
      {
        "type": "katex",
        "value": "l = 5 \\cdot c- 6 \\rightarrow 0.3c + 0.7 \\cdot l = 7.2"
      },
      {
        "type": "prose",
        "value": " Solve for C by plugging the first equation into the second equation."
      },
      {
        "type": "katex",
        "value": "0.3 \\cdot c + 0.7(5\\cdot c - 6) = 7.2"
      },
      {
        "type": "prose",
        "value": " Rearranging,"
      },
      {
        "type": "katex",
        "value": "0.3\\cdot c + 3.5 \\cdot c = 7.2-4.2"
      },
      {
        "type": "prose",
        "value": " Combining like terms and solving for cucumbers, we get an answer of 3."
      }
    ]
  },
  [
    "C",
    "A",
    "C",
    "D",
    "A",
    "C",
    "C",
    "B",
    "B",
    "B",
    "C",
    "C",
    "C",
    "C",
    "B",
    "1/18",
    "55 days",
    "85",
    "3/5",
    "3"
  ]
]


function numberRangeFromDash(s) {
    if (isArray(s)) {
        return s
    }
    if (!isString(s)) {
        debug()
        return [1,2,3]
    }
    let items = s.split('-')
    if (items.length == 1) {
        return items.map(toNumber)
    }

    if (items.length == 2) {
        let [a,b] = items.map(toNumber)
        let store = []
        let increment = roundToNearestZero(a)
        for (let i = a; i <= b; i += increment) {
            store.push(i)
        }
        return store
    }
}
function roundToNearestZero(n) {
    if (n < 5) return 1
    if (n < 50) return 10
    if (n < 500) return 100
    if (n < 1500) return 1000
    if (n < 15000) return 10000
}
//console.log(numberRangeFromDash('450-850'))


function cyclicalf(limit) {
    return function lambda(n) {
        if (n < 0) return limit - n
        return n > limit ? n - limit : n
    }
}
const cyclical360 = cyclicalf(360)

function threeAngles(n, delta = 30, more = 180) {
    return [n, n + more - delta, n + more + delta]
        .map(cyclical360).sort((a, b) => a - b)
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

class TemplateMath {
    constructor() {
        this.dict = {}
        const regex = /^(\w+) *= *(\[.*?\]|\w+)/
        this.eater = new Eater(regex)
    }
    run(s) {
        const [text, store] = this.eater.run(s)
        const getSeeds = (b) => /^\[/.test(b) ? eval(b) : [Number(b)]
        const dict = reduce(store, (k,v) => [k, getSeeds(v)])
        const matrix = new Matrix(store)
        const col1 = matrix.getColumn(0)
        const col2 = matrix.getColumn(1).map(getSeeds)
        const combos = cartesianProduct(col2)
        const dicts = combos.map((x) => zip(col1, x))
        const results = dicts.map(dict => this.parse(dreplace(text, dict, '\\$($1)\\b')))
        console.log(results)
    }
    parse(s, seed) {
        const regex = /\$(\w+(?:\(.*?\)(?! =|\)))?)/g
        s = s.replace(regex, (_, s) => this.runner(s))
        s = s.replace(/  /g, ' ')
        return s
    }
    runner(s) {
        if (s.endsWith(')')) {
            let [name, args] = search(/(\w+)\((.*?)\)/, s)
            args = args.split(/, */).map(toArgument)

            if (!this[name]) {
                console.log('creating function from global scope:', name)
                this[name] = eval(name).bind(this)
            }
            return this[name](...args)
            //
            //return eval(name).call(this, ...args)
        }
        else {
            return this[s]
        }
    }
}



function sumDigits(n) {
    const items = split(n)
    const answer = sum(items)
    return answer
    /* $items.join(' + ') = $answer */
}

function divisibleByThree(n) {
    const divisible = n % 3 == 0
    return divisible
}


const mathSum = mathFactory('+')
const mathProduct = mathFactory('*')

function mathEval(s) {
    s = s.replace(/ = $/, '')
    s = s.replace(/\\(?:cdot|times)/, '*')
    return eval(s)
}
function mathFactory(operator, colors) {
    if (operator == '*') {
        operator = '\\cdot'
        operator = '\\times'
    }
    let equalSign = ' = '

    return function lambda(a, b) {
        if (isArray(a)) {
            b = a[1]
            a = a[0]
        }
        const question = `${a} ${operator} ${b}${equalSign}`
        const answer = mathEval(question)
        const expression = `${addEqualSign(question)}${answer}`
        return { question, answer, expression }
    }
}

const addEqualSign = endAdderF('=')

function generateNumbers({
    start = 1,
    end = 9,
    condition = identity,
} = {}) {
    condition = fastFunction(condition)
    const store = []
    for (let i = start; i <= end; i++) {
        for (let j = i; j <= end; j++) {
            if (condition(i, j)) {
                store.push([i, j])
            }
        }
    }
    return store
}

//if (typeof window  == 'undefined') nerdamer  = require('nerdamer/all.min')
// generates
//console.log(math1213(3,4))

function round(n, decimals = 3) {
    return parseFloat(n.toFixed(decimals))
}
function latexed(s, ref) {
    return toLatex(templater(s, ref))
}
function f([a,b]) {
    const value = round(a/b)
    if (seen.has(value)) {
        return 
    }
    seen.add(value)
    //return longdiv(a,b)
    return latexed('a/b', {a,b})
}
seen = new Set()
mathQuestions = (shuffle(filter(map(generateNumbers({start:1, end: 10}), f))))
function longdiv(a, b) {
    return `\\begin{array}{l}
\\phantom{${a}\\medspace\\medspace}\\
x-3\\overline{\\smash{\\bigl)}${b}}\\
\\end{array}`
}


//const f1 = compose(toLatex, (x) => x.join('*'))
//mathQuestions = shuffle(map(generateNumbers({start:11, end: 19}), f1))

const mathData = {
    title: 'Fraction to Decimal using Long Division',
    prose: 'Please show your work in your math notebook. Sometimes, you will be able to do it in your head. If that is the case, you do not need to show any work for those questions.',
    prose: 'Write an equivalent fraction for each fraction. Dont use the same number twice. For example if you multiply fraction 1 by 3, for other fractions, you will need to choose a different number.',
    prose: 'Turn each fraction into a decimal. Keep doing the divison process until the decimal starts to repeat.',
    mathQuestions,
    name: '12x13',
}
//console.log(mathData)


function porkData(student) {
    return toJSON(new BaseHomeworkPacket(student))
}

class BaseHomeworkPacket {
    toJSON() {
        let f = (x) => x[0]
        let [a,b] = partition(this.values, (x) => x[0] >= 0)
            .map((x) => sorted(x, f).map((x) => x[1]))

        return merge(a, this.store, b)
        return this.store
    }
    constructor(studentName) {
        this.store = []
        this.values = []

        this.studentName = studentName
        this.$name = studentName
        this.$date = datePhrase()

        this.handlerRef = {
            generateCoverPage: {
                index: 0,
            },

            generateLetter: {
                index: 1,
            },

            generateTableOfContents: {
                index: 1,
            },

            generateCatPicture: {
                index: 1,
            },
        }
    }
    get $greeting() {
        return greeting(this.$name)
    }
    handler(key, ...args) {
        let value = this[key](...args)
        if (isString(value)) {
            value = value.replace(/\$\w+/, (x) => this[x])
            value = prosePug(value)
            value = {
                tag: 'div',
                props: {
                    staticClass: 'inner-html',
                    domProps: {
                        innerHTML: value,
                    },
                }
            }
        }
        let ref = this.handlerRef[key]
        if (hasValue(ref.index)) {
            this.values.push([ref.index, value])
        } else {
            this.store.push(value)
        }

    }
    generateCoverPage() {
        return `
            Homework Packet
            $date
            $tableOfContents
            $name
        `
    }
    generateLetter() {
        return `
            $greeting
            $body
        `
        /* the body could be absolutely anything */
    }
    generateCatPicture() {
        return {
            layout: '',
            children: [
                ''
            ]
        }
    }
    generateTableOfContents() {
        
    }
    generateAssignment(s) {
        
        
    }

    generateQuestions() {
        
    }
    build() {
            
    }
}


const addComma = endAdderF(/[,!.?]$/, ',')

// 07-14-2022 series and template parsers
// 07-15-2022 solverMoreThan
function percentToNumber(a) {
    if (test(/%$/, a)) {
        return Number(a.slice(0, -1) / 100)
    }
    return Number(a)
}
function solverMoreThanLessThan(s) {
    s = del('is eq', s)
    let r = R0714('$number $comparison $number$')
    function f(_, a, b, c) {
        a = percentToNumber(a)
        c = percentToNumber(c)
        let p = a * c
        console.log([a, b, c, p])
        switch (b) {
            case 'more than':
                return c + p
            case 'less than':
                return c - p
            case 'less':
                return c - a
            case 'of':
            case 'times of':
                return p
            case 'times':
                return p
            default:
                console.log(b, 'hiiiidefa')
        }
    }
    while (true) {
        breaker(10)
        s = s.replace(r, compose(fixFloatingPoint, f))	
        console.log(s)
        if (isNumber(s)) return s
    }
}



s = '10% more than 10% less than 10% more than 10 is equal to'
s = '10% more than 4 times 3 less 10% less than 10% more than 10 is equal to'
//console.log(seriesParser(s))
//console.log(solverMoreThanLessThan(s))

function generatorMoreThanLessThan(n) {
    function atom() {
        return rng()
    }
    function op() {
        const operators = ['less than', 'more than', 'less', 'times']
        return randomPick(operators)
    }
    let s = ''
    for (let i = 0; i < n; i++) {
        s += atom() + ' ' + op() + ' '
    }
    s += atom()
    return s
}
    //console.log(generatorMoreThanLessThan(4))

function getAnswerFn(s) {
    return solverMoreThanLessThan
}
function generateAnswerChoices(s) {
    let answerFn = getAnswerFn(s)
    s = del('equals', s)
    let answer = answerFn(s)
    return answer
}

s = '10% more than 10% less than 10% more than 10 equals'
//10% of 10% of 10% of 10 equals
//console.log(generateAnswerChoices(s))

//console.log(solverMoreThanLessThan('50% more than 25% more than 12'))



function buildTree(numNodes) {
    if (numNodes === 1)
        return rng(1, 10)

    var [modeA, modeB] = coinflip() ?
        ['floor', 'ceil'] : ['ceil', 'floor']

    var numLeft = Math[modeA](numNodes / 2);
    var leftSubTree = buildTree(numLeft);
    var numRight = Math[modeB](numNodes / 2);
    var rightSubTree = buildTree(numRight);
    return new TreeNode(leftSubTree, rightSubTree)
}
function randomOperator(x) {
    if (x) return x
    var m = rng(0, x.length);
    var x = ['/','*','-','+'];
    var str = x[3];
}
class TreeNode {
    constructor(left, right) {
        this.left = left;
        this.right = right;
        this.depth = 0
        if (isObject(left)) {
            this.depth += 1 + left.depth
        }

        if (isObject(right)) {
            this.depth += 1 + right.depth
        }
    }
    toString() {
        /* there is a way to calculate this. */
        return join(this.left, this.operator(), this.right, ' ')
    }

    operator() {
        if (this.depth) {
            let prefix = coinflip() ? 
                fractionToWord(randomFraction()) + ' of':
                coinflip() ? rng() + ' times' : 
                randomPick(COMMON_FRACTIONS) + ' of'

            return this.op + ' ' + prefix
        }
        return this.op
    }

    get op() {
        return coinflip() ? 'more than':'less than'
    }
}



function fractionToWord(s) {
    const denominators = [null, null, 'half', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth']
    const numerators = [null, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let [a,b] = s.split('/').map(Number)
    return numerators[a] + '-' + pluralize(denominators[b])

}
function randomFraction(m) {
    if (m  ==  String) {
        return randomPick(COMMON_FRACTIONS)
    }
    return randomPick(COMMON_FRACTIONS)
}
//console.log(fractionToWord(randomFraction()))

function moreThanLessThanGenerator(n, equality = 1) {
    if (equality) {
        let s =  buildTree(n).toString()
        + ' is ' +  buildTree(n).toString()
        return infuseX(s)
    }
        return buildTree(n).toString()
}
function infuseX(s) {
    let n = randomPick(getNumbers(s))
    return s.replace(RegExp(boundary(n)), 'x')
}
//console.log(moreThanLessThanGenerator(3))


function countBy(increment, times, template) {
    return range(times).map((x) => {
        let val = x * increment
        if (template) {
            return [val, template.replace(/\d/, x)]
        }
    })
}
//console.log(countBy(5, 10, 'day 1'))

function mathTemplater(s, ref) {
    s = smartDedent(s)
    //let regex = /\$(\w+)(?:\((.*)\))?/g
    let regex = /\$(\w+)(?:\((.*?)\)(?! *[\/,+-]))?/g
    //console.log(regex)
    let lastAnswer
    let lastCondition
    let lastEval
    let lastConditionValue
    function argParse(s) {
        return split(s, /,/).map(removeQuotes)
    }
    const fnRef = {
        eval(s) {
            if (!s) return lastEval
            let expr = stringcall(s, lastEval || lastAnswer)
            console.log(expr)
            lastEval = eval(expr)
            return lastEval
        },
        solve(s) {
            const value = dreplace2(s, ref)
            lastAnswer = nerdSolver(value)
            return toLatex(value) + ' = ' + lastAnswer
        },
        cond(...args) {
            if (args.length  == 2) {
                lastConditionValue = lastCondition ? 
                    args[0] : args[1]
                return lastConditionValue
            }
            if (hasCamelCase(args[0])) {
                let expr = stringcall(args[0], lastAnswer)
                lastCondition = eval(expr)
                lastConditionValue =  lastCondition ? 
                    args[1] : args[2]
                return lastConditionValue
            }
        },
        ans() {
            return lastAnswer
        },

        last(s) {
            switch (s) {
                case 'cond': return lastConditionValue
            }
        },
    }
    function parser(_, key, arg) {
        switch (key) {
            case 'a':
            case 'b':
            case 'c':
                return ref[char2n(key)]
        }

        if (key) {
            if (key in fnRef) {
                if (arg) return fnRef[key](...argParse(arg))
                return fnRef[key]()
            }
        }
    }
    return s.replace(regex, parser)
}



function percentChange(a, b) {
    return mathTemplater(`
        $solve((b-a)/a). 
        Turn a decimal into a percentage by multiplying by 100 and adding a percent sign.
        $ans --> $eval(toPercent)
        $ans is $cond(isPositive, 'positive', 'negative') which means a $cond(percent increase, percent decrease).
        Final answer: $eval.
    `, {a,b})
}

const MathProblemsList = [
    {
        title: "Mental Math Percent Calculations",
        notes: 'Watch how Mr. Mario does the calculations in his youtube video. It feels so easy and smooth. Try to incorporate that type of smoothness into the way you perform math.',
        key: 'mmpc1',
        youtube: "https://www.youtube.com/watch?v=pFdWnl5RAPE",
        question: '$a% of $b',
        fn: (a, b) => fixFloatingPoint(a * b / 100),
        levels: {
            0: {range: [[1,10], [10,20]], amount: 3},
            1: {range: [[1,10], [10,40]], amount: 1},
            2: {range: [{
                min: 6,
                max: 15,
                prime:1,
            }, {
                min: 6,
                max: 21,
                odd: true,
            }], amount: 1},
        },
        skip: 1
    },

    {
        title: "Percent Increase and Decrease",
        youtube: "https://www.youtube.com/watch?v=9g1iW_sZwMI",
        notes: 'Often, you will have to multiply decimals when doing percent questions. A useful strategy for multiplying decimals is to pretend the decimals arent even there. Afterwards, count up the decimals, and shift your answer left, by that many decimal places.',
        questions: {
            '$a% more than $b': '(100 + a) * b / 100',
            '$a% less than $b': '(100 - a) * b / 100',
        },
        levels: {
            0: {min: 10, max: 20},
            1: {min: 2, max: 100},
            2: {min: 20, max: 1000},
        },
        extensions: [
            'multiplyingDecimals'
        ]
    },
    {
        title: 'Finding percent change',
        fn: (a, b) => toPercent((b - a) / a),
        levels: {
            0: {min: 10, max: 20},
            1: {min: 2, max: 100},
            2: {min: 20, max: 1000},
        },
        requirements: {
            len: -7,
            unEqual: 1,
        },
        answer: 'percentChange',
        question: 'Find the percent change from $a to $b.',
        youtube: "https://www.youtube.com/watch?v=v_wqykVJ0js",
    },
]

function mathfoo() {
    let list = MathProblemsList
        //.filter((x) => !x.skip)
    return map(list, (x) => {
        const data = {}
        data.questions = foo1(x, null, 1)
        data.title = x.title
        data.youtube = x.youtube
        if (x.notes) data.notes = toArray(x.notes)
        return data
    })
}
function foo1(ref, levels, amount = 5) {
    const store = []
    const watcher = new Watcher(String)
    const n = countParameters(ref.fn) || 2

    assignFresh(ref, {
        requirements: {
            len: -5,
            unEqual: 1,
        },
    })

    function getValue(args, ref) {
        let req = ref.requirements

        if (req.unEqual && args[0] == args[1]) {
            return 
        }
        if (!watcher.isFresh(args)) {
            return 
        }

        let value = ref.fn(...args)

        if (isNull(value)) {
            return 
        }

        if (req.len) {
            if (req.len > 0 && len(value) < req.len) {
                return 
            }

            if (req.len < 0 && len(value) > -1 * req.len) {
                return 
            }
        }

        if (req.odd && !isOdd(value)) {
            return 
        }

        return value
    }

    for (let [k, v] of Object.entries(levels || ref.levels)) {
        let count = 0
        let errorCount = 0
        while (count < (v.amount || amount)) {
            if (errorCount > 10) {
                throw 'errc'
            }

            let args = v.range ?
                v.range.map((x) => {
                    return isArray(x) ? 
                      rng(...x) : rng(x.min, x.max)
                }) :
                range(n, numbergen)

            if (ref.questions) {
                let [q,a] = randomPick(Object.entries(ref.questions))
                ref.question = q
                ref.fn = bringToLife(a)
            }
            let value = getValue(args, ref)
            if (isNull(value)) {
                errorCount += 1
            } else {
                count++
                let question = isString(ref.question) ? 
                    mathTemplater(ref.question, args) :
                    null

                let explanation = ref.answer ? 
                        evalCall(ref.answer, ...args) : null
                    
                let payload = {
                    question, explanation, answer: value
                }
                //console.log(payload)
                store.push(payload)
            }
        }
    }
    return store
}

function percentChangeGraph(a, b) {
}

function evalCall(name, ...args) {
    if (isFunction(name)) {
        return name(...args)
    }
    let expr = stringcall(name, ...args)
    return eval(expr)
}

function numbergen({
    min=1,
    max=10,
    odd=0,
    even=0,
    prime=0,
} = {}) {
    let n = rng(min, max)
    if (odd && !isOdd(n) || even && !isEven(n)) {
        n++
    }
    if (prime) {
        while (!isPrime(n)) {
            n += 1
        }
    }
    return n
}
console.log(mathfoo())
