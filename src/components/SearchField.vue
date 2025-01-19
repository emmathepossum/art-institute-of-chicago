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
                <button type="button" class="search-button btn" @click="onQuery">Search</button>
            </span>
        </div>
    </div>
</template>
