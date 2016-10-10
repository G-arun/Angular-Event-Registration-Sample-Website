'uses strict'

eventsApp.factory('eventData', function eventData($resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});
    return{
        getEvent: function(eventId){
            return resource.get({id:eventId});
        },
        getAllEvents: function(){
            return resource.query();
        },
        save: function(event){
            event.id = 999;
            return resource.save(event);
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