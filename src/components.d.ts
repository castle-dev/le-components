/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { AsciiArt as LeAsciiArt } from './components/le-ascii-art/le-ascii-art';

interface HTMLLeAsciiArtElement extends LeAsciiArt, HTMLElement {
}
declare var HTMLLeAsciiArtElement: {
  prototype: HTMLLeAsciiArtElement;
  new (): HTMLLeAsciiArtElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "le-ascii-art": HTMLLeAsciiArtElement;
  }
  interface ElementTagNameMap {
      "le-ascii-art": HTMLLeAsciiArtElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "le-ascii-art": JSXElements.LeAsciiArtAttributes;
      }
  }
  namespace JSXElements {
      export interface LeAsciiArtAttributes extends HTMLAttributes {
        
          type?: any
      }
  }
}

import { Mirror as LeMirror } from './components/le-mirror/le-mirror';

interface HTMLLeMirrorElement extends LeMirror, HTMLElement {
}
declare var HTMLLeMirrorElement: {
  prototype: HTMLLeMirrorElement;
  new (): HTMLLeMirrorElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "le-mirror": HTMLLeMirrorElement;
  }
  interface ElementTagNameMap {
      "le-mirror": HTMLLeMirrorElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "le-mirror": JSXElements.LeMirrorAttributes;
      }
  }
  namespace JSXElements {
      export interface LeMirrorAttributes extends HTMLAttributes {
        
      }
  }
}

