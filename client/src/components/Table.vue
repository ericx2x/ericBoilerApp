<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="https://itsasmileworld.com/wp-content/uploads/2020/03/Its-a-smile-world-header-logo-300x300-1.png"
          class="my-3"
          contain
          height="200"
        />
    <v-form 
      v-model="valid"
      lazy-validation
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="name"
              ref="nameField"
              :counter="70"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>         
         </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
                  v-model="email"
                  ref="emailField"
                  :rules="emailRules"
                  label="E-mail"
                  required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="appointmentTime"
              ref="appointmentTimeField"
              :rules="appointmentTimeRules"
              label="Appointment Time"
              required
            ></v-text-field>
          </v-col>


          <v-col
            cols="12"
            md="4"
          >
            &nbsp;
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
           <v-col
            cols="12"
            md="4"
          >
            <v-btn
              color="primary"
              class="mr-4"
              @click="nextPatient"
            >
              Next Patient
            </v-btn>    
          </v-col> 
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="addPatient"
            >
              Add Patient
            </v-btn>    
          </v-col>

        </v-row>
      </v-container>
    </v-form>


      </v-col>

      <v-col class="mb-4">
        <v-data-table
          hide-default-footer
          :headers="headers"
          :items="patients"
          :items-per-page="5"
          class="elevation-1"
          disable-pagination
        ></v-data-table>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Table',
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 70) || 'Name must be less than 70 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      appointmentTime: '',
      appointmentTimeRules: [
        v => !!v || 'Appointment Time is required',
        v => (v && v.length <= 70) || 'Appointment Time must be less than 70 characters',
      ],
      headers: [
        {
          text: 'Patients',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Time', value: 'time' },
        { text: 'Date', value: 'date' },
        { text: 'Room', value: 'room' },
        { text: 'Doctor', value: 'doctor' },
      ],
      patients: [
        {
          name: 'Roshanara Arman',
          time: 159,
          date: 6.0,
          room: 24,
          doctor: 'Benita De Mirza, DMD',
        },
        {
          name: 'Danilo Gilda',
          time: 159,
          date: 6.0,
          room: 24,
          doctor: 'Benita De Mirza, DMD',
        },
        {
          name: 'Teodósio Shahnaz',
          time: 159,
          date: 6.0,
          room: 24,
          doctor: 'Benita De Mirza, DMD',
        },
        {
          name: 'Matilde Leila',
          time: 159,
          date: 6.0,
          room: 24,
          doctor: 'Benita De Mirza, DMD',
        },
        {
          name: 'Ali Marta',
          time: 159,
          date: 6.0,
          room: 24,
          doctor: 'Benita De Mirza, DMD',
        },
        {
          name: 'Mahtab Firouz',
          time: 159,
          date: 6.0,
          room: 24,
          doctor: 'Benita De Mirza, DMD',
        },
      ],
    }),
    methods: {
      nextPatient () {
       this.patients.shift();
      },
      addPatient () {
       this.patients.unshift({
          name: this.$refs.nameField.value,
          time: 518,
          date: 26.0,
          room: 65,
          doctor: 7,
        }); 
        this.$refs.form.addPatient()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
