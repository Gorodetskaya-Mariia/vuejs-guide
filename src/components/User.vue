<template>
    <div class="component">
        <h1>The User Component</h1>
        <button @click="changeName">Change my Name</button>
        <div class="row">
            <div class="column-left">
                <app-user-detail :name="name" @nameWasReset="name= $event"></app-user-detail>
            </div>
            <div class="column-right">
                <app-user-edit></app-user-edit>
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
          name: "Mariia"
        }
      },
      methods: {
        changeName() {
          this.name = "Anna"
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
    }
    .column-left,
    .column-right {
      width: 50%;
    }
    button {
      padding: 5px;
      margin-bottom: 25px;
      background-color: transparent;
      border: 1px solid black;
      border-radius: 5px;
    }
</style>
