<template>
    <div class="mhacks-features-mobileview">
        <!--Code Quality Section -->
        <div class="codeq-section">
            <img src="../../assets/images/codeq.svg" class="codeq_img">
            <div class="codeq_desc">
                Code Quality
            </div>
            <div class="codeq_desc_list">
                Latest technology used. <br>
                Neat and clean code. <br>
                Best industry practices.
            </div>
        </div>
        <!--End-->
        <!-- Responsive Feature Section -->
        <div class="resp-section">
            <img src="../../assets/images/respon.svg" class="resp_img">
            <div class="resp_desc">
                Responsive
            </div>
            <div class="resp_desc_list">
                Responsiveness at its best. <br>
                All device compatible. <br>
                Clear cut clarity.
            </div>
        </div>
        <!--End-->
        <!--Browser Compatibility Feature Section -->
        <div class="browsercompat-section">
            <img src="../../assets/images/browser.svg" class="bc_img">
            <div class="bc_desc">
                Browser Compatibility
            </div>
            <div class="bc_desc_list">
                Runs on any browser. <br>
                Supports every screen size. <br>
                Easily viewable.
            </div>
        </div>
        <!--End-->
        <!-- Lifetime Support Section -->
        <div class="lsupport-section">
            <img src="../../assets/images/life.svg" alt="Lifetime Support icon" class="lsupport_img">
            <div class="lsupport_desc">
                Lifetime Support
            </div>
            <div class="lsupport_desc_list">
                Lifetime Support available. <br>
                Frequent updation. <br>
                Later stage addition.
            </div>
        </div>
        <!--End-->
        <!-- Technical Support Section -->
        <div class="tsupport-section">
            <img src="../../assets/images/tech.svg" alt="Technical Support Icon" class="tsupport_img">
            <div class="tsupport_desc">
                Technical Support
            </div>
            <div class="tsupport_desc_list">
                Technical Assistance available. <br>
                Scheduled maintainence available. <br>
                Super fast maintainence.
            </div>
        </div>
    </div>
</template>

<style>
.mhacks-features-mobileview{
    display: none;
}
@media screen and (max-width: 760px){
    .mhacks-features-mobileview{
        display: block;
        font-family: 'Muli'
    }
    .codeq_img{
        height: 50px;
        margin-left: 45%;
        margin-bottom: 2%;
        margin-top: -47%;
    }
    .codeq_desc{
        float: left;
        margin-left: 43%;
        color: #f73589;
        margin-top: -20%;
        font-size: 1em;
    }
    .codeq_desc_list{
        margin-left: 40%;
        margin-top: -15%;
        float: left;
        line-height: 2em;
    }
    .resp_img{
        height: 50px;
        margin-left: 45%;
        margin-top: 5%;
    }
    .resp_desc{
        float: left;
        margin-left: 43%;
        margin-top: 3%;
        font-size: 1em;
        color: #f73589;
    }
    .resp_desc_list{
        margin-left: 40%;
        margin-top: 2%;
        float: left;
        line-height: 2em;
    }
    .bc_img{
        height: 50px;
        margin-left: 45%;
        margin-top: 5%;
    }
    .bc_desc{
        margin-left: 43%;
        float: left;
        color: #f73589;
        margin-top: 3%;
    }
    .bc_desc_list{
        float: left;
        margin-top: 8%;
        margin-left: -22%;
        line-height: 2em;
    }
    .lsupport_img{
        height: 50px;
        margin-left: 45%;
        margin-top: 4%;
    }
    .lsupport_desc{
        margin-left: 43%;
        float: left;
        color: #f73589;
        margin-top: 2%;
    }
    .lsupport_desc_list{
        margin-left: -17%;
        margin-top: 7%;
        float: left;
        line-height: 2em;
    }
    .tsupport_img{
        height: 50px;
        margin-left: 45%;
        margin-top: 6%;
    }
    .tsupport_desc{
        margin-left: 43%;
        float: left;
        color: #f73589;
        margin-top: 5%;
    }
    .tsupport_desc_list{
        float: left;
        margin-top: 10%;
        margin-left: -18%;
        line-height: 2em;
        margin-bottom: 12%;
    }
}
@media screen and (max-width: 750px){
    .mhacks-features-mobileview{
        display: block;
        font-family: 'Muli'
    }
    .codeq_img{
        height: 50px;
        margin-left: 45%;
        margin-bottom: 2%;
        margin-top: -80%;
    }
    .codeq_desc{
        float: left;
        margin-left: 43%;
        color: #f73589;
        margin-top: -36%;
        font-size: 1em;
    }
    .codeq_desc_list{
        margin-left: 40%;
        margin-top: -30%;
        float: left;
        line-height: 2em;
    }
    .resp_img{
        height: 50px;
        margin-left: 45%;
        margin-top: -20%;
    }
    .resp_desc{
        float: left;
        margin-left: 43%;
        margin-top: -5%;
        font-size: 1em;
        color: #f73589;
    }
    .resp_desc_list{
        margin-left: 40%;
        margin-top: 1%;
        float: left;
        line-height: 2em;
    }
    .bc_img{
        height: 50px;
        margin-left: 45%;
        margin-top: 7%;
    }
    .bc_desc{
        margin-left: 43%;
        float: left;
        color: #f73589;
        margin-top: 5%;
    }
    .bc_desc_list{
        float: left;
        margin-top: 12%;
        margin-left: -22%;
        line-height: 2em;
    }
    .lsupport_img{
        height: 50px;
        margin-left: 45%;
        margin-top: 10%;
    }
    .lsupport_desc{
        margin-left: 43%;
        float: left;
        color: #f73589;
        margin-top: 5%;
    }
    .lsupport_desc_list{
        margin-left: -17%;
        margin-top: 12%;
        float: left;
        line-height: 2em;
    }
    .tsupport_img{
        height: 50px;
        margin-left: 45%;
        margin-top: 13%;
    }
    .tsupport_desc{
        margin-left: 43%;
        float: left;
        color: #f73589;
        margin-top: 5%;
    }
    .tsupport_desc_list{
        float: left;
        margin-top: 12%;
        margin-left: -18%;
        line-height: 2em;
    }
}
@media screen and (max-width: 601px){
    .codeq_img{
        margin-left: 42%;
        margin-top: -117%;
    }
    .codeq_desc{
        margin-left: 40%;
        margin-top: -50%;
    }
    .codeq_desc_list{
        margin-left: 36%;
        margin-top: -43%;
    }
    .resp_img{
        margin-left: 40%;
        margin-top: -35%;
    }
    .resp_desc{
        margin-left: 39%;
        margin-top: -9%;
    }
    .resp_desc_list{
        margin-left: 37%;
        margin-top: -1%;
    }
    .bc_img{
        margin-left: 40%;
    }
    .bc_desc{
        margin-left: 34%;
    }
    .lsupport_img{
        margin-left: 39%;
    }
    .lsupport_desc{
        margin-left: 35%;
    }
    .lsupport_desc_list{
        margin-left: -18%;
    }
    .tsupport_img{
        margin-left: 40%;
    }
    .tsupport_desc{
        margin-left: 35%;
    }
    .tsupport_desc_list{
        margin-left: -21%;
    }
}
@media screen and (max-width: 415px){
    .codeq_img{
        margin-top: -750px;
        margin-left: 40%;
    }
    .codeq_desc{
        margin-top: -80%;
        margin-left: 37%;
    }
    .codeq_desc_list{
        margin-left: 32%;
        margin-top: -70%;
    }
    .resp_img{
        margin-left: 38%;
        margin-top: -75%;
    }
    .resp_desc{
        margin-left: 37%;
        margin-top: -26%;
    }
    .resp_desc_list{
        margin-left: 32%;
        margin-top: -15%;
    }
    .bc_img{
        margin-left: 38%;
    }
    .bc_desc{
        margin-left: 30%;
    }
    .bc_desc_list{
        margin-left: -33%;
    }
    .lsupport_img{
        margin-left: 38%;
    }
    .lsupport_desc{
        margin-left: 32%;
    }
    .lsupport_desc_list{
        margin-left: -26%;
    }
    .tsupport_img{
        margin-left: 39%;
    }
    .tsupport_desc{
        margin-left: 30%;
    }
    .tsupport_desc_list{
        margin-left: -28%;
    }
}
@media screen and (max-width: 385px){
    .bc_desc_list{
        margin-left: -35%;
    }
    .lsupport_desc_list{
        margin-left: -28%;
    }
    .tsupport_desc_list{
        margin-left: -33%;
    }
}
@media screen and (max-width: 376px){
    .codeq_desc{
        margin-top: -89%;
    }
    .codeq_desc_list{
        margin-top: -77%;
    }
    .bc_desc{
        margin-left: 31%;
    }
    .bc_desc_list{
        margin-left: -36%;
    }
    .lsupport_desc_list{
        margin-left: -28%;
    }
    .tsupport_desc_list{
        margin-left: -30%;
    }
}
@media screen and (max-width: 361px){
    .tsupport_desc_list{
        margin-right: 19%;
        float: right;
        margin-bottom: 5%;
        margin-top: 2%;
    }
    .lsupport_desc_list{
        margin-left: -35%;
    }
    .bc_desc_list{
        margin-left: -42%;
    }
}
@media screen and (max-width: 321px){
    .tsupport_desc_list{
        margin-left: 18%;
    }
    .lsupport_desc_list{
        margin-left: -40%;
    }
    .bc_desc_list{
        margin-left: -47%;
    }
    .codeq_desc{
        margin-top: -104%;
    }
    .codeq_desc_list{
        margin-top: -89%;
    }
}

</style>

