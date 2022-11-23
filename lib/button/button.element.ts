import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('le-button')
export class ButtonElement extends LitElement {

  public static styles = css`
    button {
      border: none;
      height: 40px;
      padding: 0px 24px;
      border-radius: 20px;
    }
  `;

  protected override render() {
    return html`
      <button><slot></slot></button>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'le-button': ButtonElement,
  }
}
