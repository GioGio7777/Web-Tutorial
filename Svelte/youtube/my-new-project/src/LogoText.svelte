<script>
    export let name
</script>

<div>
    <h1>{name.toUpperCase()}</h1>
</div>


<style lang="scss">
  @import "styles/variables";
  h1 {
    color: $color;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

</style>