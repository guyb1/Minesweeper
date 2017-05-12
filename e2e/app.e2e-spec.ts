import { WixMinesweeperPage } from './app.po';

describe('wix-minesweeper App', () => {
  let page: WixMinesweeperPage;

  beforeEach(() => {
    page = new WixMinesweeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
