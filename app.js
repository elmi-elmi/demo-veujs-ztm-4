const vm = Vue.createApp({
    data() {
        return { firstName: 'Shahrokh', lastName: 'Elmi', url: 'https://google.com' }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app');

setTimeout(() => {
    vm.firstName = 'Zhale'
}, 2000)

// Vue.createApp({
//     data() {
//         return { firstName: 'Zhale', lastName: 'Elmi' }
//     },
// }).mount('#app2');

