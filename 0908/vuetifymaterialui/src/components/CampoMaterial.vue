<template>
  <v-input>
    <v-text-field

        :counter="10"
        label="camponome"
        required

        @input="$emit('update:modelValue',$v.target.touch())"

    ></v-text-field>
  </v-input>
</template>

<script>
export default {
  name: "CampoMaterial",
  methods:{

  }
}
</script>

<style scoped>

</style>