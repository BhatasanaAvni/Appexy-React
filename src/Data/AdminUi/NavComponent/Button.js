const buttonData = [
    {
      type: 'standard',
      buttons: [
        { variant: 'primary', text: 'Primary' },
        { variant: 'secondary', text: 'Secondary' },
        { variant: 'success', text: 'Success' },
        { variant: 'danger', text: 'Danger' },
        { variant: 'warning', text: 'Warning' },
        { variant: 'info', text: 'Info' },
        { variant: 'dark', text: 'Dark' },
        { variant: 'link', text: 'Link' },
      ],
    },
    {
      type: 'outline',
      buttons: [
        { variant: 'outline-primary', text: 'Primary' },
        { variant: 'outline-secondary', text: 'Secondary' },
        { variant: 'outline-success', text: 'Success' },
        { variant: 'outline-danger', text: 'Danger' },
        { variant: 'outline-warning', text: 'Warning' },
        { variant: 'outline-info', text: 'Info' },
        { variant: 'outline-dark', text: 'Dark' },
        { variant: 'outline-link', text: 'Link' },
      ],
    },
    {
      type: 'rounded',
      buttons: [
        { variant: 'primary', text: 'Primary', rounded: true },
        { variant: 'secondary', text: 'Secondary', rounded: true },
        { variant: 'success', text: 'Success', rounded: true },
        { variant: 'danger', text: 'Danger', rounded: true },
        { variant: 'warning', text: 'Warning', rounded: true },
        { variant: 'info', text: 'Info', rounded: true },
        { variant: 'dark', text: 'Dark', rounded: true },
        { variant: 'link', text: 'Link', rounded: true },
      ],
    },
    {
      type: 'sizes',
      buttons: [
        { variant: 'primary', text: 'Button Large', size: 'lg' },
        { variant: 'primary', text: 'Button Regular' },
        { variant: 'primary', text: 'Button Small', size: 'sm' },
      ],
    },
    {
        type: 'icons',
        buttons: [
          { variant: 'primary', text: '', icon: 'mdi-play', iconPosition: 'left' },
          { variant: 'primary', text: 'Button with icon on right', icon: 'mdi-play', iconPosition: 'right' },
          { variant: 'primary', text: '', icon: 'mdi-play', onlyIcon: true },
          { variant: 'primary', text: '', icon: 'mdi-play', rounded: true, onlyIcon: true },
        ],
      },
  ];
  
  export default buttonData;
  