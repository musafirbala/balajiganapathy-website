import { defineConfig } from 'tinacms'

// Use the GitHub branch you want to edit
export const branch = 'main'

/**
 * See API Docs: https://tina.io/docs/reference/config/
 */
export default defineConfig({
  branch,
  clientId: '5ac77a8f-9319-49c9-9c3c-9cf593aa8c65', // Get from TinaCMS
  token: process.env.TINA_TOKEN || '',

  build: {
    publicDir: '.',
    outputDir: '.tina'
  },
  media: {
    tina: {
      mediaRoot: 'media',
      publicFolder: '.'
    }
  },
  schema: {
    collections: [
      {
        label: 'Site Config',
        name: 'config',
        path: '_data/config',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: 'string',
            ui: { component: 'textarea' },
            label: 'Title',
            name: 'title'
          },
          {
            type: 'string',
            ui: { component: 'textarea' },
            label: 'Tagline',
            name: 'tagline'
          }
        ]
      },
      {
        label: 'Leader',
        name: 'leader',
        path: '_data/leader',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title'
          },
          {
            type: 'string',
            ui: { component: 'textarea' },
            label: 'Tagline',
            name: 'tagline'
          },
          {
            type: 'string',
            ui: { component: 'textarea' },
            label: 'Subtitle',
            name: 'subtitle'
          },
          {
            type: 'object',
            list: true,
            name: 'programs',
            label: 'Programs',
            ui: {
              itemProps: (item) => ({
                label: item?.title
              })
            },
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title'
              },
              {
                type: 'string',
                ui: { component: 'textarea' },
                label: 'Description',
                name: 'description'
              },
              {
                type: 'string',
                label: 'Icon',
                name: 'icon'
              }
            ]
          }
        ]
      },
      {
        label: 'Speaker',
        name: 'speaker',
        path: '_data/speaker',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title'
          },
          {
            type: 'string',
            ui: { component: 'textarea' },
            label: 'Tagline',
            name: 'tagline'
          },
          {
            type: 'object',
            list: true,
            name: 'topics',
            label: 'Topics',
            ui: {
              itemProps: (item) => ({
                label: item?.title
              })
            },
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title'
              },
              {
                type: 'string',
                ui: { component: 'textarea' },
                label: 'Description',
                name: 'description'
              }
            ]
          }
        ]
      },
      {
        label: 'Advisor',
        name: 'advisor',
        path: '_data/advisor',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title'
          },
          {
            type: 'string',
            ui: { component: 'textarea' },
            label: 'Tagline',
            name: 'tagline'
          },
          {
            type: 'object',
            list: true,
            name: 'expertise',
            label: 'Expertise',
            fields: [
              {
                type: 'string',
                label: 'Area',
                name: 'title'
              },
              {
                type: 'string',
                ui: { component: 'textarea' },
                label: 'Description',
                name: 'description'
              }
            ]
          }
        ]
      },
      {
        label: 'Coach',
        name: 'coach',
        path: '_data/coach',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title'
          },
          {
            type: 'string',
            ui: { component: 'textarea' },
            label: 'Tagline',
            name: 'tagline'
          },
          {
            type: 'object',
            list: true,
            name: 'focusAreas',
            label: 'Focus Areas',
            fields: [
              {
                type: 'string',
                label: 'Area',
                name: 'title'
              },
              {
                type: 'string',
                ui: { component: 'textarea' },
                label: 'Description',
                name: 'description'
              }
            ]
          }
        ]
      }
    ]
  }
})
