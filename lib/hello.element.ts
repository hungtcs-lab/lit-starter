import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('le-hello')
export class HelloElement extends LitElement {

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
    'le-hello': HelloElement,
  }
}
