<template>
  <v-container>
    <v-main>
      <!--<SignIn/>-->
      -Does whoever enter the patients end up getting annoyed because they're moving it from one list to another and instead it could be automated? Is it from a book or a software package? How are you building your patient schedule?
      -assume it is a patient schedule. Paper or outlook? Do I even bother writing a data entry thing if I just source the patient appointment excel/calander/whatever?
      -Is this really even gonna be used? You're gonna use up a whole tv screen just to show this? maybe just putting on tv would be more interesting and the staff just calls the patients. It's gotta source an excel file. Your staff isn't going to want to enter this stuff.
      -It's really just an excel file or some dental software that is the gospel for this information.
      -what types of users? Passwords needed? Change password account settings and all that?<br>
      -do i need to even bother with making the data entry or the calendar?
      -patients information stored in a database?<br>
      -It just updates new data every ten minutes?<br>
      -where to host the website? Are you okay to host on my server? It could go down because I like to write apps and not pay more than I need. Security (where is the current site hosted?<br>
      -Do you want to let people schedule an appointment from the main website and it just makes its way into the software or only over the phone first?<br>
      -the table functions like an airline queue? Are you sure? That means people get added at the bottom of the queue and pop of the top. Do we want to save this lists data or do we not care? Save it in some giant database and reference it in the future? How important is this data?<br>
      -Speed, quality, or cost pick two, I guess.<br>
      -What happens when you have to delete a patient from the list because they or whatever? Or change their time?
      -Is it simply the next day or should this really be a calendar. Next week next month? 
   <!--<SignIn />-->
    </v-main>
  </v-container>
</template>

<script>
/*import SignIn from '../components/SignIn.vue';*/
/*import HelloWorld from '@/components/HelloWorld.vue'*/

export default {
  name: 'SignInScreen',

  components: {
    /*SignIn*/
  },
}
</script>
