import { Component, h, Prop, Listen, Element } from '@stencil/core';
import { BehaviorSubject } from 'rxjs';
import Swiper, { SwiperOptions } from 'swiper/bundle';

// import { insertCssIntoHead } from '../../utils/utils';
export type InitMethodType = 'load' | 'event';
@Component({
  tag: 'content-carousel',
  styleUrl: 'content-carousel.scss',
  shadow: false,
})
export class ContentCarousel {
  @Element() el: HTMLElement;

  @Prop() initMethod: InitMethodType = 'load';
  @Prop() mobileBackground: string;
  @Prop() background: string;
  @Prop() swiperOptions: string = '{"slidesPerView": 1, "slidesPerGroup": 1, "autoplay": true, "loop": false}';
  public swiperCarousel: Swiper;
  public swiperContainer?: HTMLDivElement;
  public swiperWrapper?: HTMLDivElement;
  public swiperPagination?: HTMLDivElement;
  public swiperPrevElement?: HTMLDivElement;
  public swiperNextElement?: HTMLDivElement;
  public swiperScrollbar?: HTMLDivElement;
  public swiperOptionsFinal: SwiperOptions;

  loadStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  getSwiperOptions(newOptions: SwiperOptions|string): SwiperOptions {
    return Object.assign({
      observer: true,
      observeParents: true,
      pagination: {
        el: this.swiperPagination,
      },
      navigation: {
        nextEl: this.swiperNextElement,
        prevEl: this.swiperPrevElement,
      },
      scrollbar: {
        el: this.swiperScrollbar,
      },
    }, newOptions);
  }
  componentDidLoad() {
    if (this.initMethod === 'load') {
      console.log(this.swiperOptions);
      if (this.swiperOptions) {
        this.swiperOptionsFinal = this.getSwiperOptions(JSON.parse(this.swiperOptions as string || ''));
        console.log(this.swiperOptions);
        console.log(JSON.parse(this.swiperOptions as string || ''));
      }
      this.initSwiper();
    }
    this.loadStatus.next(true);
  }

  @Listen('setSwiperOptions')
  setSwiperOptionsCallback(event: CustomEvent) {
    this.loadStatus.subscribe(() => {
      let loaded = this.loadStatus.value;
      if (loaded) {
        this.swiperOptionsFinal = this.getSwiperOptions(event.detail);
        this.initSwiper();
      }
    });
  }

  initSwiper() {
    for (const slide of this.swiperWrapper.children as any) {
      slide.classList.add('swiper-slide');
    }
    this.swiperCarousel = new Swiper(this.swiperContainer, this.swiperOptionsFinal);
  }

  render() {
    return (
      <content-block-wrapper name="content-carousel" background-mobile={this.mobileBackground} background={this.background}>
        <div class="content-carousel__content">
          <div class="swiper-container" ref={el => this.swiperContainer = el as HTMLDivElement}>
            <div class="swiper-wrapper" ref={el => this.swiperWrapper = el as HTMLDivElement}>
              <slot></slot>
            </div>
            <div class="swiper-pagination" ref={el => this.swiperPagination = el as HTMLDivElement}></div>

            <div class="swiper-button-prev" ref={el => this.swiperPrevElement = el as HTMLDivElement}></div>
            <div class="swiper-button-next" ref={el => this.swiperNextElement = el as HTMLDivElement}></div>

            <div class="swiper-scrollbar" ref={el => this.swiperScrollbar = el as HTMLDivElement}></div>
          </div>
        </div>
      </content-block-wrapper>
    );
  }

}
