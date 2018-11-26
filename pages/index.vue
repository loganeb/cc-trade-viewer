<template>
  <section class="container">
    <div class="columns">
      <div class="column ">
        <exchange></exchange>
      </div>
      <div class="column ">
        <pair></pair>
      </div>
      <div class="column ">
        <trades></trades>
      </div>
    </div>
  </section>
</template>

<script>
import Exchange from '../components/Exchange';
import Pair from '../components/Pair';
import Trades from '../components/Trades';

export default {
  components: {
    Exchange,
    Pair,
    Trades
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  text-align: center;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

</style>
