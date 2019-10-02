console.log('Hello from sw.js')

self.addEventListener("install", (e) => {
    console.log(e)
})

self.addEventListener('fetch', (e) => {
    console.log(e)
});