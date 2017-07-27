import { CtPage } from './app.po';

describe('ct App', () => {
  let page: CtPage;

  beforeEach(() => {
    page = new CtPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
