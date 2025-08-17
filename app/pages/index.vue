<template>
  <main class="container">
    <nav>
      <ul>
        <li><strong>EDWIN ORELLANA</strong></li>
      </ul>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
      </ul>
    </nav>
    <div class="thecard grid">
      <h1>ed</h1>
    </div>
    <div class="thecard grid">
      <h1>ed</h1>
    </div>
    <div class="thecard grid">
      <h1>ed</h1>
    </div>
  </main>
</template>

<style>
.thecard{
    margin: 50px;
    padding: 30px;
    border-radius: 10px;
    background-color: white;
    border: 3px solid #f7c34a;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 800px;
    font-family: 'Roboto';
}

.thecard:before{
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f7c34a;
    border-radius: 10px;
    transform-origin: center;
    transition: transform .3s ease;
    z-index: -1;
}

.thecard:hover:before {
  transform: scale(1.1) rotate(5deg);
}

</style>
