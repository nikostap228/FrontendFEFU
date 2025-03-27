export const useGreeting = () => {
    const greeting = ref('Hello, world!')
    const strings = ['Hello, world!', 'Hello, FEFU!']
  
    const toggleGreeting = () => {
      greeting.value = strings[(strings.indexOf(greeting.value) + 1) % strings.length]
    }
  
    return { greeting, toggleGreeting }
  }