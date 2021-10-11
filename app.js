const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Shahrokh',
            lastName: 'Elmi',
            url: 'https://google.com',
            raw_html: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20, middleName: ''
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },

        decrease() {
            this.age--
        },
        updateLastName(event, msg) {
            // event.preventDefault();
            console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
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

