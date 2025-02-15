import { defineSettings } from '@frontify/guideline-blocks-settings'

export const settings = defineSettings({
  main: [
    {
      id: 'title',
      type: 'input',
      label: 'Title',
    },
  ],
  style: [
    {
      id: 'background',
      label: 'Background(s)',
      type: 'dropdown',
      defaultValue: 'Light',
      choices: [
        {
          value: 'Light',
          label: 'Light',
        },
        {
          value: 'Dark',
          label: 'Dark',
        },
        {
          value: 'Azure',
          label: 'Azure',
        },
      ],
    },
    {
      id: 'backgroundGlobal',
      label: 'Globaler Background',
      type: 'switch',
    },
  ],
})
