<template>
  <div id="app">
    <nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <h3 class="title is-3">MD Notes</h3>
          </router-link>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu">

          <div class="navbar-end">
            <div class="navbar-item">
              <router-link to="/create" class="button is-primary">
                Новый документ
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
