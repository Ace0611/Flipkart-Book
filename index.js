myNameSpace = function(){
    let id = 3;
    const inputContent = document.querySelector('.chart-row-content')
    const inputUser = document.querySelector('#user-name')
    const submit = document.querySelector('#submit')
    let userName = "";
    function handleLoad(){
        return submit.addEventListener('click', freezeUserInput)
    }
    function freezeUserInput(){
        userName = inputUser.value;
        inputUser.setAttribute('readOnly', true)
        submit.setAttribute('disabled', true)
        newInput();
    }
    function newInput(){
        const newId = document.createElement('div');
        newId.classList.add('chart-row-item')
        newId.innerText = id;
        let newData = addNewData()
        inputContent.appendChild(newId)
        inputContent.appendChild(newData);
        id++;
    }
    function addNewData(){
        const newContent = document.createElement('ul');
        newContent.classList.add('chart-row-bars')
        newContent.appendChild(addNewLiTag('title', true))
        newContent.appendChild(addNewLiTag('author', true))
        newContent.appendChild(addNewLiTag(userName))
        newContent.appendChild(addNewLiTag('-'))
        newContent.appendChild(addNewLiTag('Add Book', false, true))
        return newContent;
    }
    function addNewLiTag(placeholder, input, button){
        const li_title = document.createElement('li');
        li_title.classList.add('chart-li-one')
        if(button){
            const buttonAdd = document.createElement('button');
            buttonAdd.textContent = placeholder;
            buttonAdd.addEventListener('click', handleAddBook)
            li_title.appendChild(buttonAdd);
        }else if(!input){
            li_title.textContent = placeholder
        }else{
            const inputTitle = inputTag(placeholder)
            li_title.appendChild(inputTitle);
        }
        return li_title;
    }
    function inputTag(placeholder){
        const inputElement = document.createElement('input')
        inputElement.placeholder = placeholder
        return inputElement
    }
    function handleAddBook(e){
        e.target.setAttribute('disabled', true)
        newInput();
    }
    return{
      init:handleLoad,
    }
  }();


window.addEventListener('load', myNameSpace.init)