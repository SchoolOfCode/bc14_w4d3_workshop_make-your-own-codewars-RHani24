//👉 Write your tests below here:

import {sortArray} from './main.js';
import {test,expect} from '@jest/globals';


test('sorting Array', function () {
    let received = [300, 78, 54, 12, 5, 2];
    let expected = [300, 78, 54, 12, 5, 2];
    expect(received).toEqual(expected);
})

test ('sorting Array with negative numbers ', function () {
    let received = [-300, -78, -54, -12, -5, -2];
    let expected = [-300, -78, -54, -12, -5, -2];
    expect(received).toEqual(expected);
})

test ('sorting Array with negative and positive numbers ', function () {
    let received = [-300, -78, -54, 12, 5, 2];
    let expected = [-300, -78, -54, 12, 5, 2];
    expect(received).toEqual(expected);
})

test ('sorting Array with no numbers ', function () {
    let received = [];
    let expected = [];
    expect(received).toEqual(expected);
})