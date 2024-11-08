<!-- src/components/Navbar.vue -->
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-black">
  <div class="container">
    <router-link class="navbar-brand" to="/">
      shop ecommerce
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>

        <div class="search ms-auto">
            <input placeholder="Search..." class="input" name="text" type="text">
        </div>
      </ul>
    </div>
  </div>
</nav>

</template>

<style>
.nav-link{
    color: white !important;
    font-family: cursive;
}
.navbar-brand{
    font-size: xx-large !important;
    color: white !important;
    font-family: cursive;
}/* From Uiverse.io by laminelawal */ 
.input {
  padding: 5px;
  width: 120px;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0 1px  gray;
  font-size: 18px;
  transition: width 0.3s;
  font-family: Consolas,monaco,monospace;
}

.input:focus {
  outline: 1px solid blue;
  box-shadow: none;
  width: 230px;
}

.input::placeholder {
  color: blue;
}
</style>