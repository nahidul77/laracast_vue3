import Assignment from "./Assignment.js"
export default {
    components : { Assignment },
    template : `
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2">
            {{ title }}
            <span>({{ assignments.length }})</span>
        </h2>
        <div class="flex gap-2">
            <button 
                @click="currentTag = tag" 
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs"
                :class="{'border-blue-500 text-blue-500' : tag === currentTag}"
                > {{tag}} </button>
        </div>
        <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
            <Assignment v-for="assignment in filterAssignments" :key="assignment.id" :assignment="assignment"></Assignment>
        </ul>
    </section>
    `,
    data() {
        return {
            currentTag : 'all',
        }
    },
    props : {
        assignments : Array,
        title : String
    },
    computed : {

        filterAssignments () {
            if(this.currentTag === 'all'){
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        },

        tags () {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}