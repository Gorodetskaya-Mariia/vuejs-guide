<template>
  <div>
    <h3>Some User Details</h3>
    <p>Loaded id: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      class="btn btn-primary"
      :to="{ name: 'userEdit', params: { id: $route.params.id } }"
    >Edit User
    </router-link>
  </div>
</template>
<!-- alternative for :to- "'/user/' + $route.params.id + '/edit'" -->
