import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components : { AssignmentList , AssignmentCreate},
    template : `
        <section class="space-y-6">
            <AssignmentList :assignments="filters.inProgress" title="In Progress"></AssignmentList>
            <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList> 
            <assignment-create @add="addItem"></assignment-create>
        </section>
    `,
    data() {
        return {
            assignments : [
                {name : 'Finish project', complete : false, id : 1, tag : 'math'},
                {name : 'Read Chapter 4', complete : false, id: 2, tag : 'science'},
                {name : 'Turn in Homework', complete : false, id: 3, tag : 'math'},
            ],
        }
    },

    computed : {
        filters() {
            return {
                inProgress : this.assignments.filter(assignment => !assignment.complete),
                completed : this.assignments.filter(assignment => assignment.complete),
            }
        }
    },

    methods : {
        addItem(name){
            this.assignments.push({
                name : name,
                complete : false,
                id : this.assignments.length + 1
            });
        }
    }
}