const Task = require('./TaskWithMethod');
describe('Task', () => {

    describe('renders with', () => {
        it('cross when done', () => {
            
        });

        it('space when undone', () => {
            
        });

        it('description when it is not blank', () => {
            
        });
    });

    it('toggle into done', () => {
        // given
        let task = new Task();

        // when
        task.toggle();
        
        // then
        expect(task.done).toBe(true)
    })

    it('toggle into undone', () => {
        // given
        let task = new Task(1, 'Implement task output', 'Some description', true);

        // when
        task.toggle();
        
        // then
        expect(task.done).toBe(false)
    })
// Тест для toString(виконана, невиконана, з описом, без описа)
    it('Ignores render descriptions ', () => {
        // given
        let task = new Task(1, 'Implement task output', '');

        // when
        task.checkDesc();
        
        // then
        expect(task.desc).toBe('');
    })

    it('change the date', () =>{

        let task =  new Task(1, 'Implement task output', 'Some description', true, new Date('Aug 25 10:43'))        

        task.postPone("2, 1, 30");
        let changeDate = new Date('Aug 27 12:13');

        expect(task.dueDate).toEqual(changeDate)
    })
})
