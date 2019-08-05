<template>
  <div>
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a href="#" @click.prevent="activeView = 'app-home'" class="navbar-brand">Project Name</a>
        </div>
        
        <div class="navbar-collapse collapse" id="navbar">
          <ul class="nav navbar-nav">
            <li><a href="#" @click.prevent="activeView='app-home'">Home</a></li>
            <li><a href="#" @click.prevent="activeView='app-about'">About</a></li>
            <li><a href="#" @click.prevent="activeView='app-home'">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="jumbotron">
        <component :is="activeView"></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeView: 'app-home'
    };
  }
}
</script>

