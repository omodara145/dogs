<template>
  <div>
    <div class="dg-header">
      <el-image :src="headerImage" fit="cover" class="dg-header--image"></el-image>
      <div class="dg-nav">
        <router-link to="/">
          <span>Dogs</span>
        </router-link>
      </div>
      <div class="dg-header--content">
        <h1>Find the perfect dog</h1>
        <el-input
          placeholder="Search for dogs by breed"
          suffix-icon="el-icon-search"
          v-model="dogBreed"
          class="dg-header--search__input">
        </el-input>
        <p>
          <span>Suggested:</span>
          affenpinscher, african, bulldog, germanshepherd
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      headerImage: "./dog3.jpg",
      dogBreed: ""
    };
  }
};
</script>
