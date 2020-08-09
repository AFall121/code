<template>
  <v-footer dark padless app inset>
    <v-card class="flex" flat title color="red" :elevation="10">
      <v-card-text class="py-2 white--text text-center">
        {{new Date().getFullYear()}} - <strong class="text-uppercase">&copy;Try IdeaPro</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name:'Footer'
}
</script>