<template>
  <!-- Modal to show up on the click of register button -->
  <!-- Modal -->
  <div id="registerModal" ref="modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            &times;
          </button>
          <h4 class="modal-title">Register</h4>
        </div>
        <div class="modal-body">
          <form class="form-group" @submit.prevent="registerForm">
            <input
              type="text"
              ref="nameField"
              v-model="student_name"
              placeholder="Name"
              required
            />
            <label class="label" for="college">College</label>
            <select
              class="form-control"
              ref="collegeOptionBox"
              v-model="college"
              required
            >
              <option value="" disabled selected>College</option>
              <option value="AJCE">AJCE</option>
              <option value="Other">Other</option>
            </select>
            <label class="label" for="branch">Branch</label>
            <select
              class="form-control"
              ref="branchOptionBox"
              v-model="branch"
              required
            >
              <option value="" disabled selected>Branch</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="EC">EC</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <input
              type="text"
              placeholder="Year of study"
              ref="yearField"
              v-model="year"
              required
            />
            <br /><br />
            <input
              type="email"
              placeholder="E-mail"
              ref="emailField"
              v-model="student_email"
              required
            />
            <br /><br />
            <input
              type="text"
              maxlength="10"
              ref="numberField"
              v-model="mobno"
              placeholder="Contact Number"
              required
            />
            <br />
            <label for="area" class="label">Area of interest</label>
            <select
              class="form-control"
              ref="interestOptionBox"
              v-model="area_of_interest"
              required
            >
              <option value="" disabled selected
                >Area of interest <i class="fas fa-caret-down"></i
              ></option>
              <option value="dev">Web Development</option>
              <option value="android">Android Development</option>
              <option value="design">Web Designing</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <textarea
              class="form-control"
              ref="hobbiesField"
              v-model="hobbies"
              cols="15"
              rows="5"
              placeholder="Hobbies"
              required
            ></textarea>
            <br />
            <center>
              <button
                class="btn mhacks-modal-btn"
                ref="modalBtn"
                style="width: 25%;"
              >
                Submit
              </button>
            </center>
          </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>

<style src="../../assets/css/welcome.css" scoped></style>
<script></script>
