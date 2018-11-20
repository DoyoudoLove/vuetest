<template>
    <div>
        <!-- 导航 -->
        <Row>
            <Col :xs="24" :sm="10" :md="12" :lg="12">
            <div class="template">
                <i>
                    温州盛锦建筑劳务有限公司
                </i>
                <!--<span>Wenzhou Sheng Jin Construction Service Ltd</span>-->
            </div>
            </Col>
            <Col :xs="{span:0}" :sm="14" :md="12" :lg="12">
            <Menu mode="horizontal" :theme="theme1" active-name="1">
                <MenuItem name="1">
                    首页
                </MenuItem>
                <MenuItem name="/login" @on-select="routeTo">
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
                <CarouselItem v-for="(picture,index) in items" :key="index">
                    <div class="demo-carousel">
                        <img class="banner" :src="picture.img"/>
                    </div>
                </CarouselItem>
            </Carousel>
            </Col>
        </Row>
        <!-- 内容1 -->
        <div>
            <Row>
                <Col :xs="24" :sm="24" :md="24" :lg="24">
                <div id="content_top">
                    <div id="ourService">
                        <i>我们的服务</i>
                    </div>
                    <div id="descService">
                        <span>一条龙建筑工程专业服务企业</span>
                    </div>
                </div>
                </Col>
                <Col :lg="8" :md="8" :sm="8" :xs="24" v-for="(news,index) in services" :key="index">
                <div>
                    <div id="content_bottom">
                        <div id="img">
                            <img class="service" :src="news.imgUrl"/>
                        </div>
                        <div id="title">{{ news.title }}</div>
                        <div id="content">{{ news.cotent }}</div>
                    </div>
                </div>
                </Col>
                <!-- 内容二 -->
                <Col :xs="24" :sm="24" :lg="24">
                <div id="content1">
                    <div id="content1_about">
                        <!--<p v-text="content.content"></p>-->
                        <div id="module1">关于我们</div>
                        <div id="module2">致力于打造全国专业的建筑公司</div>
                        <div id="module3" :xs="24" :sm="24">
                            建筑有限公司座落于中国建筑城建筑工业园开发区。公司创建于1982年，通过多年诚实守信和认真严谨的经营，已高速发展成集设计、
                            工程的大型建材企业，并通过2004环境管理体系世界标准认证。
                        </div>
                        <div id="module4">
                            <a>
                                <span>
                                了解更多
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
        <!-- 页面底部 -->
        <Row>
            <div id="footer">
                <Col :xs="24" :sm="24" :md="24" :lg="24">
                <div id="footer_example">
                    <div id="footer_example1" v-for="(num,index) in num" :key="index">
                        <div id="number">{{ num.number }}</div>
                        <div id="footer_name">{{ num.footer_name }}</div>
                    </div>
                </div>
                </Col>
                <Col :xs="24" :sm="24" :md="24" :lg="24">
                <div id="footer_about">
                    <div id="footer_module1">服务理念</div>
                    <div id="footer_module2">优质建筑的精品，创新求实的精神，热情服务的承诺，良好诚实的信誉。安全管理制度化，安全制度标准化，作业行为规范化。以人为本，不断创新。</div>
                    <!--<p v-text="footer.content"></p>-->
                </div>
                </Col>
            </div>
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
                items: [
                    {
                        "img": "../../static/images/banner.jpg"
                    },
                    {
                        "img": "../../static/images/banner2.jpg"
                    }
                ],
                services: [
                    {
                        "imgUrl": "../../static/images/s1.jpg",
                        "title": "建筑施工",
                        "cotent": "对各类房屋建筑及其附属设施的建造和与其配套的线路的安装活动所形成的工程实体。"
                    },
                    {
                        "imgUrl": "../../static/images/s2.jpg",
                        "title": "建筑维护",
                        "cotent": "对维修进度, 过程进行监督、 促进工作进展, 并对维修后的结果进行检查做好记录。"
                    },
                    {
                        "imgUrl": "../../static/images/s3.jpg",
                        "title": "装修装潢",
                        "cotent": "业务包括家居，酒店，商场，厂房，办公楼，别墅，疗养院等室内外装修工程。"
                    }
                ],
                content: {
                    "imgUrl": "../../static/images/body.jpg",
                    "content": "关于我们\n" +
                        "致力于打造全国专业的建筑公司\n" +
                        "建筑有限公司座落于中国建筑城建筑工业园开发区。公司创建于1982年，通过多年诚实守信和认真严谨的经营，已高速发展成集设计、 工程的大型建材企业，并通过2004环境管理体系世界标准认证。"
                },
                footer: {
                    "imgUrl": "../../static/images/body.jpg",
                    "content": "服务理念\n" +
                        "优质建筑的精品，创新求实的精神，热情服务的承诺，良好诚实的信誉。安全管理制度化，安全制度标准化，作业行为规范化。以人为本，不断创新。"
                },
                num: [
                    {
                        "number": "1343",
                        "footer_name": "服务客户"
                    },
                    {
                        "number": "1343",
                        "footer_name": "精彩案例"
                    },
                    {
                        "number": "1343",
                        "footer_name": "员工"
                    },
                    {
                        "number": "1343",
                        "footer_name": "好评"
                    }
                ]
            }
        },
        methods: {
            routeTo(e) {
                console.log(e);
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

    * {
        margin: 0;
        padding: 0;
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

    #img {
        height: 100%;
        font-size: 0;
        position: relative;
        padding-top: 50px;
        background-size: cover;
        text-align: center;
    }

    .service {
        max-width: 100%;
    }

    #content_top {
        margin: 0 80px;
        padding-top: 40px;
    }

    #content_top #ourService {
        color: #333;
        font-size: 20px;
        text-align: left;
        font-weight: bold;
    }

    #content_top #ourService i {
        font-style: normal;
    }

    #content_top #descService {
        font-size: 12px;
        color: rgba(125, 125, 125, 1);
        text-align: left;
    }

    #content_bottom {
        margin: 0 80px;
    }

    #title {
        font-size: 20px;
        color: #333;
        text-align: center;
        font-weight: bold;
    }

    #content {
        line-height: 25px;
        font-size: 12px;
        color: rgba(125, 125, 125, 1);
        text-align: center;
        font-weight: bold;
    }

    #content1 {
        margin-top: 50px;
        background-size: cover;
        background: url("../static/images/body.jpg") no-repeat center;
    }

    #content1_about {
        width: 100%;
        height: 520px;
        padding: 200px 0 0 80px;
    }

    #content1_about #module1 {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        font-weight: bold;
    }

    #content1_about #module2 {
        width: 100%;
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        color: rgba(245, 244, 244, 1);
        text-align: left;
        font-weight: bold;
        padding-top: 10px;
    }

    #content1_about #module3 {
        width: 500px;
        height: 70px;
        line-height: 35px;
        font-size: 12px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        font-weight: bold;
        padding-top: 35px;
    }

    #content1_about #module4 {
        width: 130px;
        font-size: 14px;
        height: 40px;
        padding-top: 100px;
    }

    #module4 a {
        height: 40px;
        display: block;
        background: #fff;
        border-radius: 20px;
        width: 100%;
    }

    #module4 a span {
        display: block;
        width: 100%;
        line-height: 40px;
        height: 40px;
        text-align: center;
        color: rgba(253, 108, 64, 1);
    }

    #footer {
        width: 100%;
        height: 720px;
        background-size: cover;
        background: url("../static/images/footer.jpg") no-repeat center;
    }

    #footer_example {
        padding: 37px 0;
        border: 1px solid red;
        float: left;
    }

    #footer_example1 {
        width: 120px;
        height: 60px;
        border: 1px solid green;
    }

    #number {
        font-size: 25px;
        color: #333;
        text-align: center;
    }

    #footer_name {
        font-size: 13px;
        color: #333;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        #content1 {
            width: 100%;
            background: url("../static/images/body.jpg") no-repeat center;
        }

        #content1_about {
            width: 100%;
            height: 380px;
            padding: 100px 0 0 20px;
        }

        #content1_about #module3 {
            width: 100%;
        }

        #content1_about #module4 {
            width: 100%;
            padding: 100px 10px 0 10px;
        }
        #footer {
            background-size: cover;
            background: url("../static/images/footer.jpg") no-repeat center;
        }
    }
</style>
