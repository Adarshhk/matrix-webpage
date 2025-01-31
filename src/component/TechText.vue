<script setup>
import { ref, onMounted } from 'vue'

class TextScrambler {
  constructor(updateText) {
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
    this.updateText = updateText
  }
  
  setText(newText) {
    const oldText = this.currentText || ''
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.currentText = newText
    this.update()
    return promise
  }
  
  update() {
    let output = ''
    let complete = 0
    
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="text-gray-600">${char}</span>`
      } else {
        output += from
      }
    }
    
    this.updateText(output)
    
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

const phrases = [
  'Start small with,',
  'algo trading,',
  'but dream big. ',
  'Each strategy you refine',
  'brings you closer to',
  'mastering the market!'
]

const displayText = ref('')
let scrambler
let counter = 0

const next = () => {
  scrambler.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

onMounted(() => {
  scrambler = new TextScrambler((text) => {
    displayText.value = text
  })
  next()
})
</script>

<template>
  <div class=" w-full py-10 flex items-center justify-center ">
    <div 
      class="text-[44px] lg:text-[84px] text-gray-100 font-bold"
      v-html="displayText"
    ></div>

  
  </div>
</template>

