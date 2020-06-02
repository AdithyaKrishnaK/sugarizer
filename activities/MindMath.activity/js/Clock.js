var Clock = {
  props: ['strokeColor', 'fillColor','time'],
  template: `
    <div class="detail-block"
    v-bind:style="{backgroundColor: strokeColor}"
    ><div class="detail-logo clock-logo"></div>
      <div class="detail-content"
      v-bind:style="{backgroundColor: strokeColor}"
      ><div class="clock">{{ parsedClockTime }}</div>
      </div>
    </div>
  `,
  computed: {
    parsedClockTime: function() {
      var timeInSeconds = this.time;
      var pad = function(num, size) {
          return ('000' + num).slice(size * -1);
        },
        time = parseFloat(timeInSeconds).toFixed(3),
        hours = Math.floor(time / 60 / 60),
        minutes = Math.floor(time / 60) % 60,
        seconds = Math.floor(time - minutes * 60),
        milliseconds = time.slice(-3);
      return pad(minutes, 2) + ':' + pad(seconds, 2);
    },
  }
}
