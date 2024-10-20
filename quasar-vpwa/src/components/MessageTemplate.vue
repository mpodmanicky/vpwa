<template>
    <!--entire div will have margin, kinda like a container. I need avatar, name and message body-->
    <div class="chat">
        <div class="messageTemplate">
            <q-avatar rounded color="teal" text-color="white" icon="person"/>
            <div class="message">
                <div class="userName">
                    USERNAME
                </div>
                <div class="messageBody">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem ratione atque illo at quia. Quos, ea ipsum magnam odit distinctio deserunt fugit! Dolores repellendus suscipit sed neque ullam est?
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables.scss";

.chat {
    width: 100%;
}

.messageTemplate {
    max-width: 600px;
    display: flex;
    padding: 5px;
    margin: 0 15px 15px 15px;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    border-radius: 10px;
    // for better visualisation i added border to the message body
    //border: 1px solid $primary;
}

.messageBody {
    padding: 5px;
}

.userName {
    margin-left: 5px;
}
</style>