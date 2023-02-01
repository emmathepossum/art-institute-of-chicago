<script lang="ts">
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
        <div class="input-group mb-3">
            <input v-model="query" @keydown.enter="onQuery" type="text" class="form-control search-input"
                placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
            <span class="input-group-text">
                <button type="button" class="search-button btn btn-dark" @click="onQuery">Search</button>
            </span>
        </div>
    </div>
</template>

<style scoped>
.search-field {
    margin: 5px;
}

.input-group {
}

.search-input, .input-group-text {
    color: #fff;
    background: rgba(0, 0, 0, .25);
}

.input-group-text {
    padding: 0;
}
.search-button {
    display: inline-block;
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