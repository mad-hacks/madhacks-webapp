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
               <span class="codeq1"> Neat and clean code. <br> </span>
                <span class="codeq2"> Best industry practices. </span>
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
                <span class="resp1">All device compatible. <br> </span>
                <span class="resp2">Clear cut clarity. </span>
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
                <span class="bc1"> Supports every screen size. <br> </span>
                <span class="bc2"> Easily viewable.</span>
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
                <span class="lsupport1">Frequent updation. <br> </span>
                <span class="lsupport2">Later stage addition.</span>
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
                <span class="tsupport1">Scheduled maintainence available. <br> </span>
                <span class="tsupport2">Super fast maintainence.</span>
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
    .codeq1{
        width: 100%;
        margin-left: 1.1vw;
    }
    .resp1{
        width: 100%;
        margin-left: 2.1vw;
    }
    .resp2{
        margin-left: 4.1vw;
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
        font-size: 1.2em;
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
        font-size: 1.2em;
        color: #fff;
    }
    .resp_desc_list{
        margin-left: 39vw;
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
        font-size: 1.2em;
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
        font-size: 1.2em;
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
        font-size: 1.2em;
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
        margin-left: -55vw;
        margin-bottom: 2%;
        margin-top: 35vw;
    }
    .codeq_desc{
        float: left;
        margin-left: 41vw;
        color: #fff;
        margin-top: -35vw;
        font-size: 1.2em;
    }
    .codeq_desc_list{
        margin-left: 39%;
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
        font-size: 1.2em;
        color: #fff;
    }
    .resp_desc_list{
        margin-left: 36vw;
        margin-top: 1%;
        float: left;
        line-height: 2em;
    }
    .bc1{
        margin-left: -2vw;
    }
    .bc2{
        margin-left: 2.3vw;
    }
    .lsupport1{
        margin-left: 3vw;
    }
    .lsupport2{
        margin-left: 2.3vw
    }
    .tsupport1{
        margin-left: -1vw;
    }
    .tsupport2{
        margin-left: 3vw;
    }
    .bc_img{
        height: 40px;
        margin-left: 45%;
        margin-top: 7%;
    }
    .bc_desc{
        margin-left: 38vw;
        float: left;
        color: #fff;
        margin-top: 5%;
        font-size: 1.2em;
    }
    .bc_desc_list{
        float: left;
        margin-top: 12%;
        margin-left: -22vw;
        line-height: 2em;
    }
    .lsupport_img{
        height: 40px;
        margin-left: 45%;
        margin-top: 21vw;
    }
    .lsupport_desc{
        margin-left: 40vw;
        float: left;
        color: #fff;
        margin-top: 5%;
        font-size: 1.2em;
    }
    .lsupport_desc_list{
        margin-left: -20vw;
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
        margin-left: 39vw;
        float: left;
        color: #fff;
        margin-top: 5%;
        font-size: 1.2em;
    }
    .tsupport_desc_list{
        float: left;
        margin-top: 12%;
        margin-left: -24vw;
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
@media screen and (max-width: 734px){
    .lsupport_img{
        margin-top: 8vw;
    }
}
@media screen and (max-width: 729px){
    .bc_desc_list{
        margin-left: -22vw;
    }
    .lsupport_desc_list{
        margin-left: -18vw;
    }
    .tsupport_desc_list{
        margin-left: -21vw;
    }
}
@media screen and (max-width: 689px){
    .bc_desc_list{
        margin-left: -23vw;
    }
    .lsupport_desc_list{
        margin-left: -19vw;
    }
    .tsupport_desc_list{
        margin-left: -24vw;
    }
}
@media screen and (max-width: 662px){
    .bc_desc_list{
        margin-left: -25vw;
    }
    .lsupport_desc_list{
        margin-left: -22vw;
    }
    .lsupport_img{
        margin-top: 11vw;
    }
}
@media screen and (max-width: 609px){
    .bc_desc_list{
        margin-left: -28vw;
    }
    .lsupport_desc_list{
        margin-left: -24vw;
    }
    .tsupport_desc_list{
        margin-left: -28vw;
    }
    .lsupport_img{
        margin-top: 26vw;
    }
}
@media screen and (max-width: 602px){
    .codeq_img{
        margin-left: -6%;
        margin-top: 8%;
    }
    .codeq_desc{
        margin-left: 40%;
        margin-top: -34vw;
    }
    .codeq_desc_list{
        margin-left: 36%;
        margin-top: -27vw;
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
        margin-left: 34vw;
        margin-top: 6%;
    }
    .bc_img{
        margin-left: 40%;
        margin-top: 11vw;
    }
    .bc_desc{
        margin-left: 34%;
        margin-top: 5%;
    }
    .lsupport_img{
        margin-left: -22vw;
        margin-top: 35%;
    }
    .lsupport_desc{
        margin-left: 35%;
        margin-top: 6vw;
    }
    .lsupport_desc_list{
        margin-left: -22vw;
        margin-top: 14vw;
    }
    .tsupport_desc{
        margin-left: 35vw;
    }

    .tsupport_desc_list{
        margin-left: -27vw;
    }
}

@media screen and (max-width: 571px){
    .resp_img{
        margin-top: 32vw;
        margin-left: -7vw;
    }
    .resp_desc_list{
        margin-left: 35vw;
    }
    .bc_img{
        margin-left: 43%;
    }
    .bc_desc{
        margin-left: 36%;
    }
    .bc_desc_list{
        margin-left: 35vw;
        margin-top: 5vw;
    }
    .lsupport_desc{
        margin-left: 38vw;
    }
    .lsupport_desc_list{
        margin-left: -26vw;
    }
    .tsupport_desc_list{
        margin-left: -28vw;
    }
}
@media screen and (max-width: 545px){
    .codeq_desc{
        margin-top: -25vw;
    }
    .codeq_desc_list{
        margin-top: -17vw;
    }
}
@media screen and (max-width: 543px){
    .codeq_img{
        margin-top: 7vw;
    }
    .resp_img{
        margin-top: 50vw;
    }
}
@media screen and (max-width: 503px){
    .codeq_desc{
        margin-top: -17vw;
    }
    .codeq_desc_list{
        margin-top: -6vw;
    }
    .codeq_img{
        margin-top: 11vw;
    }
    .resp_img{
        margin-top: 41vw;
        margin-left: -23vw;
    }
    .resp_desc{
        margin-top: 7vw;
    }
    .resp_desc_list{
        margin-top: 4vw;
    }
    .bc_img{
        margin-top: 15vw;
    }
}
@media screen and (max-width: 502px){
    .lsupport_desc_list{
        margin-left: -29vw;
    }
    .tsupport_desc_list{
        margin-left: -33vw;
    }
}
@media screen and (max-width: 496px){
    .codeq_img{
        margin-top: 3%;
    }
}
@media screen and (max-width: 461px){
    .resp_img{
        margin-top: 56vw;
    }
    .lsupport_img{
        margin-top: 45vw;
        margin-left: -30vw;
    }
    .lsupport_desc_list{
        margin-left: -31vw;
    }
    .tsupport_desc_list{
        margin-left: -35vw;
    }
    .codeq_desc{
        margin-top: -25vw;
    }
    .codeq_desc_list{
        margin-top: -13vw;
    }
}
@media screen and (max-width: 451px){
    .lsupport_desc{
        margin-left: 34vw;
    }
    .codeq_img{
        margin-top: -4vw;
    }
    .resp_img{
        margin-top: 47vw;
    }
    .resp_desc{
        margin-left: 41vw;
    }
    .bc_img{
        margin-left: 46vw;
    }
    .lsupport_img{
        margin-left: -27vw;
    }
    .lsupport_desc{
        margin-left: 38vw;
    }
}
@media screen and (max-width: 446px){
    .codeq_img{
       margin-top: 1%;
   }
    .codeq_desc{
        margin-left: 39%;
        margin-top: -18vw;
    }
    .codeq_desc_list{
        margin-left: 32%;
        margin-top: -7vw;
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
        margin-left: -40vw;
        margin-top: 15vw;
    }
    .lsupport_desc_list{
        margin-left: -31vw;
    }
    .tsupport_desc_list{
        margin-left: -38vw;
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
        height: 1375px;
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
@media screen and (max-width: 428px){
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
    .bc_desc_list{
        margin-left: -41vw;
    }
    .lsupport_desc_list{
        margin-left: -34vw;
    }
    .tsupport_desc_list{
        margin-left: -39vw;
    }
}
@media screen and (max-width: 425px){
    .resp_img{
        margin-left: -8%;
    }
}
@media screen and (max-width: 415px){
    .codeq_img{
        margin-top: 45vw;
        margin-left: -60vw;
    }
    .codeq_desc{
        margin-left: 38vw;
        margin-top: -81vw;
    }
    .codeq_desc_list{
        margin-top: -70vw;
        margin-left: 33vw;
    }
    .codeq1{
        margin-left: 2.1vw;
    }
    .resp_img{
        margin-left: -7vw;
        margin-top: 47vw;
    }
    .resp_desc{
        margin-left: 38vw;
        margin-top: -25vw;
    }
    .resp_desc_list{
        margin-top: -14vw;
        margin-left: 29vw;
    }
    .resp1{
        margin-left: 5.1vw;
    }
    .resp2{
        margin-left: 8.1vw;
    }
    .bc_img{
       margin-top: 45vw;
       margin-left: -28vw; 
    }
    .bc1{
        margin-left: -4vw;
    }
    .bc3{
        margin-left: 4.3vw;
    }
    .bc_desc{
        margin-left: 29vw;
    }
    .bc_desc_list{
        margin-left: -40vw;
    }
    .lsupport_img{
        margin-left: -28vw;
    }
    .lsupport_desc{
        margin-left: 33vw;
    }
    .lsupport_desc_list{
        margin-left: -35vw;
    }
    .lsupport1{
        margin-left: 5vw;
    }
    .lsupport2{
        margin-left: 4.3vw;
    }
    .tsupport_img{
        margin-top: 11vw;
        margin-left: 43vw;
    }
    .tsupport_desc{
        margin-left: 32vw;
    }
    .tsupport_desc_list{
        margin-left: 26vw;
        margin-top: 5vw;
    }
}
@media screen and (max-width: 386px){
    .bc_desc_list{
        margin-left: -42vw;
        margin-top: 16vw;
    }
    .bc_img{
        margin-left: -32vw;
    }
    .bc_desc{
        margin-left: 28vw;
    }
    .lsupport_desc_list{
        margin-left: -38vw;
        margin-top: 16vw;
    }
    .tsupport_desc_list{
        margin-left: -43vw;
        margin-top: 15vw;
    }
    .resp_desc{
        margin-top: -21vw;
    }
    .resp_desc_list{
        margin-top: -11vw;
    }
}
@media screen and (max-width: 376px){
    .codeq_img{
        margin-top: 51vw;
    }
    .codeq_desc{
        margin-top: -74vw;
        margin-left: 36vw;
    }
    .codeq_desc_list{
        margin-top: -64vw;
        margin-left: 30vw;
    }
    .resp_img{
        margin-top: 47vw;
    }
    .resp_desc{
        margin-top: -15vw;
    }
    .resp_desc_list{
        margin-top: -4vw;
    }
    .bc_img{
        margin-left: -33vw;
    }
    .bc_desc{
        margin-left: 28%;
    }
    .bc_desc_list{
        margin-left: -42vw;
    }
    .lsupport_img{
        margin-left: -31vw;
    }
    .lsupport_desc{
        margin-left: 32vw;
    }
    .lsupport_desc_list{
        margin-left: -38vw;
    }
    .tsupport_img{
        margin-top: 10vw;
    }
    .tsupport_desc_list{
        margin-left: -48vw;
        margin-top: 15vw;
    }
}
@media screen and (max-width: 361px){
    .resp_desc_list{
        margin-left: 26vw;
    }
    .bc_desc{
        margin-left: 25%;
    }
    .bc_desc_list{
        margin-left: -45vw;
    }
    .lsupport_img{
        margin-left: -34vw;
    }
    .lsupport_desc_list{
        margin-left: -42vw;
    }
    .tsupport_img{
        margin-left: 40vw;
    }
    .tsupport_desc{
        margin-left: 28vw;
    }
    .tsupport_desc_list{
        margin-left: -46vw;
    }
}
@media screen and (max-width: 321px){
    .codeq_img{
        margin-top: 52vw;
        margin-left: -67vw;
    }
    .codeq_desc{
        margin-top: -69vw;
        margin-left: 30vw;
    }
    .codeq_desc_list{
        margin-top: -51vw;
        margin-left: 22vw;
    }
    .codeq1{
        margin-left: 2.1vw;
    }
    .resp_img{
        margin-top: 62vw;
        margin-left: -11vw;
    }
    .resp_desc{
        margin-top: 6vw;
        margin-left: 31vw;
    }
    .resp_desc_list{
        margin-top: 4vw;
        margin-left: 20vw;
    }
    .resp1{
        margin-left: 5.1vw;
    }
    .resp2{
        margin-left: 10.1vw;
    }
    .bc_img{
        margin-top: 59vw;
        margin-left: -37vw;
    }
    .bc_desc{
        margin-left: 19vw;
        margin-top: 7%;
    }
    .bc_desc_list{
        margin-top: 18vw;
        margin-left: -50vw;
    }
    .bc1{
        margin-left: -4vw;
    }
    .bc2{
        margin-left: 4.3vw;
    }
    .lsupport_img{
        margin-left: 37vw;
        margin-top: 14vw;
    }
    .lsupport_desc{
        margin-left: 25vw;
    }
    .lsupport_desc_list{
        margin-left: -46vw;
        margin-top: 18vw;
    }
    .lsupport1{
        margin-left: 6vw;
    }
    .lsupport2{
        margin-left: 4.3vw;
    }
    .tsupport_img{
        margin-left: 38vw;
    }
    .tsupport_desc{
        margin-left: 25vw;
    }
    .tsupport_desc_list{
        margin-left: -53vw;
    }
    .mhacks-features-mobileview{
        height: 1341px;
    }
}
@media screen and (max-width: 309px){
    .codeq_img{
        margin-top: 35vw;
    }
    .codeq_desc{
        margin-top: -84vw;
        margin-left: 33vw;
    }
    .codeq_desc_list{
        margin-top: -73vw;
        margin-left: 27vw;
    }
    .resp_img{
        margin-left: -6vw;
        margin-top: 45vw;
    }
    .resp_desc_list{
        margin-left: 23vw;
        margin-top: -15vw;
    }
    .resp_desc{
        margin-top: -24vw;
    }
    .bc_img{
        margin-left: -38vw;
        margin-top: 53vw;
    }
    .bc_desc{
        margin-left: 26%;
    }
    .lsupport_img{
        margin-left: 42vw;
    }
    .lsupport_desc{
        margin-left: 30vw;
    }
    .lsupport_desc_list{
        margin-left: -45vw;
    }
    .tsupport_img{
        margin-left: 42vw;
    }
    .tsupport_desc{
        margin-left: 29vw;
    }
}
@media screen and (max-width: 305px){
    .codeq_img{
        margin-top: 40vw;
        margin-left: -62vw;
    }
    .codeq_desc{
        margin-top: -77vw;
        margin-left: 30vw;
    }
    .codeq_desc_list{
        margin-top: -65vw;
        margin-left: 23vw;
    }
    .resp_img{
        margin-top: 48vw;
        margin-left: -10vw;
    }
    .resp_desc{
        margin-top: -14vw;
        margin-left: 31vw;
    }
    .resp_desc_list{
        margin-top: -3vw;
        margin-left: 21vw; 
    }
    .bc_img{
        margin-top: 57vw;
        margin-left: -41vw;
    }
    .bc_desc{
        margin-top: 3%;
        margin-left: 21vw;
    }
    .bc_desc_list{
        margin-top: 14%;
        margin-left: -56vw;
    }
    .lsupport_img{
        margin-top: 15vw;
        margin-left: 37vw;
    }
    .lsupport_desc{
        margin-left: 26vw;
    }
    .lsupport_desc_list{
        margin-top: 18%;
        margin-left: -48vw;
    }
    .tsupport_img{
        margin-top: 22%;
        margin-left: 38vw;
    }
    .tsupport_desc{
        margin-left: 23vw;
    }
    .tsupport_desc_list{
        margin-right: 4%;
    }

}
</style>

