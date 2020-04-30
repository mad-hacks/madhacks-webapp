<template>
  <div>
    <!-- Top Section -->
    <transition enter-active-class="animated fadeIn">
      <div class="row mhacks-home-section" id="home" ref="home">
        <!-- Top Nav, Top Header and Top Description -->
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="container nav-container">
            <ul class="mhack-top-nav">
              <li class="mhacks-tn-left-logo">
                <a href="#home"
                  ><img src="../../assets/images/logo.svg" class="logo"
                /></a>
              </li>
              <!-- <li class="mhacks-event-vr">
              <a><router-link to="event">VR</router-link></a>
            </li> -->
              <li class="mhacks-tn-right-item contact-btn">
                <a href="#contact">Contact</a>
              </li>
              <li class="mhacks-tn-right-item about-btn">
                <a href="#about">About</a>
              </li>
              <li class="mhacks-tn-right-item business-btn">
                <a href="#business">Business</a>
              </li>
              <li class="mhacks-tn-right-item students-btn">
                <a href="#students">Students</a>
              </li>
            </ul>
          </div>
          <a name="home"></a>
          <div class="row">
            <div class="container">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="mhacks-top-header animated fadeInTop">
                  Student Developer Community
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="container">
              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <div class="mhacks-top-para animated fadeIn">
                  <span class="mhacks-tp">
                    A community built for and by the students <br
                  /></span>
                  <span class="mhacks-tp1"
                    >that develops quality products for business.</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="container">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="mhacks-top-btn animated fadeIn">
                  <a
                    href="#students"
                    style="color: #fff; text-decoration: none; width: 100%;"
                    >Explore</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End -->
        <!-- Top Background Image -->
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="mhacks-top-bg"></div>
        </div>
        <!-- End -->
      </div>
    </transition>
    <!-- End -->
    <!-- Student Section -->
    <a name="students"></a>
    <div
      class="mhacks-students-section fadeInViewPort"
      ref="student"
      v-in-viewport.once
    >
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="mhacks-mid-bg animated fadeInFromLeft" v-in-viewport.once>
            <div class="mhacks-mid-header">Are you a Student ?</div>
          </div>
        </div>
      </div>
      <!-- End -->
      <!-- Student Content -->
      <div class="container students-container">
        <div class="row students-section">
          <!-- Content Section -->
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div
              class="mhacks-mid-content animated fadeInTop"
              v-in-viewport.once
            >
              <span class="mhacks-mid-content-list-item">
                Attractive real-world projects to be done.<br />
              </span>
              <span class="mhacks-mid-content-list-item">
                Learn Industry Practices.<br />
              </span>
              <span class="mhacks-mid-content-list-item">
                Enhance skills doing real-world projects.<br />
              </span>
              <span class="mhacks-mid-content-list-item">
                Earn rewards based on work done.<br />
              </span>
              <br />
              <button
                data-toggle="modal"
                data-target="#registerModal"
                onclick="alert('Registration Closed!')"
                class="btn mhacks-register-btn"
              >
                Register Now
              </button>
            </div>
          </div>
          <!-- End -->

          <!--  Register Modal pop-up -->
          <!-- <Register /> -->

          <!-- Image Section -->
          <div
            class="col-xs-6 col-sm-6 col-md-6 col-lg-6 animated zoomIn"
            v-in-viewport.once
          >
            <img
              class="mhacks-mid-content-pic"
              src="../../assets/images/stud.svg"
            />
          </div>
          <!-- End -->
        </div>
      </div>
    </div>
    <!-- End -->
    <!-- For Business section -->
    <a name="business"></a>
    <div
      class="mhacks-business-section fadeInViewPort"
      ref="business"
      v-in-viewport.once
    >
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div
            class="mhacks-mid-bg-business animated fadeInFromLeft"
            v-in-viewport.once
          >
            <div class="mhacks-mid-header-business">For Business</div>
          </div>
        </div>
      </div>
      <!-- End -->
      <!-- For Business Content -->
      <div class="container">
        <div class="row business-section">
          <!-- Content Section -->
          <!-- Image Section -->
          <div
            class="col-xs-6 col-sm-6 col-md-6 col-lg-6 animated zoomIn"
            v-in-viewport.once
          >
            <img
              class="mhacks-mid-content-pic business-pic"
              src="../../assets/images/business.svg"
            />
          </div>
          <!-- End -->
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div
              class="mhacks-mid-content-business animated fadeInTop"
              v-in-viewport.once
            >
              <span class="mhacks-mid-content-list-item">
                Front End Development.<br />
              </span>
              <span class="mhacks-mid-content-list-item">
                Back End Development.<br />
              </span>
              <span class="mhacks-mid-content-list-item">
                Single Page Apps.<br />
              </span>
              <span class="mhacks-mid-content-list-item">
                E-commerce Website.<br />
              </span>
              <span class="mhacks-mid-content-list-item">
                Custom web tools.<br />
              </span>
              <div class="btn mhacks-hire-btn">
                <a href="#contact">Hire Us</a>
              </div>
            </div>
          </div>
          <!-- End -->
        </div>
      </div>
    </div>
    <!-- <Features /> -->
    <div class="row mhacks-features-title-section">
      <!-- Image Section -->
      <div
        class="col-xs-6 col-sm-6 col-md-6 col-lg-6 animated zoomIn"
        v-in-viewport.once
      >
        <div class="mhacks-mid-ft"></div>
      </div>
      <!-- End -->
      <!-- Title Section -->
      <div
        class="col-xs-6 col-sm-6 col-md-6 col-lg-6 animated fadeInFromLeft"
        v-in-viewport.once
      >
        <div class="mhacks-mid-ft-content">
          <div class="mhacks-mid-ft-text">Features</div>
        </div>
      </div>
      <!-- End -->
    </div>
    <!-- Features section -->
    <div class="mhacks-features-section">
      <div class="mhacks-features-rowOne row">
        <div class="mhacks-features-col col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div class="mhacks-features-card">
            <img
              class="mhacks-mid-ft-list animated zoomIn"
              src="../../assets/images/codeq.svg"
              alt=""
              v-in-viewport.once
            />
            <br />
            <div
              class="mhacks-mid-ft-list-name animated fadeInTop"
              v-in-viewport.once
            >
              Code Quality
            </div>
            <div
              class="mhacks-mid-ft-list-para fadeInViewPort"
              v-in-viewport.once
            >
              Latest technology used.<br />
              Neat and clean code.<br />
              Best industry practices.<br />
            </div>
          </div>
        </div>
        <div class="mhacks-features-col col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div class="mhacks-features-card">
            <img
              class="mhacks-mid-ft-list animated zoomIn"
              src="../../assets/images/respon.svg"
              alt=""
              v-in-viewport.once
            />
            <br />
            <div
              class="mhacks-mid-ft-list-name animated fadeInTop"
              v-in-viewport.once
            >
              Responsive
            </div>
            <div
              class="mhacks-mid-ft-list-para fadeInViewPort"
              v-in-viewport.once
            >
              Responsiveness at its best.<br />
              All device compatible.<br />
              Clear cut clarity.<br />
            </div>
          </div>
        </div>
        <div class="mhacks-features-col col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div class="mhacks-features-card">
            <img
              class="mhacks-mid-ft-list animated zoomIn"
              src="../../assets/images/browser.svg"
              alt=""
              v-in-viewport.once
            />
            <br />
            <div
              class="mhacks-mid-ft-list-name animated fadeInTop"
              v-in-viewport.once
            >
              Browser Compatibility
            </div>
            <div
              class="mhacks-mid-ft-list-para fadeInViewPort"
              v-in-viewport.once
            >
              Runs on any browser.<br />
              Supports every screen size.<br />
              Easily viewable.<br />
            </div>
          </div>
        </div>
      </div>

      <div class="mhacks-features-rowTwo row">
        <div class="mhacks-features-col col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="mhacks-features-card mhacks-features-card-tech">
            <img
              class="mhacks-mid-ft-list animated zoomIn"
              src="../../assets/images/tech.svg"
              alt=""
              v-in-viewport.once
            />
            <br />
            <div
              class="mhacks-mid-ft-list-name animated fadeInTop"
              v-in-viewport.once
            >
              Technical Support
            </div>
            <div
              class="mhacks-mid-ft-list-two-para fadeInViewPort"
              v-in-viewport.once
            >
              Technical assistance available.<br />
              Schedule maintainence available.<br />
              Super fast maintainence.<br />
            </div>
          </div>
        </div>

        <div class="mhacks-features-col col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="mhacks-features-card mhacks-features-card-life">
            <img
              class="mhacks-mid-ft-list animated zoomIn"
              src="../../assets/images/life.svg"
              alt=""
              v-in-viewport.once
            />
            <br />
            <div
              class="mhacks-mid-ft-list-name animated fadeInTop"
              v-in-viewport.once
            >
              Lifetime Support
            </div>
            <div
              class="mhacks-mid-ft-list-two-para fadeInViewPort"
              v-in-viewport.once
            >
              Life time support available.<br />
              Frequent updation.<br />
              Later stage addition.<br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End -->

    <!-- For Mobile View Features Section (Seperate)-->
    <mview></mview>

    <!-- Mission Section -->
    <a name="about"></a>
    <div
      class="row mhacks-mission-section fadeInViewPort"
      id="mhacks-mission"
      ref="mission"
      style="margin-top: 5%;"
      v-in-viewport.once="1000"
    >
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <!-- Mission Title -->
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="mhacks-mid-mission-bg">
              <div
                class="mhacks-mid-mission-text animated fadeInTop"
                v-in-viewport.once
              >
                Our Mission
              </div>
            </div>
          </div>
        </div>
        <!-- End -->
        <!-- Mission Description -->
        <div class="container">
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div
                class="mhacks-mid-mission-content animated fadeInFromLeft"
                v-in-viewport.once="1000"
              >
                MadHacks aims to support both students and Business in each and
                every way it can. We help students to gain the industrial
                knowledge by providing them with real world projects. We also
                ensure that the business we collaborate will get quality tech
                products with the use of latest technology.
              </div>
            </div>
          </div>
        </div>
        <!-- End -->
      </div>
      <!-- End -->
      <!-- Mission Section Background -->
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <img
          src="../../assets/images/mission.svg"
          class="mhacks-mid-mission-sec-bg animated zoomIn"
          v-in-viewport.once
        />
      </div>
      <!-- End -->
    </div>
    <!-- End -->
    <!-- Team Section -->
    <div
      class="mhacks-team-section animated fadeInTop"
      ref="team"
      v-in-viewport.once
    >
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="mhacks-mid-team-header">The Team</div>
        </div>
      </div>
      <!-- End -->
      <!-- Team Section Content -->
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="mhacks-mid-team-card">
              <Team class="animated zoomIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End -->
    <!-- Hire Us Now Section -->
    <a name="contact"></a>
    <div
      class="mhacks-contact-section animated fadeInTop"
      ref="contact"
      v-in-viewport.once
    >
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="mhacks-last-contact-bg">
            <div class="mhacks-last-contact-header">Hire us Now</div>
          </div>
        </div>
      </div>
      <!-- End -->
      <!-- Contact Us Section -->
      <div class="container contactus-section">
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 contact-form">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  class="mhacks-last-contact-input-header animated fadeInFromLeft"
                  v-in-viewport.once
                >
                  Drop us a message
                </div>
              </div>
            </div>
            <form @submit.prevent="submitContactForm">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <input
                    class="mhacks-last-contact-input"
                    type="text"
                    v-model="name"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <input
                    class="mhacks-last-contact-input"
                    type="text"
                    v-model="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <input
                    class="mhacks-last-contact-input"
                    type="text"
                    v-model="phoneno"
                    placeholder="Contact No"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <textarea
                    class="mhacks-last-contact-textarea"
                    v-model="description"
                    placeholder="Message"
                  >
Message</textarea
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="mhacks-last-contact-btn">
                    <button
                      style="
                        background-color: #283149;
                        border: none;
                        width: 100%;
                      "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="mhacks-last-contact-input-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End -->
    <!-- Footer Section -->
    <!--
    <div class="mhacks-footer-section fadeInViewPort" ref="footer" v-in-viewport.once>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="mhacks-last-footer-bg">
          <img class="mhacks-footer-social-media-icons" src="../../assets/images/facebook.png" alt="Facebook">
          <img class="mhacks-footer-social-media-icons" src="../../assets/images/linkedin.png" alt="Linkedin">
          <img class="mhacks-footer-social-media-icons" src="../../assets/images/twitter.png" alt="Twitter">
        </div>
      </div>
    </div>
    <div class="row mhacks-footer-content">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        Terms and conditions
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        Mad.Hacks<br>
        abc@gmail.com<br>
        &copy; All rights reserved.
      </div>
    </div>
    </div>
    _-->
    <!-- End -->
    <footer class="mhacks-footer">
      <div class="row mhacks-footer-row">
        <div class="mhacks-footer-about col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h2 class="mhacks-footer-title">Mad Hacks</h2>
          <br /><br />
          <div class="mhacks-footer-content" style="margin-bottom: 1vh;">
            (91)8281634261 <br />
            madhacks18@gmail.com<br />
            &copy; 2018
          </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 community-side-footer">
          <h2 class="mhacks-footer-community">Community</h2>
          <br /><br />
          <div class="mhacks-footer-policies" style="margin-bottom: 1vh;">
            <a href="#about">About Us</a> <br />
            Terms & Conditions<br />
            Privacy Policy
          </div>
        </div>
      </div>
    </footer>
  </div>
  <!-- End -->
</template>

<script>
import Team from '../views/Team'
import mview from '../views/mv_features'
import Features from '../views/Features'
import Register from '../views/Register'
import axios from 'axios'

export default {
  data: function () {
    return {
      renderedComponent: 'James',
      name: '',
      email: '',
      phoneno: '',
      description: '',
      student_name: '',
      student_email: '',
      branch: '',
      year: '',
      mobno: '',
      college: '',
      area_of_interest: '',
      hobbies: ''
    }
  },
  methods: {
    submitContactForm: function () {
      let formData = {
        name: this.name,
        email: this.email,
        phoneno: this.phoneno,
        description: this.description
      }
      console.log(formData)
      axios
        .post('http://localhost:4000/api/contact', formData, {
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(
          (response) => console.log(response),
          alert('Thank you, will get in touch soon!'),
          window.location.reload()
        )
        .catch((err) => console.log(err))
      console.log('Done')
    }
    /* registerForm: function () {
          let registerData = {
          name: this.student_name,
          email: this.student_email,
          college: this.college,
          branch: this.branch,
          year: this.year,
          mobno: this.mobno,
          area_of_interest: this.area_of_interest,
          hobbies: this.hobbies
        }
        console.log(registerData)
        axios.post('http://localhost:4000/api/register',
          registerData,
          { headers: {
            'Content-type': 'application/json'
          }
          })
          .then(response =>
            console.log(response),
          alert('Stay alert!'),
          window.location.reload()
          )
          .catch(err => console.log(err))
      } */
  },
  components: {
    Team,
    mview,
    Features,
    Register
  }
}
</script>

<style src="../../assets/css/welcome.css" scoped></style>
