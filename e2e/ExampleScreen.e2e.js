describe('Example Screen Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should type into the text field', async () => {
    await element(by.text('Example screen')).tap();
    var someText = 'This is just a test (:';
    await element(by.id('ExampleTextInputId')).typeText(someText);
    await expect(element(by.id('ExampleTextInputId'))).toHaveText(someText);
  });
});