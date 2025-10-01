<template>
    <div class="k-checkbox">
        <label>
            <input type="checkbox" :name="name" hidden>
            <span>
                <slot></slot>
            </span>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'KCheckbox',
        props: {
            value: {
                type: String,
                default: '',
                validator: value => ['', 'default', 'image', 'image-bg', 'file', 'link', 'illustration'].includes(value)
            },
            name: {
                type: String,
                default: ''
            }
        }
    }
</script>