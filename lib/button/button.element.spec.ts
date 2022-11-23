import { expect } from '@open-wc/testing';
import { ButtonElement } from './button.element';

describe('Button Element', () => {

  it('should be created', () => {
    const element = document.createElement('le-button');
    expect(element).instanceOf(ButtonElement);
  });

});
