<template>
    <div>
        <Slider v-model="value" range></Slider>
    </div>
</template>

<script>
    export default {
        name: "iview",
        data() {
            return {
                value: [20,50]
            }
        }
    }
</script>

<style scoped>

</style>