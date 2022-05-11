<template>
  <section class="resume-header">
    <slot />
  </section>
</template>

<style>
  .resume-header {
    height: calc(1em * var(--line-height) * (var(--resume-title-size) + 2));
  }

  .resume-header > .name {
    font-size: 3em;
    display: block;
    text-align: center;
  }

  .resume-header > :not(.name) {
    font-size: 1em;
    display: inline-block;
  }

  .resume-header > :not(.name):nth-child(odd) {
    float: right;
    clear: right;
  }

  .resume-header > :not(.name):nth-child(even) {
    float: left;
    clear: left;
  }

  @media print {
    .resume-header > :not(.name) {
      font-style: italic;
    }
  }
</style>
