<template>
    <div class="Index26">
        <div style="height: 300px;width: 500px;margin: 0px auto;background: #ccc;">
            <zyh-viewpager>
                <div class="item-banner" v-for="(item,index) in bannerdata">
                    {{index + 1}}
                </div>
            </zyh-viewpager>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Index26',
        data() {
            return {
                bannerdata:['','','','','','']
            }
        },
        methods: {

        }
    }
</script>
<style scoped>
    .index26{
        padding: 30px;
    }
    .item-banner:nth-of-type(1){
        background: #57c5f7;
    }
    .item-banner:nth-of-type(2){
        background: #f5a623;
    }
    .item-banner:nth-of-type(3){
        background: #f16543;
    }
    .item-banner:nth-of-type(4){
        background: #ba4f2a;
    }
</style>
