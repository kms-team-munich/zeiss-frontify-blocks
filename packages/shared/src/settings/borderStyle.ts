/* (c) Copyright Frontify Ltd., all rights reserved. */

import { MultiInputLayout } from '@frontify/arcade';
import { ApiBundle } from '@frontify/guideline-blocks-settings';
import { ApiBlock } from '@frontify/guideline-blocks-settings/types/blocks';
import { appendUnit, maximumNumericalOrPixelOrAutoRule, numericalOrPixelRule } from '../';

const BORDER_COLOR_DEFAULT_VALUE = {
    rgba: { r: 234, g: 235, b: 235, a: 1 },
    hex: '#eaebeb',
};

export const getBorderStyleSettings = (id?: string): ApiBlock[] => {
    const HAS_BORDER_ID = id ? `hasBorder_${id}` : 'hasBorder';
    const SELECTION_ID = id ? `borderSelection_${id}` : 'borderSelection';
    const STYLE_ID = id ? `borderStyle_${id}` : 'borderStyle';
    const WIDTH_ID = id ? `borderWidth_${id}` : 'borderWidth';
    const COLOR_ID = id ? `borderColor_${id}` : 'borderColor';

    return [
        {
            id: HAS_BORDER_ID,
            label: 'Border',
            type: 'switch',
            defaultValue: true,
            on: [
                {
                    id: SELECTION_ID,
                    type: 'multiInput',
                    layout: MultiInputLayout.Columns,
                    lastItemFullWidth: true,
                    show: (bundle: ApiBundle): boolean => bundle.getBlock(HAS_BORDER_ID)?.value === true,
                    blocks: [
                        {
                            id: STYLE_ID,
                            type: 'dropdown',
                            defaultValue: 'Solid',
                            choices: [
                                {
                                    value: 'Solid',
                                    label: 'Solid',
                                },
                                {
                                    value: 'Dotted',
                                    label: 'Dotted',
                                },
                                {
                                    value: 'Dashed',
                                    label: 'Dashed',
                                },
                            ],
                        },
                        {
                            id: WIDTH_ID,
                            type: 'input',
                            defaultValue: '1px',
                            rules: [numericalOrPixelRule, maximumNumericalOrPixelOrAutoRule(500)],
                            onChange: (bundle: ApiBundle): void => appendUnit(bundle, WIDTH_ID),
                        },
                        {
                            id: COLOR_ID,
                            type: 'colorInput',
                            defaultValue: BORDER_COLOR_DEFAULT_VALUE,
                        },
                    ],
                },
            ],
            off: [],
        },
    ];
};
