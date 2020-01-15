function addTodo(){
    var form = document.getElementById('form1');
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        var todoPanel = document.getElementById('TodoList');
        var todoContent = document.getElementsByClassName('newTodo');
        var text = todoContent[0].value;
        if(text!=""){
            console.log(text);
            var nuevo = document.createElement("input");
            nuevo.setAttribute("type", "checkbox");
            
            var label = document.createElement("label");
            var textNode = document.createTextNode(text);

            label.appendChild(textNode);
            label.appendChild(nuevo);
            console.log(textNode);
            var nuevodiv = document.createElement('div');
            nuevodiv.setAttribute('class', 'listDiv');
            nuevo.setAttribute("class", "listElement");
            nuevodiv.appendChild(label);
            todoPanel.appendChild(nuevodiv);
        }
        todoContent[0].value='';
        
    });
    
}

function markTodo(){
    var button = document.getElementById('mark');
    button.addEventListener('click', (event)=>{
        var list = document.getElementsByClassName('listElement');
        for(i of list){
            i.checked = true;
        }
    });
}

function clearTodo(){
    var button = document.getElementById('clear');
    button.addEventListener('click', (event)=>{
        var list = document.getElementsByClassName('listElement');
        for(i of list){
            i.checked = false;
        }
    });
}

function deleteTodo(){
    var button = document.getElementById('del');
    button.addEventListener('click', (event)=>{
        var list = document.getElementsByClassName('listDiv');
        l = list.length;
        for(i=0;i<l;i++){
            list[0].remove();
        }
    });
}

function init(){
    var content = document.getElementsByClassName('newTodo');
    content[0].value = '';
    addTodo();
    clearTodo();
    markTodo();
    deleteTodo();
}
init();