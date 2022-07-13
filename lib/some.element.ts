import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('le-some')
export class SomeElement extends LitElement {

  @property()
  public name?: string;

  protected override render() {
    return html`
      <p>Hello ${ this.name ?? 'World' }!</p>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'le-some': SomeElement,
  }
}
