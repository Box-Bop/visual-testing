const config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['Eesti Express'],
  'Test https://ekspress.delfi.ee/': function (browser) {
    // load website
    browser
      .resizeWindow(1400, 900)
      .url('https://ekspress.delfi.ee/')
      .waitForElementVisible('body')
      .pause(1000)
      .execute('scrollTo(1, 1800)')
      .pause(2000)
      .click('div[class="slick__arrow slick__arrow--next swiper-button-next"]')
      .pause(400)
      .click('div[class="slick__arrow slick__arrow--next swiper-button-next"]')
      .pause(400)
      .click('div[class="slick__arrow slick__arrow--next swiper-button-next"]')
      .pause(800)
      .click('div[class="slick__arrow slick__arrow--prev swiper-button-prev"]')
      .pause(400)
      .click('div[class="slick__arrow slick__arrow--prev swiper-button-prev"]')
      .pause(400)
      .click('div[class="slick__arrow slick__arrow--prev swiper-button-prev"]')
      .pause(2000)
      .execute('scrollTo(1, 1)')
      .pause(2000)
      .click('a[class="header__menu-burger toggle-sidebar"]')
      .pause(1000)
      .click('span[class="hamburger-outer"]')
      .pause(1000)
      .setValue('input[class="header-search__input"]', ['nali', browser.Keys.ENTER])
      .waitForElementVisible('body')
      .pause(5000)
      .end()
    },
};