eventsApp.factory('eventData', function eventData($http, $log) {
     return{
         getEvent: function(successcb){
             $http({method: 'GET', url: '/data/event/1'})
                 .success(function(data, status, headers, config){
                     successcb(data);
                 })
                 .error(function(data, status, headers, config){
                     //$log(data, status, headers, config);
                     console.log('data');
                     console.log(data);
                     console.log('status');
                     console.log(status);
                     console.log('headers');
                     console.log(headers);
                     console.log('config');
                     console.log(config);
                 });
         },
         event: {
             name: "Angular Boot Camp",
             date: "1/1/2013",
             time: "10:30am",
             location: {
                 address: 'Google Headquarters',
                 city: 'Mountain View',
                 province: 'CA'
             },
             imageUrl: 'img/angularjs-logo.png',
             sessions: [
                 {
                     name: 'Directives Masterclass',
                     creatorName: 'Bob Smith',
                     duration: 1,
                     level: 'Advanced',
                     abstract: 'In this session you will learn the ins and outs of directives',
                     upVoteCount: 0
                 },
                 {
                     name: 'Scopes for fun and profit',
                     creatorName: 'John Doe',
                     duration: 4,
                     level: 'Introductory',
                     abstract: 'This sessions will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
                     upVoteCount: 0
                 },
                 {
                     name: 'Well Behaved Controllers',
                     creatorName: 'Jane Doe',
                     duration: 2,
                     level: 'Intermediate',
                     abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of yours friends and neighbors',
                     upVoteCount: 0
                 }
             ]
         }
     }
});