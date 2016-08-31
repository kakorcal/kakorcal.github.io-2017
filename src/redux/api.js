const api = {
  siteVisited: false,
  projects: [
    {
      pathname: '/wikirace',
      projectname: 'Wikirace',
      date: 'Jul 2016',
      description: {
        about: 'alkdjfl;adskfjads',
        role: 'aljdfkj;ladskfjadfadf'
      },
      imagecount: 5,
      github: 'https://github.com/kakorcal/wikirace',
      website: 'http://wikirace.herokuapp.com/',
      technologies: {
        front: ['Angular.js', 'Socket.io', 'Angular Material'],
        back: ['Node.js', 'Express.js', 'Socket.io', 'JSON Web Tokens', 'Cheerio.js', 'Knex.js', 'PostgreSQL'],
        tools: ['Heroku']
      }
    },
    {
      pathname: '/angular_blog',
      projectname: 'Angular Blog',
      date: 'Jun 2016',
      description: {
        about: 'alkdjfl;adskfjads',
        role: 'aljdfkj;ladskfjadfadf'
      },
      imagecount: 3,
      github: 'https://github.com/kakorcal/angular_blog',
      website: '',
      technologies: {
        front: ['Angular.js', 'Bootstrap'],
        back: ['Node.js', 'Express.js', 'Knex.js', 'PostgreSQL'],
        tools: []
      }
    },
    {
      pathname: '/linguo',
      projectname: 'Linguo',
      date: 'Apr 2016',
      description: {
        about: 'alkdjfl;adskfjads',
        role: 'aljdfkj;ladskfjadfadf'
      },
      imagecount: 3,
      github: 'https://github.com/kakorcal/linguo',
      website: 'https://linguoisdead.herokuapp.com/',
      technologies: {
        front: ['Jade', 'JQuery', 'Bootstrap', 'Animate.css'],
        back: ['Node.js', 'Express.js', 'Passport.js', 'Google Oauth', 'Knex.js', 'PostgreSQL'],
        tools: ['Heroku']
      }
    },
    {
      pathname: '/bomberman',
      projectname: 'Bomberman',
      date: 'Mar 2016',
      description: {
        about: 'alkdjfl;adskfjads',
        role: 'aljdfkj;ladskfjadfadf'
      },
      imagecount: 0,
      github: 'https://github.com/kakorcal/bomberman',
      website: '',
      technologies: {
        front: ['HTML5 Canvas', 'Phaser.js'],
        back: ['Node.js', 'Express.js'],
        tools: ['Github Pages', 'Tiled', 'TexturePacker', 'Webpack']
      }
    },
    {
      pathname: '/michael_baca',
      projectname: 'Michael Baca Photography',
      date: 'Dec 2015',
      description: {
        about: 'alkdjfl;adskfjads',
        role: 'aljdfkj;ladskfjadfadf'
      },
      imagecount: 3,
      github: 'https://github.com/kakorcal/michael_baca',
      website: 'http://michaelbaca.com/',
      technologies: {
        front: ['CSS', 'JQuery IOS Slider'],
        back: ['PHP'],
        tools: ['Wordpress']
      }
    },
    {
      pathname: '/sara_alterman',
      projectname: 'Sara Faith Alterman',
      date: 'Oct 2015',
      description: {
        about: 'alkdjfl;adskfjads',
        role: 'aljdfkj;ladskfjadfadf'
      },
      imagecount: 2,
      github: 'https://github.com/kakorcal/sara_alterman',
      website: 'http://sarafaithalterman.com/',
      technologies: {
        front: ['CSS'],
        back: ['PHP'],
        tools: ['Wordpress', 'Photoshop']
      }
    }
  ]
};

export default api;