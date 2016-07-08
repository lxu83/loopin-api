// config/auth.js

module.exports = {

    'facebookAuth' : {
        'clientID'      : '294994240849508', // your App ID
        'clientSecret'  : '1d23f4e1a3775066d96846dddb2918f3', // your App Secret
        'callbackURL'   : 'https://immense-wildwood-98958.herokuapp.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'hje9B1vDoo0K4WHX9skCtf4rR',
        'consumerSecret'    : 'tP8bkfGGZMqlp1O4zDN5JhT7p23sd0f6lmBqbN3mBZFkzFSixE',
        'callbackURL'       : 'https://immense-wildwood-98958.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '377876356818-224mqt8htbhpu48d15df99tih6ggonsi.apps.googleusercontent.com',
        'clientSecret'  : '13b5xSywzVIgR1CFbKy-6K94',
        'callbackURL'   : 'https://immense-wildwood-98958.herokuapp.com/auth/google/callback'
    }

};