import { expect, assert, fixture, html } from '@open-wc/testing';
import { HelloElement } from './hello.element';

describe('Hello Element', () => {

  it('should be created', () => {
    const element = document.createElement('le-hello');
    expect(element).instanceOf(HelloElement);
  });

  it('should have name property', async () => {
    const name = Date.now().toString(32);
    const element = await fixture<HelloElement>(html`<le-hello name="${ name }"></le-hello>`);
    await element.updateComplete;
    assert.equal(element.name, name);
    assert.shadowDom.equal(element, `<p>Hello ${ name }!</p>`);
  });

});
