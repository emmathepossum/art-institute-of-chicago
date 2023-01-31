<script lang="ts">
import { stringifyExpression } from '@vue/compiler-core';

export default {
    name: 'SearchField',
    props: [],
    data() {
        return {
            query: ""
        }
    },
    methods: {
        onQuery() {
            this.$emit('queried', this.query)
        }
    }
}
</script>

<template>
    <div class="search-field">
        <input class="search-input" type="text" placeholder="Search" v-model="query" @keydown.enter="onQuery" />
        <button class="search-button" @click="onQuery">Submit</button>
    </div>
</template>

<style scoped>
.search-field {
    margin: 5px;
}

.search-input {
    color: #fff;
    display: inline-block;
    width: 400px;
    padding: 8px 12px 10px 12px;
    border: 1px solid #d2d2d2;
    background: rgba(0, 0, 0, .25);
}

.search-button {
    display: inline-block;
    background: rgba(0, 0, 0, .25);
    color: #fff;
    width: 55px;
    padding: 0px;
    border: 1px solid #d2d2d2;
}

[placeholder]::-webkit-input-placeholder {
    color: #d2d2d2;
}

[placeholder]:hover::-webkit-input-placeholder {
    color: #d2d2d2;
}

[placeholder]:focus::-webkit-input-placeholder {
    color: transparent;
}

[placeholder]::-moz-placeholder {
    color: #d2d2d2;
}

[placeholder]:hover::-moz-placeholder {
    color: #d2d2d2;
}

[placeholder]:focus::-moz-placeholder {
    color: transparent;
}
</style>