const {
    createApp
} = Vue

createApp({
    data() {
        return {
            item_active: 0,
            loop: null,
            loop_reverse: null,
            array: [
                {
                    url_image:"./img/01.webp",
                    title: "Spiderman",
                    description: "Spiderman",
                    circle: ''
                },
                {
                    url_image:"./img/02.webp",
                    title: "Ratchet & Clank",
                    description: "Ratchet & Clank",
                    circle: ''
                },
                {
                    url_image:"./img/03.webp",
                    title: "Fortnite",
                    description: "Fortnite",
                    circle: ''
                },
                {
                    url_image:"./img/04.webp",
                    title: "Stray",
                    description: "Stray",
                    circle: ''
                },
                {
                    url_image:"./img/05.webp",
                    title: "Avengers",
                    description: "Avengers",
                    circle: ''
                }
            ]
        }
    },
    created(){
        this.startAutoplay();
    },
    methods: {
        changeImage(index){
            this.item_active = index;
        },
        startAutoplay(){
            this.loop = setInterval(() => {
                this.goToNextSlides();
            }, 2000)
        },
        stopAutoplay(){
            clearInterval(this.loop_reverse);
            clearInterval(this.loop);
            // this.loop = null;
            // this.loop_reverse = null;
        },
        reverseAutoplay(){
            clearInterval(this.loop);
            this.loop_reverse = setInterval(() => {
                this.goToPreviousSlides();
            }, 2000)
        },
        goToNextSlides(){
            this.item_active++;
            if(this.item_active > this.array.length - 1)
                this.item_active = 0;
        },
        goToPreviousSlides(){
            this.item_active--;
            if(this.item_active < 0)
                this.item_active = this.array.length - 1;
        }
    },
}).mount('#app')