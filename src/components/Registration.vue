<template>
    <div class="form" v-if="show===true" @click.stop="hideForm">
    <div @click.stop class="form_content">
        <slot></slot>
    </div>
    </div>
</template>

<script>
    export default{
        name:'registration',
        props:{
            show:{
                type: Boolean,
                default: true
            }
        },
        methods:{
            hideForm(){
                this.$emit('update:show', false)
            }
        }
    }
</script>

<style scoped>
    .form{
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(12, 119, 235, 0.7);
        position: fixed;
        display: flex;
    }

    .form_content{
        margin: auto;
        background: #ffffff;
        border-radius: 12px;
        min-width: 50px;
        min-height: 50px;
        display: flex;
        flex-direction: column;
        padding: 30px;
        gap: 20px;
    }
</style>