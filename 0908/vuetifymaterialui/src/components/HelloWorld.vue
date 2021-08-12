<template>
  <v-container>
    <v-row class="text-center">

      <v-form>
        <v-input>
          <v-text-field
              v-model="teste"
              :counter="20"
              label="Exemplo2"
              required
          ></v-text-field>
        </v-input>

          <v-text-field
              v-model="teste"
              :counter="20"
              label="Exemplo"
              required
          ></v-text-field>bon


      </v-form>
      <v-col
          v-for="n in 24"
          :key="n"
          cols="4"
      >
        <v-card
            class="pa-2"
            outlined
            tile
        >
          filme
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    teste: ''
  }),
}
</script>
