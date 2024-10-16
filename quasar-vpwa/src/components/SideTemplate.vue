<template>
    <div>
        <div class="users">
            users
        </div>
        <div class="servers">
            servers
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables.scss";

div{
    background-color: $secondary;
    display: flex;
    height: 100%;
}
.servers {
    border-left: 1px solid black;
    border-right: 1px solid black;
    width: 100%;
}
.users {
    width: 30%;
}
</style>