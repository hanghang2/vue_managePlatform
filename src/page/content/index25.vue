<template>
    <div class="Index25">
        index6
        <br />
        <zyh-page :total="totals" :pages="pageArr" @getVal="showVal"></zyh-page>
    </div>
</template>
<script>
    export default {
        name: 'Index25',
        data() {
            return {
                totals:1001,
                pageArr:[100,200,300,400,500]
            }
        },
        methods: {
            showVal(pageData){
                console.log(pageData.page + ',' + pageData.total);
            }
        }
    }
</script>
<style scoped>
    .index6{
        padding: 30px;
    }
</style>
