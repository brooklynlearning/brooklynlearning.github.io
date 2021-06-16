// the more you add, the more can go wrong basically. Each element is haphazardly put together. 

// to see the blood line continue. I do things on my own time. You can hook up a voice, and it can deliver the lesson. The creation of a human into a robot. Could you not simulate every element that constitutes a human? My sensibilities are correct. What I eat is currently a joke. 


Vue.directive('animate', function (el, binding) {
    if (!binding.value) {
        return
    }
    let options
    let frames 
    const initial = el.style.background

    if (binding.arg) {
        el.animate({width: 100}, {
            pseudoElement: '::after',
            duration: 1000,
            delay: 500,
        })

        el.style.background = 'blue'
        el.animate({background: 'blue'}, 1000)
    }
    else {
        el.animate({background: 'blue'}, 1000)
    }

})

Vue.directive('appear', function (el, binding) {
    if (!binding.value) {
        return
    }
    const opacityFrames = [
        {opacity: 0, offset: 0},
        {opacity: 100, offset: 0.20},
        {opacity: 100, offset: 0.80},
        {opacity: 0, offset: 1},
    ]
    const options = {
        duration: Number(binding.arg),
        easing: 'ease-in-out',
    }

    el.animate(opacityFrames, options)
})


Vue.directive('celebrate', function (el, binding) {
    if (!binding.value) {
        return
    }
    console.log(binding.arg, 'arg')
    const opacityFrames = [
        {opacity: 0, offset: 0},
        {opacity: 100, offset: 0.20},
        {opacity: 100, offset: 0.80},
        {opacity: 0, offset: 1},
    ]
    const options = {
        duration: Number(binding.arg),
        easing: 'ease-in-out',
    }
    el.animate(opacityFrames, options)
})

Vue.directive('visible', function(el, binding) {
    return 
    if (binding.value) {
        el.style.visibility = 'visible'
        appear2(el)
    }
    else {
        el.style.visibility = 'hidden'
    }
})

Vue.prototype.$next = function(payload) {
    this.$emit('next', payload)
}

Vue.prototype.$setComponentInfo = function(val) {
    console.log(val, 'setcompinfo')
    let key = 'currentComponent'
    this.currentComponent = val
    console.log(this[key], 'cc')
    this.currentProps = {}
    //this.currentProps = val.props || defaultProps[val.name]
}

Vue.prototype.$save = function(key, value) {
    if (!this.$storage) {
        this.$storage = new SimpleStorage()
    }
    this.$storage.add(key, value)
}

Vue.prototype.$toggle = function(key, delay = 10, callback = null) {
    if (delay == null) {
        this[key] = !this[key]
    } 
    else if (isArray(key)) {
        for (let key of keys) {
            this[key] = !this[key] 
        }
        setTimeout(() => {
            for (let key of keys) {
                this[key] = !this[key] 
            }
            if (callback) {
                const result = callback.call(this)
            }
        }, delay)
    }
    
    else {
        this[key] = !this[key]   
        setTimeout(() => {
            this[key] = !this[key]
            if (callback) {
                const result = callback.call(this)
            }
        }, delay)
    }
}

Vue.prototype.$increment = function(key, items, callback) {
    //console.log(key, 'increment')
    if (callback && !this.callback) this.callback = callback.bind(this)
    if (!this.indexed2) this.indexed2 = new Indexed2()

    if (!this.indexed2.has(key)) {
        this.indexed2.load(key, items)
    }

    const result = this.indexed2.get(key)

    //console.log(result, 'increment result')
    if (isDef(result)) {
        console.log(stringify(result), 'increment')
        this[key] = result
        if (this.callback) this.callback()
        return true
    }
}

Vue.prototype.$initCodeMirror = function(keyhandler) {

    const options = {
        pollInterval: 10000,
        lineWrapping: true,
        lineNumbers: true,
        autofocus: true,
        cursorBlinkRate: 0,
        value: 'hello world',
        mode: 'javascript',
        tabSize: 4,
    }

   const state = {
        count: 0,
        lastword: '',
        tabCount: '',
        functions: {},
   }

   const cm = CodeMirror.fromTextArea(this.$refs.codemirror, options)
   if (keyhandler) {
       cm.on('keydown', keyhandler.bind(this))
   }

   CodeMirror.addClass(cm.getWrapperElement(), 'cm-fat-cursor')
   extend(cm.state, state)
   this.codemirror = cm
}








/*


function render(h) {
    const self = this
    switch(this.currentComponent) {
        case 'StartComponent': {
            return h(StartComponent, {
                nativeOn: {
                    'next': self.$next,
                },
            }
        }

        case 'QuizComponent': {
            return h(
                nativeOn: {
                    'next': self.$next,
                },
            }
        }
            
    }
}

*/


// joy and the expression of the human spirit. 
// 

const timeline = {
        
}

//this.audio.addEventListener("timeupdate", audiohandler.bind(this));

function audiohandler(e) {
    console.log(e.currentTime)
    app.audio.play()
    app.audio.pause()
    e.paused
    e.volume
    e.paused
    e.muted
    e.ended
    audio.currentTime = 40
    if (app.animator.timematch(e.currentTime)) {
        app.animator.animate()
    }
}

class Animatadgdfgor {
    constructor() {
        this.root = elt('div')
    }
    clear() {
        removeAllChildNodes(this.root)
    }

    load(animations) {
        if (animations) this.animations = animations
    }

    timematch(time) {
        return rounded(time) === this.animations[0].startTime
    }

    animate() {
        const animation = this.animations.shift()
        const frames = animation.frames
        const result = this.animerunner(frames)
        if (result == 'DONE') {
            setTimeout(() => {
                this.clear()
            }, animation.endDelay || 0)
        }

        return 'finished animation'
    }

    animerunner(frames) {
        if (!exists(frames)) {
            return 'DONE'
        }
        const frame = frames.shift()

        const el = elt('div', {}, frame.children)
        el.onload = () => animate(el, 'appear', frame.options)
        el.onanimationend = () => this.animerunner(frames)
    }
}

function elt(type, props, ...children) {
    const dom = document.createElement(type)
    if (props) Object.assign(dom, props)
    children.forEach(child => dom.appendChild(child))
    return dom
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// the helpers need to be of a certain length.
const domhelpers = 'elt createElement, firstChild, removeChild, document'

function determineKatexDisplay(s) {
    const length = s.length
    const backslashes = counted('\\', s)
    const spaces = counted(' ', s)

    if (spaces > 6) return true
    if (backslashes > 3) return true
    if (length > 30) return true

    return false
}


Vue.prototype.$calculate = function(s) {
    if (!this.calculator) this.calculator = new Calculation()
    return this.calculator.calculate(s)
}


// have to build those items in. 
//the most recent one will get added in.
//document.getElementsByClassName('*')
// relative all the way down... would be wrong.
// elemt.touch....
// what do i have to do... print out the math assignments.
console.log("Debugging on line 277.")
// they are coming down.
// it is important to eat my beans and get this done. 
//
