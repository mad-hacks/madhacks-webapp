<template>
  <div>
    <!-- Individual member info -->
    <div
      :class="{ 'animated zoomIn': animate }"
      @animationend="animate = false"
    >
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <center>
            <img
              class="mhacks-mid-team-card-pic"
              :src="
                require(`../../assets/images/${memberDetails[selectedIdx].pic}`)
              "
            />
          </center>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <center>
            <div class="mhacks-mid-team-card-pic-name">
              {{ memberDetails[selectedIdx].name }}
            </div>
          </center>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <center>
            <div class="mhacks-mid-team-card-pic-position">
              {{ memberDetails[selectedIdx].position }}
            </div>
          </center>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <center>
            <div
              class="mhacks-mid-team-card-pic-quote"
              v-html="memberDetails[selectedIdx].quote"
            >
              <i class="fas fa-quote-left"></i>
              {{ memberDetails[selectedIdx].quote }}
              <i class="fas fa-quote-right"></i>
            </div>
          </center>
        </div>
      </div>
    </div>
    <!-- End -->

    <!-- Select to view more -->
    <div
      class="container mhacks-mid-team-container animated fadeInFromLeft"
      v-in-viewport.once
    >
      <center>
        <div class="row team-section">
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img
              src="../../assets/images/alan.jpg"
              tabindex="0"
              @click="showInfo(2)"
              class="mhacks-mid-team-card-other-pic alan"
            />
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img
              src="../../assets/images/dani.jpg"
              tabindex="0"
              @click="showInfo(3)"
              class="mhacks-mid-team-card-other-pic dani"
            />
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img
              src="../../assets/images/james.jpg"
              tabindex="0"
              @click="showInfo(0)"
              class="mhacks-mid-team-card-other-pic james"
            />
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img
              src="../../assets/images/kavi.jpg"
              tabindex="0"
              @click="showInfo(1)"
              class="mhacks-mid-team-card-other-pic kavi"
            />
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img
              src="../../assets/images/andria.jpg"
              tabindex="0"
              @click="showInfo(4)"
              class="mhacks-mid-team-card-other-pic andria"
            />
          </div>
        </div>
      </center>
    </div>
    <!--End  -->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      selectedIdx: 0,
      img: 'james.jpg',
      animate: false,
      memberDetails: [
        {
          name: 'James George',
          position: 'Techie',
          quote: `Mad.Hacks is a community for techies.<br> Latest technology with creative design is implemented here.`,
          pic: 'james.jpg'
        },
        {
          name: 'James Kaviyil Jose',
          position: 'Chief Geek',
          quote: `Leading Mad.Hacks is indeed a great responsibility.<br> Mad.Hacks ensures that the work done is of the best quality.`,
          pic: 'kavi.jpg'
        },
        {
          name: 'Alan Mathew',
          position: 'Back-End Dev',
          quote: `Mad.Hacks is an oppurtunity for students to sharpen their skills.<br> It is indeed great working for Mad. Hacks.`,
          pic: 'alan.jpg'
        },
        {
          name: 'Alwin Dani Sam',
          position: 'UI/UX',
          quote: `Mad.Hacks develops creative projects with the help of students.<br> It uses the best of the abilities to do a project.`,
          pic: 'dani.jpg'
        },
        {
          name: 'Andria Ajai',
          position: 'Back-End Dev',
          quote: `Mad.Hacks uses the skills of the students to build great projects.<br> Best Design at affordable rates is one of the main highlights.`,
          pic: 'andria.jpg'
        }
      ]
    }
  },
  methods: {
    // prettier-ignore
    showInfo (id) {
      this.selectedIdx = id
      this.animate = true
    }
  }
}
</script>

<style src="../../assets/css/welcome.css" scoped></style>
