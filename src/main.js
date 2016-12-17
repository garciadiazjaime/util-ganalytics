export default class GaUtil {

  constructor(flag) {
    this.enable = !!flag;
  }

  init(id) {
    if (this.enable) {
      /*eslint-disable */
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', id, 'auto');
      ga('send', 'pageview');
      /*eslint-enable */
    }
  }

  sendEvent(eventCategory, eventAction, eventLabel, eventValue) {
    if (this.enable) {
      /*eslint-disable */
      ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
      /*eslint-enable */
    }
  }
}
