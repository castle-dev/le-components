import { Component, State, Prop } from '@stencil/core';
import { Printer } from 'le-ascii-art';

@Component({
  tag: 'le-ascii-art',
  styleUrl: 'le-ascii-art.scss'
})
export class AsciiArt {
  private printer = new Printer();
  @State() lines:string[] = [];
  @Prop() type:string;

  componentDidLoad() {
    if (this.type === 'logo') {
      this.lines = this.printer.getLogoLines();
    } else if (this.type === 'name') {
      this.lines = this.printer.getNameLines();
    } else {
      this.lines = this.printer.getLogoLines();
    }
  }

  render() {
    return (
      <div>
        { this.lines.map((line) => {
          return <pre>{ line }</pre>
        }) }
      </div>
    );
  }
}
