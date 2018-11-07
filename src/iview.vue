<template>
    <div>
        <Slider v-model="value" range></Slider>
        <Row>
            <Col span="12">col-12</Col>
            <Col span="12">col-12</Col>
        </Row>
        <br>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
        </Row>
        <br>
        <Row>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "iview",
        data() {
            return {
                value: [20, 50],
            }
        }
    }
</script>

<style scoped>
    .red {
        border: 1px solid red;
    }

</style>