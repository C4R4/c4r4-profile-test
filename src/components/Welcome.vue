<template>
  <!-- <div class="container"> -->
  <div class="card">
    <div class="typewriter">
      <h1>Hello! ladies and gentlemen, Welcome to my profile.</h1>
      <h2>May I introduce myself?</h2>
    </div>
    <button type="button" class="btn btn-outline-success">
      Of course, Let's go.
    </button>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
.container {
  margin: 10rem 10rem 10rem 10rem;
  background-color: black;
}

.card {
  width: 90rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-height: 1000vh;
  max-width: 1000vh;
  margin: 16rem 2rem 16rem 2rem;
  padding: 1rem 1rem 1rem 1rem;
  align-items: center;
  text-align: center;
}

.typewriter h1,
h2::after {
  font-family: "Garamond", Garamond;
  display: inline-block;
  overflow: hidden;
  letter-spacing: 0.15em;
  /* animation: typing 3s steps(25, end), blink 0.6s step-end infinite; */
  animation: typing 4s
    steps(29, end) 1s 1 normal both, blink 600ms steps(29, end) infinite;
  white-space: nowrap;
  font-size: 50px;
  font-weight: 400;
  border-right: 3px solid darkslategray;
  box-sizing: border-box;
}

h2 {
  font-size: 30px;
}

/* button {
} */

@keyframes typing {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: darkslategray;
  }
}
</style>