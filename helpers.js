
function zoobat(e) {

    console.log('hiiii')
    const value = removeSpaces(e.target.value.trim())
    const answer = this.singletonquestion.answer

    if (e.key == ' ') {
        console.log('skipping spaces')
        //e.preventDefault()
        //return
        return
    }
    if (value.length < answer.length) {
        console.log('returning bc not long enuf')
        return
    }
    else if (value == answer) {
        this.correctCount += 1
        this.hotstreak += 1
        console.log(this.isCorrect, this.hotstreak, 'toshow')
        this.$toggle('isCorrect', this.appearDuration + 50, () => {
            this.showHint = false
            this.timerID2 = setTimeout(() => {
                e.srcElement.value = ''
                this.myKey += 1
            }, 100)
            
        })
    }
    else {
        this.hotstreak = 0

        this.errorCount += 1
        if (this.errorCount == 1) {
            this.showHint = true
        }

        if (this.errorCount > 2) {
            this.errorCount = 0
            this.disabled = true
            setTimeout(() => {
                e.srcElement.value = this.singletonquestion.answer
                setTimeout(() => {
                    this.myKey += 1
                }, 1000)
            }, 2000)
        }
        else {
            clearTimeout(this.timerID2)
            this.timerID2 = setTimeout(() => {
                e.srcElement.value = ''
            }, 1500)
        }
    }
}


const [exponentquestions, factorquestions] = [
[ { type: 'Find x.',
    answer: '3',
    question:
     'a^{1} \\times a^{2} \\times a^{x} \\times a^{4} \\times a^{5} = a^{15}' },
  { type: 'Find x.',
    answer: '2',
    question: '2^{x} \\times 2^{3} = 2^{5}' },
  { type: 'Find x.',
    answer: '3',
    question: '3^{x} \\times 3^{x} \\times 3^{x} = 3^{9}' },
  { type: 'Find x.',
    answer: '100',
    question: '(2^{10})^{10} = 2^{x}' },
  { type: 'Find x.',
    answer: '58',
    question: '( (2^{3})^{4} )^{5} = 2^{(x + 2)}' },
  { type: 'Find x.', answer: '1', question: '1^{100} = x^{1000}' },
  { type: 'Find x.',
    answer: '100000',
    question: '( (a^{1})^{100})^{1000}) = a^{x}' },
  { type: 'Find x.',
    answer: '2',
    question: '2^{2x} \\times 8^{2x} = 2^{16}' },
  { type: 'Find x.', answer: '8', question: '2^{2^{2^2}} = 2^x' },
  { type: 'Find x.',
    answer: '2',
    question: '2^{2^{2^{2^2}}} = 4^x' } ],

[ { type: 'Find x.',
    answer: 'ab',
    question: '\\frac{ab + ab + ab}{3} = ' },
  { type: 'Find x.',
    answer: 'd',
    question: '\\frac{abc}{abcd} = \\frac{1}{x}' },
  { type: 'Solve.',
    answer: 'b',
    question: 'ax + ab = a(x \\times \\mathord{?})' },
  { type: 'Find x.',
    answer: 'a',
    question: '\\frac{ab + ac}{(b + c)} = ' },
  { type: 'Find x.',
    answer: '2',
    question: '(a + b) \\times (a - b) = a^{2} - b^{x}' },
  { type: 'Simplify.',
    answer: '4(x+2)',
    question: '4x + 8 \\rightarrow' },
  { type: 'Simplify.',
    answer: 'yx(x-y-1)',
    question: 'yx^{2} - yyx - yx \\rightarrow' },
  { type: 'Find x.',
    answer: 'a',
    question: '\\frac{ax - ay}{(x - y)} =' },
  { type: 'Solve.',
    answer: '2ab',
    question: '(xa + xb) \\times (xa + xb) = x^{2} + \\mathord{?} + b^{2}' },
  { type: 'Find x.',
    answer: 'x+4',
    question: '\\frac{(x + 4)(x + 5)(x + 6)}{(x^{2} + 11x + 30)} = ' } ]
]

function animatorAction() {
    console.log(this.singletonquestion)
    console.log('sup')
}
const hintcomponenttemplate = `

div {
    button click=releaseHint br3 hint
    p if=showHint .hint-text [computedValue]
}

`

const HintComponent = {
    //template: simplepug(hintcomponenttemplate),
    props: ['value'],
    data() {
        return {
            showHint: false,
        }
    },
    methods: {
        releaseHint() {
            if (isString(this.value)) {
               this.showHint = true 
            }
            else if (this.value.type == 'animation') {
                this.$emit('animation')
            }
        }
    },
    computed: {
        computedValue() {
            if (isString(this.value)) return this.value
        }
    },

}

function determinePosition(s, fallback) {
    const store = s.split('-').reduce((acc, item, i) => {
        acc[item] = 100 + 'px'
        return acc
    }, {})
    
    return store
}
function determineMathQuestionType(s) {
    const types = ['factor', 'reduce', 'simplify', 'distribute', 'solve', 'find x', 'solve for x', 'draw', 'graph']
    if (test('x', s)) {
        return 'Find x.'
    }

    if (test('x', s)) {
        return 'Simplify.'
    }

    if (test('x', s)) {
        return 'Distribute.'
    }


}
function removeSpaces(s) {
    return s.toString().replace(/\s/g, '')
}

function debounce(fn, delay = 50) {
    let id
    return (...args) => {
        clearTimeout(id)
        id = setTimeout(() => {
            fn.call(this, ...args)
        }, delay)
    }
}



function coinflip() {
    return Math.random() > 0.50
}
function choosingTheAnswer(i, direction) {
    console.log('choosing answer', i, 'direction', direction)
    const limit = 2
    const length = 5 - 1
    const streakDuration = 2000 

    if (direction) {
        console.log('with direction')
        if (this.currentPick[0] == null) {
            this.currentPick = [0, 1]   
            console.log('currentpick set at start')
        }
        
        else {
            let index = this.currentPick[0] + direction
            if (index > length) index = 0
            else if (index < 0) index = length
            this.currentPick = [index, 1]
        }
    }

    else if (i == null) {
        if (!this.currentPick) {
            this.currentPick = [i, 1]
        }
        else {
            this.currentPick[1] += 1
        }
    }

    else if (this.currentPick && this.currentPick[0] == i) {
        this.currentPick[1] += 1
    }
    
    else {
        this.currentPick = [i, 1]
    }
    
    console.log(this.currentPick, 'the curent pick')
}

const h = {
    sup: '<p class="foo" style="color: green;">sup</p>',
    p: (s) => '<p style="background:red;color:white;font-weight:800>' + s + '</p>',
}
function sayhi() {
    console.log('just sayin hi bro')
}
function getMousePosition(e) {
    const radius = 10
    const x = e.pageX + radius/2
    const y = e.pageY + radius/2
    animator.createElement({x, y, radius})

}
function stylegetter(el, ...keys) {
   const style = el.style 
   return keys.map(key => {
       console.log(key, style[key] ? style[key] :  'null')
       return style[key]
   })
}

const vuekeys = ['render', 'mounted', 'components', 'props', 'template', 'data', 'methods', 'computed', 'watch']
function isBrowser() {
    if (typeof window === 'undefined') {
        return false 
    }
    else if (isObject(window) && len(window) == 0) {
        return false
    }
    print('the window is defined')
    return true
}


const jsCodeRE = /(?<=\n|^)(const \w+ = (?:(?:[`\[\{][^]+?\n[`\}\]])?.*)|(?:(?:\w+\.prototype\.[\w$]+)|(?:(?:async )?function|class) [\$\w]+)[^]+?\n}\)?)/g

function webdrafterehhhhh(s) {

    let html 
    let js
    let css

    s = removeComments(s);
    [s, html] = mreplace(/^div .*?{[\w\W]+?\n}/gm, s);
    [s, js]  = mreplace(jsCodeRE, s);

    html = joined(html);
    js = joined(js);
    [html, css] = simplepug(html, true);
    
    css += '\n\n' + s

    html = selt('body', html)
    css = selt('style', css)
    js = selt('script', js)
    return css + '\n\n' + html + '\n\n' + js
}


const defaultProps = {
    'StartComponent': {},
    'quizcomponent': {},
    'EndComponent': {},

}



const htmlpresetmap = {
    'line': ['hr', 'line', '']
}
const htmltagaliasmap = {
        'b': 'button',
        'd': 'div',
        'i': 'input',
}
function readdir(dir) {
    const fs = require('fs')
    return fs.readdirSync('/home/kdog3682/CWF/' + dir)
}
const catpics = [ 
  'blanket.jpg',
  'cat and fish.jpg',
  'cat pose g.png',
  'cat pose.jpg',
  'cute k.jpg',
  'cute.jpg',
  'cuteb.jpg',
  'cuten.jpg',
  'dancing.jpg',
  'derp.jpeg',
  'eiffel tower.jpg',
  'fist on chin.jpg',
  'flying.jpg',
  'like a boss.jpg',
  'ocean sunset.jpg',
  'pose f.jpg',
  'posing.jpg',
  'posse.jpg',
  'pounce.jpg',
  'punch.jpg',
  'sleeping.jpg',
  'smirk.jpg',
  'sweater.jpg' 
]

const imagelinks = {
    'catpic': catpics,
    'fallback': catpics,
}
initFakeVue()

const startingWordsREGEX = /^[a-zA-Z]{2,}$/gm
const easywords = [
  "help",
  "hi",
  "hello",
  "bye",
  "account",
  "acid",
  "act",
  "addition",
  "adjustment",
  "advertisement",
  "after",
  "again",
  "against",
  "agreement",
  "air",
  "and",
  "anger",
  "angle",
  "animal",
  "apparatus",
  "apple",
  "approval",
  "arch",
  "argument",
  "arm",
  "army",
  "art",
  "attraction",
  "authority",
  "awake",
  "baby",
  "back",
  "bag",
  "balance",
  "ball",
  "band",
  "basin",
  "basket",
  "beautiful",
  "bed",
  "bee",
  "beetle",
  "behaviour",
  "belief",
  "bell",
  "bent",
  "bird",
  "bit",
  "bite",
  "black",
  "blade",
  "blood",
  "board",
  "body",
  "boil",
  "bone",
  "book",
  "boot",
  "bottle",
  "box",
  "boy",
  "brain",
  "brake",
  "branch",
  "brass",
  "bread",
  "brick",
  "bridge",
  "brown",
  "brush",
  "bucket",
  "burn",
  "business",
  "butter",
  "button",
  "cake",
  "canvas",
  "card",
  "cart",
  "cattle",
  "chain",
  "chalk",
  "cheese",
  "child",
  "chin",
  "clear",
  "clock",
  "cloud",
  "coal",
  "coat",
  "cold",
  "collar",
  "colour",
  "comb",
  "comparison",
  "competition",
  "complex",
  "condition",
  "connection",
  "cooking",
  "copy",
  "cord",
  "cork",
  "cotton",
  "country",
  "credit",
  "crime",
  "cup",
  "current",
  "cushion",
  "daughter",
  "day",
  "death",
  "debt",
  "destruction",
  "difference",
  "digestion",
  "direction",
  "dirty",
  "discovery",
  "discussion",
  "disease",
  "distribution",
  "division",
  "door",
  "drain",
  "drink",
  "ear",
  "earthworm",
  "east",
  "edge",
  "education",
  "egg",
  "electricity",
  "engine",
  "equal",
  "error",
  "example",
  "existence",
  "experience",
  "eye",
  "face",
  "fact",
  "failure",
  "fall",
  "false",
  "farm",
  "fat",
  "father",
  "fear",
  "feather",
  "female",
  "fertility",
  "fiction",
  "field",
  "finger",
  "fire",
  "fish",
  "flag",
  "flat",
  "flight",
  "floor",
  "flower",
  "fly",
  "food",
  "foolishness",
  "foot",
  "fork",
  "fowl",
  "frame",
  "free",
  "friend",
  "fruit",
  "future",
  "garden",
  "girl",
  "girlfriend",
  "glass",
  "gold",
  "good",
  "government",
  "grain",
  "grass",
  "gray",
  "green",
  "group",
  "growth",
  "gun",
  "hair",
  "hammer",
  "hand",
  "harbor",
  "hat",
  "hatred",
  "head",
  "talk",
  "contributions",
  "categorytalk",
  "help",
  "tools",
  "sandbox",
  "wiktionary",
  "sicilianu",
  "help",
  "health",
  "hearing",
  "heart",
  "heat",
  "history",
  "hook",
  "hope",
  "horn",
  "horse",
  "hospital",
  "hour",
  "house",
  "ice",
  "idea",
  "if",
  "impulse",
  "industry",
  "ink",
  "insect",
  "intelligence",
  "invention",
  "island",
  "jelly",
  "jewel",
  "judge",
  "jump",
  "kettle",
  "key",
  "kick",
  "kind",
  "kiss",
  "knee",
  "knife",
  "knot",
  "knowledge",
  "land",
  "leaf",
  "leg",
  "letter",
  "like",
  "limit",
  "line",
  "lip",
  "liquid",
  "list",
  "lock",
  "love",
  "machine",
  "man",
  "manager",
  "map",
  "market",
  "match",
  "measure",
  "memory",
  "milk",
  "minute",
  "modular",
  "money",
  "monkey",
  "month",
  "moon",
  "morning",
  "mother",
  "motion",
  "mountain",
  "mouth",
  "move",
  "muscle",
  "music",
  "nail",
  "name",
  "nation",
  "native",
  "necessary",
  "nerve",
  "new",
  "no",
  "north",
  "nose",
  "now",
  "number",
  "nut",
  "observation",
  "of",
  "office",
  "oil",
  "old",
  "operation",
  "opinion",
  "opposite",
  "order",
  "organization",
  "oven",
  "pain",
  "paint",
  "pants",
  "paper",
  "parallel",
  "parcel",
  "paste",
  "peace",
  "pen",
  "physical",
  "plant",
  "plate",
  "plow",
  "pocket",
  "poison",
  "polish",
  "porter",
  "position",
  "power",
  "price",
  "prison",
  "property",
  "protest",
  "punishment",
  "question",
  "rail",
  "rain",
  "rat",
  "reading",
  "receipt",
  "record",
  "red",
  "relation",
  "religion",
  "representative",
  "reward",
  "rhythm",
  "rice",
  "ring",
  "river",
  "road",
  "rod",
  "roof",
  "root",
  "round",
  "sadness",
  "safe",
  "sail",
  "salt",
  "sand",
  "school",
  "science",
  "scissors",
  "screw",
  "second",
  "secret",
  "secretary",
  "seed",
  "sense",
  "shade",
  "sharp",
  "shelf",
  "ship",
  "shoe",
  "sibling",
  "sign",
  "silk",
  "silver",
  "simplicity",
  "single",
  "size",
  "skin",
  "skirt",
  "sky",
  "sleep",
  "slope",
  "slow",
  "smell",
  "snake",
  "sneeze",
  "snow",
  "sock",
  "solid",
  "son",
  "song",
  "sound",
  "soup",
  "south",
  "spade",
  "sponge",
  "spoon",
  "spring",
  "square",
  "start",
  "station",
  "steam",
  "steel",
  "sticky",
  "stomach",
  "stone",
  "store",
  "straight",
  "talk",
  "contributions",
  "categorytalk",
  "help",
  "tools",
  "sandbox",
  "wiktionary",
  "sicilianu",
  "help",
  "street",
  "substance",
  "success",
  "sugar",
  "suggestion",
  "sun",
  "support",
  "surprise",
  "sweet",
  "swim",
  "system",
  "tail",
  "taste",
  "tax",
  "test",
  "textile",
  "this",
  "thread",
  "thumb",
  "thunder",
  "ticket",
  "time",
  "to",
  "toe",
  "tongue",
  "tooth",
  "town",
  "transport",
  "tray",
  "tree",
  "truth",
  "umbrella",
  "unit",
  "value",
  "view",
  "voice",
  "walk",
  "wall",
  "war",
  "warm",
  "wash",
  "waste",
  "wave",
  "weather",
  "week",
  "weight",
  "well",
  "west",
  "wheel",
  "whip",
  "whistle",
  "white",
  "will",
  "wind",
  "window",
  "wine",
  "wing",
  "wire",
  "woman",
  "wood",
  "wool",
  "word",
  "work",
  "writing",
  "year",
  "yellow",
  "yes",
  "yesterday",
  "you",
  "talk",
  "contributions",
  "help",
  "tools",
]
const stopwords = [
    'a',
    'about',
    'above',
    'after',
    'again',
    'against',
    'all',
    'am',
    'an',
    'and',
    'any',
    'are',
    "aren't",
    'as',
    'at',
    'be',
    'because',
    'been',
    'before',
    'being',
    'below',
    'between',
    'both',
    'but',
    'by',
    "can't",
    'cannot',
    'could',
    "couldn't",
    'did',
    "didn't",
    'do',
    'does',
    "doesn't",
    'doing',
    "don't",
    'down',
    'during',
    'each',
    'few',
    'for',
    'from',
    'further',
    'had',
    "hadn't",
    'has',
    "hasn't",
    'have',
    "haven't",
    'having',
    'he',
    "he'd",
    "he'll",
    "he's",
    'her',
    'here',
    "here's",
    'hers',
    'herself',
    'him',
    'himself',
    'his',
    'how',
    "how's",
    'i',
    "i'd",
    "i'll",
    "i'm",
    "i've",
    'if',
    'in',
    'into',
    'is',
    "isn't",
    'it',
    "it's",
    'its',
    'itself',
    "let's",
    'me',
    'more',
    'most',
    "mustn't",
    'my',
    'myself',
    'no',
    'nor',
    'not',
    'of',
    'off',
    'on',
    'once',
    'only',
    'or',
    'other',
    'ought',
    'our',
    'ours',
    'ourselves',
    'out',
    'over',
    'own',
    'same',
    "shan't",
    'she',
    "she'd",
    "she'll",
    "she's",
    'should',
    "shouldn't",
    'so',
    'some',
    'such',
    'than',
    'that',
    "that's",
    'the',
    'their',
    'theirs',
    'them',
    'themselves',
    'then',
    'there',
    "there's",
    'these',
    'they',
    "they'd",
    "they'll",
    "they're",
    "they've",
    'this',
    'those',
    'through',
    'to',
    'too',
    'under',
    'until',
    'up',
    'very',
    'was',
    "wasn't",
    'we',
    "we'd",
    "we'll",
    "we're",
    "we've",
    'were',
    "weren't",
    'what',
    "what's",
    'when',
    "when's",
    'where',
    "where's",
    'which',
    'while',
    'who',
    "who's",
    'whom',
    'why',
    "why's",
    'with',
    "won't",
    'would',
    "wouldn't",
    'you',
    "you'd",
    "you'll",
    "you're",
    "you've",
    'your',
    'yours',
    'yourself',
    'yourselves',
]


function initFakeVue() {
    if (typeof window === 'undefined') {
        Vue = {}
        Vue.prototype = {}
        Vue.directive = identity
    }
}

const noclosers = ['input', 'hr', 'br', 'link', 'img']
const vmap = {
    'classes': 'class',
    html: 'v-html',
    bind: 'v-bind',
    ref: 'ref',
    show: 'v-show',
    click: '@click',
    tg: 'transition-group',
    t: 'transition',
    if: 'v-if',
    elif: 'v-else-if',
    else: 'v-else',
    for: 'v-for',
    vfor: 'v-for',
    model: 'v-model',
}
const hlist = [
    'svg',
    'script',
    'style',
    'head',
    'html',
    'body',
    'transition',
    'button',
    'textarea',
    'slideshow',
    'td',
    'table',
    'tr',
    'td',
    'title',
    'h2',
    'h1',
    'h3',
    'h4',
    'h5',
    'h6',
    'style',
    'script',
    'head',
    'html',
    'body',
    'quote',
    'blockquote',
    'code',
    'pre',
    'img',
    'nav',
    'header',
    'footer',
    'textarea',
    'input',
    'body',
    'html',
    'li',
    'ul',
    'p',
    'div',
    'h',
    'main',
    'section',
    'span',
    'a',
]
function raise(arg) {
    console.log(arg)
    throw "ERORR"
}


function congrats(name, percentage) {
    const template = PhraseBook.get(roundToNearest(percentage))
    return templater(template, name, null, null, 'bro')
}


function isHtmlString(s) {
    const regex = /<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i
    return regex.test(s) 
}

function toStringCssAttrs(attrs) {
    let s = ''
    for (let [k, v] of Object.entries(attrs)) {
        if (v) s += k + '=' + '"' + toString(v, ' ') + '"' + ' '
    }
    return s ? ' ' + s.trim() : ''
}
function selt(el, attrs, ...children) {
    if (isArray(children[0])) children = children[0]

    if (!attrs && !children) return ''
    if (isString(attrs)) {
        attrs = {class: attrs}
    }
    else if (!attrs) {
        attrs = {}
    }

    if (!children) {
        children = attrs
        attrs = {}
    }
    
    let s = toOpeningTag(el, attrs)
    if (isString(children) && !children.includes('\n')) {
        s += children
    }
    else if (children.length == 1) {
        if (isHtmlString(children[0]) || children[0].includes('\n')) {
            s += newlineIndent(children[0])
        }
        else {
            s += children[0]
        }
    }
    else {
        s += newlineIndent(children)
    }
    s += toClosingTag(el)
    return s
    
}

function newlineIndent(s, indentation = 4) {
    return '\n' + indent(toString(s), indentation) + '\n'
}

function htmlTransform(original) {

    const editor = new LineEdit(original, (s) => {
       let tag
       let attrs
       let [text, store] = mreplace(/^ *\.(\w+)/gm, s)
       if (test('pic', text)) {
           tag = 'img'
           attrs = {src: imagegetter(text)}
           text = ''
       }
       else {
          tag = 'p' 
          attrs = {class: store}
       }
       return selt(tag, attrs, text)
    })
    return editor.run()
}





class PhraseBook {
    constructor() {
    }
    static get(key) {
        
        const dict = {
            //'good':     htmlTransform(goodInnerHtml),
            //'mediocre': htmlTransform(mediocreInnerHtml),
            'fallback':   htmlTransform(phrasebookfallback),
        }
        return dict[key] || dict['fallback'] 
    }
}
function roundToNearest(n) {
    if (n < 15) return 10
    if (n < 25) return 20
    if (n < 35) return 30
    if (n < 45) return 40
    if (n < 55) return 50
    if (n < 65) return 60
    if (n < 75) return 70
    if (n < 85) return 80
    if (n < 95) return 90
    if (n < 105) return 100
}
function raise(...args) {
    for (let i = 0; i + 1 < args.length; i += 2) {
        console.log(args[0], args[1])
    }
    throw "raiser" 
}
function isTypingKey(e) {
    return e.key.length == 1
    return e.key.length == 1 && /[ ()\w\[\]]/.test(e.key)
    
}
function isLetterKey(e) {
    return /^\w$/.test(e.key)
}
function isMetaKey(e) {
    const metakeys = ['Shift', 'Ctrl', 'Alt']
    return metakeys.includes(e.key)
}
function ZoopBar(s) {
    let match = search(/\w+$/, s)
    return match.endsWith('s') ? 
        match.slice(0, -1) :
        'item'
}




const colorsRE = '^(bg|bc|fc|border)(\\w+)'
const items = ['a\n', 'banana', 'b', 'perry', 'apple']
const dmap = { x: ['left', 'right'], y: ['top', 'bottom'] }

const namedColorsRE =
    '(?:red|blue|gray|yellow|orange|black|violet|green|indigo|pink)\\d*'

const colornamesmap = {
    b: 'blue',
    r: 'red',
    y: 'yellow',
    g: 'green',
    o: 'orange',
    bl: 'black',
}

const pmwhNumberRE =
    '^(o|z|fw|br|bw|lh|gg(?:x|y)?|top|left|right|bot(?:tom)?|fs|wh|(?:min|max)?(?:w|h)|(?:p|m)(?:x|y|t|l|r|b)?)(calc.+|-?[\\d-.]+)(p|vh|r?em|px|vw)?'

const holder = {

  __item__: '',
  get itiem() {
    if (isArray(this.__item__)) {
        if (this.__item__.length == 0) return
        return this.__item__.pop()
    }
  },
  set iteiim(val) {
    this.__item__ = val
  }
}


const lgdict = {
    gridsize: ['grid-template-columns', gridColumnParser],
    grid: ['grid-template-areas', gridAreaParser],
    lg:   ['background', linearGradientParser],
    gtc:   ['grid-template-columns', gridTemplateColumnParser],
    gtr:   ['grid-template-rows', gridTemplateColumnParser],
}

const cmap = {
    border: 'border-color',
    gc: 'grid-column',
    gr: 'grid-row',
    b: 'border',
    bb: 'border-bottom',
    bl: 'border-left',
    br: 'border-right',
    bt: 'border-top',
    z: 'z-index',
    o: 'opacity',
    fw: 'font-weight',
    br: 'border-radius',
    bw: 'border-weight',
    lh: 'line-height',
    gg: 'grid-gap',
    ggx: 'row-gap',
    ggy: 'column-gap',
    lg: 'linear-gradient',
    wh: ['width', 'height'],
    bg: 'background-color',
    bc: 'border-color',
    bb: 'border-bottom',
    fc: 'color',
    fs: 'font-size',
    minw: 'min-width',
    minh: 'min-height',
    maxw: 'max-width',
    maxh: 'max-height',
    gtc: 'grid-template-columns',
    gtr: 'grid-template-rows',
    w: 'width',
    h: 'height',
    p: 'padding',
    m: 'margin',
    pb: 'padding-bottom',
    pt: 'padding-top',
    pl: 'padding-left',
    pr: 'padding-right',
    mb: 'margin-bottom',
    mt: 'margin-top',
    ml: 'margin-left',
    mr: 'margin-right',
}

const tailwind = {
    charcoal: '#36454f',
    none: 'transparent',
    olive: '',
    strawberry: '',
    tomato: '',
    black1: 'asd',
    black2: 'asd',
    black3: 'asd',
    black4: 'asd',
    black5: 'asd',
    black: '#111',
    black6: 'asd',
    black7: 'asd',
    black8: '#111',
    black9: 'asd',
    gray1: '#f7fafc',
    gray2: '#edf2f7',
    gray3: '#e2e8f0',
    gray4: '#cbd5e0',
    gray5: '#a0aec0',
    gray: '#a0aec0',
    gray6: '#718096',
    gray7: '#4a5568',
    gray8: '#2d3748',
    gray9: '#1a202c',
    red1: '#fff5f5',
    red2: '#fed7d7',
    red3: '#feb2b2',
    red4: '#fc8181',
    red5: '#f56565',
    red6: '#e53e3e',
    red7: '#c53030',
    red8: '#9b2c2c',
    red9: '#742a2a',
    orange1: '#fffaf0',
    orange2: '#feebc8',
    orange3: '#fbd38d',
    orange4: '#f6ad55',
    orange5: '#ed8936',
    orange: '#ed8936',
    orange6: '#dd6b20',
    orange7: '#c05621',
    orange8: '#9c4221',
    orange9: '#7b341e',
    yellow1: '#fffff0',
    yellow2: '#fefcbf',
    yellow3: '#faf089',
    yellow4: '#f6e05e',
    yellow5: '#ecc94b',
    yellow: '#ecc94b',
    yellow6: '#d69e2e',
    yellow7: '#b7791f',
    yellow8: '#975a16',
    yellow9: '#744210',
    green1: '#f0fff4',
    green2: '#c6f6d5',
    green3: '#9ae6b4',
    green4: '#68d391',
    green5: '#48bb78',
    green: '#48bb78',
    green6: '#38a169',
    green7: '#2f855a',
    green8: '#276749',
    green9: '#22543d',
    teal1: '#e6fffa',
    teal2: '#b2f5ea',
    teal3: '#81e6d9',
    teal4: '#4fd1c5',
    teal5: '#38b2ac',
    teal: '#38b2ac',
    teal6: '#319795',
    teal7: '#2c7a7b',
    teal8: '#285e61',
    teal9: '#234e52',
    blue1: '#ebf8ff',
    blue2: '#bee3f8',
    blue3: '#90cdf4',
    blue4: '#63b3ed',
    blue5: '#4299e1',
    blue: '#4299e1',
    blue6: '#3182ce',
    blue7: '#2b6cb0',
    blue8: '#2c5282',
    blue9: '#2a4365',
    indigo1: '#ebf4ff',
    indigo2: '#c3dafe',
    indigo3: '#a3bffa',
    indigo4: '#7f9cf5',
    indigo5: '#667eea',
    indigo: '#667eea',
    indigo6: '#5a67d8',
    indigo7: '#4c51bf',
    indigo8: '#434190',
    indigo9: '#3c366b',
    purple1: '#faf5ff',
    purple2: '#e9d8fd',
    purple3: '#d6bcfa',
    purple4: '#b794f4',
    purple5: '#9f7aea',
    purple: '#9f7aea',
    purple6: '#805ad5',
    purple7: '#6b46c1',
    purple8: '#553c9a',
    purple9: '#44337a',
    pink1: '#fff5f7',
    pink2: '#fed7e2',
    pink3: '#fbb6ce',
    pink4: '#f687b3',
    pink5: '#ed64a6',
    pink: '#ed64a6',
    pink6: '#d53f8c',
    pink7: '#b83280',
    pink8: '#97266d',
    pink9: '#702459',
}

const __a = {
    modulus(currentIndex, arr){
    return (currentIndex + 1) % arr.length
    },
    pop(arr, key) {
        if (!isNumber(key)) {
            key = arr.indexOf(key)
        }
        console.log( key )
        return smallify(arr.splice(key, 1))
    },
    fill(arr, n) {
        while (arr.length != n) {
            arr.push(arr[0])
        }
        return arr
    },
    max(arr) {
        return arr.reduce((acc, item) => Math.max(item.length, acc), 0)
    },
    intersection(a,b) {
        const x = new Set(a)
        const y = new Set(b)
        return Array.from(x).filter(el => y.has(el))
    },
    difference(a,b) {
        const x = new Set(a)
        const y = new Set(b)
        return Array.from(x).filter(el => !y.has(el))
    },
    add(arr, item, { limit = null } = {}) {
        if (exists(item)) {
            if (isArray(item) && !isNestedArray(arr)) {
                arr.push(...item)
            }
            else {
                arr.push(item)
            }
        }
        if (limit && arr.length == limit) {
            arr.shift()
            // arr.splice(0, Math.floor(limit / 2))
            // 
        }
    },
    extend(a, b, {unique = false} = {}) {
        if (isArray(b)) {
        let seen = false
        for (let i = 0; i < b.length; i++) {
            if (unique && a.includes(b[i])) {
                seen = true
            }
            else {
                a.push(b[i])
            }
        }
        return seen
        }
        else {
            a.push(b)
        }
    },
    intersects(a, b) {
        for (let i = 0; i < a.length; i++) {
            if (b.includes(a[i])) {
                return true
            }
        }
    },
    partition(items, ...keys) {
        keys = __a.conditionMap(keys, isRegExp, roark.factory.test)
        const store = new SimpleStorage()
        store.fill(keys.length)
        for (let item of items) {
            for (let i = 0; i < keys.length; i++) {
                if (keys[i](item)) {
                    store.add(i, item)
                    break
                } else if (isLast(keys, i)) {
                    store.add(i + 1, item)
                }
            }
        }
        return store.getValue()
    },
    generate(n, val) {
        if (isObject(val) && !exists(val)) {
            return new Array(n).fill(null).map((x) => ({}))
        }
    },
    has(arr, ...items) {
        for (let i = 0; i < items.length; i++) {
            if (!arr.includes(items[i])) return false
        }
        return true
    },
    insertText(arr, lineNumber, fn, content) {
        arr[lineNumber] = fn(arr[lineNumber], content)
    },
    difference(a, b) {
        return a.filter((x) => !b.includes(x))
    },
    prepareArgs(args) {
        return args.length == 1 && isArray(args[0]) ? args[0] : args
    },
    prepare(iterable, mode) {
        return isObject(iterable) ? Object[mode](iterable) : iterable
    },

    conditionMap(arr, condition, action) {
        return arr.map((x) => condition(x) ? action(x) : x)
    },
    test(arr, condition, action) {
        if (condition(arr[0])) {
            try {
                return arr.map(action)
            } catch (e) {
                if (e.message.endsWith('is not a function')) {
                    return action(arr)
                }
                throw e
            }
        }
        return arr
    },
    insert(arr, item, index) {
        if (index == -1) {
            arr.push(item)
        } else if (index == 0) {
            arr.unshift(item)
        } else {
            arr.splice(index, 0, item)
        }
    },
    last(arr, n = -1) {
        if (n > -1) {
            return arr.length - 1 == n
        }
        return arr[arr.length + n]
    },
    push(arr, item, { limit = null } = {}) {
        if (isNestedArray(item)) {
            arr.push(...item)
        } else {
            arr.push(item)
            if (limit && arr.length == limit) {
                arr.splice(0, Math.floor(limit / 2))
                console.log('removed arr: ' + stringify(arr))
            }
        }
    },
    unique(x, item) {
        if (!x.includes(item)) x.push(item)
    },

    toggle(x, item) {
        if (x.includes(item)) {
            x.splice(x.indexOf(item), 1)
            console.log('removing item')
        } else {
            x.push(item)
            console.log('adding item')
        }
    },
}
const cabmap = {
    'cabtac': 'text-align: center;',
    'serrat': 'font-family: "Montserrat Alternates"; font-weight:700;',
     centered: 'display: flex; align-items: center; justify-content: center;',
     center: 'display: flex; align-items: center; justify-content: center;',
     ai: 'align-items',
     border: 'border: 1px solid red',
     jcse: 'justify-content: space-evenly',
     jcsb: 'justify-content: space-between',
     jcc: 'justify-content: center',
     shadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
     shadow1: "0px 4px 10px rgba(0, 0, 0, 0.25)",
     // cursor can be 'help|pointer|default'
     shadow2: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    'tall': 'transition: all 1s ease-out;',
             'gaa': 'grid-area: a;',
            'gab': 'grid-area: b;',
            'gac': 'grid-area: c;',
            'gad': 'grid-area: d;',
            'gae': 'grid-area: e;',
    halfscreen: 'position: absolute; width: 35%; right: 0; height: 90%',
    xcenter: 'position: absolute; transform: translateX(-50%); left: 50%;',
    ycenter: 'position: absolute; transform: translateY(-50%); top: 50%;',
    'space-between': 'justify-content: space-between',
    jcbtwn: 'justify-content: space-between',
    jcspc: 'justify-content: space-evenly',
    jcsb: 'justify-content: space-between',
    abscenter:
        'position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto;',
    'shadow-lg': 'box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;',
    'shadow-sm': 'box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;',
    shadow:
        'box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;',
    rounded: ['border-radius', '5px'],
    times: ['font-family', 'Times'],
    georgia: ['font-family', 'Georgia'],
    times: ['font-family', 'Times,'],
    times: ['font-family', 'Times'],
    circle: (x) => {
        const product = [
            ['width', x],
            ['height', x],
            ['border-radius', '50%'],
        ]
        return product
    },
    // animation: 'spin3D 2.2s linear 0s infinite'
    mhauto: ['margin', '0 auto'],
    mauto: 'margin: 0 auto',
    posa: ['position', 'absolute'],
    posr: ['position', 'relative'],
    fullscreen: [
        ['width', '100vw'],
        ['height', '100vh'],
    ],
    full: [
        ['width', '100vw'],
        ['height', '100vh'],
    ],
    caps: ['text-transform', 'uppercase'],
    underline: ['border-bottom', '1px solid currentColor'],
    georgia: ['font-family', 'Georgia'],
    lh: ['line-height', '1.4'],
    bold: ['font-weight', '700'],
    superbold: ['font-weight', '900'],
    flex: ['display', 'flex'],
    flexc: 'display: flex; flex-direction: column;',
    //flexc: [
        //['display', 'flex'],
        //['flex-direction', 'column'],
    //],

    flexcol: [
        ['display', 'flex'],
        ['flex-direction', 'column'],
    ],

    gmail: ['font', 'small/ 1.5 Arial,Helvetica,sans-serif'],
    geist: [
        ['flex', '1'],
        ['justify-content', 'flex-start'],
        ['align-items', 'stretch'],
    ],
    antialiased: [
        ['text-rendering', 'optimizeLegibility'],
        ['-webkit-font-smoothing', 'asdflxxanzztzzizzzaliased'],
    ],

    ol: [
        ['text-rendering', 'optimizeLegibility'],
        ['-webkit-font-smoothing', 'antialiased'],
    ],

    round: ['border-radius', '50%'],

    bsa: {
        a: 'box-shadow',
        b: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    },
    bsb: {
        a: 'box-shadow',
        b: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    },
    bsc: {
        a: 'box-shadow',
        b: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    },
    bsd: {
        a: 'box-shadow',
        b: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
    bse: {
        a: 'box-shadow',
        b: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    },
    shadowa: {
        a: 'box-shadow',
        b: '',
    },

    shadowb: {
        a: 'box-shadow',
        b: '',
    },
    'shadow-md': {
        a: 'box-shadow',
        b: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    },
    grid: { a: 'display', b: 'grid' },
    transparent: { a: 'background-color', b: 'transparent' },
    tac: { a: 'text-align', b: 'center' },
    ta: { a: 'text-align', b: 'center' },
    ilb: { a: 'display', b: 'inline-block' },
    block: { a: 'display', b: 'block' },
    radial: { a: 'border-radius', b: '50%' },
    //flexc: [
        //['display', 'flex'],
        //['flex-direction', 'column'],
    //],
    abs: ['position', 'absolute'],
    rel: ['position', 'relative'],
    sans: [
        'font-family',
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    ],
    serif: ['font-family', 'Georgia'],
    garamond: ['font-family', 'Garamond'],
    monospace: ['font-family', 'monospace'],
    codestack: [
        'font-family',
        '"Source Code Pro", Consolas, Monaco, Menlo, Consolas, monospace',
    ],
    mono: [
        'font-family',
        'Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace',
    ],
    code: ['font-family', 'monospace'],
    hidden: ['overflow', 'hidden'],
    cursive: ['font-family', 'relative'],
    mathfont: ['font-family', 'relative'],
    flatwhite: ['color', '#EAEAEA'],
    flatblack: ['color', '#333'],
    flatblacksocketio: ['color', '#555'],
    flatblack2d: ['color', '#2d2d2d'],
    flatblack24: ['color', '#242424'],
    charcoal: ['color', '#333'],
    gtc: ['grid-template-columns', 'repeat(3, 1fr)'],
    gtr: ['grid-template-rows', 'repeat(3, 1fr)'],
    grid: 'display',
    grid: ['grid-template-columns', 'repeat(3, 1fr)'],
}

function isDefined(x) {
    return !isUndefined(x)
}

function isLast(i, arr) {
    return i == arr.length - 1
}

function isNestedArray(v) {
    return isArray(v) && isArray(v[0])
}

function isUndefined(x) {
    return x === undefined || x === null
}

function getUniqueLetters(s) {
    return setify(findall(/\w/g, s))
}

function swapped(a, b) {
    let temp = b
    b = a
    a = b
    return [a, b]
}

function gridColumnParser(s) {
    console.log( 'gridcolpar' )
    return '1fr 1fr'
}

function replaceFirstLetter(s, fn) {
    return s.replace(/[a-zA-Z]/, lambdaReplace(fn))
}

function gridTemplateColumnParser(s) {
    if (isNumber(s)) return 'repeat(' + s + ', 1fr)'
}

function comment(s, cat = 'block') {
    if (cat == 'block') return ' /* ' + s + ' */ '
    return s.replace(/^/gm, '// ')
}

function setify(arr) {
    if (isObject(arr[0])) {
        arr = arr.map(JSON.stringify)
    }
    return Array.from(new Set(arr))
}

function cssUnitedParser(s) {
    if (test('(?:px|asdddddd|%|\\d)$', s)) {
        let [a, b] = split(s, 'css')
        return [a, b]
    }
}

function lambdaReplace(replacement) {
    // console.blue( replacement )
    return (...args) =>
        isString(replacement) ? replacement : replacement(...args)
}

function filterTwice(arr, key) {
    const store = new SimpleStorage()
    iterate(arr, (x) => store.add(_typeof(x), x))
    return [store.store.string, store.store.object]
}

function isEmpty(x) {
    if (x == null) return true
    if (isString(x)) return !x.trim()
    if (isArray(x)) return x.length == 0
    if (isObject(x)) return Object.keys(x).length == 0
}

function cssDashedParser(s) {
    let match
    if (match = search('\\w+-\\w+', s)) {
        let [a, b] = s.split('-')
        if (a == 'centered') {
            return 'margin: 0 auto; width: ' + b
        }
    }
}

function fixColorName(b) {
    if (b.length == 1) {
        b = colornamesmap[b]
    } else if (b.length == 2) {
        b = replaceFirstLetter(b, (x) => colornamesmap[x])
    }

    if (test('[a-z]$', b)) b += '5'
    return b
}

function linearGradientParser(s) {
                return parens(
                    s
                        .split('-')
                        .map((x) => tailwind[x] || x)
                        .join(', ')
                )
}

function cssNamedColorParser(s, comments) {
        let match = search(namedColorsRE, s)
        if (!match) return
        match = tailwind[match]
        if (isTrue(comments)) match += comment(match, 'block')
        return ['color', match]
}

function testFactory(regex, mode = null) {
    if (mode == 'endswith') return (s) => s.endsWith(regex)
    if (mode == 'startswith') return (s) => s.startsWith(regex)
    if (isRegExp(regex)) {
        return (s) => regex.test(s)
    }
    return (s) => test(regex, s)
}

function sortFactory(runner, { reverse = false } = {}) {
    return (a, b) => {
        a = runner(a)
        b = runner(b)
        if (reverse) {
            ;[a, b] = swapped(a, b)
        }
        if (isNumber(a) && isNumber(b)) return a - b
        return a- b
    }
}

function searcher(re, s, flags = '') {
    const regex = isRegExp(re) ? re : RegExp(re, flags)
    let match = s.match(regex)
    // console.log( match )
    try {
        if (match.length == 2) return match[1]
        if (match.length > 1) return match.slice(1)
        return match[0]
    } catch {
        return ''
    }
}

function cssColorParser(s, comments) {
        let match = search(colorsRE, s)
        if (!match) return
        let css = []
        let a = cmap[match[0]]
        let b = tailwind[fixColorName(match[1])]

        if (isTrue(comments)) b += comment(match[1], 'block')
        if (a == 'border-color') {
            css.push(['border-style', 'solid'])
            css.push(['border-weight', '1px'])
        }
        css.push([a, b])
        return css
}

function switcher(query, obj, ...args) {
    // console.red( [query, obj, args] )
    if (!query) {
        return lambdaReplace(obj.default)(...args)
    } else if (obj[query]) {
        return obj[query]
    } else {
        return query
    }

    if (x == '') return query
    if (x == undefined) {
        if (obj.default) {
            return isString(obj.default) ? obj.default : obj.default(...args)
        } else {
            return query
        }
    }
    return x
}

function gridAreaParser(s) {
    if (!s) return [['display', 'grid'], ['grid-template-columns', '1fr 1fr'], ['gap', '5px 10px']]
    const items = s.split(/,/).map(x => x.split(''))
    const uniqueLetters = getUniqueLetters(s)
    // console.log( uniqueLetters )
    holder.item = uniqueLetters
    const max = __a.max(items)
    const rowz = items.map((x) => {
        return quotify(toString(__a.fill(x, max), ' '), '\'')
    })
    return toString(rowz, ' ')
    return helper.indent(toString(rowz))
}

function runCss(item, comments = true) {
    //if (item.length < 3 ) return null
    let result
    if (result = cssTitanFooBar(item, lgdict))        return result 
    if (result = cssColorParser(item, comments))      return result
    if (result = cssNamedColorParser(item, comments)) return result
    if (result = cssNumberParser(item))               return result
    if (result = cssCabmapParser(item))               return result
    if (result = cssDashedParser(item))               return result
    if (result = cssUnitedParser(item))               return result
}

function iterate(items, fn, ...args) {
    if (!items) return
    const store = []

    if (isFunction(items)) {
        if (isNumber(args[0])) {
            for (let i = 0; i < n; i++) {
                let product = fn(...args)
                store.push(product)
            }
        }
        return store
    }
    if (isNumber(items)) {
        for (let i = 0; i < items; i++) {
            p = fn(i, ...args)
            store.push(p)
        }
        return store
    }
    if (isString(items)) {
        return fn(items, ...args)
    }
    if (isArray(items)) {
        for (let i = 0; i < items.length; i++) {
            store.push(fn(items[i], ...args))
        }
        return store
    }
}

function cssCabmapParser(item) {
    const css = []
     let match = cabmap[item]
     if (!match) return
        if (isArray(match) && isString(match[0])) {
            css.push(match)
        } else if (isArray(match)) {
            match.forEach((el) => css.push(el))
        } else if (isString(match)) {
            css.push(match)
        }
        
        else if (isString(match)) {
            if (match.includes('; ')) {
                match = match.replace(/(?<=;) /g, '\n')
                if (match.endsWith(';')) match = match.slice(0, -1)
                css.push(match)
                // new
            } else if (match.includes(':')) {
                css.push(match.split(': '))
            } else {
                css.push([match, item])
            }
        } else if (isObject(cabmap[item])) {
            css.push(cabmap[item].a, cabmap[item].b)
        }
        return css
}

function cssNumberParser(s) {
    const css = []
    let result, a, b, getDimension, unit
    let match = search(pmwhNumberRE, s)
    if (!match) return
        a = match[0]
        b = match[1]
        unit = switcher(match[2], {
            vw: '',
            vh: '',
            lh: '',
            fw: '',
            p: '%',
            default: 'px',
        })

        if (b.startsWith('calc') || a == 'z' || a == 'lh' || a == 'o') {
            //console.log('no unit for', a)
        } else {
            b += unit
        }

        if ((getDimension = search('(?<!gg)(?:x|y)$', a))) {
            a = cmap[a.slice(0, -1)]
            for (let dimension of dmap[getDimension]) {
                css.push([a + '-' + dimension, b])
            }
        } else if (['top', 'left', 'bottom', 'right'].includes(a)) {
            css.push([a, b])
        } else {
            a = cmap[a]
            if (isArray(a)) {
                a.forEach((el) => css.push([el, b]))
            } else {
                css.push([a, b])
            }
        }
        return css
}

function parens(s, type = 'parens') {
    if (!isString(s)) s = s.source
    if (!type) return s
    if (type == Object) {
        return '{\n' + s + '\n}'
    }
    if (isArray(type)) return '[' + s + ']'
    if (isObject(type)) return '{' + s + '}'
    if (type == 'asdfpython') return "asdf='''\n" + s + "\n'''"
    if (type == 'asdf') return 'asdf=`\n' + s + '\n`'
    if (type == 'brackify') return '{\n' + s + '\n}'
    if (type == 'vue') return '{{ ' + s + ' }}'
    if (type == 'vuestring') return '{{' + s + '}}'
    if (type == '\n') return '\n' + s + '\n'
    if (type == 'doublequotes') return '"' + s + '"'
    if (type == 'console.log') return 'console.log(' + s + ')'
    if (type == 'print') return 'print(' + s + ')'
    if (type == 'spaces') return ' ' + s + ' '
    if (type == 'b') return '\\b' + s + '\\b'
    if (type == '\\b') return '\\b' + s + '\\b'
    if (type == 'dq') return '"' + s + '"'
    if (type == 'singlequotes') return "'" + s + "'"
    if (type == 'sq') return "'" + s + "'"
    if (type == 'ncg') return '(?:' + s + ')'
    if (type == 'parens') return '(' + s + ')'
    if (type == 'la') return '(?=' + s + ')'
    if (type == 'lb') return '(?<=' + s + ')'
    if (type == 'pla') return '(?=' + s + ')'
    if (type == 'plb') return '(?<=' + s + ')'
    if (type == 'nlb') return '(?<!' + s + ')'
    if (type == 'nla') return '(?!' + s + ')'
    if (type == 'regexparens') return '\\\\(' + s + '\\\\\\)'
    if (type == 'curlybraces') return '{' + s + '}'
    if (type == 'brackets') return '{' + s + '}'
    if (type == 'brackets') return '{\n' + s + '\n}'
    if (type == 'tilda') return '`' + s + '`'
    if (type == 'braces') return '[' + s + ']'

    if (type == 'arrify') return '[\n' + indent(toString(s)) + '\n]'
    if (type == 'newline-indent') return '\n' + indent(toString(s)) + '\n'
    if (type == 'quine')
        return 'console.log("' + s + '")' + sn + 'console.log(' + s + ')'
    if (type == 'newline-indent-div')
        return '<div>\n' + indent(toString(s)) + '\n</div>'

    if (type == 'array')
        return 'const array = [\n' + indent(toString(s).trim()) + '\n]'
    if (type.includes('|')) {
        const [a, b] = type.split('|')
        return a + s + b
    } else {
        return type + s + type
    }
}

function split(s, cat = '', delimiter = '\\s', parsers = null, starting = 1) {
    if (isString(s)) s = s.trim()
    if (isFunction(s)) return (text) => s(split(text)[1])
    if (!cat) return defaultSplit(s)
    if (cat == 'filtertwice') return filterTwice(s)
    if (cat == 'line') return search(/(.+)\n([^]+)/, s)

    if (isObject(cat)) {
        if (s.trim()) {
            const items = s.split(' ')
            if (items.length < cat.default.length) {
                let index = items.length
                for (let i = index; i < cat.default.length; i++) {
                    items.push(cat.default[i])
                }
                return items
            } else if (items.length == cat.default.length) {
                return items
            } else {
                const store = []
                let index = items.length - cat.default.length
                while (items.length > cat.default.length - 1) {
                    store.push(items.pop())
                }
                return [...items, store.reverse().join(' ')]
            }
        } else {
            return cat.default
        }
    }

    if (isNumber(s)) {
        s = String(s)
        const args = Array.from(arguments).slice(1)
        const store = []
        while (args.length > 0 && s) {
            const length = args.shift()
            store.push(Number(s.slice(0, length)))
            s = s.slice(length)
        }
        if (s) store.push(Number(s))
        return store
    }
    if (isArray(s)) return [s[0], s.slice(1)]

    if (isRegExp(cat)) {
        let [a, ...b] = s.split(cat)
        let delimiter = search(cat, s)
        return [a, b.join(delimiter)]
    }

    if (isFunction(cat)) {
        const items = search('(.*?) (.*)', s)
        if (isFunction(delimiter)) {
            return [cat(items[0]), delimiter(items[1])]
        }
        return [items[0], cat(items[1])]
    }

    if (isNumber(cat)) {
        if (cat < 0) {
            const length = s.length
            return [s.slice(0, length + cat), s.slice(cat)]
        }
        return search('^' + '(.*?) '.repeat(cat) + '(.+)', s)
    }

    if (isArray(cat)) {
        let [a, b] = defaultSplit(s)
        if (cat[0]) a = cat[0](a)
        if (cat[1]) b = cat[1](b)
        return [a, b]
    }

    switch (cat) {
        case 'tag':
            const items = search('(.*?) (.+)', s)
            return items ? items : [s, null]

        case 'dsn':
            return s.split(/  |\n/)
        case 'EQUALS':
            return search('^(.*?= ?)(.*)', s)
        case 'smart':
            delimiter = search(', ?|\\n|\\t', s)
            if (!delimiter) delimiter = ' '
            else if (delimiter.startsWith(',')) delimiter = ', ?'
            return s.split(RegExp(delimiter))
        case 'last':
            return s.split(RegExp(delimiter + '(?=\\S+$)'))
        case 'number-letter':
            return s.split(/(?<=[a-zA-Z])(?=\d)|(?<=\d)(?=[a-zA-Z])/)
        case 'ds':
            return s.split(/  |\n/)
    }

    if (cat == 'list') {
        delimiter = search('  |,(?! )', s)
        if (!delimiter) delimiter = ' '
        return split(s, delimiter)
    }
    if (cat == 'frs') {
        if (parsers) {
            items = split(s, ' ')
            a = parsers[0](items[0])
            b = items[1].split(delimiter).map(parsers[1])
            return [a, b]
        }
    }
    if (cat == 'firstrest' || cat == 'fr') {
        if (parsers) {
            items = s.split(delimiter)
            a = parsers[0](items[0])
            b = items.slice(1).map(parsers[1])
            return [a, b]
        }
        if (isString(s)) {
            items = s.split(delimiter)
            return [items[0], items.slice(1)]
        } else {
            return [s[0], s.slice(1)]
        }
    }
    if (cat == 'doublespace') return findall('(\\S+) (.*?)(?=  |$)', s)
    if (cat == 'nb') return s.split(/(?<=[a-zA-Z])(?=\d)/)
    if (cat == 'css') return s.split(/(?<=[a-zA-Z])(?=\d|px|%|asdasd|azzz)/)

    if (cat == 'twice') {
        if (isArray(delimiter)) {
            delimiter = delimiter.map(rescape)
        } else {
            delimiter = [' ', ' ']
        }
        return search(
            '(\\w+)' + delimiter[0] + '(\\w+)' + delimiter[1] + '([^]+)',
            s
        )
    }
    if (cat == 'once') {
        if (isArray(s)) return [s[0], s.slice(1)]

        try {
            if (delimiter.includes('|')) {
                delimiter = search(delimiter, s)
            }
            delimiter = delimiter.replace('^', '(?:\\n|^)')
            let regex = '(.*?)' + delimiter + '([^]+)'
            const product = searcher(regex, s)
            return product ? product : [s, '']
        } catch {
            // console.log('no match from splitting at once')
            return [s, '']
        }
    }
    if (cat == 'vue') {
        if (s.length == 1) return [s, '']
        if (s.startsWith('set ')) {
            return s.split(' ')
        }

        if (test('^run', s)) {
            return s.split(' ')
        }
        if (isSingleWord(s) && 'slu'.split('').includes(s[0])) {
            console.log('sluvuesplit')
            console.log(s)
            return [s.slice(0, 1), s.slice(1), '', '']
        }
        if (test('^fr|^gr', s)) return split(s, 'twice')
        else return [...split(s, 'once'), '', '']
    }
    // if (looksLikeRegex(cat)) {
    // return s.split(RegExp(cat))
    // }
}

class StorageTemplate {
    saveAtIndex(key, index, val) {
        this.store[key][index] = val
    }
    addString(key, s) {
        if (!this.store[key]) {
            this.store[key] = s
        }
        else {
            this.store[key] += sn + s
        }
    }
    edit(key, fn) {
        if (isArray(this.store[key])) {
            this.store[key] = this.store[key].map(fn)
        }
        else {
            this.store[key] = fn(this.store[key])
        }
    }
    sort(key, fn) {
        if (key && this.store[key])  {
            this.store[key].sort(sortFactory(fn))
            return
        }
        return
        if (!fn) {
            console.log('nofn')
            fn = (x, y) => {
                let a = x[1]
                let b = y[1]
                if (isObject(a)) return -1
                if (isObject(b)) return 1
                if (isString(a)) return 1
                if (isString(b)) return -1
            }
        }
        const items = this.entries
        console.log(items)
        items.sort(fn)
        console.log(items)
        return
        return Object.values(items)
    }
    entries() {
        return Object.entries(this.store)
    }

    keys() {
        return Object.keys(this.store)
    }

    values() {
        return Object.values(this.store)
    }
    forEach(fn) {
        Object.entries(this.store).forEach(([k, v]) => {
            fn(k, v)
        })
    }
    map(fn) {
        for (let [k, v] of Object.entries(this.store)) {
            this.store[k] = fn(v)
        }
    }
    pop(key) {
        const item = this.store[key]
        delete this.store[key]
        return item
    }

    getValue() {
        return '0' in this.store ? Object.values(this.store) : this.store
    }

    constructor() {
        this.store = {}
    }
}

function cssTitanFooBar(item, dict) {
    const r = parens(Object.keys(dict).join('|')) + '(.*)'
    const match = search(r, item)
    if (match) {
        const [key, val] = match
        const [attr, fn] = dict[key] 
        const product = fn(val)
        return isArray(product) ? product : [attr, product]
    }
}
class CssLexer {
    constructor(s) {
        this.count = 0
        //this.parts = s.trim().split(/(?<!=) +(?!=)|\n */)
        this.parts = filtered(s.match(/\S+/g), ['{', '}'])
        //console.log(this.parts)
        this.name = ''
        this.store = []
        this.value = {}
    }

    parseCss(part, stopOnNull = false) {
        console.log(part, 'parsiiiiecss')
        let product = runCss(part)
        console.log(product, 'p')
        if (product) {
           this.store.push(product) 
        }

        else {
            this.value[this.name] = this.store
            this.store = []
            this.name = ''

            if (stopOnNull) {
                raise('stopping on null for parsecss')
            }
            else {
                this.parseName(part, true)
                return 1
            }
        }
    }
    parseName(part, stopOnNull = false) {
        console.log(part, 'part')
        if (this.count++ > 100) {
            console.log('too much')
            raise('too much')
        }

        if (test('^\\.', part)) {
            console.log(part, 'asdfasd')
            this.name += part + ' '
            return 0
        }

        else if (test('^' + ncg(hlist) + '\\b', part)) {
            console.log('in the ncg')
            this.name += part + ' '
            return 0
        }

        else if (test('^[+~,]$', part)) {
            console.log('has conector')
            this.name += part + ' '
            this.name += this.parts[this.index + 1] + ' '
            return 1
        }
        
        else {
            console.log(this.name, 'hiiiiiii')
            return stopOnNull ? raise('stop on null') : this.parseCss(part, true)
        }
    }
    run() {
        for (let i = 0; i < this.parts.length; i++) {
            this.index = i
            let part = this.parts[i]
            let result = this.parseName(part)

            if (result) {
                console.log('resutl is prsent', i)
                i += result
            }
        }
        console.log(this.value)
        return this.value
    }
}
class Lexer {
    constructor(s) {
        const regex = /(?<!=) +(?!=)|\n+ */
        this.parts = s.split(regex)
    }

    defineEntry() {
        
    }

    run() {
    console.log(this.parts)
       for (let i = 0; i < this.parts.length; i++) {
       }
    }
}


function stylize(element, x) {
    if (isString(x)) {
        let lexer = new CssLexer()
        lexer.tokenize(x)

    }
    if (isObject(x)) {
        x = x.reduce((acc, [a,b], i) => {
            let prefix = ''
            if (a == 'border') {
                prefix = '1px solid' 
            }

            if (isNumber(b)) {
                b += 'px'
            }
            else if (b in colormap) {
                b = colormap[b]
            }
            acc[a] = prefix + b
            return acc
        }, {})
    }

    extend(element.style, x)
}

function cssParser(s) {
    s = s.replace(/^(\.left|\.right) {/gm, '$1-container {')
    const regex = /^(\.[\w-]+) (.+)/gm
    const chunks = isString(s) ? findall(regex, s) : s

    return chunks.reduce((acc, [name, val]) => {
        return acc += cssParser3(name, val)
    }, '')
    return chunks
}

function cssParser3(name, val) {
    if (isString(val)) {
        val = splitcss(val)
    }

    const items = flat(val.map(runCss))
    const string = stringReduction(items, {
        delimiter: ': ',
        join: ';\n',
        alwaysJoin: true,
        indent: '    ',
    })
    return name + ' {\n' + string + '\n}\n\n'
}




function textify(s) { 
    if (test(/[a-z][A-Z]/, s)) {
        return s.replace(/[A-Z]/g, ' $&').toLowerCase()
    }

    if (test(/-/, s)) {
        return s.replace(/-/g, ' ').toLowerCase()
    }
}



function flat(arr) {
    return [].concat(...arr)
}

function loadcss(s) {
    if (!s || !isBrowser()) {
        return 
    }
    console.log('loading css')
    const el = document.createElement("style");
    el.innerHTML = s
    document.head.appendChild(el)
}



const samplemathquestions = [
  {
      singleton: true,
      math: true,
      questions: [
        {question:'4 + 7', answer: '11', type: 'Solve.',},
        {question: '\\frac{(x+3)(x+2)}{(x+2)}', answer: 'x+3', type: 'Simplify.'},
        {question: '2^x \\times  8^x = 8^{2x}', answer: 3, type: 'Find x.'},
      ]
  },

  {
    "id": "2012-AMC8-Q1",
    "question": "Rachelle uses $3$ pounds of meat to make $8$ hamburgers for her family. How many pounds of meat does she need to make $24$ hamburgers for a neighborhood picnic?",
    "choices": [
      "6",
      "6\\frac{2}3",
      "7\\frac{1}2",
      "8",
      "9"
    ],
    "answer": "9",
    "explanation": "3 pounds of meat for 8 hamburgers. 6 pounds for 16 hamburgers. 9 pounds for 24 hamburgers. The formula is 3:8 = x:24.",
    children: [
        {'question': 'bogga3', 'answer': '3', choices: [1,2,3,4,5]},
        {'question': 'bogga4', 'answer': '4', choices: [1,2,3,4,5]},
        {'question': 'bogga5', 'answer': '5', choices: [1,2,3,4,5]},
    ]
  },
  {
    tutorial: true,
    animation: [
        {text: 5, time: 0, position: [400,400]},
        {text: 'arrow', time: 4000, position: [50, 0], disappear: true, duration: 500},
        {text: 'Classical', time: 4050, position: [100, 0], disappear: true, duration: 1000},
        {html: h.p('sup'), time: 4100, position: [150, 150]},
    ],
  },
  {
    "id": "2012-AMC8-Q2",
    "question": "In the country of East Westmore, statisticians estimate there is a baby born every $8$ hours and $1$ death every day. To the nearest hundred, how many people are added to the population of East Westmore each year?",
    "choices": [
      "600",
      "700",
      "800",
      "900",
      "1000"
    ],
    "answer": "700",
    "explanation": "1 baby per 8 hours is 3 babies a day. After 1 death a day, that means there is a net gain of 2 people per day. After 1 year, that is 365 * 2 = 730. Rounded to the nearest 100, the answer is 700."
  },
  {
    "id": "2012-AMC8-Q3",
    "question": "On February 13 The Oshkosh Northwester listed the length of daylight as 10 hours and 24 minutes, the sunrise was $6:57am$, and the sunset as $8:15pm$. The length of daylight and sunrise were correct, but the sunset was wrong. When did the sun really set?",
    tip: "Adding 5:13PM plus 89 minutes is the same as adding 5:13PM + 47 minutes + 42 minutes. Getting to the nearest hour is often useful.",
    "choices": [
      "5:10pm",
      "5:21pm",
      "5:41pm",
      "5:57pm",
      "6:03pm"
    ],
    "answer": "5:21pm",
    "explanation": "57 minutes plus 24 minutes equal 81 minutes or 1 hour, and 21 minutes. The answer therefor has to end with 21 minutes.",
    "children": [
        {
            question: "John's clock is slow by 27 minutes. Steve's clock is fast by 32 minutes. At 4:43PM, (according to John's clock) John calls Steve to set up a meeting for 6:00PM. Based on an accurate clock, what time does Steve arrive at the meeting?",
            answer: '5:25PM',
            explanation: "Since Steve's clock is 32 minutes fast, he will arrive at the meeting 32 minutes early, 5:28PM.",
            choices: [
                '5:28PM',
                '5:32PM',
                '6:05PM',
                '6:27PM',
                '6:32PM',
            ]
        }
    ],
  },

]
//samplema




const motivation = [
    {'text': 'You can do it says the cat!', 'src': './s1.jpg'},
    {'text': 'You can do it says the dog!', 'src': './s2.jpg'},
]


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
  'z' 
]

function serialize(obj) {
    return Object.entries(obj).reduce((acc, [a,b], i, arr) => {
        const suffix = i < arr.length - 1 ? '&' : '' 
        return acc += a + '=' + String(b) + suffix
    }, '')
}

const emailObject = {
  //to: 'maylynnml@gmail.com',
  to: 'kdog3682@gmail.com',
  title: 'Math Questions',
  body: 'Herro. Your math questions are ready. www.maylynnml.github.io'
}
const userq = {
  username: 'maylynn',
  value: {
      question: '2 + 2 = ?',
      answer: 4,
      choices: [1,2,3,4,5],
  },
}
const sampleactions = [
    {
        name: 'email',
        value: emailObject,
    },

    {
        name: 'clear',
    },
]


function requestErrorHandler(x) {
    console.log('error at catching after receved promise.')
    console.log(x)
    return -1 
}
function requestSuccessHandler(x) {
    console.log('Request Success Handler:')
    try {
        const type = x.headers.get('content-type')
        const isJson = type && type.indexOf('application/json') !== -1
        console.log('Returning final response')
        return isJson ? x.json() : x.text()
    }
    catch(e) {
       console.log('error inside the fetch promise')
       console.log(e)
       return 'ffooooe ERROR'
    }
}
async function fetchMathQuestions(n) {
    const items = await grequest(null, {
        destination: 'math',
        column: n || 1,
    })

    if (!exists(items)) {
        return null
    }

    const result = JSON.parse(items).reduce((acc, item) => {
        const temp = JSON.parse(item[0])
        isArray(temp) ? acc.push(...temp) : acc.push(temp)
        return acc
    }, [])
    console.log(result)
    return result

}
async function postMathData(data) {
    return await grequest(data, {
        destination: 'math',
        mode: 'POST',
    }, sampleactions)
}
function request(url, data) {
    const options = exists(data) ? {
        method: 'POST',
        //mode: 'no-cors',
        headers: {
            'Content-Type': isString(data) ? 'text/plain' : 'application/json',
        },
        body: stringify(data)
    } : {method: 'GET'}
    return fetch(url, options).then(requestSuccessHandler).catch(requestErrorHandler)
}

async function askMathQuestion(data) {
    return await grequest(data, {
        sheetname: data.username || 'students',
        parent: 'students',
        mode: 'POST',
    }, sampleactions)
}
const sampleq = {
    question: '2 + 2 is 5?',
    id: 'sdf234234',
}

async function grequest(data, obj, actions) {
    let googleURL = gstring.trim().match(/^\S+/)[0] + '?'
    if (obj) googleURL += serialize(obj)
    const product = await request(googleURL, {data, actions})
    console.log(product)
    return product
}

function print(...args) {
    if (typeof window !== 'undefined') {
        return
    }
    console.log(generateLineNumber())
    console.log(...args)
}

function isNull(x) {
    return x === null
}

function toArray(val) {
  if (!isArray(val)) {
     val = [val]
  }
  return val
}

const myhelpers = [
  "tl",
  "len",
  "ncg",
  "rpwo",
  "test",
  "type",
  "self",
  "read",
  "noop",
  "pipe",
  "hint",
  "isDef",
  "write",
  "clock",
  "hlist",
  "Lexer",
  "merge",
  "create",
  "insert",
  "joined",
  "search",
  "unique",
  "sorted",
  "hasOwn",
  "isTrue",
  "indent",
  "exists",
  "extend",
  "cached",
  "remove",
  "findall",
  "deptree",
  "compose",
  "rescape",
  "cleaned",
  "stylize",
  "isArray",
  "replace",
  "quotify",
  "isFalse",
  "isUndef",
  "toNumber",
  "smallify",
  "isObject",
  "TextEdit",
  "filtered",
  "identity",
  "CssLexer",
  "toString",
  "isNumber",
  "isString",
  "mreplace",
  "evaluate",
  "toSpaces",
  "isRegExp",
  "getSpaces",
  "myhelpers",
  "isBrowser",
  "isPromise",
  "parseJSON",
  "myexports",
  "finderror",
  "templates",
  "linebreak",
  "stringify",
  "splitonce",
  "getchunks",
  "varialize",
  "getIndent",
  "selfclean",
  "templater",
  "isFunction",
  "getImplied",
  "filtertwice",
  "partitioned",
  "sortfactory",
  "isPrimitive",
  "stringbuilder",
  "createlibrary",
  "getParameters",
  "getdependencies",
  "vuecomponentmaker"
]

function myexports() {
    if (isBrowser()) {
        return
    }
    module.exports = {
        tl,
        len,
        ncg,
        rpwo,
        test,
        type,
        self,
        read,
        noop,
        pipe,
        hint,
        isDef,
        write,
        clock,
        hlist,
        merge,
        create,
        insert,
        joined,
        search,
        unique,
        sorted,
        hasOwn,
        isTrue,
        indent,
        exists,
        extend,
        cached,
        remove,
        findall,
        deptree,
        compose,
        rescape,
        cleaned,
        isArray,
        replace,
        quotify,
        isFalse,
        isUndef,
        toNumber,
        smallify,
        isObject,
        TextEdit,
        filtered,
        identity,
        toString,
        isNumber,
        isString,
        mreplace,
        evaluate,
        toSpaces,
        isRegExp,
        getSpaces,
        myhelpers,
        isBrowser,
        isPromise,
        parseJSON,
        myexports,
        finderror,
        templates,
        linebreak,
        stringify,
        splitonce,
        getchunks,
        varialize,
        getIndent,
        selfclean,
        templater,
        isFunction,
        getImplied,
        filtertwice,
        partitioned,
        sortfactory,
        isPrimitive,
        stringbuilder,
        createlibrary,
        getParameters,
        getdependencies,
        vuecomponentmaker
    }
}

const templates = {
    function: 'function $1($[1:-1]) {\n${indent($-1)}\n}',
    vue: {
        'component':  "const main = {\n    template: `\n        \n    `,\n    data() {\n        return {\n            \n        }\n    },\n    methods: {\n\n    },\n    computed: {\n\n    },\n    watch: {\n\n    },\n    mounted() {\n\n    },\n    render(h) {\n\n    }\n}",
        'asdfasfasdf': '',
        'asdfasfasdf': '',
        'asdfasfasdf': '',
    },
    alabaster: {
       'joe': 'adfasdf', 
    },

}


const create = {
    imports(arr, file = 'helpers.js') {
        const prefix = '{'
        const suffix = '}'
        const imports = prefix + '\n' + indent(arr.join(',\n')) + '\n' + suffix
        return 'const ' + imports + ' = require(\'./' + file + '\')' + '\n\n'
    },

    exports(arr) {
        const prefix = '{'
        const suffix = '}'
        const exports = prefix + '\n' + indent(arr.join(',\n')) + '\n' + suffix
        return 'module.exports = ' + exports
    },
    function(name, params, body) {
        const items = [
            name,
            ...params,
            body,
        ]
        return templater(templates.function, items)
    }
}

function noop(a, b, c) {
}

function identity(s) {
    return s
}

function isTrue(v) {
    return v === true
}

function isFalse(v) {
    return v === false
}

function doublequote(s) {
    return "\"" + s + "\""
}

function quotify(s) {
    return "\`" + s + "\`"
}

function isArray(a) {
    return Array.isArray(a)
}

function tl(...args) {
    if (isBrowser()) {
        return
    }
    print(...args)
    throw "tl error stop " 
}

function generateError() {
    try {
        Error.stackTraceLimit = 10
        throw new Error()
    }
    catch(e) {
        return getErrorInfo(e)
    }
}

function generateLineNumber() {
    const stack = generateError().stack
    //console.log(stack)
    const printline = Number(stack[3][1])
    const callingline = stack[4] ? Number(stack[4][1]) : null
    return callingline ? [printline, callingline] : printline
}

function getErrorInfo(e) {

    let name, message
    if (e.name == 'Error') {
        message = null
        name = 'Error'
    }
    if (!isString(e)) {
        e = e.stack ? e.stack : e.foo ? e.foo : e.toString()
    }
    if (e.length < 20) {
        return ['custom-error', e, []]
    }
    const regexA = /(\S+?): (.*?)\s+at/
    const regexB = /at (.*?) \(.*?:(\d+)/g
    if (!name) {
        ;[name, message] = search(regexA, e)
    }
    // let start = e.indexOf('MyError')
    let start = 0
    let end = e.indexOf('Module.')
    const stack = findall(regexB, e.slice(start, end))
    return {name, message, stack}
}



function linebreak() {
    print('-'.repeat(20))
}


function prepareIterable(data, mode) {
    if (isString(data)) {
        return [data]
    }
    if (isObject(data)) {
        return Object[mode](data)
    }
    return data
}


function ncg(x, capture = false, escape = false) {
    x = prepareIterable(x, 'keys')
    if (escape) x = x.map(rescape)
    const prefix = capture ? '(' : '(?:'
    return prefix + x.join('|') + ')'
}

function isString(s) {
    return typeof s === 'string'
}

function isFunction(x) {
    return typeof x === 'function'
}

function isDef(v) {
    return v !== undefined && v !== null
}

function isUndef(v) {
    return v === undefined || v === null
}

function toString(s) {
    return isString(s) ? s : s.join('\n')
}

function len(x) {
    return x.length || Object.keys(x).length || 0
}

function toSpaces(n = 4) {
    return isNumber(n) ? ' '.repeat(n) : n
}

function isObject(x) {
    return x !== null && typeof x === 'object' && !Array.isArray(x)
}

class CumulativeStorage {
    constructor() {
        this.store = {}
    }

    get value() {
        return this.store
    }

    get(k, fallback) {
        return this.store[k] || fallback
    }

    add(k, v) {
        if (!v) return
        if (this.store.hasOwnProperty(k)) {

            if (isString(this.store[k])) {
                this.store[k] = [this.store[k], v]
            }
            else {
                isArray(v) ? 
                    this.store[k].push(...v) : this.store[k].push(v)
            }
        }
        else {
            this.store[k] = v
        }
    }
}

class SimpleStorage {
    constructor()    { this.store = {} }
    get value()      { return this.store }
    get(k, fallback) { return this.store[k] || fallback }
    has(k)           { return this.store.hasOwnProperty(k) }

    add(k, v) {
        if (!v) return
        this.store.hasOwnProperty(k) ? this.store[k].push(v) : this.store[k] = [v]
    }

    transform(map) {
        for (let [k, v] of Object.entries(map)) {
            if (exists(this.get(k)) && v) this.store[k] = v(this.store[k])
        }
    }
}

function pipe(...fns) {
    return (x) => fns.reduce((y, f) => f(y), x)
}

function read(file) {
    const fs = require('fs')
    return parseJSON(fs.readFileSync(file, 'utf8'))
}

function rescape(s) {
    return s.replace(/[\\[*+?()|^${}\[\]]/g, '\\$&')
}

function insert(arr, index, payload) {
    isArray(payload) ? 
        arr.splice(index + 1, 0, ...payload) : 
        arr.splice(index + 1, 0, payload)
}

function isNumber(s) {
    return typeof s == 'number' || test('^-?\\d+$', s)
}

function stringify(s) {
    if (!s) {
        return null
    }
    return isPrimitive(s) ? s : JSON.stringify(s, null, 2)
}

function getchunks(s) {
    const r = /(?<!^)\n+(?=[\w.#])/
    return s.split(r)
}

function toNumber(val) {
    var n = parseFloat(val)
    return isNaN(n) ? val : n
}

function isRegExp(v) {
    Object.prototype.toString.call(v) === '[object RegExp]'
}

function compose(...fns) {
    return (x) => fns.reduceRight((acc, f) => f(acc), x)
}

function getIndent(s) {
    if (isNumber(s)) return s
    return getSpaces(s).length
}

function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key)
}

function type(x) {
    return search(/object (\w+)/, Object.prototype.toString.call(x))
}

function varialize(name, value) {
    return 'const ' + name + ' = ' + stringify(value) 
}

function indent(s, n = 4) {
    if (n) return s.replace(/^/gm, toSpaces(n))
    return s
}

function extend(a, b) {
    if (!b) return a
    for (let key in b) {
        a[key] = b[key]
    }
    return a
}

function getParameters(fn) {
    let s = search(/\(.*?\)/, fn.toString())
    return s.match(/\w+/g)
}

function getSpaces(s) {
    try {
        return s.match(/^ */)[0]
    } catch {
        return ''
    }
}

function sortfactory(fn) {
    function wrapper(a, b) {
        return fn(a) - fn(b)
    }
    return wrapper
}

function unique(a, b) {
    if (b) return a.filter((item) => !b.includes(item))
    return Array.from(new Set(a))
}

function smallify(x) {
    return x.length == 0 ?
        null :
        x.length == 1 ?
        x[0] :
        x
}

function sorted(items, fn) {
    if (!fn) {
        fn = len
    }
    items.sort(sortfactory(fn))
    return items
}

function test(regex, s, flags = '') {
    if (isString(regex)) regex = RegExp(regex, flags)
    return regex.test(s)
}

function parseJSON(s) {
    s = s.trimStart()
    if (test('^[\'"]?[{\\[]', s)) {
        return JSON.parse(s)
    }
    return s
}

function append(file, content) {
    const fs = require('fs')
    content = stringify(content)
    fs.appendFileSync(file, '\n' + content)
    print('appending:', file)
}

function write(file, content) {
    const fs = require('fs')
    content = stringify(content)
    fs.writeFileSync(file, content)
    print('writing:', file)
}

function cleaned(s) {
    const regex = /^ *(?:\w+\s*=\s*(?<!\\)`[^]+?(?<!\\)`|\/\/|\/\*[^]*?\*\/).*\n+/gm
    return s.replace(regex, '').trim()
}

function isPromise(val) {
    return (
        isDef(val) &&
        typeof val.then === 'function' &&
        typeof val.catch === 'function'
    )
}

function getImplied(s) {
    let res = hint(s)
    return res.implieds && res.implieds.length > 0 ?
        res.implieds.map(x => x.name) :
        []
}

function replace(regex, replacement, s, flags = 'gm') {
    if (isString(regex)) regex = RegExp(regex, flags)
    return s.replace(regex, replacement)
}

function splitonce(s, delimiter = '\\s') {
   s = s.trim()
   const match = s.match(RegExp('^(.*?)' + delimiter + '([^]+)$'))
   if (match) {
       return match.slice(1)
   }
   return [s, '']
}

function evaluate(x) {
    try {
       return {value: eval(x), success: true}
    } catch(e) {
       return {value: getErrorInfo(e), success: false}
    }
}

function filtertwice(items, fn) {
   const a = [] 
   const b = []
   for (let item of items) {
       fn(item) ? a.push(item) : b.push(item)
   }
   return [a, b]
}

function remove(arr, item) {
    if (arr.length) {
        var index = arr.indexOf(item)
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}

function cached(fn) {
    var cache = Object.create(null)
    return function cachedFn(str) {
        var hit = cache[str]
        return hit || (cache[str] = fn(str))
    }
}

function merge(a, b) {
    if (isString(a) && isString(b)) return a.trim() + '\n' + b.trim()
    if (isObject(a) && isObject(b)) return { ...a, ...b }
    if (isArray(a)) return a.concat(b)
}

function joined(items) {
    if (!items) return ''
    if (isString(items)) return items
    let s = ''
    for (let item of items) {
        if (item.includes('\n')) {
            item += '\n'
        }
        s += item + '\n'
    }
    return s.trim()
}

function isPrimitive(value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'symbol' ||
        typeof value === 'boolean'
    )
}

function search(regex, s, flags = '') {
    if (isString(regex)) regex = RegExp(regex, flags)

    const match = s.match(regex)

    return !match ? 
        null :
        match.length == 1 ?
        match[0] :
        match.length == 2 ?
        match[1] :
        match.slice(1)
}

function filtered(items, fn) {
    if (isObject(items)) {
        return Object.entries(items).reduce((acc, [k,v], i) => {
            if (fn(k,v)) {
                acc[k] = v
            }
            return acc
        }, {})
    }
    if (isArray(items)) {
        return isFunction(fn) ? items.filter(fn) : unique(items, fn)
    }
}

function exists(input) {
    if (input == null) return false
    if (isNumber(input)) return true
    if (isString(input)) return input.trim().length > 0
    if (isArray(input)) return input.length > 0
    if (isObject(input)) return Object.keys(input).length > 0
    if (isTrue(input)) return true
}

function finderror(file) {
    s = read(file)
    chunks = getchunks(s)
    //console.log(chunks)
    for (let chunk of chunks) {
        try {
            //if (chunk.startsWith('const')) continue
            if (chunk.includes('`')) continue
            eval(chunk)
        }
        catch (e) {
            if (e.constructor.name == 'ReferenceError') {
                continue
            }
            print(e, chunk)
        }
    }
}

function hint(source) {
        const predef = {
            Vue: true,
            prettier: true,
        }
        const options = {
            asi: true,
            debug: true,
            evil: true,
            eqnull: true,
            esversion: 6,
        }
        JSHINT.jshint(source, options, predef)
        return JSHINT.data()
}

function extract() {
    let file = 'vh.js'
    //const regex = /^const.*?`\n[\w\W]+?(?<!\\)`.*\n?|^\/\/.+|^\/\*[^]+?\*\/.*\n?/gmi
    const regex = /^const.*?component = {[\w\W]+?\n}\n*|^const \w+ ?=\s*`\n[\w\W]+?\n`.*\n*/gmi
    let s = read(file)
    const [text, store] = mreplace(regex, s)
    console.log(store)
    return

    store.sort((a,b) => a.length - b.length)
    append('vh2.js', joined(store))
    write(file, text)
}
function appendfilename(file, s) {
    return file.replace(/(?=\.\w+$)/, s)
}
function createlibrary(s) {
    s = cleaned(s)
    const regex = /(?<=\n|^)(const (\w+) = (?:(?:[`\[\{][^]+?\n[`\}\]])?.*)|(?:(?:\w+\.prototype\.([\w$]+))|(?:(?:async )?function|class) ([\$\w]+))[^]+?\n}\)?)/g

    const matches = findall(regex, s)
    return matches.reduce((acc, [a,b,c,d], i) => {
        if (a) acc[b || c || d] = a
        return acc
    }, {})
}

function stringbuilder(...args) {
    let lib
    let keys
    let items

    if (args.length == 1) {
        lib = args[0]
        items = Object.values(lib)
    }
    else if (args.length == 2) {
        keys = args[0]
        lib = args[1]
        items = keys.map(x => lib[x])
    }

    const lensort = sortfactory(len)
    const partitions = partitioned(
        items,
        /^const/, 
        /^function/
    )

    const product = partitions.reduce((acc, partition, i) => {
        partition.sort(lensort)
        acc += partition.join('\n\n') + '\n\n'
        return acc
    }, '')
    return product
}

function findall(regex, s, flags = 'g') {
    if (isString(regex)) regex = RegExp(regex, flags)

    let store = []
    let match
    s = s.trim()

    while (exists(match = regex.exec(s))) {
        const product = smallify(Array.from(match).length == 1 ? 
            match[0] : 
            match.slice(1)
        )

        store.push(product)
    }
    return store
}

function mreplace(regex, replacement, s, flags = 'g') {
    if (!s) {
        s = replacement
        replacement = ''
    }
    const store = []
    function parser(...args) {
        const match = args.length == 3 ?
            args[0] :
            args.length == 4 ?
            args[1] :
            filtered(args.slice(1, -2), isDef)

        store.push(match)
        return isString(replacement) ? replacement : replacement(...args)
    }
    const text = replace(regex, parser, s, flags).replace(/^\n+/, '').trimEnd()
    return [text, store.length > 0 ? store : null]
}

function getdependencies(name, lib, ignore = []) {
    let store = []
    let errors = []

    function runner(name) {
        if (errors.includes(name) || ignore.includes(name) || store.includes(name)) {
            return 
        }
        let text = lib[name]
        if (!text) {
            errors.push(name)
            return 
        }
        store.push(name)
        let children = getImplied(text)
        for (let child of children) {
            runner(child)
        }
    }
    runner(name)
    return store
}

function partitioned(items, ...args) {
    const store = []
    for (let i = 0; i <= args.length; i++) store.push([])

    for (let item of items) {
        let found = false
        for (let i = 0; i < args.length; i++) {
            if (isUndef(args[i])) {
                continue
            }

            const check = isFunction(args[i]) ? args[i] : (s) => test(args[i], s)       
            if (check(item)) {
                found = true
                store[i].push(item)
                break
            }
        }
        if (!found) store[store.length - 1].push(item)
    }
    return store
}


function deptree(name, lib, ignore = []) {
    print('starting dep tree with input', name)
    print(len(lib))
    let store = []
    let errors = []

    function runner(name, tree = {}) {
        if (errors.includes(name) || ignore.includes(name) || store.includes(name)) {
            return 
        }
        let text = lib[name]
        if (!text) {
            errors.push(name)
            return 
        }
        tree[name] = {}

        for (let child of getImplied(text)) {
            runner(child, tree[name])
        }
    }
    let tree = {}
    runner(name, tree)
    return {tree, store, errors}
}

function selfclean2() {
    rpwo((s) => {
        lib = createlibrary(s)
        const keys = Object.keys(lib)
        const newkeys = unique(keys, myhelpers)

        //keys = varialize('myhelpers', basekeys)
        partitions = partitioned(
            Object.values(lib), 
            /^const myhelpers|^function myexports/, 
            /^const/, 
            /^function/
        )
        partitions.shift()

        product = partitions.reduce((acc, partition, i) => {
            partition.sort(lensort)
            acc += partition.join('\n\n') + '\n\n'
            return acc
        }, '')

        exports = create.exports(basekeys)
        exports = create.function('myexports', [], exports)

        let extra = 'selfclean(true)'
        product = keys + '\n\n' + exports + '\n\n' + product + '\n\n' + extra
        return preview ? null : product

    })
    return 
}

function selfclean() {
    rpwo((s) => {
        lensort = sortfactory(len)
        lib = createlibrary(s)
        basekeys = sorted(Object.keys(lib))
        const newkeys = unique(basekeys, myhelpers)

        //keys = varialize('myhelpers', basekeys)
        partitions = partitioned(
            Object.values(lib), 
            /^const myhelpers|^function myexports/, 
            /^const/, 
            /^function/
        )
        partitions.shift()

        product = partitions.reduce((acc, partition, i) => {
            partition.sort(lensort)
            acc += partition.join('\n\n') + '\n\n'
            return acc
        }, '')

        exports = create.exports(basekeys)
        exports = create.function('myexports', [], exports)

        let extra = 'selfclean(true)'
        product = keys + '\n\n' + exports + '\n\n' + product + '\n\n' + extra
        return preview ? null : product

    })
    return 
}

function rpwo(...args) {
    if (isBrowser()) return 

    function read(file) {
        return parseJSON(fs.readFileSync(file, 'utf8'))
    }

    function write(file, content) {
        content = stringify(content)
        fs.writeFileSync(file, content)
        print('writing:', file)
    }

    let product
    let outpath

    if (args[0] === null) {
        return
    }

    const fs = require('fs')
    print('starting rpwo')
    let date = datestamp()

    if (isFunction(args[0])) {
        product = args[0](read(__filename), __filename, date)
        outpath = __filename
    }
    else if (args.length == 2) {
        product = args[1](read(args[0]), args[0], date)
        outpath = args[0] 
    }
    else if (args.length == 3) {
        outpath = args[2]
        product = args[1](read(args[0]), args[0], date)
    }

    if (!product) {
        throw 'No product'
    }
    else {
        print('printing product')
        print(product)
        if (outpath) write(outpath, product)
    }
    tl( 'Done' )
}

function clock(
    {
        onend = print,
        condition = () => null,
        ontick = print,
        duration = 3000,
        increment = 1000,
        context = null,
        at = null,
    } = {},
    ...args
) {
    let count = 0
    let id = null
    let currentAt = null

    if (at) {
        currentAt = at[0][0] * 1000
    }

    function ticker(count, duration) {
        if (count === currentAt) {
            at.shift()[1](...args)
            if (at.length > 0) {
                currentAt = at[0][0] * 1000
            }
            else {
                currentAt = null
            }
        }
        ontick(count, duration)
    }

    function runner() {
        count += increment
        id = setTimeout(() => {
            ticker(count, duration)
            if (count >= duration || condition()) {
                clearTimeout(id)
                return onend(...args, 'FINISHED')
            } else {
                runner()
            }
        }, increment)
    }

    return runner()
}

function vuecomponentmaker(text) {
    let regex = /^(?:const main = |new Vue\(){[^]+?\n}\)?/m
    return replace(regex, parser, text)

    if (!template) {
        template = templates.vue.component
    }

    function parser(template) {
        const regex = /this\.(\w+)/g
        const matches = unique(findall(regex, text))
        const partitioner = (s) => test('function ' + s + '|' + s + '\\(', text)
        const [methodItems, dataItems] = filtertwice(matches, partitioner)
        const fallback = 'foobar'
        const alreadypresent = (s) => {
            return !test(s + ',', template)   
        }
            
        const vue = {
            data: {
                regex: '        return {',
                format: (items) => {
                    return items.map(x => x + ': ' + quotify(fallback)).join(',\n')
                },
                item: dataItems,
            },

            methods: {
                regex: /methods: {/,
                format: (items) => items.filter(alreadypresent).join(',\n') + ',',
                item: methodItems,
            },
        }

        editor = new TextEdit(template)
        for (let key of ['methods']) {
            let product = vue[key].format(vue[key].item)
            editor.insertBelow(vue[key].regex, product)
        }
        return editor.value
    }
}

function templater(template, parts, line, spaces, fallback) {
    if (!line) line = ''
    if (!spaces) spaces = ''
    parts = toArray(parts)
    function parser(x, modifier) {

        if (x == 0) {
            return modifier(line) 
        }

        else if (x.endsWith(']')) {
            let [a,b] = x.match(/[-\d]+/g)
            a = toNumber(a) + 1
            b = toNumber(b)
            let s = parts.slice(a, b).join(', ')
            return modifier(s)
        }

        else if (isNumber(x)) {
            x = Number(x)
            let part = x < 0 ? parts[parts.length + x] : parts[x - 1]
            return part ? modifier(part) : 
                fallback ? 
                fallback :
                '\1'
        }

        else {
            x = x.slice(1, -1)
            x = runner(x, quotify)
            const p = eval(x)
            return p
        }
        
    }

    function runner(template, modifier = identity) {
        return template.replace(/\$(-?\d+|\{.*?\}|\[.*?\])/g, (_, x) => {
            return parser(x, modifier)
        })
    }

    template = runner(template)
    template = indent(template, spaces)

    let lines = template.split(/(?<![\'\"])\n(?![\'\"])/)
    let cursorpos = null

    for (let i = 0; i < lines.length; i++) {
        let ch = lines[i].search(/\$c/)
        if (ch > -1) {
            cursorpos = [i, ch]
            break
        }
    }

    template = template.replace(/\$c| ?\1,? */, '')

    if (cursorpos) {
        return [template, cursorpos]
    }
    else {
        return template
    }
}

function self() {
    if (isBrowser()) {
        print('we are in the browser')
        return
    }
    print('starting self functions')

    rpwo('javascript.lib', (s) => {
        print('adfasdfadsf')
        return getdependencies('runCss', s, myhelpers)
    }, 'info.json')
    return 

    rpwo(null, s => {
        s = replace(/^\w.*?(?<!\\)`[^]+?(?<!\\)`.*/gm, '', s) //blockstringRE
        s = replace(/^ *(?:\w+\s*=\s*(?<!\\)`[^]+?(?<!\\)`|\/\/|\/\*[^]*?\*\/).*\n+/gm, '', s) //everything
        b = read('a.js')
        return 's = `' + b + '`\n\n' + s
        return s
    })
    rpwo(null, process.argv[2], vuecomponentmaker)
    rpwo(null, 'vuehelpers.js', finderror, null)

    rpwo(null, 'katex.js', (s) => {
        lib = createlibrary(s)
        lib = filtered(lib, (k, v) => {
           return !helpers.includes(k) 
        })
        return lib

        s = stringbuilder(lib)
        imports = create.imports(helpers)
        s = imports + '\n\n' + s
        tl( s )

    }, 'math.js.lib')

        rpwo(null, 'dictionaries.js', (s) => {
            s = s.replace(/^ +(?:}|let)/gm, '$1')
            s = s.replace(/^ +/gm, '    ')
            return s
        })

        rpwo(null, '/home/kdog3682/.vimrc', (s) => {
            s = s.replace(/(?<=^ *)\\|\bg:/gm, '')
            s = s.replace(/^ +let/gm, 'const')
            r = /^ *let \w+?dict = \{\n[^]+?\n *}\n/gm

            pd = findall(r, s).filter(x => {
                return x
            })

            s = joined(pd)
            s = s.replace(/^ +}\n/gm, '}\n')
            s = s.replace(/^ +/gm, '    ')
            return s
        }, 'dictionaries.js')
}



class LineEdit {
    get value() {
        return this.listStore ? 
            this.listStore.filter(isDef).join('\n') :
            this.lines.filter(isDef).join('\n')
    }
    constructor(text, options = {}) {
        this.init(text)
        this.tracker = {}
        this.store = {}
        this.listStore = []
        isObject(options) ? 
            autobind(this, options) :
            this.runner = options.bind(this)
    }

    init(text) {
        if (text && !this.text) {
            this.text = text.trim()
            this.lines = this.text.split('\n')
            this.index = 0
        }
    }

    run(text) {
        this.init(text)

        for (let i = 0; i < this.lines.length; i++) {
            if (!exists(this.lines[i])) {
                continue
            }

            this.index   = i
            let spaces   = getIndent(this.lines[i])
            const result = this.runner(this.lines[i], spaces)
            if (result)    this.listStore.push(indent(result, spaces))
        }

        return this.value
    }

    runner(original, spaces) {
        let line = original.trim().replace(/^ *}| *{$/g, '')
        let mode = isEnter(original) ? 'enter' :
                   isExit(original)  ? 'exit': 'normal'

        let ENTER_STATUS  = 'enter'
        let EXIT_STATUS   = 'exit'
        let NORMAL_STATUS = 'normal'
    
        if (mode == ENTER_STATUS) {
            this.tracker[spaces] = line
            return this.onEnter(line, spaces)
        }

        else if (mode == EXIT_STATUS) {
            let ref = this.tracker[spaces]
            return this.onExit(line, spaces, ref)
        }

        else if (mode == NORMAL_STATUS) {
            if (test('^ *<', line)) {
                return line
            }
            return this.onNormal(line, spaces)
        }
    }
}


//tl(write('foo.html', webdrafter(read('foo.html'))))

function deepMerge(a, b, overwrite = false) {
    if (isUndefined(a)) a = {}
    if (isNumber(a) && isNumber(b)) {
        return a + b
    }
    if (isString(a) && isString(b)) {
        const delimiter = a.startsWith('\n') ? '' : '\n'
        return overwrite ? a.trimEnd() + delimiter + b.trimEnd() : a.trimEnd()
    }
    if (isArray(a) && isArray(b)) {
        return [...a, ...b]
    }
    if (isObject(b)) {
        const keys = Object.keys(b)
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            if (a[key]) a[key] = deepMerge(a[key], b[key], overwrite)
            else a[key] = b[key]
        }
        return a
    }
    return a
}
function toDictionary(aa) {
    if (isArray(aa[0])) {
    return aa.reduce((acc, [a,b], i) => {
        acc[a] = b
        return acc
    }, {})
    }
    const store = {}
    for (let i = 0; i < aa.length; i+=2) {
        if (aa[i + 1]) store[aa[i]] = aa[i + 1]
    }
    return store
}


function second(fn) {
    // this function is a mapping helper.
    function wrapper(x, i) {
        if (i == 0) return x
        if (i == 1) return fn(x)
    }
    return wrapper
}

function getLineElements(line) {
    let parts = line.trim().split(/(?<!=) (?!=)/)
    let classes = []
    let attrs = {}
    let text = ''
    let css = []
    let awaitingCss = true 

    for (let i = 0; i < parts.length; i++) {
        let part = parts[i]
        if (i == 0) {
            if (parts.length == 1) {
                if (part in htmlpresetmap) {
                    return htmlpresetmap[part]
                }
                else {
                    return ['div', parts[0]]
                }
            }
            else {
                tag = htmltagaliasmap[part] || part
            }
        }

        else if (test('=', part)) {
            let [a,b] = part.split(/ *= */)
            if (a in vmap) a = vmap[a]

            else if (!a.startsWith('v-')) {
                a = ':' + a
            }
            attrs[a] = b
        }
        else if (test('^\\.', part)) {
            classes.push(part.slice(1))
        }
        else {
            if (awaitingCss) {
                let match = runCss(part, false)
                if (match) {
                    css.push(...match)    
                }
                else {
                    text += part + ' '
                    awaitingCss = false
                }
            }
            else {
                text += part + ' '
            }
        }
    }

    if (exists(css))     attrs.style = css.reduce((acc, [k,v]) => {
        return acc += k + ': ' + v + '; '
    }, '').trim()

    if (exists(classes)) attrs.class = classes.join(' ')
    
    text = text.trim().replace(/\w+\.\w+/g, '{{$&}}')
                      .replace(/\[(.*?)\]/g, '{{$1}}')
                      .replace(/this\.(\S+)/g, '{{$1}}')

    return [tag, attrs, text]
}
function getLineElements2(line, dataset) {
    if (isSingleWord(line)) {
        dataset = dataset ? ' ' + Object.entries(dataset)[0].map(second(doublequote)).join('=') : ''
        if (line == 'div') {
            return ['div', dataset]
        }
        return ['div', ' class="' + line + '-container"' + dataset]
        // add in the container thing here.
        return ['div', 'class="' + line + '"', null, null]
    }

    //const regex = /^([v\.]?)(\w+)(?:\.(\w+))?((?: \S+?=\S+)*)(?: (\w+.*))?/
    const regex = /^([v\.]?)(\w+)(?:\.(\w+))?( .*)/
    //const regex = /^([\w.]+) ?(.*)/

    let isComponent = false
    console.log(line, 'asdfasdf')
    let [dot, el, tag, rest] = search(regex, line)
    let [text, attrs] = mreplace(/(\S+?)=(\S+)/g, rest.trim())
    if (!attrs) {
        attrs = {}
    } else {
        attrs = toDictionary(attrs)
    }

    if (dataset) {
        extend(attrs, dataset)
    }


    if (!text) text = ''
    let classes = []

    const dict = {
        'b': 'button',
        'd': 'div',
        'i': 'input',
    }


    if (el in dict) {
        el = dict[el]
    }


    if (dot == '.') {
        classes.push(el)
        el = 'div'
    } else if (dot == 'v') {
        isComponent = true
    }

    if (tag) {
        let hyphenated = hyphenate(tag)
        classes.push(hyphenated)
        if (!text) {
            text = hyphenated.replace(/-/g, ' ')
        }

    }

    if (text) { 
        if (isSingleWord(text)) {
            let hyphenated = hyphenate(text)
            classes.push(hyphenated)
            text = '{{' + text + '}}'
        }
        else if (text.includes('[')) {
            text = dreplace(s, {'[': '{{', ']': '}}'}, 'gme')
        }
    }

    if (el == 'button') {
        if (!attrs.emit && !attrs.click || tag) {
            attrs.click = tag
        }
        if (!text) {
            text = textify(attrs.emit || attrs.click)
        }

        if (!classes.length > 0) {
            classes.push('button-' + hyphenate(attrs.emit || attrs.click))
        }
    }

    if (classes.length > 0) {
        attrs.classes = classes
    }

    let s = ''
    for (let [k, v] of Object.entries(attrs)) {
        if (k == 'emit') {
            s += '@click="$emit(\'' + hyphenate(v) + '\')" '
        }

        else if (k == 'else') {
            s += 'v-else'
        }
        else {
            s += vmap[k] || k
            s += '='
            s += doublequote(isArray(v) ? v.join(', ') : v)
            s += ' '
        }
    }
    if (s) {
        s = ' ' + s.trim()
    }
    return [el, s, text, isComponent]
}


s = `
.foo {
    bgred flex
}

.phrase {
    bgred flex
}
`


function toOpeningTag(el, attrs) {
    attrs = isString(attrs) ? 'class=' + doublequote(attrs) : toCssAttrString(attrs)

    let spaces = exists(attrs) ? ' ' : ''

    const suffix = hasHtmlSuffix(el) ? '>' : '/>'
    return '<' + el + spaces + attrs + suffix
}

function toHtmlLine(el, attrs, text, isComponent) {

   let s = toOpeningTag(el, attrs)
   s += text
   s += toClosingTag(el)
   return s
}

function hasHtmlSuffix(el) {
    const items = ['style', 'script', 'body', 'ul', 'li', 'p', 'textarea', 'button', 'section', 'div', 'h1', 'h2', 'h3']
    return items.includes(el)
}

function toClosingTag(el) {
    if (noclosers.includes(el)) return ''
    return hasHtmlSuffix(el) ? '</' + el + '>' : '</div>'
}


function simplepug(s, mode, preview) {
    if (!isBrowser() && !preview) {
        return
    }
    s = removeComments(s)
    const config = {
       onEnter: (line, spaces) => toOpeningTag(...getLineElements(line)),
       onNormal: (line, spaces) => toHtmlLine(...getLineElements(line)),
       onExit:   (a, b, ref) => toClosingTag(ref),
    }

    let [text, css] = mreplace(/^([#\.].*?) (.+)/gm, s)
    const editor = new LineEdit(text, config)
    try {
        if (css) {
            css = cssParser2(css, true)
        }

        if (isBrowser()) {
            loadcss(css)    
        } 
        const value = editor.run()

        if (mode) {
            return [value, css ? css : '']
        }
        print(value)
        print(css)
        return value
    }
    catch (e) {
        console.log(e)
        console.log(text)
        console.log(css)
    }
}
function simplepugold(s) {
    s = removeComments(s).trim()

    function datafactory(go) {
        if (!go) return () => null

        let count = 0
        function wrapper(spaces) {
            const attributes = {
                ['data-spaces']: count++ + ':' + spaces
            }
            return attributes
        }
        return wrapper
    }

    const data = datafactory(false)

    const config = {
       onEnter: (line, spaces) => toOpeningTag(...getLineElements(line, data(spaces))),
       onNormal: (line, spaces) => toHtmlLine(...getLineElements(line, data(spaces))),
       onExit:   (a, b, ref) => toClosingTag(ref),
    }

    let [text, css] = mreplace(/^(\..*?) (.+)/gm, s)
    if (css) css = cssParser2(css, true)

    if (isBrowser()) {
        loadcss(css)    
    } else {
        print(css)
    }
    const editor = new LineEdit(text, config)
    const value = editor.run()
    print(value)
    return value
}

function isNestedArray(x) {
    return isArray(x) && isArray(x[0])
}

function cssParser2(store, comments = false) {
    if (!isArray(store[0])) store = [store]
        
    return store.reduce((acc, [name, val]) => {
        name = cssNameFix(name)
        const items = flat(val.trim().split(' ')).map(el => runCss(el, true))
        const store = []

        for (let item of items) {
            isNestedArray(item) ? 
                item.forEach(el => store.push(el.join(': '))) : 
                store.push(smallify(item))
        }
        let s = store.map(item => '    ' + addSuffix(item, ';')).join('\n')
        return acc += name + ' {\n' + s.trimEnd() + '\n}\n\n'
    }, '')
}

class TextEdit extends LineEdit {
    constructor(text) {
        super(text)
    }

    insert(regex, payload, direction) {
        let index = this.sprawlTo(regex)
        let line = this.getline(index)
        let spaces = getSpaces(line)
        if (direction > -1 && /[:{(\[] *$/.test(line))      spaces += '    '
        else if (direction == -1 && /^ *} *$/.test(line))   spaces += '    '
        payload = indent(payload, spaces)
        insert(this.lines, index + direction, payload)
    }
    insertAbove(regex, payload) {
        this.insert(regex, payload, -1)
    }

    insertBelow(regex, payload) {
        this.insert(regex, payload, 0)
    }

    sprawlTo(regex, flags = '', startingIndex = this.index) {
        let direction = 1
        let index = startingIndex
        if (flags.includes('b')) direction = -1
        if (flags.includes('s')) index = 0
        while (!test(regex, this.getline(index))) {
            index += direction 
            if (index > this.lines.length || index < 0) {
                for (let line of this.lines) {
                    print(line)
                    print(test(regex, line))
                    linebreak()
                }
                throw 'SprawlError'
            }
        }

        return index
    }

    editline(index, action) {
        let line = this.getline(index)
        let spaces = getSpaces(line)
        this.setline(index, action(line, spaces))
    }

    setline(n, val) {
        this.lines[n] = val
    }
    deleteline(n) {
        this.lines[n] = null
    }
    getline(n) {
        return this.lines[n] || ''
    }
}

const r = {
    'comment': /^(?:#|\/\/|") *(.+)\n/gm,
    'date': /\d+-\d+-\d+(?: \d+:\d+:\d+)? *|/,
}


function datestamp(mode = String) {
    function getdate(date) {
        let local = date.toLocaleString()
        return replace('/', '-', slice(local, 0, ', '))
    }

    function padder(s) {
        return String(s).padStart(2, '0')
    }

    if (mode && mode.constructor.name == 'Date') {
        return mode.getTime()
    }

    if (mode == Number) {
        return Date.now()
    }

    if (mode == String) {
        let date = new Date()
        return getdate(date)
    }

    if (isNumber(mode)) {
        let date = new Date(mode)
        return getdate(date)
    }

    if (isString(mode)) {
        tl( 'do this' )
        let date = new Date(mode)
        return getdate(date)
    }
}




function dreplace(s, dict, flags = 'gm') {
    if( !exists(dict)) return s

    let boundary
    let capture
    let escape

    flags = flags.replace(/[bce]/g, (x) => {
        if (x == 'b') {
           boundary = true 
        } else if (x == 'c') {
           capture = true 
        }
        else if (x == 'e') {
           escape = true 
        }
        return ''
    })

    let regex = ncg(dict, capture, escape)
    if (boundary) {
        regex = '\\b' + regex + '\\b'
    }

    const parser = (x) => {
        if( !dict[x]) {
            print( 'error at dreplace' )
            throw new MyError(x) 
            return ''
        }
       return dict[x]
    }
    return replace(regex, parser, s, flags)
}





function toCors(url) {
    return 'https://cors-anywhere.herokuapp.com/' + url
}

function prepareUrl(s) {
    s = s.replace(/view-source:/, '')
    //s = toCors(s)
    if (!test('^https://', s)) s = 'https://' + s
    return s
}

function isUrl(s) {
    return test('^http|\\.(?:www|com|net|io|org)', s)
}


const dreplacedict = {
    'googlescript.js': {

      'print': 'Logger.log',        
      'var': 'const',
    },
}
        

const nativehelpers = [
    'console', 'isNaN'
]

function libget(items = []) {
    //const lib = read('helpers.js.lib')
    const lib = read('javascript.lib')
    return '\n\n' + items.map(x => lib[x]).filter(x => x).join('\n\n') + '\n\n'
}
function addDependenciesToFile(file) {
    rpwo(file, (s) => {
        const helpers = myhelpers.concat(nativehelpers)
        const items = getImplied(s).filter(x => {
            return helpers.includes(x)
        })
        print(items)
        return s + libget(items)

    })
}



function slice(s, a, b) {
    if (isString(a)) a = s.search(RegExp(a))
    if (isString(b)) b = s.search(RegExp(b))
    return b ? s.slice(a, b) : s.slice(a)
}




const initialLoadingData = {
    'topic': 'algebra',
}
const emptyData = {}

const fakeStudentFinalData = {
    'username': 'samuel',
    'data': [
        {'question': 'ALGEBRA-H-123', correct: false},
        {'question': '1234', correct: false},
    ],
    meta: {
        date: '1/31/1200',
    },
}

const fakeStudentData = {
    'username': 'samuel',
    'hasQuestion': {
        id: '234a223b',
        question: 'how do u do it',
    },
}



function isEnter(s) {
    return test(/^.*{ *$/, s)
}

function isExit(s) {
    return test(/^ *} *$/, s)
}

function autobind(context, obj) {
    if (!obj) {
        return 
    }

    for (let [k, v] of Object.entries(obj)) {
        if (isFunction(v)) {
            context[k] = v.bind(context)
        }
    }
}





function getExtension(file) {
    try {
        return file.match(/\.(\w+)$/)[1]
    } catch {
        return null
    }
}



function today() {
    const date = new Date()
    return date.toUTCString()
}


function midnight() {
    const date = new Date()
    date.setHours(24)
    date.setMinutes(59)
    date.setSeconds(59)
    return date
}

function readcookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function readcookie2(query, value = '') {
    let s = document.cookie
    console.log(s)
    if (value) value = parens(value)
    return search(parens(query) + '=' + value, s)
}

function parens(s) {
    return '(' + s + ')'
}

function setcookie(obj = {}) {
    if (isString(obj)) {
        obj = {[obj] : 1}
    }

    const cookieString = stringReduction({...obj, ...{
        path: '/',
        expires: midnight().toUTCString(),
        SameSite: 'None',
        Secure: null,
    }}, {
        delimiter: '=',   
        kt: null,
        vt: null,
        join: '; ',
    })

    console.log('The cookie has been set as:')
    console.log(cookieString)
    document.cookie = cookieString
}

function stringReduction(obj, options) {
    return prepareIterable(obj, 'entries').reduce((acc, [k, v], i, arr) => {
        if (options.kt) k = kt(k)
        const value = isDef(v) ? 
            options.delimiter + (options.vt ? options.vt(String(v)) : v) : ''

        const join = options.alwaysJoin ?
            i < arr.length - 1 ? options.join : options.join.trim() : 
            i < arr.length - 1 ? 
            options.join : 
            ''
        return acc += (options.indent || '') + k + value + join
    }, '')
}


async function created() {
    let questions
    //if (!readcookie('visited')) {
        //console.log('First time visit. Setting cookie and getting questions.')
        //setcookie('visited')
        //questions = samplemathquestions,
        //questions = await fetchMathQuestions()
        //setStorage('questions', questions)
    //}
    //else {
        //questions = getStorage('questions')
    //}
    //this.user = getStorage('user', null)
    this.$increment('cat', cats)
    this.$increment('question', samplemathquestions)
}


















function toStyleObject(s) {
    return splitcss(s).reduce((acc, item) => {
        const product = runCss(item)
        if (isNestedArray(product)) {
            for (let [a,b] of product) {
                a = toCamelCase(a)
                acc[a] = b
            }
        }

        else if (isArray(product)) {
            acc[product[0]] = product[1]
            
        }
        else if (isString(product)) {
            let items = product.split(/; */)
            for (let item of items) {
                let [a,b] = splitonce(item, ':')
                if (a && b) {
                    a = toCamelCase(a)
                    acc[a] = b
                }
            }
        }
        return acc
    }, {})
}






















/*codemirror stufff


    if (this.$refs.codemirror) {
        if (e.key == 'F1') {
            this.$toggle('showCodeMirror', null)
            return
        }
    }

    if (this.showCodeMirror) {
        const text = this.$refs.codemirror.codemirror.getValue() 
        console.log(text)
        return
    }

*/

function activekeyhandler(e) {
    e.stopPropagation()


    if (!this.question.choices) {
       console.log('no choices, returning') 
       return 
    }
    switch (e.key) {
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
            return this.chooseAnswer(alphabetToNumber(e.key))
        case 'ArrowLeft':
        case 'ArrowDown':
            return this.chooseAnswer(null, 1)
        case 'ArrowRight':
        case 'ArrowUp':
            return this.chooseAnswer(null, -1)

        case 'Enter':
        case ' ':
        case '':
            return this.chooseAnswer(null, null)
    }
}

function alphabetToNumber(s) {
    return alphabet.indexOf(s)
}

function numberToAlphabet(n) {
    return alphabet[n]
}

function chooseAnswer(i, direction = null) {
    const limit = 2
    const length = 5 - 1
    this.choosingTheAnswer(i, direction)

    if (this.currentPick[1] < limit) {
        return
    }
    this.checkAnswer(this.currentPick[0])

    this.insertQuestions()

    let finished = this.question.index == this.quizLength
    const toggleDuration = finished ? 500 : 2000

    this.$toggle('verified', toggleDuration, () => {
        this.currentPick = [null, null]
        if (this.detour) {
             console.log('should not appear bc no children yet of derivatives')
             const done = this.generateDetourQuestion()
             if (!done) return
             else {
                 console.log('returning to the original flow')
             }
        }

        const result = this.$increment('question')
        if (!result) finished = true
        if (finished) {
            this.$emit('next', {'scores': this.$storage})
            this.questionIndex = 0
        }

        this.questionResult = null 
    })
}


function startQuiz() {
    this.mode = 'started'
}

class Indexed2 {
    constructor(modulus = false) {
        this.store = {}
        this.tracker = {}
        this.modulus = modulus
    }

    load(key, items) {
        this.tracker[key] = 0
        this.store[key] = items
    }

    has(key) {
        return this.store.hasOwnProperty(key)
    }

    get(key) {
        const items = this.store[key]
        const index = this.tracker[key]
        this.tracker[key] = this.modulus ? (index + 1) % items.length : index + 1
        return items[index]
    }

}


function reload() {
    if (oneWeekHasPassed()) {
        const message = 'The website has been updated as of ' + today() + '. Click to refresh the page.'
        window.location.reload(true)
    }
}
function oneWeekHasPassed() {
    const ONE_WEEK = 1000 * 60 * 60 * 24 * 7
    const isNewWeek = Date.now() >= getStorage('date', 0)
    if (isNewWeek) {
        console.log('it is a new week.')
        setStorage('date', Date.now() + ONE_WEEK)
        // We set the next check one week into the future. 
    }
    else {
        return
    }
}



function getStorage(key, placeholder = null) {
    function parse(x) {
        if (/^[\d/]+$/.test(x)) {
            return Number(x)
        } else if (/^[\[\{]/.test(x)) {
            return JSON.parse(x)
        } else {
            return x
        }
    }

    return key in localStorage ? 
        parse(localStorage.getItem(key)) : 
        placeholder
}


function finishQuiz() {
    this.mode = 'finished'
}




function getType(x) {
    if (isObject(x)) return {}
    if (isArray(x)) return []
    if (isString(x) || isNumber(x)) return ''
        throw "no proper gettype"
}


function updateStorage(name, value) {
    if (!exists(value)) return
    const prev = getStorage(name, getType(value))
    const merged = merge(prev, value)
    setStorage(name, merged)
    console.log('updating storage', name)
    console.log(merged)
    return merged
}


function setStorage(key, value = '') {
    localStorage.setItem(key, stringify(value))
}

function adjustColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

function modularDictFromArray(s) {
    s = 'red blue green'
    const parts = s.split(' ')
    const store = {}
    for (let i = 0; i < parts.length; i++) {
        let [a,b] = parts.slice(i, i + 2)
        if (i == parts.length - 1 && b == null) {
            b = parts[0]
        }
        store[a] = b
    }
    return JSON.stringify(store, null, 4)
}
function cssIncrement(s, direction) {
    console.log(s)
    const dict = {
        'relative': 'absolute',
    }
    if (/^#/.test(s)) { // Hex Color
        return adjustColor(s, direction * 5)
    }

    if (/^\d/.test(s)) { // Starts With Number
        return s.replace(/\d+/, (value) => {
            let increment
            value = Number(value)
            if (value < 1) increment = 0.1
            else if (value < 2) increment = 0.25
            else if (value < 5) increment = 0.5
            else if (value < 10) increment = 1
            else if (value < 25) increment = 5
            else if (value < 50) increment = 10 
            else if (value < 250) increment = 50
            else if (value < 1000) increment = 100
            else {
                increment = 1
            }
            return value + (direction * increment)
        })
    }

    if (s in dict) {
        return dict[s]
    }


}
function numberboundarysplit(s) {
    const numberBoundaryRE = /(?<=\D)(?=\d)|(?<=\d)(?=\D)/
    return s.split(numberBoundaryRE)
}




class Indexed {
    constructor(items) {
        this.init(items)
    }

    init(items) {
        if (items && items.length > 2) {
            this.index = -1
            this.items = items.map((item, i) => {
                return {
                    index: i,
                    value: item,
                    data: null,
                }
            })
        }
    }
    get currentIndex() {
        const p = this.items[this.index].index
        console.log(p, 'index')
        return p
    }
    set(key, val, i) {
        if (i == null) i = this.index
        this.items[i][key] = val
    }

    get(i) {
        if (i == null) i = this.index
        const p = this.items[i].value
        console.log(p)
        return p
    }

    get previous() {
        return this.get(this.index - 1)
    }

    get last() {
        return this.get(this.length - 1)
    }
    get first() {
        return this.get(0)
    }
    get length () {
        return this.items.length
    }

    goto(i) {
        this.index = i
        return this.get(i)
    }

    increment(before, after) {
        this.next(1, before, after)
    }

    decrement(before, after) {
        this.next(-1, before, after)
    }
    next(direction, before, after) {
        
        if (before) {
            try {
                before(this.items[this.index].value)
            }
            catch(e) {
                console.log('errora this before')
                console.log(e)
            }
        }

        if (direction == 1) {
            this.index += 1
            if (this.index == this.length) {
                this.index = 0
            }
        } else {
            this.index -= 1
            if (this.index == -1) {
                this.index = this.length - 1
            }
        }

        if (after) {
            try {
                after(this.items[this.index].value)
            }
            catch (e) {
                console.log('error at after')
                console.log(e)
            }
        }

        return this.get(this.index)
    }
}


function checkAnswer(index) {
    const answer = this.question.choices[index]
    const correct = answer == this.question.answer
    if (correct) {
        this.streak += 1
        this.$save('correct', this.question.id)
        this.questionResult = 'CORRECT'
        if (this.streak > 5) {
            this.compliment = randomPick(compliments)
        }
    }
    else {
        this.streak = 0
        this.$save('incorrect', this.question.id)
        this.questionResult = 'INCORRECT'
        this.correctAnswerIndex = this.question.choices.indexOf(this.question.answer)
    }
    return correct

}



function hyphenate(s) {
    return s.replace('computed', '').replace(/(?<!^)[A-Z]/g, '-$&').toLowerCase().replace(/\./g, '-')
}
function isSingleWord(line) {
    return /^[a-z][\w.]+$/.test(line)
}









function addWhatItDoesntHave(basefile, incomingfile) {
    const a = read(basefile)
    const b = read(incomingfile)
    const existing = getFileBindings(a)
    const lib = createlibrary(b)
    s = joined(Object.values(filtered(lib, (k,v) => !existing.includes(k))))
    append(basefile, s)
}

function getFileBindings(s) {
    return findall(/^(?:f|function|def|class|const) (\w+)/gm, s)
}
















function removeComments(s) {
    return s.replace(/^ *(<!--[^]*?-->|\/\/|\/\*[^]*?\*\/).*\n/gm, '')
    return s.replace(/^ *(\/\/|\/\*[^]*?\*\/).*\n/gm, '')
    return s.replace(/^(\/\/|\/\*[^]*?\*\/).*\n/gm, '')
}
const Finish = {
    //template: simplepug(finishTemplate),
    props: ['streak', 'scores'],
    computed: {
        analysis() {
            return this.scores
        },
        computedPhrase() {
            return 'Great work!'  
        },
    },
    mounted() {
        console.log('mounting the finish component')
    },
}



function cssNameFix(name) {
    if (test('left|right', name)) {
        name = name.replace(/left|right/g, '$&-container')
    }
    return name
}
function addPrefix(item, prefix) {
   return item.startsWith(prefix) ? item : prefix + item
}

function addSuffix(item, suffix) {
   return item.endsWith(suffix) ? item : item + suffix 
}

function partialfrac(correct, incorrect) {
    return correct / ( correct + incorrect)
}





function prepareWords(words) {
    if (isString(words)) {
        words = findall(/[A-Z][a-z]+ [A-Z][a-z]+|[a-zA-Z]+/g, words)
    }
    const ignore = stopwords.concat(easywords)
    return filtered(unique(words), ignore)
}

class Dictionary {
    constructor(items) {
        this.items = items
        this.index = 0
    }
    next() {
        const item = this.items[this.index++]
        return item
    }
}

function cleanpy(s) {
    return s.replace(/^ *#.*/gm, '')
    return cleanpy(s.replace(/^(?:in|out) *\[\d+\]: *|^\[[\w\W]+?\]$/gmi, ''))
}




function randomPick(items) {
    return items[Math.floor(Math.random() * items.length)]
}



function imagegetter(text) {
   return pathfix(randomPick(imagelinks[text] || imagelinks['fallback']) )
}
function pathfix(s) {
    let extension = '.jpg'
    return './CATS/' + addSuffix(s, extension)
}





function toCssAttrString(attrs) {
    let s = ''
    for (let [k, v] of Object.entries(attrs)) {
        if (k == 'emit') {
            s += '@click="$emit(\'' + hyphenate(v) + '\')" '
        }

        else if (k == 'style') {
            let product = 'style="'
            for (let [a,b] of Object.entries(v)) {
                product += a + ':' + b + ';'
            }
            s += product + '"'
        }
        else {
            s += k
            s += '='
            s += doublequote(v)
            s += ' '
        }
    }

    return s.trim()
}


function reviewQuestion() {
    this.$toggle('review', 2000)
    this.modalData = this.question.id + ' is being saved.'
    updateStorage('student-questions', this.question.id)
}







/*-----------------------------*/



const LogoComponent = {
    //name: 'LogoComponent',
    render(h) {

        const coordinates = [
            [0,0], [0,2], [2,0], [0, -2], [-2, 0], [1,1], [1,-1], [-1,1], [-1,-1]
        ].map(multiplier(10)).map(translater(50,50))

        //console.log(coordinates)

        const elements = coordinates.map(([x,y], i) => {
            return h('circle', {
                attrs: {
                    cx: x,
                    cy: y,
                    r: 3,
                    fill: getRandomColor(),
                },
                ref: 'circles',
                refInFor: true,
            })
        })

        return h('svg', {
            x: 50,
            y: 50,
            width: 50,
            height: 50,
            viewBox: '0 0 100 100',
            style: {
                 width: '100px',
                 height: '100px',
                 //paddingLeft: '50px',
                 //paddingTop: '50px',
            }
        }, elements)
        return h('svg', {attrs: context.props.position}, elements)
    }   
}
// 
// 
// 
// 
/***/


//fhere
//myexports()
// read passages.
/*/end loadcss/*/


//askMathQuestion(userq)
// shouldnt try too hard.
//console.log(cssParser(s))
//console.log(simplepug(s))
//mathGetRequest(emptyData)
//console.log(congrats(''))
// Have fun and grow strong.
// you can not understand it. 
// motivation shouldnt be plural. 
//mathPostRequest(fakeStudentData)
// I also can't do the explanations. 
//const fetch = require('node-fetch')
// My feelings can rock the environment. 
//addWhatItDoesntHave('math.js', 'new.js')
// Happiness is self-defined. Life is short. 
// something has to change in each iteration. 
//console.log(simplepug(QuizComponenttemplate))
// most of the population doesn't play like that. 
const phrasebookfallback = `

Nice work $1!

`


// good enuf for now... but later, I will have to affect it.
// typing and typing, but it feels like i am not going anywhere.
// more important than anything else ... the stuff has to flow. 
// inspire someone to be themself. The manifestation of strength.
// it has to be somewhat inspired, otherwise it won't be any good.
// a simpler version for maylynn. I can't render exponents or fractions.
const sampletutorial = `

p .foobar howdypartner how it do how it do

`


// to be hungry for something. finding a way to protect what is important to you.  
// Autonomy, Mastery, and Purpose ... disrupt the status quo. To not be too thirsty.
// Hey Yijie! How's everything going? Use the name. He never said my name. An unbeatable deal...  
// change the boundaries of the game. even with this, to sit there and ask. it is not very much money.
// if it doesnt happen ... so be it. so be it. You can say suan le only if you gave your best effort. 
// fighting the impossible game. to be defeated. over and over without hope. Each way to be defeated differently. 
const phrasebookfallback2 = `
$1, You didn't get an awesome score. But that doesnt matter. Scores come and go. Awesomenesss stays forever. Stay awesome bro!

img catpic

`


const compliments = `
nice one
oh yeah
spicy
excellente
wonderful
three thumbs up
Great job
awesome work
`.trim().split('\n').map(x => x.replace(/(?<=^| )[a-z]/g, (s) => s.toUpperCase()) + '!')


const gstring = `
https://script.google.com/macros/s/AKfycbwN_h-uQUcGVuhl5d4Line2QXdHTHNLtobDOAKxRWQl3FIM0MALTeopaAXu10jkH0N6IA/exec
https://script.google.com/macros/s/AKfycbxBqr_RcasHAF6vEx5Qb6Fp2WyRvVI92tmAhQv10C5uGBaH6gbHU54OpR_joUkuTNXZKg/exec

`


/*


    div .tutorial if=question.tutorial {
        div html=question.tutorial
        div if=question.question {
            p .question question.question
            input .response
        }
        div else {
            button next
        }
    }

*/


function starttttt() {
    
}

//tl( congrats('tom' ))
const finishTemplate = `

.review-modal w100 h40 rounded bgg7 fcw4




.left fs32 flexc bgy1
.streak fs64 fw800 fcg3
.right center fs128
//.right>p w70p

div {
    left {
        p.colon high streak
        p streak
        p Great work! You're doing great!
    }
}`


const mediocreInnerhtml = `

.foo {
    @keyframes opacity {
        0%   { opacity: 0 }
        25%  { opacity: 1 }
        100% { opacity: 0 }
    }
    animation: 4s 1 normal opacity;

    @keyframes opacity2 {
        0%    { opacity: 0 }
        50%   { opacity: 1 }
        100%  { opacity: 0 }
    }

    animation: 2s 
}

Did you score 100%?.big
No. 
Did you score $1? 
No. 
Did you get an awesome score? 
No. 
But are you an awesome person? 
OF COURSE YOU ARE! 
Better luck next time bro.
`.trim()


const quizfinishtemplate = `

.finish fs28 serrat
.finish-message cabtac
.finish-button-container abscenter flex mx-10

finish {
    div .finish-message html=computedFinishMessage
    div .finish-button-container {
        button .btn .btn-1 click=$emit('next','QuizComponent') Practice
    }
}
`

//pug(quizfinishtemplate)

function pugger(s) {
    return 
    if (isBrowser()) return
    print(simplepug(s, null, true))
    throw ""
}

function pug(s) {
    return 
    if (isBrowser()) return
    print(simplepug(s, null, true))
    throw ""
}

const celebrationcomponenttemplate = `

div {
   div style=computedStyleObject v-celebrate:2500=correct&&streak {
       p style=styleobj .streak-text fcgreen + [streak]
       //p .compliment-text fcred [compliment]
   }
}

`
//tl(simplepug(celebrationcomponenttemplate))
//

const CelebrationComponent = {
    template: simplepug(celebrationcomponenttemplate),
    props: ['streakDuration', 'correct', 'streak', 'compliment', 'position'],
    computed: {
        styleobj() {
          return {
            fontWeight: Number(this.streak) * 50 + 700 + 'px',
            fontSize: Number(this.streak) * 12 + 122 + 'px',
            //fsize
          }
        },
        computedStyleObject() {
            const positionObj = determinePosition(this.position || 'bottom-right')
            const obj = {
                'position': 'absolute',
                opacity: 0,
            }
            return merge( positionObj, obj)
        },
    },
}

// it just worked. and writing these random notes feels much better. there is more freedom to write. The item works. She asked. But without feedback. It's hard. 


const KatexComponent = {
    props: ['value', 'always', 'katexDisplayMode'],
    mounted() {
       for (let [k, element] of Object.entries(this.$refs)) {
           const value = this.store[k]
           let result = renderkatex(element, value, this.katexDisplayMode)
       }
    },
    render(h) {
       this.store = {}
       const text = String(this.value).replace(/\$[\w: ]+\$/g, (x) => x.slice(1,-1))
       const config = this.always ? {class: 'katex'} : {class: 'katex'}

       if (needsKatex(text)) {
           const parts = splitkatex(text)
           const children = parts.map((part, i) => {
                if (needsKatex(part)) {
                    this.store[i] = part
                    return h('span', {
                        ref: i,
                        class: 'katex',
                    })
                }
                else {
                    return h('span', config, part)
                }
           })
           return h('div', children)
       }
       else {
           return h('span', config, text)
       }
    },
}


//fcss

Vue.component('LogoMessageComponent', {
    props: ['value'],
    template: `<div class="gradient-animate-text min-intrinsic logo-message">
        {{value}}
    </div>`,
        
})

const startcomponenttemplatefortheboys = `
start-component {
    <div class="header">
        <LogoComponent/>
        <LogoMessageComponent value="/>
    </div>
    div .out-of-flow-container .flex {
        <button class="button-new gradient-text-blue" @click="chooseStartingButton('blue')">Blue Packet</button>
        <button class="button-new gradient-text-green" @click="chooseStartingButton('green')">Green Packet</button>
    }

}

`

const startcomponenttemplate = `
start-component {
    <div class="header">
        <LogoComponent/>
        <LogoMessageComponent value="Quiz"/>
    </div>
    div .abscenter {
        <button class="button-new gradient-text-blue" @click="chooseStartingButton('blue')">Blue Packet</button>
        <button class="button-new gradient-text-green" @click="chooseStartingButton('green')">Green Packet</button>
    }
}

`
function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
}


const instructionstemplate = `

.instructions-container abs right0 w200 bgy3 o0.75 fs12 times

instructions {
    p double click to submit an answer
    p you can also use the keyboard keys (A,B,C,D,E, Up, Down, Enter)
}

`
const InstructionsComponent = {
    template: simplepug(instructionstemplate),
}


function fetchMathQuestionsFake(column) {
   let p
   if (column == 'blue') {
       p = exponentquestions 
   }

   if (column == 'green') {
       p = factorquestions 
   }
   let product = [{
        singleton: true,
        math: true,
        questions: p,
   }]
   return new Promise(resolve => {
        setTimeout(() => {
            console.log(product)
            resolve(product)
        }, 10)
   })
}
const StartComponent = {
    components: {LogoComponent},
    template: simplepug(startcomponenttemplate),

    methods: {
        async chooseStartingButton(color) {
            this.$store.commit('setStudentID', color)
            const questions = await fetchMathQuestionsFake(color)
            this.$emit('next', {value: questions})
        }
    },
    mounted() {
        console.log('hi from moutned')
    },
}



const EndComponent = {
    render(h) {
        return h('div', {
            domProps: {
                innerHTML: randomhtml(),
            },
            on: {
                click: () => this.$emit('next', 'StartComponent'),
            },
            class: 'full-center clickable',
        })
    },
    props: ['scores'],
    computed: {
        computedFinishMessage() {
            const p = congrats(null)
            return p
        },
        computedScore() {
            if (!this.scores) return
            const correct = this.scores.get('correct', []).length
            const incorrect = this.scores.get('incorrect', []).length
            const percentage = partialfrac(correct, incorrect) * 100
            return percentage
        }
    },
    mounted() {
        console.log('the end component has been mounted')
        console.log(this.$store.state.studentID)
        console.log(this.$store.state.questions)
        const questions = this.$store.state.questions
        const id = this.$store.state.studentID
        postbin({questions, id})
    },
    watch: {
        //scores(val) {
            //console.log(val, 'scores')
            //storager('scored', () => {
                //console.log(val)
                //val = getStorage('incorrect')
                //console.log(val)
                //jsonbin2(val)
            //})
        //}
    },
}






const QuizData = {
    correctAnswerIndex: null,
    questionResult: null,
    questionIndex: 0,
    scores: null,
    review: null,
    reviewData: null,
    quizLength: 1,
    question: null,
    streak: 0,
    verified: false,
    mode: 'awaiting',
    compliment: 'howdy nice!',
    currentPick: [null, null],
}


// I remember that horrible feeling. Fight for what is important to you. 



const tutorialtemplate = `

div {
   p what up dog 
   button .foo click=changeFoo click to foo
}

`
function changeFoo() {
    this.foo = true
}

const TutorialComponent = {
    template: simplepug(tutorialtemplate),
    props: ['value'],
    async mounted() {
        window.addEventListener('click', getMousePosition)
        animator.setPosition('center')
        await animator.animate(this.value.animation)
        await this.$await('foo')
        await animator.clear()
        window.removeEventListener('click', getMousePosition)
        this.$emit('finished')
    },
    methods: {
        changeFoo,
        $await(key, duration = 25) {
            let count = 0
            return new Promise(resolve => {
               let id = setInterval(() => {
                   if (++count == duration || this[key]) {
                       clearInterval(id)
                       resolve()
                   }
               }, 1000)
            })
        },
    },
    data() {
        return {
            display: false,      
            foo: false,
        }
    },
    watch: {
        foo(val) {
            console.log('watching fooooo', val)
        }
    }
}


const GameComponent = {
    props: ['value'],
    render(h) {
        



        return container
    },
    data() {
        return {
            level: 0,
        }
    },

}


const DynamicComponent = {
    props: ['value'],
    render(h) {
        //const items = this.value
        const items = [
            ['border-radius', '1px solid black'],
            ['border-radiusss', '1px solid red'],
            ['border-radiusssss', '1px solid green'],
        ]

        let changeCount = 0
        const changeLimit = Math.floor(0.75 * items.length)

        const children = items.map(([a,b], i) => {
            if (changeCount < changeLimit && coinflip()) {
                changeCount++
                const changeFirstItem = coinflip()

                const modifiedElement = h(AtomicDynamicComponent, {
                    onNative: {
                        returnedCorrectAnswer: (e) => {
                            this.count += 1
                            this.listStore.push(i)
                        }
                    },
                    props: {
                        value: changeFirstItem ? a : b
                    },
                })

                const stillElement = h('div', {}, changeFirstItem ? b : a)

                const children = changeFirstItem ? 
                    [modifiedElement, stillElement] :
                    [stillElement, modifiedElement]
                
                return h('div', {}, children)
            }
        })

        const instructions = null
        const container = h('div', {}, [children, instructions])
        return container
    },
    data() {
        return {
            count: 0,
            listStore: [],
        }
    },
    created() {
        console.log('created the dynamic component')  
        console.log(this.value, 'valueprop')
    },
    watch: {
        count(val) {
            console.log(val, 'watching count')
            if (this.count == this.length) {
                console.log('finished at dynamic component, reporting back.')
                // i'm generating a huge mess ... and the hopes is that it will eventually be cleaned up. 
                this.$emit('finished', 'DynamicComponent')
            }
        }
    },

}






const AbsoluteComponent = {
    props: ['x', 'y', 'text', 'font', 'class'],
    render(h) {
        return h('p', {
            style: {
                position: 'absolute',
                top: this.y + 'px',
                left: this.x + 'px',
                font: this.font,
            },
            class: this.class,
        }, this.text)
    }
}

function renderQuiz(h) {
    
    // I didn't want to straight up copy.
    // The questions have to be smart.
    // The tools are coming up. 

    const self = this
    if (this.question.singleton) {
        return h(SingletonComponent, {
            on: {
                finished: () => {
                    console.log('we donnnnnnne')
                    this.$next('EndComponent')
                }
            },

            nativeOn: {
                finished: () => {
                    console.log('we donnnninnnnnnnnnne')
                    this.$next('EndComponent')
                }
            },
            props: {
                question: this.question,
            },
        })
    }

    if (this.question.dynamic) {
        return h(DynamicComponent, {
            nativeOn: {
                click: () => {
                    this.question.tip = null
                },
                finished: () => this.$increment('question')
            },
            props: {
                value: this.question.dynamic,
            },
        })
    }

    if (this.question.tip) {
        return h('div', {
            on: {
                click: () => {
                    this.question.tip = null
                }
            },
            domProps: {
                innerHTML: this.question.tip
            },
            class: 'button help-tip',
        })
    }

    if (this.question.tutorial) {
        console.log('returning tutorial')
        return h(TutorialComponent, {
            on: {
                finished: () => {
                    console.log('yo we finiVshed at the tutorial')
                    this.$increment('question')
                }
            },
            props: {value: this.question},
        })
    }

    const nextbutton = h('button', { // NOT IN USE
            on: {
                click: this.forceNext,
            },
            class: {
                'next-button': true,
                'correct': this.questionResult == 'CORRECT',
            }
    }, 'Next Question')

    const pher = h('div', 'this is a placeholder bc no choices')
    const choicesGroup = !this.question.choices ? pher : h('div', {class: 'choices'}, 
        this.question.choices.map((choice, i) => {
        return h(KatexComponent, {
            props: {value: choice, always: true},
            class: {
                choice: true,
                selected: this.currentPick[0] == i && !this.verified,
                verified: this.currentPick[0] == i && this.verified && this.questionResult == 'CORRECT',
                wrong: this.questionResult == 'INCORRECT' && this.correctAnswerIndex == i,
            },
            nativeOn: {
                click() {
                    console.log('sup')
                    console.log(self.currentPick[0], i)
                    self.chooseAnswer(i)
                }
            },
        })
    }))
    console.log('flowing down and returning container')


    const container = h('div', {class: 'question-container'}, [

        h(CelebrationComponent, {
            props: {
                streak: this.streak,
                compliment: this.compliment,
                correct: this.correct,
            },
        }),

        h('span', {class: 'question-index'}, this.questionIndex),
        h(KatexComponent, {class: 'question', props: {value: this.question.question}}),
        h('div', {class: 'bottom-choice-explanation-container'}, [
            choicesGroup,
            h('div', {
                directives: [
                    {
                        name: 'show',
                        value: this.questionResult == 'INCORRECT' && this.question && this.question.explanation && !this.question.animation
                    }
                ], 
                class: 'explanation'
            }, this.question.explanation)
        ].filter(x => x))
    ])
    return container
    
}
const SingletonComponent = {
    mounted() {
        //this.$refs.input.focus()
    },
    watch: {
        disabled() {
            console.log('disabled', this.disabled)
        },
        myKey(val) {
            this.disabled = false
            const result = this.$increment('singletonquestion')
            if (!result) {
                console.log('we done boyyyyy!')
                this.$emit('finished')
            }
            else {
                console.log('incrementing question')
                this.questionIndex += 1
            }
            this.$refs.input.value = ''
            this.$refs.input.focus()
            console.log(this.$refs.input)
        }
    },
    data() {
        return {
            showAnswer: false,
            questionIndex: 1,
            showHint: false,
            labelMessage: 'sup',
            //fda
            myKey: 0,
            singletonquestion: null,
            isCorrect: false,
            correctCount: 0,
            hotstreak: 0,
            disabled: false,
        }
    },
    props: ['question'],
    methods: {
       zoobat,
       startTimer() {
            this.timerID = setTimeout(() => {
               this.provideAnswer() 
            }, 10000)
       },
       provideAnswer() {
       }
    },
    render(h) {
        const self = this
        //const absc = h(AbsoluteComponent, {
            //props: {
                //x: 100,
                //y: 100,
                //text: this.singletonquestion.type,
                //class: 'singleton-question-type',
                //font: '800 48px Times',
            //}
        //})

        const transitionEl = Vue.options.components.Transition
        console.log(this.isCorrect && this.hotstreak, 'appear for the input')

        const inputAfterElementiii = h('div', {
            class: {
                'input-after': true,
            },
            directives: [{ arg: this.appearDuration, name: 'appear', value: this.isCorrect && this.hotstreak }],
            style: {
                fontWeight: Number(this.hotstreak) * 50 + 700 + 'px',
                fontSize: Number(this.hotstreak) * 2 + 84 + 'px',
            },
        }, '+ ' + this.hotstreak)

        //const inputAfterElement = inputAfterElementiii
        const inputAfterElement = h(KatexComponent, {
            class: {
                'input-after': true,
            },
            directives: [{ arg: this.appearDuration, name: 'appear', value: this.isCorrect && this.hotstreak }],
            style: {
                fontWeight: Number(this.hotstreak) * 50 + 700 + 'px',
                fontSize: Number(this.hotstreak) * 2 + 84 + 'px',
            },
            props: {
                value: '+ ' + this.hotstreak
            }
        })

        //const inputAfterWrapped = h(transitionEl, {
            //name: 'fade',
            //mode: 'out-in',
        //}, inputAfterElement)

        const input = h('input', {
            class: {
                'singleton-input': true,
                'singleton-incorrect': this.disabled,
                'singleton-correct': !this.disabled,
            },
            domProps: {
                autofocus: true,
                spellcheck: false,
                type: 'text',
                disabled: this.disabled,
            },
            ref: 'input',
            on: {
               input: (e) => {
                    clearTimeout(this.inputTimerID)
                    this.inputTimerID = setTimeout(() => {
//zoobatstart

    console.log('hiiii')
    const value = removeSpaces(e.target.value.trim())
    const answer = this.singletonquestion.answer

    if (e.key == ' ') {
        console.log('skipping spaces')
        //e.preventDefault()
        //return
        return
    }
    if (value.length < answer.length) {
        console.log('returning bc not long enuf')
        return
    }
    else if (value == answer) {
        this.correctCount += 1
        this.hotstreak += 1
        console.log(this.isCorrect, this.hotstreak, 'toshow')
        this.$toggle('isCorrect', this.appearDuration + 50, () => {
            this.showHint = false
            this.timerID2 = setTimeout(() => {
                e.srcElement.value = ''
                this.myKey += 1
            }, 100)
            
        })
    }
    else {
        this.hotstreak = 0
        this.errorCount += 1
        if (this.errorCount == 1) {
            this.showHint = true
        }
        if (this.errorCount > 2) {
            this.$store.commit('addQuestion', this.singletonquestion.question)
            this.errorCount = 0

            this.disabled = true
            setTimeout(() => {
                e.srcElement.value = this.singletonquestion.answer
                setTimeout(() => {
                    this.myKey += 1
                    e.srcElement.focus()
                }, 5000)
            }, 2000)
        }
        else {
            clearTimeout(this.timerID2)
            this.timerID2 = setTimeout(() => {
                e.srcElement.value = ''
            }, 1500)
        }
    }


//zoobatend



                    }, 100)
               }
            },
        })

        //const label = h('label', {
            //class: {
                //'singleton-label': true,
            //},
            //directives: [
                //{
                    //name: 'show',
                    //value: this.isCorrect
                //},
            //],
        //}, this.labelMessage)


        const hintItem = h('button', {
            class: 'hint-button',
            directives: [{ name: 'visible', value: this.showHint}],
            on: {
                click: animatorAction.bind(this),
            }
        }, 'hint')
        //console.log(this.showHint)
        //console.log('asdfasdf')
        //console.log(hintItem)

        const questiontype = h(KatexComponent, {
            class: 'singleton-question-type',
            props:{value: this.singletonquestion.type}})
        const questionindex = h('span', {class: 'katex singleton-question-index'}, this.questionIndex)
        const questionTypeChildren = [questiontype]
        const questionTypeWrapper = h('div', {
            //class: 'singleton-question-type'
            }, questionTypeChildren) 
        
        //const questiontype = h('div', {class: 'singleton-question-type'}, this.singletonquestion.type)

        const inputContainer = h('div', {class: 'input-container'}, [
            input,
            inputAfterElement,
            //inputAfterWrapped,
        ])


        //const hiddenInput = h('div', {
            //style: {
                //position: 'absolute';
            //},
        //}
        const questionItem = h(KatexComponent, {
            props: {
                value: this.singletonquestion.question,
                katexDisplayMode: true,
            },
            class: 'singleton-question',
            key: this.myKey,
        })


        const questionContainer = h('div', {class: 'flex-space'}, [
            //questiontype,
            questionTypeWrapper,
            questionItem,
        ])

        //const streakComponent = h(CelebrationComponent, {
            //props: {
                //streak: this.hotstreak,
                //correct: this.isCorrect,
                //position: 'top-right',
            //}
        //})

        return h('div', {class: 'singleton-component'}, [
            questionContainer,
            inputContainer,
            //hintItem,
            //streakComponent,
        ])
    },
    created() {
        this.appearDuration = 1500
        this.errorCount = 0
        this.$increment('singletonquestion', this.question.questions)
    },
}
const QuizComponent = {
    computed: {
        correct() {
            return this.questionResult === 'CORRECT'
        },
        showExplanation() {
            console.log(this.correct, 'tc')
            const show =  this.correct === false && this.question.explanation
            //console.log(show)
            return show
        }
    },
    components: {CelebrationComponent},
    props: ['value', 'round'],
    name: 'QuizComponent',
    //template: simplepug(QuizComponenttemplate),
    data() { return QuizData },
    created() {
        const items = this.$props.value ? this.$props.value : samplemathquestions
        this.$increment('question', items, () => this.questionIndex++)
    },
    render: renderQuiz,
    mounted() {
        //this.animator = new Animator()
        window.addEventListener('keydown', activekeyhandler.bind(this))
    },
    methods: {
        choosingTheAnswer,
        insertQuestions,
        generateDetourQuestion,
        chooseAnswer,
        forceNext,
        handleIncorrectAnswer,
        checkAnswer,
        reviewQuestion,
    },
}









const quizFinish = {
    template: simplepug(quizfinishtemplate),
    props: ['scores'],
    computed: {
        computedFinishMessage() {
            return congrats(null, this.computedScore)        
        },
        computedScore() {
            const correct = this.scores['correct'].length
            const incorrect = this.scores['incorrect'].length
            const percentage = partialfrac(correct, incorrect) * 100
            return percentage
        }
    },
    data() {
        return {
            
        }
    },
    mounted() {
        console.log('the finish component has been mounted')
    }
}


const LoaderComponent = {
    template: `
    <div class="input-container">
        <input type="file" @change="load($event.target.files[0])"/>
    </div>
    `,
    methods: {
        load(e) {
            doOpen(e, (data) => {
                this.$emit('loaded', data)
            })
        }
    }
}

function doOpen(file, fn) {
  const reader = new FileReader();
  reader.onload = () => fn(parseJSON(reader.result))
  reader.readAsText(file)
}



const VueData = {
    //className: 'fade',
    //enterClassName: 'fade-enter-active',
    //leaveClassName: 'fade-leave-active',
    computedProps: null,
    currentComponent: 'EndComponent',
    currentComponent: 'StartComponent',
    showCodeMirror: false,
}

function CodeMirrorKeyHandler(e) {
    e.stopPropagation()
    e.preventDefault()

    const dict = {
       F1: () => this.$emit('toggle', 'CodeMirror'),
       F3: () => cmGetSet(this.codemirror, mathReviewParser),
       F4: () => {
           download('downloaded.json', this.codemirror.state.store)
       },
       F5: () => console.log(dict),
       F2: () => {
           const text = this.codemirror.getValue()
           const id   = this.question.id
           const product = {id, text}
           this.codemirror.state.store.push(product)
       },
    }

    if (e.key in dict) {
        console.log(e.key, dict[e.key].toString())   
        dict[e.key]()
    }
}

// there are too mechanisms at play. i have to create the alternative questions.


const CodeMirrorComponent = {
    props: ['asdf'],
    render(h) {
        const textarea = h('textarea', {ref: 'codemirror'})
        return h('div', {}, [textarea])
    },
    mounted() {
        this.$initCodeMiror(CodeMirrorKeyHandler)
    },

}
    


// Google's components are super strong because they don't have to communicate with each other. Rather, they communicate with a mainframe. 

// every european player is one less spot for a 'brother.' The people who make decisions, the people with the power to change things, are not your skin color.  


function toCamelCase(a) {
    return a.replace(/-(\w)/g, (_, a) => a.toUpperCase())
}

function needsKatex(s) {
    return /[{^\\]/.test(s)
    return /\$.*?\$/.test(s)
}


// find a way to quickly generate items from what you have. questions.json'


let asy = `

[asy] size(0,50); draw((-1,1)..(-2,2)..(-3,1)..(-2,0)..cycle); dot((-1,1)); dot((-2,2)); dot((-3,1)); dot((-2,0)); draw((1,0){up}..{left}(0,1)); dot((1,0)); dot((0,1)); draw((0,1){right}..{up}(1,2)); dot((1,2)); draw((1,2){down}..{right}(2,1)); dot((2,1)); draw((2,1){left}..{down}(1,0));[/asy]
`

// this can be turned into a SVG definitely. 


// too loud.

// tupper-ware is hard to wash.
// i shudve brought some of the other things.
// the key is the feeling of forward movement.
// the key is feeling like you're making some sort of progress.
// there is no one in power. the way of money ... 
// but where is the excitement from the learning. where are the people who will touch the world. Where is the energy? The question doesn't have energy. The question doesn't make you dance.
// Should the tutorial come before or after? And what makes a question excellent? 

// looking to pop someone. 
// you can have multiple tutorials.

// Turn off Auto Tip Notifications
// How do you create stakes... how do you make the learning meaningful. How do you create feelings of protection...

function splitkatex(s) {
    if (test(/\w+[. ][x]/, s)) {
        return s.split(/[xyz]/)
    }
    s = s.replace(/\$([\w\.]+)\$/g, (_, a) => a)

    //const r = /(?<= )(?=\$)|(?<=\$)(?=[\. ])/
    const r = /(\$.*?\$)/
    const parts = s.split(r)
    return parts
}



function counted(el, s) {
    try {
        return s.match(RegExp(el, 'g')).length
    } catch {
        return 0
    }
}


function renderkatex(el, value, display) {
    const options = {}
    options.displayMode = display
    options.throwOnError = false 
    options.minRuleThickness = 0.05 
    if (!options.displayMode) options.displayMode = determineKatexDisplay(value)
    try {
        katex.render(value, el, options)
        return true
    }
    catch {
        el.textContent = value
        console.log('setting text content')
        return false
    }
}
function animate2(el, key) {
    var framesss = [
      { transform: 'scale(1) rotate(-2deg)', offset: 0, opacity: 1 },
      { transform: 'scale(.3) rotate(5deg)', opacity: .2, offset: .333333 },
      { transform: 'scale(.567) rotate(-3deg)', opacity: .567,offset: .666667 },
      { transform: 'scale(.5) rotate(2deg)', opacity: .4, offset: 1 }
     ];
    var timings = {
        duration: 700,
        iterations: Infinity,
        direction: 'alternate',
        fill: 'forwards',
        delay: 0,
        endDelay: 0,
        easing: 'ease-in-out'
    }
     
    const animedict = {
        
    }
    const defaultOptions = 1500
    const [frames, options] = isArray(animedict[key]) ? 
        animedict[key] : [animedict[key], defaultOptions]

    el.animate(frames, options)
}

function translater(a,b) {
    return (x) => x.map((el, i) => i == 0 ? el + a : el + b)
}

function multiplier(n) {
    return (x) => x.map(el => el * n)
}




// With the advent of super realistic porn, 



// Artistic renderings. Maybe this part of 1000 years is our comeuppance. 
// reduce the amount that has to be rendered at any given point. Give it out in small chunks, like your editor. A million small pieces.
// the key is wind for reducing heat. or an air-conditioner. what have chinese ppl contributed these last 1000 years. The stylecontrtoler does not need it.




function isDefaultCSS(key, value) {
    const dict = {
        'adf': 'asdfasdf'
    }
    return dict[key] == value
}


function isControlKey(e) {
    let s = isString(e) ? e : e.key
    return s.length > 1 || s == ' '
}




const csspathmap = {
  "bc": "border-color",
  "bs": "box-shadow",
  "bw": "border-width",
  "c": "color",
  "fs": "font-size",
  "fw": "font-weight",
  "h": "height",
  "ls": "letter-spacing",
  "lh": "line-height",
  "mm": "margin",
  "mb": "margin-bottom",
  "ml": "margin-left",
  "mr": "margin-right",
  "mt": "margin-top",
  "o": "opacity",
  "pp": "padding",
  "pb": "padding-bottom",
  "pl": "padding-left",
  "pr": "padding-right",
  "pt": "padding-top",
  "t": "top",
  "w": "width",
  "zi": "z-index",
  "bg": "background",
  "maxh": "max-height",
  "minh": "min-height",
  "maxw": "max-width",
  "minw": "min-width"
}

const cssdict = {
  "b": "border",
  "bc": "border-color",
  "bs": "box-shadow",
  "bb": "border-bottom",
  "bbc": "border-bottom-color",
  "bblr": "border-bottom-left-radius",
  "bbrr": "border-bottom-right-radius",
  "bbw": "border-bottom-width",
  "bl": "border-left",
  "bt": "border-top",
  "bw": "border-width",
  "c": "color",
  "d": "display",
  "f": "flex",
  "fb": "flex-basis",
  "fd": "flex-direction",
  "ff": "font-family",
  "fg": "flex-grow",
  "fs": "font-size",
  "fw": "font-weight",
  "ga": "grid-area",
  "gac": "grid-auto-columns",
  "gaf": "grid-auto-flow",
  "gar": "grid-auto-rows",
  "gc": "grid-column",
  "gg": "grid-gap",
  "gr": "grid-row",
  "gta": "grid-template-areas",
  "gtc": "grid-template-columns",
  "gtr": "grid-template-rows",
  "h": "height",
  "jc": "justify-content",
  "ls": "letter-spacing",
  "lh": "line-height",
  "m": "margin",
  "mb": "margin-bottom",
  "ml": "margin-left",
  "mr": "margin-right",
  "mt": "margin-top",
  "o": "opacity",
  "oc": "outline-color",
  "ow": "outline-width",
  "ox": "overflow-x",
  "oy": "overflow-y",
  "p": "padding",
  "pb": "padding-bottom",
  "pl": "padding-left",
  "pr": "padding-right",
  "pt": "padding-top",
  "ti": "text-indent",
  "tj": "text-justify",
  "tt": "text-transform",
  "t": "top",
  "v": "visibility",
  "ws": "white-space",
  "w": "width",
  "zi": "z-index",
  "bg": "background",
  "maxh": "max-height",
  "minh": "min-height",
  "maxw": "max-width",
  "minw": "min-width"
}

const specialkeys = ['Tab', '[', ']', '\\', '=', '-']
const controlkeys = ['Control', 'Alt', 'Shift']
const exitkey = 'Escape'
const enterkey = 'Enter'

const pmwh = ['p', 'm', 'w', 'h', 'c', 'b', 't', 'l']

const pmwhdict = {
    'p': 'padding',
    'm': 'padding',
    'w': 'padding',
    'h': 'padding',
    'p': 'padding',
}

const pmwhdictconfig = {
    'p': 'padding',
    'm': 'padding',
    'w': 'padding',
    'h': 'padding',
    'p': 'padding',
}


function getElements(query) {
    return Array.from(document.body.querySelectorAll(query))

    if (!query) {
        return Array.from(document.body.getElementsByTagName('*'))
    }
    const selector = "*[class*='" + query + "']"
    const elements = document.querySelectorAll(selector)
    return elements
}
class StyleController {

    reset() {
        this.activetrait = null
        this.isCreateStyle = false
        this.isCreateClass = false
        this.string = ''
        this.traitstring = ''
        this.current = ''
        this.key = ''
    }

    constructor(elements) {
        this.ae = null
        this.reset()
        this.init(elements)

    }

    init(elements) {
        console.log(elements)
        if (elements) {
            this.indexed = new Indexed(elements)
            this.ae = this.indexed.get(0)
        }
    }

    get style() {
        return this.ae.style[this.key]
    }
    
    setStyle(val) {
        this.ae.style[this.key] = val
    }

    next(direction = 1) {
        const ACTIVE_CLASS = 'active-highlight'
        this.ae = this.indexed.next(direction, 
            x => {
                console.log(x, 'before')
                x.classList.remove(ACTIVE_CLASS)
            },
            x => {
                console.log(x, 'aft')
                x.classList.add(ACTIVE_CLASS)
            }
        )
    }

    stylize(s) {
        const style = toStyleObject(s)
        extend(this.ae.style, style)
    }

    increment(trait) {
        const product = cssIncrement(this.ae.style[trait], 1)
        this.ae.style[trait] = product
    }

    decrement(trait) {
        const product = cssIncrement(this.ae.style[trait], -1)
        this.ae.style[trait] = product
    }

    export() {
        const data = this.indexed.items.reduce((acc, item, index) => {
             const styles = stylekeys.reduce((acc, key, i) => {
                 const product = item.value.style[key]
                 if (product && !isDefaultCSS(key, product)) acc[key] = product
                 return acc
             }, {})
             acc[item.name || index] = styles
             return acc
        }, {})
        return data
    }
    name(k) {
        this.indexed.set('name', k)
    }
    
    action(key) {
        if (isFunction(dict[key])) {
            dict[key]
        }
        else if (isString(dict[key])) {
            this.increment(dict[key])
        }

    }

    backspace() {
        this.string = this.string.slice(0, -1)
    }


    enter() {
        this.isCreateStyle ? 
            this.stylize(this.string) :
            loadcss(cssParser3(...splitonce(this.string)))
        this.reset()
    }

    stylehandler(e) {
        if (e.key == 'r') {
            console.log('Ctrl r yo')    
        } else {
            e.preventDefault()
            e.stopPropagation()
        }

        if (false) return

        else if (e.key == 'Tab')      this.next()
        else if (this.isCreateStyle || this.isCreateClass) {
            if (isTypingKey(e))        this.string += e.key
            else if (e.key == 'Enter') this.enter()
            else if (e.key == 'Backspace') this.backspace()
            else if (e.key == 'Escape') this.string = ''
        }

        else if (e.key == '/') {
            console.log('starting to create style string')
            this.string = ''
            this.isCreateStyle = true
        }
        else if (e.key == '.') {
            console.log('starting to create class string')
            this.string = ''
            this.isCreateClass = true
        }

        else if (this.activetrait) {
            console.log('active trait proceeding to style')
            console.log(this.activetrait)
            this.traitstring = ''
            if (e.key == '') this.increment()
            else if (e.key == 'ArrowLeft') this.decrement()
            else if (e.key == 'ArrowRight') this.increment()
            else if (e.key == 'Escape') this.reset()

            else if (pmwh.includes(e.key)) {
               console.log('resetting activetrait, and starting on the traitstring')
               this.activetrait = null
               this.traitstring += e.key 
            }
        }

        else if (this.traitstring in csspathmap) {
             this.activetrait = csspathmap[this.traitstring]
             console.log('active trait has been created')
             this.increment()
        }

        else if (pmwh.includes(e.key)) {
           this.traitstring += e.key 
        }

        else if (e.key == 'Backspace') {
           this.traitstring = this.traitstring.slice(0, -1)
        }

        console.log([this.traitstring, this.string, this.isCreateStyle, this.isCreateClass])

    }
}






let animator
function CreateVue() {
    if (!isBrowser()) {
        return
    }

    try {
        animator = new Animator()
    } catch(e) {
        console.log(getErrorInfo(e))
    }

    const store = new Vuex.Store({
      state: {
        studentID: null,
        questions: [],
      },
      mutations: {
        setStudentID (state, payload) {
          state.studentID = payload 
        },
        addQuestion (state, payload) {
          state.questions.push(payload)
        },
      }
    })

    const app = new Vue({
      store,
      components: {StartComponent, QuizComponent, EndComponent},
      data() {
          return VueData
      },
      methods: {
          next(e) {
              const components = ['StartComponent', 'QuizComponent', 'EndComponent']
              //if (this.currentComponent == 'StartComponent') {
                  //this.enterActiveClass = 'fade-enter-active-fast'
              //}
              //else {
                  //this.enterActiveClass = 'fade-enter-active-slow'
              //}

              if (isString(e) && components.includes(e)) {
                    this.currentComponent = e
              }
              else {
                  const currentIndex = components.indexOf(this.currentComponent)
                  const targetIndex = modulus(currentIndex, components)
                  this.currentComponent = components[targetIndex]
                  this.computedProps = isObject(e) ? e : {}     
                  console.log(this.computedProps, 'computedprops')
              }
                  
              console.log('moving to the next component', this.currentComponent)
          }
      },
      template: `
          <div class="app">
              <transition 
                  mode="out-in"
                  name="fade">
                  <component :key="currentComponent" 
                      v-bind="computedProps"
                      :is="currentComponent" 
                      @next="next">
                  </component>
              </transition>
          </div>
      `,
    }).$mount('#app')
    
    return app
}




function splitcss(s) {
    return s.trim().split(/(?<!=) (?!=)/)
}



// what happens after this... tying the google element into it.
// adding the other parts too, the multi slides.
// making it look pretty with the stylecontroller.
function modulus(currentIndex, arr) {
    return (currentIndex + 1) % arr.length
}



// Each component has some of it's own state. Which is a problem. 
// guided  tutorial ... 

function handleIncorrectAnswer() {
    console.log('handling incorrect answer')
    //this.animator.setPositionRelativeTo('choices')
    const promise = this.animator.animate(this.question.explanation)
    promise.then((s) => {
        this.nextQuestion()
    })

}


class Animator {
    createElement(obj) {
        console.log('creating element')
        this.append(obj)
    }
    setPosition(pos, width = 50, height = 50) {
        if (pos == 'center') {
            this.$el.style.top = '50%'
            this.$el.style.left = '50%'
            console.log(stylegetter(this.$el, 'width', 'height'))
        }
        else {
            const {right, top} = pos
            positionTheElement(this.$el, right, top, width, height)
        }
    }
    constructor() {
        const el = document.createElement('div')
        console.log(el)
        document.body.style.position = 'relative'
        document.body.appendChild(el)
        el.style.background = 'yellow'
        el.style.outline = '2 px solid red'
        el.style.position = 'absolute'

        this.$el = el
        this.elements = []
    }

    setPositionRelativeTo(el) {
        const {top, left, right, height} = getClientRect(el)
        const width = document.clientWidth - 100 - right
        this.left = left
        this.top = top
        positionTheElement(this.$el, right, top, width, height)
    }

    append(frame) {
        const options = {
            tag: true,
            background: getRandomColor(),
            width: 50,
            height: 50,
            circle: true,
        }

        const el = elt({...options, ...frame})

        this.elements.push(el)
        //this.$el.appendChild(el)
        document.body.appendChild(el)
        return el
    }

    clear() {
        let duration
        let easing
        return new Promise(resolve => {
            this.elements.forEach((el, i) => {
                disappear(el, duration, easing).onfinish = () => {
                    el.remove()
                    if (i == this.elements.length - 1) {
                        this.elements = []
                        resolve()
                    }
                }
            })
        })
    }

    animate(frames) {
        return new Promise((resolve) => {
           const runner = () => {
               //if (this.frame && this.activeElement && this.frame.disappear) {
                   //pop(this.elements, this.activeElement)
                   //disappear(this.activeElement)
                   //this.activeElement.remove()
               //}
               const frame = frames.shift()     
               this.frame = frame
               this.activeElement = this.append(frame)
               console.log(frame)
               //const options = getAnimationOptions(frame)
               const result = appear(this.activeElement, frame.duration)
               result.onfinish = exists(frames) ? runner : resolve
           }
           runner()
        })
    }
}
function sayFinished() {
    console.log('finished!')
}


const frames = [
    {
        html: h.sup,
        duration: 2000,
        animation: {opacity: 1},
        position: [0, 0],
    },
]

function flipanimate(el, animation, options) {
    const defaultOptions = {
        duration: 1000,    
    }
    if (isNumber(options)) {
        options = {
            duration: options,
            easing: 'ease-in-out',
        }
    }
    Object.assign(el.style, animation)
    return el.animate(animation, options || defaultOptions)

    return
    for (let [k, v] of Object.entries(animation)) {
        el.style[k] = v
        el.animate({[k] : v}, options || defaultOptions)
    }
}
function flipanimation2(el, key, value, options) {
    let result
    let initial
    switch (key) {
        case '2': initial = 0; break;
        case 'transform': initial = 'none'; break;
        default:  initial = 0; break;
    }

    el.style[key] = value
    result =  el.animate({[key]: initial, offset: 0}, options)
    //result =  el.animate([{opacity:0}, {opacity: 1}], options)
    return result
}


function getClientRect(el, ...keys) {
    if (isString(el)) el = document.querySelector(el)
    const info = el.getBoundingClientRect()
    return info
}

function positionTheElement(el, x, y, width, height) {
    console.log('positioning the element')
    let unit = 'px'
    el.style.left = x + unit
    el.style.top = y  + unit
    el.style.width = width + unit 
    el.style.height = height + unit
}


function getDocumentWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function sleep(ms = 3000) {
    if (ms < 10) ms *= 1000
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('finished sleep')
            resolve()
        }, ms)
    })
}



   
















function elt(props) {
    console.log(props)
    if (props.ref && !isString(ref)) {
        return ref
    }

    const unit = 'px'

    const ignore = ['svg', 'duration', 'time', 'ref', 'el']
    const excludeUnits = ['lineHeight', 'zIndex']
    const svgTraits = ['d', 'points']

    const svgURI = "http://www.w3.org/2000/svg"

    function runner(props) {

    const el = 'svg' in props ? 
        document.createElementNS(svgURI, (isBoolean(props.svg) ? 'svg' : props.svg)) : 
        document.createElement(props.el || 'div')


    console.log(props)
    for (let [k, v] of Object.entries(props)) {
        if (k in ignore) {
            continue
        }

        if (v && isNumber(v) && !excludeUnits.includes(k)) {
            v += unit
        }

        if (svgTraits.includes(k)) {
            el.setAttribute(k, v)
        }

        else if (k == 'radius') {
            el.style.width = v
            el.style.height = v
            el.style.borderRadius = '50%'
        }

        else if (k == 'x') {
            console.log('upup')
            el.style.left = v
        }

        else if (k == 'y') {
            el.style.top = v
        }

        else if (k == 'text' && v) {
            el.textContent = v.toString()
        }

        else if (k == 'html' && v) {
            el.innerHTML = v.toString()
        }

        else if (k == 'circle') {
            el.style.borderRadius = '50%'
        }

        else if (k == 'position') {
            if (isArray(v)) {
                const [x, y] = v
                el.style.left = x + 'px'
                el.style.top = y  + 'px'
                el.style.position = 'absolute'
            }
            else {
                el.style.position = v
            }
        }

        else if (k == 'tag') {
           el.dataset.tag = v || true
        }

        else if (k == 'class') {
           isArray(v) ? el.classList.add(...v) : el.classList.add(v)
        }

        else if (k == 'children') {
            for (let child of v) {
                el.appendChild(runner(child))

                if (child.name) {
                    let children = el.dataset.children || ''
                    el.dataset.children = children + ' ' + child.name
                }
            }
        }

        else {
            console.log(k, v, 'leftover')
            el.style[k] = v
        }
    }

    if (!props.relative) {
        el.style.position = 'absolute'
    }
    stylegetter(el, 'width', 'height', 'top', 'left')

    return el 

    }

    return runner(props)
}
function elt2(el, props, children) {
    const dom = document.createElement(el)

    if (props) Object.assign(dom, props)
    if (children) {
        el.innerHTML = children
    }
    return dom
    if (children) {
        for (let child of children) {
            if (typeof child != 'string') dom.appendChild(child)
            else dom.appendChild(document.createTextNode(child))
        }
    }
    return dom
}

function addCss(css) {
    const stylesheet = document.styleSheets[1]
    stylesheet.insertRule(css, 0)
}

function editStyleSheetSelector(selector, property, value) {
    console.log(document.styleSheets)
    const stylesheet = document.styleSheets[1]
    console.log(stylesheet)

    selector = selector.toLowerCase();
    property = property.toLowerCase();
    value = value.toLowerCase();

    for(var i = 0; i < stylesheet.cssRules.length; i++) {
        const rule = stylesheet.cssRules[i];
        console.log(rule)
        if(rule.selectorText === selector) {
            rule.style[property] = value;
            return;
        }
    }

    stylesheet.insertRule(selector + " { " + property + ": " + value + "; }", 0);
}



function positioned(x, y) {
    return {
        position: 'absolute',
        left: x + 'px',
        top: y + 'px',
    }
}


function getallchunks(s) {
    return s.split(/^\n+(?=[<\w])|(?<=[>\]]|}\)?)^\n+/m)
}

function createVueData(s) {
    const dataRE = /this\.(\w+) =/g
    const matches = unique(findall(dataRE, s))
    if (!exists(matches)) {
        return null
    }
    const string = matches.reduce((acc, item) => {
        return acc += item + ': ' + 'null' + ',\n'
    }, '').trim()
    return vuetemplater('data', string)
}

function vuetemplater(key, value) {
    const templates = {
        'data': '    data() {\n        return {\n            $c\n        }\n    },'
    }
    const template = templates[key]
    return template.replace(/( *)\$c/, (_, spaces) => {
        return indent(value, spaces)
    })
}

function pprint(items) {
    if (isString(items)) {
        console.log(items)
    }

    for (let item of items) {
        console.log(item)
        linebreak()
    }
}

const vuetemplate = `

{
    $data,
    $methods,
    $template,
    $render,
}
`

const webpagetemplate = `
<!doctype html><html>
    <style>
        $css
    </script>

    <div id="app">
        $html
    </div>

    <script>
        $javascript
    </script>
</html>`


function CreateStringVue(s) {

    const general = [
        {parser: createVueData, destination: 'data'},
        {parser: libraryParser, destination: 'libraries'},
    ]

    const postparse = {
        'methods':  (v) => indent(v.join(',\n') + ',', 8),
        'data':     null,
        'template': null,
        'html'    : null,
        'javascript': (v) => v.join('\n\n'),
        'css':      null, 
    }

    const destinations = [

        {
            regex: /^\/\//,
            destination: 'comments',
        },

        {
            regex: /^use/,
            destination: 'libraries',
            preparse: s => s.slice(4),
        },

        {
            regex: /^ *</,
            dispatch: (s, store) => store.add('html', s),
            description: 'html',
        },

        {
            regex: /^(\w+): {/,
            dispatch: (tag, s, store) => store.add(tag, s),
            description: 'for raw items like "computed: {"',
        },
        {
            regex: /^(?:function )?(created|mounted|render)/,
            dispatch: (tag, s, store) => store.add(tag, s),
            preparse(s, context) {
               s = s.replace(/^function /, '') 
               s = s.replace(/(?<=^.*?\w+)(?= {)/, context.tag == 'render' ? '(h)' : '()')
               if (test('await', s)) {
                   s = 'async ' + s
               }

               return addSuffix(s.trim(), ',')
            }
        },

        {
            regex: /^function|^class|^const|;$/,
            dispatch: (s, store) => {
                let isMethod = test(/this\.\w+(?:\(| =)/, s)
                if (isMethod) {
                    store.add('methods', getFunctionName)
                    store.add('javascript', s)
                }

                else {
                    store.add('javascript', s)
                }
            }
        },

        {
            regex: /^\.|^\S+ {/,
            destination: 'css',
        },

    ]


    const config = {general, destinations, postparse}
    const store = accumulate(s, config)


    if (!store.get('data')) {
        return htmlbuilder(
            joined(store.get('css')),
            '', 
            joined(store.get('javascript'))
        )
    }

    else {
        let a = ''
        a += '{\n'
        if (store.has('render'))  a += indent(store.get('render')[0]) + '\n'
        if (store.has('mounted')) a += indent(store.get('mounted')[0]) + '\n'
        if (store.has('created')) a += indent(store.get('created')[0]) + '\n'
        if (store.has('data'))    a += store.get('data') + '\n'
        if (store.has('methods')) {
            a += '    methods: {\n'
            a += store.get('methods') + '\n'
            a += '    },\n'
        }

        a += '}\n'
        a = 'const main = ' + a
        a += '\n\n'
        a += 'const app = new Vue(main).$mount(\'#app\')'
        a += '\n\n'
        a += store.get('javascript', '')

        const javascript = selt('script', a)
        const css        = selt('style', null)
        const body       = selt('body', '<div id="app"></div>')
        const libraries  = store.get('libraries', '')

        let template = ''
        template += '<!doctype html><html>\n'
        if (libraries) template += libraries + '\n'         
        if (css) template += '\n' + css + '\n\n'         
        if (body) template += '\n' + body + '\n\n'         
        if (javascript) template += '\n' + javascript + '\n\n'         
        template += '</html>'
        const p = template
        console.log(p)
        return p
    }
}


function accumulate(s, config) {
    const store = new SimpleStorage()
    const {general, destinations, postparse} = config

    if (general) {
        for (let item of general) {
            const parsed = item.parser(s)    
            store.add(item.destination, parsed)
        }
    }

    const chunks = getallchunks(s)

    for (let chunk of chunks) {
        for (let destination of destinations) {
            let match = chunk.match(destination.regex)
            if (!match) continue
            if (destination.preparse || destination.parser) {
                const context = {
                    tag: match[1]
                }
                chunk = (destination.preparse || destination.parser)(chunk, context)
            }

            if (match[1]) {
                destination.dispatch(match[1], chunk, store)
            } else {
                if (destination.dispatch) {
                    destination.dispatch(chunk, store)
                }
                else if (destination.destination) {
                    store.add(destination.destination, chunk)
                }
            }
            break
        }
    }

    store.transform(postparse)
    return store
}



function getFunctionName(s) {
    let match = search('function (\\w+)', s)
    if (!match) match = search('^.*?(\\w+)\\(', s)
    return match
}


function libraryParser(s) {
    const map = {
        '\\$(?:toggle|increment)': '<script src="vh.js"></script>',
        'this\\.': '<script src="vue.js"></script>',
        'katex': '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css" integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc" crossorigin="anonymous"><script src="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.js" integrity="sha384-YNHdsYkH6gMx9y3mRkmcJ2mFUjTd0qNQQvY9VYZgQd7DcN7env35GzlmFaZ23JGp" crossorigin="anonymous"></script>',
        'codemirror': '<script charset="utf8" src="./codemirror.js"></script>\n<link rel="stylesheet" type="text/css" href="./codemirror.css" />\n<link rel="stylesheet" type="text/css" href="./styles.css" />'
    }

    let a = []
    for (let [k, v] of Object.entries(map)) {
        if (test(k, s)) {
            a.push(v)
        }
    }
    const helpers = '<script src="helpers.js"></script>'
    a.push(helpers)
    return a.join('\n')
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function appear2(el, duration) {
    if (!duration) duration = 2500
    el.style.opacity = 1
    return new Promise(resolve => {
        el.animate({opacity: 0, offset: 0}, duration).onfinish = resolve
    })
}

function appear(el, duration) {
    if (!duration) duration = 2500
    el.style.opacity = 1
    return el.animate({opacity: 0, offset: 0}, duration)
}

function disappear(el, duration) {
    if (!duration) duration = 2500
    el.style.opacity = 0
    return el.animate({opacity: 1, offset: 0}, duration)
}

function getAnimationOptions(frame) {

   const options = {
       duration: 2000,
       delay: 2000,
       fill: 'forwards',
   }

   if (frame.duration) options.duration = frame.duration * 1000
   if (frame.time)     options.delay    = frame.time * 1000 
}








function htmlbuilder(css, body, javascript, libraries = '') {
    let template = ''
    template += '<!doctype html><html>\n'
    if (libraries) {
        template += libraries + '\n'         
    }
    else {
        template += '<script src="helpers.js"</script>\n'
    }
    if (css) template += '\n' + selt('style', css) + '\n\n'         
    if (body) {
        template += '\n' + selt('body', body) + '\n\n'         
    }
    else {
        template += '\n<body></body>\n'
    }
    if (javascript) template += '\n' + selt('script', javascript) + '\n\n'         
    template += '</html>'
    return template
}

function isBoolean(x) {
    return x === true || x === false
}


//rpwo('foo.html', CreateStringVue, 'foo.html')
//rpwo('arrow.js', CreateStringVue, 'arrow.html')
//const fetch = require('node-fetch')
//fetchMathQuestions()


const EnglishComponent = {
    props: ['slide'],
    created() {
        //this.$load('english', englishquestions)
    },
    render(h) {
        let type = this.slide.type
        if (type == 'vocabulary') {
            return h('div', {
                domProps: {
                    innerHTML: this.slide.html,
                },
                on: {
                    click: () => this.$emit('next-english'),
                },
            })
        }

        else if (type == 'vocabulary-quiz') {
            const quiz = h('div', {
            })
            const children = [theQuiz]
            return h('div', {
                on: {
                    keydown: (e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        console.log(e.key)
                        console.log('hi')
                        console.log(this)
                    }
                },
            }, children)
        }
    },
}

function generateDetourQuestion() {
    if (this.question.children) {
        const question = this.question.children.shift()
        if (question) {
            this.question = question
        }
        else {
            return true
        }
    }
}



function forceNext() {
    if (this.detour || this.showExplanation) {
        this.generateDetourQuestion()
    }
    else {
        this.$increment('question')
    }
}

qlist = ['a', 'b', 'c', 'd', 'e'] 


// It is literally an element. 
function pop(items, key) {
    const index = isNumber(key) ? key : items.indexOf(key)
    items.splice(index, 1)
}


// It is possible.
function randomhtml() {
    return selt('div', {class: 'flexcenter'},
        selt('p', 'random-class-' + rng(), randomPick(compliments)),
        selt('img', {
            src: './' + randomPick(catpics),
            width: '250px',
            height: '250px',
            style: {
                opacity: 0.9,
            },
        })
    )
}



function rng(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// everyone is just doing their best to get by. Evil is not always evil.
// The children of the next generation... 


function renderhelper(h, self, fn) {
    return h(...fn(h, self))
}



function hlt(element, props) {
    if (props.text) element.textContent = props.text
    if (props.class) element.classList.add(props.class)
}



// Making them feel happy.
// It's not an alliance of any semblance. 
// Making something.
function insertQuestions() {
    if (this.questionResult === 'INCORRECT' && this.question.children) {
        this.question.children.forEach(el => {
            el.id = this.question.id + '-DERIVATIVE'
        })
        insert(samplemathquestions, this.questionIndex, this.question.children)
    }
}



// i made a huge mistake. 
// give it a try. 
// to be numerical about it.
// it will soon be formalized. 
// make it good. track the mistakes.






//console.log(randomhtml())
try {
    CreateVue()
    //pugger(startcomponenttemplate)
}
catch {
}


function postbin(value, collectionName = 'Test') {
    console.log('posting jsonbin', value)
    const JSONBIN_SECRET_KEY = '$2b$10$RpyRq6D2g4SIaVl.vix5W.vq33VVnyQgzeCev0fLf2pJo2LUVf8DC'
  const body = isObject(value) ? JSON.stringify(value) : JSON.stringify({value})
  const url = 'https://api.jsonbin.io/v3/b'
  const method = 'POST'

  const headers = {
      'Content-Type': 'application/json',
      "X-Master-Key": JSONBIN_SECRET_KEY,
  }

  if( collectionName) {
      headers['X-Collection-Id'] = '5eb04c9b8284f36af7b55b85'
  }

  return fetch(url, {method, headers, body}).then(x => x.json())
}

function storager(key, fn) {
    if (getStorage(key)) {
        return
    } else {
        setStorage(key)
        fn()
    }
}



console.log("2021-06-16 11:54:21.906767")