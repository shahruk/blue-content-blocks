import { Component, Element, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { WindowResizeService } from '../../services/window-resize-service';
import { ResponsiveNumber, ResponsiveString } from '../../typings';
import { getCurrentValue } from '../../utils/utils';
import { ContentEventsService } from '../../services/content-events-service';

@Component({
  tag: 'content-block-wrapper',
  styleUrl: 'content-block-wrapper.scss',
  shadow: false,
})
export class ContentBlockWrapper {
  @Event({
    bubbles: true
  }) contentBlockReady: EventEmitter<HTMLElement>;

  @Element() hostElement: HTMLStencilElement;
  @State() styleObject: {[key: string]: string};
  @Prop() background: ResponsiveString;
  @Prop() name: string = 'content-block';
  @Prop() styleClasses: string = '';
  @Prop() backgroundClasses: string = '';
  
  @Prop() maxWidth: ResponsiveNumber = '100%';

  @State() inlineStyle?: {[key: string]: string};
  
  innerClassName: string = this.name + '__inner';

  computedClassString(): string {
    let classString = `${this.name}`;
    if (this.styleClasses) {
      classString += ` ${this.styleClasses}`;
    }
    return classString;
  }

  computedBackgroundClassString(): string {
    let classString = `content-block-wrapper__background-wrapper`;
    if (this.backgroundClasses) {
      classString += ` ${this.backgroundClasses}`;
    }
    return classString;
  }

  componentWillLoad() {
    ContentEventsService.attachElement(this.hostElement);
    if (this.background) {
      WindowResizeService.breakpointIndex$.subscribe(() => {
        let value = getCurrentValue(this.background);
        this.inlineStyle = {
          'background': value,
          'max-width': !isNaN(getCurrentValue(this.maxWidth) as any) ? getCurrentValue(this.maxWidth) : getCurrentValue(this.maxWidth) + '%',
        };
      });
    }
  }

  componentDidRender() {
    console.log('RENDER');
    this.contentBlockReady.emit(this.hostElement);
  }

  render() {
    return (
      <div class={this.computedClassString()} style={this.inlineStyle}>
        <div class={this.computedBackgroundClassString()} style={this.styleObject}>
          <div class={`content-block-wrapper__inner${this.innerClassName ? ` ${this.innerClassName}` : ''}`}>
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }

}
