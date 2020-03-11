<template>
  <div class="banner">
    <div class="banner__container">
      <div class="banner__picture">
        <img class="banner__picture__image" src="../../assets/logo-img.png" />
      </div>
      <div class="banner__description">
        <div class="banner__description__heading">
          <h2 class="banner__heading__h2">
            {{ show.title || show.name }}
            <span
              class="banner__heading__h2__year"
            >({{ show.release_date }})</span>
          </h2>
        </div>
        <div class="banner__description__options">
          <div class="banner__description__options__score">
            <div class="circle">
              <span class="circle__percent">75%</span>
            </div>
            <span class="banner__description__options__score-value">User Score</span>
          </div>
          <div class="banner__description__options__favourite" title="Click to add as favourite!">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -28 512.00002 512"
              width="20px"
              height="30px"
            >
              <g>
                <path
                  d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#eb4e7a"
                />
              </g>
            </svg>
          </div>
          <div class="banner__description__options__rating" title="Click to rate!">
            <svg
              title="click to rate!"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 510 510"
              style="enable-background:new 0 0 510 510;"
              xml:space="preserve"
              width="20px"
              height="30px"
            >
              <g>
                <g>
                  <g id="star">
                    <polygon
                      points="255,402.212 412.59,497.25 370.897,318.011 510,197.472 326.63,181.738 255,12.75 183.371,181.738 0,197.472     139.103,318.011 97.41,497.25   "
                      data-original="#000000"
                      class="active-path"
                      data-old_color="#ffffff"
                      fill="#eb4e7a"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="banner__description__overview">
          <h4 class="banner__description__overview__h4">Overview</h4>
          <p class="banner__description__overview__para">{{ show.overview }}</p>
        </div>
        <h4 class="banner__description__crew__h4" v-if="crew.length > 0">Featured Crew</h4>
        <div class="banner__description__crew" v-if="crew.length > 0">
          <div class="banner__description__crew__member">
            <p class="banner__description__crew__member__name">{{ crew.director.name }}</p>
            <p class="banner__description__crew__member__role">Director</p>
          </div>
          <div class="banner__description__crew__member">
            <p class="banner__description__crew__member__name">{{ crew.producer.name }}</p>
            <p class="banner__description__crew__member__role">Producer</p>
          </div>
          <div class="banner__description__crew__member">
            <p class="banner__description__crew__member__name">{{ crew.writer.name }}</p>
            <p class="banner__description__crew__member__role">Writer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Object,
      required: true
    },
    crew: {
      type: Object
    }
  }
}
</script>

<style>
</style>