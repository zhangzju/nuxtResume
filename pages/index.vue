<template>
  <div class="container">
  <section class="section">
    <nav class="nav">
      <h1 class="title">ZhangWei` resume</h1>
      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
  <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
  <span class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>
    <div class="nav-right nav-menu">
      <a class="nav-item">
        <nuxt-link to="/inedx" class="button is-medium is-primary hvr-float-shadow">Index</nuxt-link>
      </a>
      <a class="nav-item">
        <nuxt-link to="/skill" class="button is-medium is-primary hvr-float-shadow">Skill</nuxt-link>
      </a>
      <a class="nav-item">
        <nuxt-link to="/hobby" class="button is-medium is-primary hvr-float-shadow">Hobbies</nuxt-link>
      </a>
      <a class="nav-item">
        <nuxt-link to="/about" class="button is-medium is-primary hvr-float-shadow">Show</nuxt-link>
      </a>
    </div>
  </nav>
  </section>
  <section class="section">
    <div class="container">
      <div class="heading">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </div>
  </section>
  <footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
      </p>
      <p>
        <a class="icon" href="https://github.com/jgthms/bulma">
          <i class="fa fa-github"></i>
        </a>
      </p>
    </div>
  </div>
</footer>
  </div>
</template>
<script>

</script>

<style scoped>
p {
  display:inline-block;
  margin-left: 2em;
}

</style>
