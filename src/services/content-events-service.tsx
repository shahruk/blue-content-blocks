class ContentEventsController {
  firstRun: boolean = true;
  timeoutHolder;
  elementsListening = [];
  constructor() {
    // var elementsCounted = 0;
    window.addEventListener('contentBlockReady', () => {
      if (this.timeoutHolder) {
        clearTimeout(this.timeoutHolder);
      }
      this.timeoutHolder = setTimeout(() => {
        window.dispatchEvent(new Event('contentBlocksRendered'));
      }, 1);
    });
  }

  attachElement(elem) {
    this.elementsListening.push(elem);
  }

  getElementsListening() {
    return this.elementsListening;
  }
}

export const ContentEventsService = new ContentEventsController();