<template>
  <div>
    <!-- <div class="wrap" id="wrap2">
      <div class="loading">
        <img class="bounceball" src="../assets/home.png" alt="" />
        <div class="text">Furnishing Progress</div>
      </div>
    </div> -->
    <!-- <div class="bounceball"></div> -->
  </div>
</template>

<script>
export default {
  name: "SpinnerLoader",
};
</script>

<style scoped lang="scss">
.wrap {
  display: block;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: auto !important;
  position: fixed;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%);
  z-index: 21;
  background-color: #92afff;
  width: 100%;
  height: 100%;
}

.loading {
  display: block !important;
  margin-top: 20%;
}

.text {
  color: #000;
  display: block;
  margin-left: 5px;
  font-size: 25px;
  padding-top: 0px;
}

.bounceball {
  position: relative;
  display: inline-block;
  height: 45px;
  width: 45px;
  margin-top: -20px;
  animation: bounce 1s alternate infinite ease;
}

/* .bounceball:before {
  position: absolute;
  content: "";
  display: block;
  top: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #000;
  transform-origin: 50%;
  animation: bounce 500ms alternate infinite ease;
} */

@keyframes bounce {
  0% {
    top: 20px;
    height: 5px;
  }
  35% {
    height: 20px;
  }
  100% {
    top: 0;
  }
}

@media (min-width: 300px) and (max-width: 400px) {
  .loading {
    margin-top: 70%;
  }
}

@media (min-width: 401px) and (max-width: 500px) {
  .loading {
    margin-top: 50%;
  }
}
@media (min-width: 501px) and (max-width: 600px) {
  .loading {
    margin-top: 42%;
  }
}
@media (min-width: 601px) and (max-width: 767px) {
  .loading {
    margin-top: 32%;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .loading {
    margin-top: 45%;
  }
}
</style>
