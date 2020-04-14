<template>
  <div>
    <b-alert show variant="info">You have been signed out!</b-alert>
    <b-alert show variant="danger">
      <a href="https://idp.u.washington.edu/idp/profile/Logout">Close your browser or click this link to completely sign out.</a>
    </b-alert>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  options: {
    auth: false
  }
}
</script>
