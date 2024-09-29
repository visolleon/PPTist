<template>
    <div class="import-json-dialog">
        <div class="row">
            <div class="label">网页链接：</div>
            <Input v-model:value="url" placeholder="请输入URL地址" />
        </div>
        <div class="btns">
            <Button class="btn import" type="primary" @click="importJSON()">导入JSON</Button>
            <Button class="btn close" @click="emit('close')">关闭</Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import useImport from '@/hooks/useImport'

const emit = defineEmits<{
    (event: 'close'): void
}>()

const url = ref('')

const {
  importSpecificFile,
  importJSONFile,
  importRemoteJSONFile,
  importPPTXFile,
} = useImport()

const importJSON = function() {
  importRemoteJSONFile(url.value, true)
  emit('close')
}
</script>

<style lang="scss" scoped>
.import-json-dialog {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}
.row {
    width: 100%;

    .label {
        padding-bottom: 10px;
    }
}
.btns {
    width: 300px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    .import {
        flex: 1;
    }
    .close {
        width: 100px;
        margin-left: 10px;
    }
}
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    background-color: #e1e1e1;
    border-radius: 5px;
}
</style>