import { BehaviorSubject } from 'rxjs';
import Swiper, { SwiperOptions } from 'swiper/bundle';
export declare type InitMethodType = 'load' | 'event';
export declare class ContentCarousel {
  el: HTMLElement;
  initMethod: InitMethodType;
  mobileBackground: string;
  background: string;
  swiperOptions: string;
  swiperCarousel: Swiper;
  swiperContainer?: HTMLDivElement;
  swiperWrapper?: HTMLDivElement;
  swiperPagination?: HTMLDivElement;
  swiperPrevElement?: HTMLDivElement;
  swiperNextElement?: HTMLDivElement;
  swiperScrollbar?: HTMLDivElement;
  swiperOptionsFinal: SwiperOptions;
  loadStatus: BehaviorSubject<boolean>;
  getSwiperOptions(newOptions: SwiperOptions | string): SwiperOptions;
  componentDidLoad(): void;
  setSwiperOptionsCallback(event: CustomEvent): void;
  initSwiper(): void;
  render(): any;
}
