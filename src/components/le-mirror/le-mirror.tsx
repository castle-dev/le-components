import { Component, Element } from '@stencil/core';


@Component({
  tag: 'le-mirror',
  styleUrl: 'le-mirror.scss'
})
export class Mirror {

  @Element() el: Element;

  componentDidLoad() {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    }).then((stream) => {
      const video = this.el.querySelector('video');
      video.srcObject = stream;
    });
  }

  render() {
    return (
      <div>
        <video autoplay></video>
      </div>
    );
  }
}
