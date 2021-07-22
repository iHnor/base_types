class Task {

    constructor(indexInp, titleInp, descInp, doneInp, dueDateInp){
        this.index  = indexInp,     
        this.title  = titleInp,
        this.desc   = descInp,
        this.done   = doneInp,
        this.dueDate = dueDateInp
    }

    checkDesc() {
        if ( this.desc != '' ){
            return `${'\n'}   ${this.desc}`;
        }
        else
            return '';
    }

    formatDate(){
        let monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${monthList[this.dueDate.getMonth()]} ${this.dueDate.getDate()} ${this.dueDate.getHours()}:${this.dueDate.getMinutes()}`
    }

    checkDone(){
        return this.done ? 'x' : ' ';  
    }

    toString(){
        return (`${this.index}. [${this.checkDone()}] ${this.title} (${this.formatDate()}) ${this.checkDesc()}`);
    }

    toggle() {
        this.done =! this.done;
    }

    isOverdue(){
        let todayDate = new Date();
 
        if (this.dueDate.getMonth() < todayDate.getMonth()){      
            return true;
        }   
        else if (this.dueDate.getDate() < todayDate.getDate())
            return true;
            if (this.dueDate.getHours() < todayDate.getHours())
                return true;
            else if (this.dueDate.getMinutes() < todayDate.getMinutes())
                return true;
                else
                    return false;    
    }

    postPone(dataTime){
        dataTime = dataTime.split(",");
        this.dueDate.setDate(Number(dataTime[0]) + this.dueDate.getDate())
        this.dueDate.setHours(Number(dataTime[1]) + this.dueDate.getHours(), Number(dataTime[2]) + this.dueDate.getMinutes())       
    }

}
module.exports = Task;

var note = new Task(1, 'Implement task output', 'Some description', true, new Date('Aug 25 10:43'));
var OverdueRezult = note.isOverdue(); 

console.log(note.toString());

// note.toggle();
// // "Дні, години, хвилини"
// note.postPone("2, 1, 30")

// console.log(note.toString());
// console.log(note.dueDate);