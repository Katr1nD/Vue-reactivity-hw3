const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    watch: {
        resultNumber() {
            const that = this;
            setTimeout(function() {
                that.counter = 0;
            }, 5000);
        }
    },
    computed: {
        resultNumber() {
            if(this.counter < 37) {
                return 'Not there yet';
            } else if (this.counter > 37) {
                return 'Too much!';
            } else {
                return this.number;
            }
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        }
    }
});

app.mount('#assignment');