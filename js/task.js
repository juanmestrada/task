import Backbone from 'backbone'


/*
Task {
    String title
    Date due_date
    {Lat,Lng} location
    String progress --> [done, started, cancelled, upcoming]
    Boolean isUrgent
}
*/

export const Task = Backbone.Model.extend({
    defaults: {
        title: '(no title)',
        due_date: null,
        location: null,
        progress: 'upcoming',
        isUrgent: false
    }
})

export const Tasks = Backbone.Collection.extend({
    model: Task
})