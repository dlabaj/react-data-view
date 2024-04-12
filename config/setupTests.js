/* eslint-disable no-unused-vars */
import 'whatwg-fetch';
import 'babel-polyfill';
import '@testing-library/jest-dom';

global.SVGPathElement = function () {};

global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));
Element.prototype.scrollTo = () => {};