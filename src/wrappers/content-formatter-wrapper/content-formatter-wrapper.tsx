import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'content-formatter-wrapper',
  styleUrl: 'content-formatter-wrapper.scss',
  shadow: false,
})
export class ContentFormatterWrapper {
  @Prop() background: string;
  @Prop() name: string = 'content-formatter';
  @Prop() extraClasses: string = '';
  outerClassName: string = this.name + '__outer';
  innerClassName: string = this.name + '__inner';
  
  computedClassString(): string {
    let classString = '';
    if (!this.extraClasses) {
      classString = this.name;
    } else {
      classString = `${this.name} ${this.extraClasses}`;
    }
    return classString;
  }

  render() {
    return (
      <Host class={this.computedClassString()} style={{
        'background': this.background
      }}>
        {/* <div class={this.outerClassName}> */}
          <div class={this.innerClassName}>
            <slot></slot>
          </div>
        {/* </div> */}
      </Host>
    );
  }
}
