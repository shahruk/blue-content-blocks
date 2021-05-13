const breakpoints = ['mobile', 'tablet-portrait', 'tablet-landscape', 'desktop', 'desktop-large', 'desktop-wide'];
const breakpointValues = [0, 768, 1024, 1280, 1440, 1920];
function insertCssIntoHead(document, fontCssUrl) {
  let element = document.querySelector(`link[href="${fontCssUrl}"]`);
  // Only inject the element if it's not yet present
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('href', fontCssUrl);
    document.head.appendChild(element);
  }
}
function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
function generateResponsiveClass(classPrefix, responsiveValue) {
  let index = -1;
  let classString = '';
  responsiveValue.split('|').forEach(value => {
    index++;
    if (!value || value === 'false') {
      return false;
    }
    classString += ` ${classPrefix}-${breakpoints[index]}-${value}`;
  });
  return classString;
}
function generateResponsiveValues(responsiveValue) {
  if (!responsiveValue) {
    return [];
  }
  let responseArray = [];
  responsiveValue.split('|').forEach(value => {
    if (!value) {
      return false;
    }
    responseArray.push(value.trim());
  });
  return responseArray;
}
function getCurrentBreakpointIndex() {
  let activeBreakpointIndex = 0;
  let windowWidth = window.innerWidth;
  breakpointValues.some((width) => {
    // The first time this is true will end the loop
    let condition = width > windowWidth;
    if (!condition) {
      activeBreakpointIndex = breakpointValues.indexOf(width);
    }
    return condition;
  });
  return activeBreakpointIndex;
}
function getCurrentValue(responsiveValue) {
  if (!responsiveValue) {
    return '';
  }
  let currentBreakpoint = getCurrentBreakpointIndex();
  let responsiveValues = generateResponsiveValues(responsiveValue);
  let returnValue;
  for (var i = currentBreakpoint; i >= 0; i--) {
    if (responsiveValues[i]) {
      returnValue = responsiveValues[i];
      i = -1;
    }
  }
  return returnValue;
}

export { getCurrentBreakpointIndex as a, generateResponsiveClass as b, getCurrentValue as g };
