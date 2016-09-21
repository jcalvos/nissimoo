import { NissimooPage } from './app.po';

describe('nissimoo App', function() {
  let page: NissimooPage;

  beforeEach(() => {
    page = new NissimooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
