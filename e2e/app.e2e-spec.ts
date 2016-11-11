import { Angular2IntroLiveCodingPage } from './app.po';

describe('angular2-intro-live-coding App', function() {
  let page: Angular2IntroLiveCodingPage;

  beforeEach(() => {
    page = new Angular2IntroLiveCodingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
