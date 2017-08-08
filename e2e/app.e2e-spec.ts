import { FirebaseChatPage } from './app.po';

describe('firebase-chat App', () => {
  let page: FirebaseChatPage;

  beforeEach(() => {
    page = new FirebaseChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
