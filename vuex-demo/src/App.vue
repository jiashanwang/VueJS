<template>
  <div id="app">
    Welcome TO VUE
    <input type="button" value="增加" @click="increment">
    <input type="button" value="较少" @click="decrement">
    <!-- <input type="button" value="偶数点击增加" @click="clickodd"> -->
    <!-- <input type="button" value="点击异步" @click="clickasync"> -->
    <div>
      现在数字为：{{count}},现在的数字是：{{getodd}}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed:mapGetters([
    'count',
    'getodd'
  ]),
  methods: mapActions([
    "increment",
    "decrement"
    // "clickodd",
    // "clickasync"
  ])
}
</script>

<style>

</style>
