const Feeds = [
  {
    username: 'David Miller',
    image_url: 'https://unsplash.it/700/450?image=610',
    status: 'These waves are looking pretty good today!',
    time: 'Posted 32 mins ago',
    comments: [
      {
        username: 'John Smith',
        commentText: 'Very nice! I wish I was there! That looks amazing',
        replies: [
          {
            username: 'David Miller',
            commentText: 'Next time for sure!',
          },
        ],
      },
    ],
  },
  {
    username: 'John Smith',
    image_url: 'https://unsplash.it/700/450?image=180',
    status: 'Another day at the office... #workinghardorhardlyworking',
    time: 'Posted 46 mins ago',
    comments: [
      {
        username: 'Jessy Lucas',
        commentText: 'Where did you get that camera?! I want one!',
      },
    ],
  },
  {
    username: 'Jeffery Wellings',
    image_url: 'https://unsplash.it/700/450?image=281',
    status: 'Nice shot from the skate park! #kickflip #holdmybeer #igotthis',
    time: 'Posted 1 hr ago',
  },
  {
    username: 'David Miller',
    image_url: 'https://unsplash.it/700/450?image=185',
    status:
      "It's hot, and I might be lost... #desert #water #anyonehavesomewater #noreally #thirsty #dehydration",
    time: 'Posted yesterday',
    comments: [
      {
        username: 'John Smith',
        commentText: 'The oasis is a mile that way, or is that just a mirage?',
      },
    ],
  },
];

export default Feeds;
