import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'content-element-wrapper',
  styleUrl: 'content-element-wrapper.scss',
  shadow: false,
})
export class ContentElementWrapper {
  @Prop() name: string = 'content-element';
  @Prop() styleClasses: string = '';
  outerClassName: string = this.name + '__outer';
  
  computedClassString(): string {
    let classString = ``;
    if (!this.styleClasses) {
      classString += ` ${this.name}`;
    } else {
      classString += ` ${this.name} ${this.styleClasses}`;
    }
    return classString;
  }

  render() {
    return (
      <div class={this.computedClassString()}>
        <slot></slot>
      </div>
    );
  }

}
