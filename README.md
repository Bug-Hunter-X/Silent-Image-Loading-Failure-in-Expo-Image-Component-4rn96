# Silent Image Loading Failure in Expo Image Component

This repository demonstrates a common, yet subtle, bug in Expo's `Image` component.  The component fails to load an image from a URI without providing a clear error message, resulting in a blank space where the image should appear.

## Problem
The problem lies in the lack of robust error handling within the Expo `Image` component when dealing with invalid or inaccessible image URIs.  The component simply fails silently, leaving developers puzzled.

## Solution
The provided solution implements proper error handling using the `onError` prop of the `Image` component. This prop allows you to specify a callback function that executes when an error occurs during image loading.  The solution also includes logging to help pinpoint the issue.

## Reproduction
1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe the missing image and the console output in the development tools.