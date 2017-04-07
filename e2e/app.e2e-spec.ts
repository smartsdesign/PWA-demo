import { ServiceWorkersPage } from './app.po';

describe('service-workers App', function() {
  let page: ServiceWorkersPage;

  beforeEach(() => {
    page = new ServiceWorkersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
