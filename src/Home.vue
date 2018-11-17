<template>
    <div>
        <!-- 导航 -->
        <Row>
            <Col :xs="24" :sm="10" :md="12" :lg="12">
                <div class="template">
                    <i>温州盛锦建筑劳务有限公司</i>
                    <!--<span>Wenzhou Sheng Jin Construction Service Ltd</span>-->
                </div>
            </Col>
            <Col :xs="{span:0}" :sm="14" :md="12" :lg="12">
                <Menu mode="horizontal" :theme="theme1" active-name="1">
                    <MenuItem name="1">
                        首页
                    </MenuItem>
                    <MenuItem name="2"  @on-select="routeTo('/login')">
                        新闻动态
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            案例演示
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4">
                        关于我们
                    </MenuItem>
                    <MenuItem name="5">
                        联系我们
                    </MenuItem>
                </Menu>
            </Col>
        </Row>
        <!-- 轮播 -->
        <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
                <Carousel autoplay v-model="value">
                    <CarouselItem v-for="item in list">
                        <div class="demo-carousel">
                            <img class="banner" :src="item.img"/>
                        </div>
                    </CarouselItem>
                </Carousel>
            </Col>
        </Row>
        <!-- 内容1 -->
        <Row>
            <div>
                <Row>
                    <i>我们的服务</i>
                    <span>一条龙建筑工程专业服务</span>
                </Row>
            </div>

            <Col span="8">
                <div>
                    <img class="service" src=""/>
                    <div>建筑施工</div>
                    <div>Content</div>
                </div>
            </Col>
            <Col span="8">
                <div>
                    <img class="service" src=""/>
                    <div>建筑维护</div>
                    <div>Content</div>
                </div>
            </Col>
            <Col span="8">
                <div>
                    <img class="service" src=""/>
                    <div>装修装潢</div>
                    <div>Content</div>
                </div>
            </Col>
        </Row>
        <!-- 内容二 -->
        <Row>
            <Col>
                <img src="#"/>
            </Col>
        </Row>
        <!-- 页面底部 -->
        <Row>
            <Col>
                <div>Footer</div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "demo",
        data() {
            return {
                theme1: 'light',
                value: 0,
                list: [
                    {
                        "img": "../../static/images/banner.jpg"
                    },
                    {
                        "img": "../../static/images/banner2.jpg"
                    },
                ]
            }
        },
        methods: {
            routeTo(e) {
                this.$router.push(e);
            }
        }
    }
</script>

<style scoped>
    body {
        background: #f8f8f9 !important;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    .template {
        height: 60px;
    }

    .template i {
        font-style: normal;
        font-size: 28px;
        height: 60px;
        line-height: 60px;
        padding-left: 50px;
        float: left;
    }

    .template span {
        font-size: 20px;
        float: left;
    }

    .demo-carousel {
        width: 100%;
        height: 100%;
        /*position: absolute;*/
    }

    .banner {
        width: 100%;
        background-repeat: round;
    }

    .service {
        border: 1px solid red;
        width: 200px;
        height: 200px;
    }

</style>
