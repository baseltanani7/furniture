<template>
  <div>
    <div class="parent-section-card1 container">
      <div class="parent-titel">
        <h1 style="font-family: dubai">Modern Furniture</h1>
      </div>
      <div class="row justify-content-evenly">
        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="profile-box">
            <img src="../assets/img-furniture1.jpg" />
            <div class="box-content">
              <div class="titel">
                <h3 style="font-family: dubai">Rock Star</h3>
                <p style="font-family: dubai">100$</p>
              </div>
              <ul class="social-links">
                <p style="font-family: dubai">
                  Shop our selection of eclectic dining room furniture to create
                  your ideal dining space From sleek
                </p>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="profile-box">
            <img src="../assets/img-furniture7.jpg" />
            <div class="box-content">
              <div class="titel">
                <h3 style="font-family: dubai">Rock Star</h3>
                <p style="font-family: dubai">100$</p>
              </div>
              <ul class="social-links">
                <p style="font-family: dubai">
                  Shop our selection of eclectic dining room furniture to create
                  your ideal dining space From sleek
                </p>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="profile-box">
            <img src="../assets/img-furniture5.jpg" />
            <div class="box-content">
              <div class="titel">
                <h3 style="font-family: dubai">Rock Star</h3>
                <p style="font-family: dubai">150$</p>
              </div>
              <ul class="social-links">
                <p style="font-family: dubai">
                  Shop our selection of eclectic dining room furniture to create
                  your ideal dining space From sleek
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterAll />
  </div>
</template>

<script>
import FooterAll from "@/components/FooterAll.vue";
export default {
  name: "AboutUs",
  components: {
    FooterAll,
  },
};
</script>

<style scoped>
.parent-section-card1 {
  margin-top: 180px;
}

.parent-titel h1 {
  text-align: center;
  font-size: 40px;
}

.profile-box {
  height: 350px;
  width: 350px;
  margin: 0 auto 30px;
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  transition: 0.3s ease all;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  margin-top: 70px;
}

.profile-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.5);
}

.profile-box img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: block;
  border-radius: 4px;
  transition: 1s ease all;
}

.titel {
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
}

.titel p {
  margin-top: 7px;
}

.profile-box:hover img {
  transform: scale(1.25);
}

.profile-box .box-content {
  color: white;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 5px 0px 0px;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.3s ease all;
}

.profile-box:hover .box-content {
  padding-bottom: 30px;
  padding-top: 20px;
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
  margin-left: 10px;
  border-radius: 50%;
  transition: 0.3s ease all;
  transform: translateY(100px);
  font-size: 15px;
}

.profile-box .social-links p:nth-child(2) {
  transition-delay: 0.15s;
}

.profile-box:hover .social-links p {
  transform: none;
}
</style>
