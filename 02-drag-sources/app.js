const item = document.querySelector('.item')
const placeholdeers = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


for (const placeholdeer of placeholdeers){
    placeholdeer.addEventListener('dragover', dragover)
    placeholdeer.addEventListener('dragenter', dragenter)
    placeholdeer.addEventListener('dragleave', dragleave)
    placeholdeer.addEventListener('drop', dragdrop)
}
function dragstart(event){
event.target.classList.add('hold')
setTimeout( () => event.target.classList.add('hide'), 0)
}

function dragend(event){
    event.target.className = 'item'
}

function dragover(event){
 event.preventDefault()
}

function dragenter(event){
    event.target.classList.add('hovered')
}

function dragleave(event){
    event.target.classList.remove('hovered')
}

function dragdrop(event){
    event.target.classList.remove('hovered')
    event.target.append(item)
}