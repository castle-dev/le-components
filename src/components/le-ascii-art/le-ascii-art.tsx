import { Component } from '@stencil/core';
import { Printer } from 'le-ascii-art';

@Component({
  tag: 'le-ascii-art',
  styleUrl: 'le-ascii-art.scss'
})
export class AsciiArt {
  private printer = new Printer();

  render() {
    return (
      <div>
        { this.printer.getLogoLines().map((line) => {
          return <pre>{ line }</pre>
        }) }
      </div>
    );
  }
}
