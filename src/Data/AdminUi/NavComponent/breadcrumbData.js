const breadcrumbData = [
    {
      id: 1,
      items: [{ text: 'Home', active: true }],
    },
    {
      id: 2,
      items: [
        { text: 'Home', href: '#' },
        { text: 'Library', active: true },
      ],
    },
    {
      id: 3,
      items: [
        { text: 'Home', href: '#', icon: 'mdi-home' },
        { text: 'Library', href: '#' },
        { text: 'Data', active: true },
      ],
    },
  ];
  
  export default breadcrumbData;
  