<template>
    <div class="component">
        <h1>The User Component</h1>
        <button @click="changeName">Change my Name</button>
        <p>User Age: {{ age }}</p>
        <div class="row">
            <div class="column-left">
                <app-user-detail
                   :name="name"
                   @nameWasReset="name = $event"
                   :resetFn="resetName"
                   :userAge="age"
                ></app-user-detail>
            </div>
            <div class="column-right">
                <app-user-edit
                   :userAge="age"
                   @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
      data: function() {
        return {
          name: "Mariia",
          age: "28"
        }
      },
      methods: {
        changeName() {
          this.name = "Anna"
        },
        resetName() {
          this.name = "Mariia"
        }
      },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
    div.row {
      display: flex;
      justify-content: space-between;
    }
    .column-left,
    .column-right {
      width: 48%;
    }
</style>
