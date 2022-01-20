/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Rule } from '@frontify/guideline-blocks-settings';

/**
 * Rule to validate value is between two pixel values.
 *
 * @param {number} minimumValue Minimum value
 * @param {number} maximumValue Maximum value
 * @returns {Rule} Rule object with validator and error message.
 */
export const betweenPixelRule = (minimumValue: number, maximumValue: number): Rule<string> => ({
    errorMessage: `Please use a value between ${minimumValue} and ${maximumValue}.`,
    validate: (value: string): boolean =>
        Number(value.replace(/px/, '')) >= minimumValue && Number(value.replace(/px/, '')) <= maximumValue,
});
