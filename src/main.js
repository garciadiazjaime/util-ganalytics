export default class GaUtil {

  constructor(googleId, flag) {
    this.googleId = googleId;
    this.enable = !!flag;
  }

  init() {
    if (this.googleId && this.enable) {
      /*eslint-disable */
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', this.googleId, 'auto');
      ga('send', 'pageview');
      /*eslint-enable */
    }
  }

  sendEvent(eventCategory, eventAction, eventLabel, eventValue) {
    if (this.enable && eventCategory && eventAction && eventLabel) {
      /*eslint-disable */
      ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
      /*eslint-enable */
    }
  }
}
