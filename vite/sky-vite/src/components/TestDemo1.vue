<template>
    <button @click = "increment">Demo Count is: {{count }}</button>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment() {
                this.count++
            }
        },

        mounted(){
            console.log(`Initial count is ${this.count}`)
        }
    }
</script>

