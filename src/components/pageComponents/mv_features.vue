<template>
    <div class="mhacks-features-mobileview mhacks-mview-bg">
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
@media screen and (max-width: 751px){
    .mhacks-features-mobileview{
        display: block;
        font-family: 'Muli',sans-serif;
        margin-top: -76%;
        height: 1680px;
        width: 100%;
        margin: 0 auto;
    }
    .mhacks-mview-bg{
        background-image: url(../../assets/images/DesignFeatures.svg);
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-size: cover;
    }
    .codeq_img{
        height: 40px;
        margin-left: 45%;
        margin-bottom: 2%;
        margin-top: -47%;
    }
    .codeq_desc{
        float: left;
        margin-left: 43%;
        color: #fff;
        margin-top: -20%;
        font-size: 1em;
    }
    .codeq_desc_list{
        margin-left: 40%;
        margin-top: -15%;
        float: left;
        line-height: 2em;
        color: #fff;
    }
    .resp_img{
        height: 40px;
        margin-left: 45%;
        margin-top: 18%;
    }
    .resp_desc{
        float: left;
        margin-left: 43%;
        margin-top: 3%;
        font-size: 1em;
        color: #fff;
    }
    .resp_desc_list{
        margin-left: 40%;
        margin-top: 2%;
        float: left;
        line-height: 2em;
        color: #fff;
    }
    .bc_img{
        height: 40px;
        margin-left: 45%;
        margin-top: 5%;
    }
    .bc_desc{
        margin-left: 43%;
        float: left;
        color: #fff;
        margin-top: 3%;
    }
    .bc_desc_list{
        float: left;
        margin-top: 8%;
        margin-left: -22%;
        line-height: 2em;
        color: #fff;
    }
    .lsupport_img{
        height: 40px;
        margin-left: 45%;
        margin-top: 4%;
    }
    .lsupport_desc{
        margin-left: 43%;
        float: left;
        color: #fff;
        margin-top: 2%;
    }
    .lsupport_desc_list{
        margin-left: -17%;
        margin-top: 7%;
        float: left;
        line-height: 2em;
        color: #fff;
    }
    .tsupport_img{
        height: 40px;
        margin-left: 45%;
        margin-top: 24%;
    }
    .tsupport_desc{
        margin-left: 43%;
        float: left;
        color: #fff;
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
        height: 40px;
        margin-left: 45%;
        margin-bottom: 2%;
        margin-top: -80%;
    }
    .codeq_desc{
        float: left;
        margin-left: 43%;
        color: #fff;
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
        height: 40px;
        margin-left: 45%;
        margin-top: -20%;
    }
    .resp_desc{
        float: left;
        margin-left: 43%;
        margin-top: -5%;
        font-size: 1em;
        color: #fff;
    }
    .resp_desc_list{
        margin-left: 40%;
        margin-top: 1%;
        float: left;
        line-height: 2em;
    }
    .bc_img{
        height: 40px;
        margin-left: 45%;
        margin-top: 7%;
    }
    .bc_desc{
        margin-left: 43%;
        float: left;
        color: #fff;
        margin-top: 5%;
    }
    .bc_desc_list{
        float: left;
        margin-top: 12%;
        margin-left: -22%;
        line-height: 2em;
    }
    .lsupport_img{
        height: 40px;
        margin-left: 45%;
        margin-top: 10%;
    }
    .lsupport_desc{
        margin-left: 43%;
        float: left;
        color: #fff;
        margin-top: 5%;
    }
    .lsupport_desc_list{
        margin-left: -17%;
        margin-top: 12%;
        float: left;
        line-height: 2em;
    }
    .tsupport_img{
        height: 40px;
        margin-left: 45%;
        margin-top: 13%;
    }
    .tsupport_desc{
        margin-left: 43%;
        float: left;
        color: #fff;
        margin-top: 5%;
    }
    .tsupport_desc_list{
        float: left;
        margin-top: 12%;
        margin-left: -18%;
        line-height: 2em;
        color: #fff;
    }
}
@media screen and (max-width: 748px){
    .mhacks-mview-bg{
        margin-top: -80%;
    }
    .resp_desc{
        color: #fff;
    }
    .bc_desc{
        color: #fff;
    }
    .lsupport_desc{
        color: #fff;
    }
}
@media screen and (max-width: 611px){
    .bc_desc{
        margin-left: 39%;
    }
    .bc_desc_list{
        margin-left: -23%;
    }
    .lsupport_desc{
        margin-left: 41%;
    }
    .lsupport_desc_list{
        margin-left: -19%;
    }
    .tsupport_desc{
        margin-left: 40%;
    }
    .tsupport_desc_list{
       margin-left: -24%; 
    }
}
@media screen and (max-width: 608px){
    .bc_desc_list{
        margin-left: -25%;
    }
    .lsupport_desc_list{
        margin-left: -19%;
    }
    .tsupport_desc_list{
        margin-left: -20%;
    }
}
@media screen and (max-width: 601px){
    .codeq_img{
        margin-left: -6%;
        margin-top: 8%;
    }
    .codeq_desc{
        margin-left: 40%;
        margin-top: -23%;
    }
    .codeq_desc_list{
        margin-left: 36%;
        margin-top: -15%;
    }
    .resp_img{
        margin-left: -9%;
        margin-top: 41%;
    }
    .resp_desc{
        margin-left: 39%;
        margin-top: 4%;
    }
    .resp_desc_list{
        margin-left: 37%;
        margin-top: 6%;
    }
    .bc_img{
        margin-left: 40%;
        margin-top: 18%;
    }
    .bc_desc{
        margin-left: 34%;
        margin-top: 5%;
    }
    .lsupport_img{
        margin-left: -28%;
        margin-top: 35%;
    }
    .lsupport_desc{
        margin-left: 35%;
        margin-top: 19%;
    }
    .lsupport_desc_list{
        margin-left: -18%;
        margin-top: 26%;
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
@media screen and (max-width: 576px){
    .resp_img{
    margin-left: -22%;
    }
    .lsupport_img{
        margin-left: -25%;
    }
    .lsupport_desc{
        margin-left: 36%;
        margin-top: 8%;
    }
    .lsupport_desc_list{
        margin-top: 15%;
    }

}
@media screen and (max-width: 571px){
    .resp_img{
        margin-top: 45%;
    }
    .bc_img{
        margin-left: 43%;
    }
    .bc_desc{
        margin-left: 36%;
    }
    .bc_desc_list{
        margin-left: -25%;
    }
    .lsupport_desc{
        margin-left: 38vw;
    }
    .lsupport_desc_list{
        margin-left: -21vw;
    }
}
@media screen and (max-width: 567px){
    .resp_img{
        margin-top: 42%;
    }
    .bc_desc_list{
        margin-left: -26%;
    }
    .lsupport_desc_list{
        margin-left: -20%;
    }

}
@media screen and (max-width: 544px){
    .resp_img{
        margin-top: 40%;
    }
    .bc_desc_list{
        margin-left: -27%;
    }
    .lsupport_desc_list{
        margin-left: -21%;
    }
    .tsupport_desc_list{
        margin-left: -23%;
    }
}
@media screen and (max-width: 507px){
    .resp_img{
        margin-top: 50%;
    }
}
@media screen and (max-width: 496px){
    .codeq_img{
        margin-top: 3%;
    }
}
@media screen and (max-width: 481px){
    .bc_img{
        margin-left: 47%;
    }
    .bc_desc{
        margin-left: 38%;
    }
    .bc_desc_list{
        margin-left: -32%;
    }
    .lsupport_img{
        margin-left: -30%;
    }
    .lsupport_desc{
        margin-left: 37vw;
    }
    .lsupport_desc_list{
        margin-left: -25%;
    }
    .tsupport_desc_list{
        margin-left: -28%;
    }
}
@media screen and (max-width: 471px){
    .lsupport_img{
        margin-left: -35%;
        margin-top: 38%;
    }
    .resp_img{
        margin-top: 42%;
    }
    .bc_desc_list{
        margin-left: -31%;
    }
    .lsupport_img{
        margin-left: -31%;
    }
    .lsupport_desc_list{
        margin-left: -25%;
    }
    .tsupport_desc_list{
        margin-left: -27%;
    }    
}
@media screen and (max-width: 450px){
    .codeq_img{
        margin-top: -4%;
    }
    .codeq_desc{
        margin-top: -20%;
    }
    .codeq_desc_list{
        margin-top: -14%;
    }
    .resp_img{
        margin-top: 49%;
        margin-left: -30%;
    }
    .resp_desc{
        margin-top: 3%;
    }
    .resp_desc_list{
        margin-top: 3%;
    }
    .bc_img{
        margin-top: 17%;
        margin-left: 41%;
    }
    .bc_desc{
        margin-left: 32%;
    }
    .bc_desc_list{
        margin-left: -32%;
    }
    .lsupport_img{
        margin-left: -33%;
        margin-top: 44%;
    }
    .lsupport_desc_list{
      margin-left: -27%;
    }
    .lsupport_desc{
        margin-left: 34vw;
    }

    .tsupport_img{
        margin-top: 21%;
    } 
    .tsupport_desc_list{
        margin-left: -33%;
    }
}
@media screen and (max-width: 446px){
    .codeq_img{
       margin-top: 1%;
   }
    .codeq_desc{
        margin-left: 39%;
    }
    .codeq_desc_list{
        margin-left: 32%;
    }
    .resp_img{
        margin-top: 43%;
        margin-left: -25%;
    }
    .resp_desc_list{
        margin-left: 32%;
    }
    .bc_img{
        margin-left: 42%;
    }
    .bc_desc{
        margin-left: 33vw;
    }
    .bc_desc_list{
        margin-left: -32vw;
    }
    .lsupport_desc_list{
        margin-left: -28%;
    }

}
@media screen and (max-width: 429px){
    .tsupport_desc_list{
        margin-left: -33vw;
        color: #fff;
    }
    .tsupport_img{
        margin-top: 6vw;
        margin-left: 44vw;
    }
    .lsupport_img{
        margin-left: -32vw;
    }
    .lsupport_desc{
        margin-left: 37vw;
    }
    .bc_desc_list{
        margin-left: -34vw;
        color: #fff;
    }
    .lsupport_desc_list{
        margin-left: -29vw;
        color: #fff;
    }
    .mhacks-features-mobileview{
        height: 1236px;
        margin-top: -141%;
    }
    .codeq_img{
        margin-left: -58%;
        margin-top: 43%;
    }
    .codeq_desc{
        margin-top: -85%;
        margin-left: 40vw;
        color: #fff;
    }
    .codeq_desc_list{
        margin-top: -78%;
        margin-left: 34vw;
        color: #fff;
    }
    .resp_img{
        margin-top: 37%;
        margin-left: -4vw;
    }
    .resp_desc{
        margin-top: -36%;
        margin-left: 41vw;
        color: #fff;
    }
    .resp_desc_list{
        margin-top: -29%;
        margin-left: 33vw;
        color: #fff;
    }
    .bc_img{
        margin-top: -2%;
        margin-left: 44vw;
    }
    .bc_desc{
        margin-left: 34vw;
    }
    .tsupport_desc{
        color: #fff;
        margin-left: 36vw;
    }

}
@media screen and (max-width: 427px){
    .resp_img{
        margin-left: -9vw;
    }
    .bc_img{
        margin-top: 36%;
        margin-left: -9vw;
    }
    .tsupport_img{
        margin-top: 3%;
    }
}
@media screen and (max-width: 425px){
    .resp_img{
        margin-left: -8%;
    }
}
@media screen and (max-width: 415px){
    .codeq_img{
        margin-top: 34vw;
        margin-left: -62vw;
    }
    .codeq_desc{
        margin-top: -93%;
        margin-left: 37%;
    }
    .codeq_desc_list{
        margin-left: 32%;
        margin-top: -83%;
    }
    .resp_img{
        margin-left: -9vw;
        margin-top: 38vw;
    }
    .resp_desc{
        margin-left: 37%;
        margin-top: -40vw;
    }
    .resp_desc_list{
        margin-left: 32%;
        margin-top: -35%;
    }
    .bc_img{
        margin-left: -10%;
        margin-top: 38%;
    }
    .bc_desc{
        margin-left: 30%;
    }
    .bc_desc_list{
        margin-left: -33%;
    }
    .lsupport_img{
        margin-left: 38%;
        margin-top: 16%;
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
        margin-top: 3%;
    }
    .tsupport_desc_list{
        margin-left: -28%;
        margin-top: 10%;
    }
}
@media screen and (max-width: 386px){
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
    .resp_img{
        margin-top: 45vw;
    }
    .resp_desc{
        margin-top: -30vw;
    }
    .resp_desc_list{
        margin-top: -23vw;
    }
    .bc_desc{
        margin-left: 31%;
    }
    .bc_desc_list{
        margin-left: -38vw;
    }
    .lsupport_desc_list{
        margin-left: -29vw;
    }
    .tsupport_img{
        margin-top: 10vw;
    }
    .tsupport_desc_list{
        margin-left: -34vw;
    }
}
@media screen and (max-width: 365px){
    .bc_img{
        margin-left: -40vw;
        margin-top: 42vw;
    }
}
@media screen and (max-width: 363px){
    .tsupport_desc_list{
        margin-right: 8%;
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
    .resp_img{
        margin-top: 40vw;
    }
    .resp_desc{
        margin-top: -28vw;
    }
    .resp_desc_list{
        margin-top: -19vw;
    }
    .codeq_img{
        margin-top: 40vw;
    }
    .codeq_desc{
        margin-top: -81vw;
    }

}
@media screen and (max-width: 321px){
    .tsupport_desc_list{
        margin-left: 18%;
        margin-right: 9%;
    }
    .lsupport_desc_list{
        margin-left: -34%;
    }
    .bc_desc_list{
        margin-left: -47%;
    }
    .codeq_desc{
        margin-top: -85vw;
    }
    .codeq_desc_list{
        margin-top: -76vw;
    }
    .bc_img{
        margin-top: 51vw;
    }
}
@media screen and (max-width: 305px){
    .codeq_img{
        margin-top: 40vw;
    }
    .codeq_desc{
        margin-top: -84%;
    }
    .codeq_desc_list{
        margin-top: -75%;
    }
    .resp_img{
        margin-top: 43vw;
    }
    .resp_desc{
        margin-top: -18vw;
    }
    .resp_desc_list{
        margin-top: -7vw;
    }
    .bc_img{
        margin-top: 53vw;
        margin-left: -51vw;
    }
    .bc_desc{
        margin-top: 9%;
        margin-left: 28vw;
    }
    .bc_desc_list{
        margin-top: 22%;
        margin-left: -48vw;
    }
    .lsupport_img{
        margin-top: 24%;
    }
    .lsupport_desc_list{
        margin-top: 18%;
        margin-left: -40%;
    }
    .tsupport_img{
        margin-top: 22%;
    }
    .tsupport_desc{
        margin-top: 11%;
    }
    .tsupport_desc_list{
        margin-right: 2%;
    }

}
</style>

