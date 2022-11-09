<template>
  <div>
    <div class="parent-section-card1 container">
      <div class="parent-titel">
        <h1 style="font-family: dubai">Store</h1>
      </div>
      <div class="row justify-content-evenly">
        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="profile-box">
            <img src="../assets/card-chair1.png" />
            <div class="box-content">
              <div class="titel">
                <h3 style="font-family: dubai">Rock Star</h3>
                <a href=""><img src="../assets/cart.png" alt="" /></a>
              </div>
              <div class="prise">
                <p style="font-family: dubai">100$</p>
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">1 star</label>
                </div>
              </div>
              <ul class="social-links">
                <p style="font-family: dubai">
                  Shop our selection of eclectic dining room furniture to create
                  your ideal dining space From.
                </p>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="profile-box">
            <img src="../assets/card-chair3.png" />
            <div class="box-content">
              <div class="titel">
                <h3 style="font-family: dubai">Rock Star</h3>
                <a href=""><img src="../assets/cart.png" alt="" /></a>
              </div>
              <div class="prise">
                <p style="font-family: dubai">100$</p>
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">1 star</label>
                </div>
              </div>
              <ul class="social-links">
                <p style="font-family: dubai">
                  Shop our selection of eclectic dining room furniture to create
                  your ideal dining space From.
                </p>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="profile-box">
            <img src="../assets/callous-panner3.png" />
            <div class="box-content">
              <div class="titel">
                <h3 style="font-family: dubai">Rock Star</h3>
                <a href=""><img src="../assets/cart.png" alt="" /></a>
              </div>
              <div class="prise">
                <p style="font-family: dubai">100$</p>
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">1 star</label>
                </div>
              </div>
              <ul class="social-links">
                <p style="font-family: dubai">
                  Shop our selection of eclectic dining room furniture to create
                  your ideal dining space From.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <button v-if="isVisbile" @click="getData('Basel')">test</button>
    <ul v-for="(gD, index) in gDat" :key="index">
      <li v-if="gD.age > 30 && gD.name == 'Nafa'">{{ gD.name }}</li>
    </ul> -->
    <FooterAll />
  </div>
</template>

<script>
import FooterAll from "@/components/FooterAll.vue";
export default {
  name: "StorePage",
  components: {
    FooterAll,
  },

  // data() {
  //   return {
  //     gDat: [
  //       { name: "Ali", age: 30 },
  //       { name: "Moh", age: 40 },
  //       { name: "Nafa", age: 49 },
  //       {
  //         result: [
  //           { title: "Mathmatics1" },
  //           { title: "Mathmatics2" },
  //           { title: "Mathmatics3" },
  //         ],
  //       },
  //     ],
  //     isVisbile: true,
  //   };
  // },

  // methods: {
  //   getData() {
  //     for (let i = 0; i < this.gDat.length; i++) {
  //       if (i == 3) {
  //         let out = this.gDat[i]["result"];
  //         for (let j = 0; j < out.length; j++) {
  //           alert(out[j]["title"]);
  //         }
  //       }
  //     }
  //   },
  // },
};
</script>

<style scoped>
.parent-section-card1 {
  margin-top: 180px;
  margin-bottom: 100px;
}

.parent-titel h1 {
  text-align: center;
  font-size: 50px;
}

.profile-box {
  height: 300px;
  width: 300px;
  margin: 0 auto 30px;
  position: relative;
  border-radius: 14px;
  transition: 0.3s ease all;
  margin-top: 70px;
  margin-bottom: 150px;
}

.profile-box img {
  width: 95%;
  height: 100%;
  display: block;
  border-radius: 4px;
  transition: 1s ease all;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.titel {
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  text-align: left;
  margin-right: 30px;
}

.titel h3 {
  color: #000;
}

.titel img {
  height: 27px;
  width: 27px;
}

.prise {
  display: flex;
  justify-content: space-between;
}

.prise p {
  color: #000;
  text-align: left;
  margin-left: 30px;
  margin-top: 5px;
}

.rate {
  height: 6px;
  margin-right: 30px;
  margin-top: 0px;
}

.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}

.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 20px;
  color: #ccc;
}

.rate:not(:checked) > label:before {
  content: "★ ";
}

.rate > input:checked ~ label {
  color: #ffc700;
}

.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}

.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}

.profile-box .box-content {
  color: white;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 5px 0px 0px;
  transition: 0.3s ease all;
}

.profile-box .box-content h3 {
  margin-bottom: 15px;
}

.profile-box .social-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.profile-box .social-links p {
  margin-left: 30px;
  text-align: left;
  margin-right: 20px;
  /* border-radius: 50%; */
  /* transition: 0.3s ease all;
  transform: translateY(100px); */
  font-size: 15px;
  color: #000;
}

/* .profile-box .social-links p:nth-child(2) {
  transition-delay: 0.15s;
}

.profile-box:hover .social-links p {
  transform: none;
} */
</style>
