<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg" id="navbar">
      <div class="parent-logo">
        <img class="img-logo" src="../assets/chair.png" />
        <a class="navbar-brand titel" href="#" style="font-family: dubai"
          >Grey Space</a
        >
      </div>

      <div class="parent-toogel-smail">
        <div class="">
          <div class="">
            <a><img class="img-cart-smail" src="../assets/cart.png" /></a>
          </div>
        </div>
        <div class="">
          <div class="">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img class="toggler-icon" src="../assets/home.png" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div
        class="collapse navbar-collapse parent-nav"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto conta lightGreen pullDown">
          <router-link to="/" tag="li"
            ><a class="nav-link" style="font-family: dubai"
              >Home</a
            ></router-link
          >
          <router-link to="/FurniturePage" tag="li"
            ><a class="nav-link" style="font-family: dubai"
              >Furniture</a
            ></router-link
          >
          <router-link to="/StorePage" tag="li"
            ><a class="nav-link" style="font-family: dubai"
              >Store</a
            ></router-link
          >
          <router-link to="/AboutUs" tag="li"
            ><a class="nav-link" style="font-family: dubai"
              >AboutUs</a
            ></router-link
          >
        </ul>
      </div>

      <div class="d-flex parent-serach" role="search">
        <form action="">
          <input type="search" style="font-family: dubai" required />
          <img class="fa fa-search" src="../assets/search.png" alt="" />
        </form>
        <!-- <a><img class="img-search" src="../assets/search.png" /></a> -->
        <a><img class="img-cart" src="../assets/cart.png" /></a>
      </div>
    </nav>
  </div>
</template>

<script>
// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 100) {
//       $(".navbar").css("background", "#d3dfff");
//     } else {
//       $(".navbar").css("background", "#f4f7ff");
//     }
//   });
// });
export default {
  name: "NavPar",
};
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: 95px;
  position: fixed;
  top: 0px !important;
  left: 0px !important;
  z-index: 20;
  background-color: #d3dfff;
}

.img-logo {
  height: 90px;
  margin-left: 50px;
}

.parent-logo {
  transition: 0.3s;
  width: 0px;
  display: flex;
  position: relative;
}

.titel {
  margin-left: 30px;
  font-size: 30px;
  margin-top: 20px;
}

.parent-nav {
  margin-left: 430px;
}

.navbar-nav li {
  margin-left: 50px;
  font-size: 19px;
  margin-top: 5px;
}

.navbar-nav li a {
  color: black;
  font-weight: bold;
  position: relative;
}

.navbar-nav li a:before {
  position: absolute;
  width: 100%;
  height: 0px;
  font-weight: bold;
  left: 0px;
  top: -31px;
  content: "";
  background: black;
  transition: all 0.3s;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: -1;
}

.navbar-nav li a:hover:before {
  height: 150%;
}

.navbar-nav li a:hover {
  color: #fff;
}

.parent-serach2 {
  width: 100px;
  margin-right: 50px !important;
  justify-content: space-between;
  float: right !important;
}

.parent-serach {
  width: 250px;
  margin-right: 70px !important;
  justify-content: space-between;
  float: right !important;
}

form {
  position: relative;
  top: 0% !important;
  left: 75%;
  margin-top: 50px;
  transform: translate(-50%, -50%);
  transition: all 1s;
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 25px;
  border: 4px solid white;
  box-shadow: 0px 0px 10px #799dff;
}

input {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 42.5px;
  line-height: 30px;
  outline: 0;
  border: 0;
  display: none;
  font-size: 1em;
  border-radius: 20px;
  padding: 0 20px;
}

.fa {
  /* box-sizing: border-box; */
  padding: 5px;
  width: 38px;
  height: 38px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  color: #b92c2c;
  text-align: center;
  font-size: 1.2em;
  transition: all 1s;
}

form:hover {
  position: relative;
  top: 0% !important;
  left: 45%;
  width: 200px;
  cursor: pointer;
}

form:hover input {
  display: block;
}

form:hover .fa {
  background: #6f95ff;
  color: white;
}

.img-cart {
  position: relative;
  top: 0% !important;
  left: 70%;
  margin-top: 27px;
  /* transform: translate(2%, 2%); */
  transition: transform 1s;
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 25px;
  border: 4px solid white;
  padding: 4px;
  box-shadow: 0px 0px 10px #799dff;
}

.img-cart:hover {
  transform: scale(1.08);
}

.navbar-toggler {
  outline: none;
  box-shadow: none;
  border: none;
}

.navbar-toggler:focus,
.navbar-toggler:active,
.toggler-icon:focus {
  outline: none;
  box-shadow: none;
  border: none;
}

.img-cart-smail {
  display: none;
}

@media (min-width: 300px) and (max-width: 500px) {
  .navbar {
    height: 80px;
    padding-top: 10px;
  }
  .img-logo {
    height: 60px;
    margin-left: 15px;
  }

  .parent-logo {
    width: 70%;
    /* background-color: blue; */
  }

  .titel {
    font-size: 20px;
    margin-top: 15px;
    margin-left: 10px;
  }

  .parent-nav {
    float: right;
    margin-left: 0px;
  }

  .parent-serach {
    visibility: hidden;
  }

  .navbar-toggler {
    float: right !important;
    display: block;
    margin-left: auto !important;
  }

  .navbar-nav li {
    width: 100%;
    margin-left: 0px !important;
    margin-top: 0px !important;
    background-color: #f4f7ff !important;
    /* opacity: 0.9; */
  }

  .navbar-nav li a:before {
    position: absolute;
    width: 100%;
    height: 0px;
    font-weight: bold;
    left: 0px;
    top: 0px;
    content: "";
    background: black;
    transition: all 0.3s;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: -1;
  }

  .navbar-nav li a:hover:before {
    height: 100%;
  }

  .navbar-nav li a:hover {
    color: #fff;
  }
  .parent-toogel-smail {
    display: flex !important;
    width: 22%;
    margin-right: 0px !important;
  }
  .img-cart-smail {
    display: flex !important;
    margin-top: 5px;
  }
}

@media (min-width: 501px) and (max-width: 700px) {
  .parent-logo {
    width: 80%;
  }

  .img-logo {
    height: 80px;
    margin-left: 15px;
  }

  .titel {
    font-size: 25px;
    margin-top: 15px;
    margin-left: 10px;
  }

  .parent-serach {
    visibility: hidden;
  }

  .parent-nav {
    margin-left: 0px !important;
  }

  .navbar-nav li {
    width: 100% !important;
    margin-left: 0px !important;
    opacity: 0.9 !important;
    background-color: #f4f7ff !important;
  }
  .navbar-nav {
    width: 100% !important;
    background-color: #f4f7ff !important;
  }

  .navbar-nav li a:before {
    position: absolute;
    width: 100%;
    height: 0px;
    font-weight: bold;
    left: 0px;
    top: 0px;
    content: "";
    background: black;
    transition: all 0.3s;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: -1;
  }

  .navbar-nav li a:hover:before {
    height: 100%;
  }

  .navbar-nav li a:hover {
    color: #fff;
  }
  .parent-toogel-smail {
    display: flex !important;
    width: 16%;
    margin-right: 0px !important;
  }
  .img-cart-smail {
    display: flex !important;
    margin-top: 5px;
  }
}

@media (min-width: 640px) and (max-width: 700px) {
  .parent-toogel-smail {
    display: flex !important;
    width: 14%;
  }
}

@media (min-width: 701px) and (max-width: 991px) {
  .parent-logo {
    width: 80%;
  }

  .img-logo {
    height: 80px;
    margin-left: 15px;
  }

  .titel {
    font-size: 25px;
    margin-top: 15px;
    margin-left: 10px;
  }

  .parent-serach {
    visibility: hidden;
  }

  .navbar-toggler {
    float: right !important;
    display: block;
    margin-left: auto !important;
  }

  .parent-nav {
    margin-left: 0px !important;
  }

  .navbar-nav li {
    width: 100%;
    margin-left: 0px;
    opacity: 0.9 !important;
  }
  .navbar-nav li {
    width: 100%;
    background-color: #f4f7ff !important;
  }
  .navbar-nav {
    width: 100%;
    background-color: #f4f7ff !important;
  }

  .navbar-nav li a:before {
    position: absolute;
    width: 100%;
    height: 0px;
    font-weight: bold;
    left: 0px;
    top: 0px;
    content: "";
    background: black;
    transition: all 0.3s;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: -1;
  }

  .navbar-nav li a:hover:before {
    height: 100%;
  }

  .navbar-nav li a:hover {
    color: #fff;
  }
  .parent-toogel-smail {
    display: flex !important;
    width: 17%;
    margin-right: 0px !important;
    /* background-color: red; */
  }
  .img-cart-smail {
    display: flex !important;
    margin-top: 5px;
  }
  .parent-toogel-smail {
    display: flex !important;
    width: 12%;
    margin-right: 0px !important;
  }
  .img-cart-smail {
    display: flex !important;
    margin-top: 5px;
  }
}
@media (min-width: 860px) and (max-width: 991px) {
  .parent-toogel-smail {
    display: flex !important;
    width: 10%;
  }
}
@media (min-width: 300px) and (max-width: 991px) {
  .parent-serach {
    margin-right: 0px;
    justify-content: right;
    visibility: hidden;
  }
  .navbar-nav li {
    opacity: 0.9;
  }
}
</style>
