const counts = document.querySelectorAll('.count')
const speed = 97
counts.forEach((counter)=>{
    function upData(){
        const target=Number(counter.getAttribute('data-target'))
        const count=Number(counter.innerText)
        const inc=target/speed
        if(count<target){
            counter.innerText=Math.floor(inc+count)
            setTimeout(upData,1)
        }else{
            counter.innerText=target
        }
    }
    upData()
})
const toggleButton = document.getElementsByClassName('toggle-button')
const toggleButtonIcon = document.getElementsByClassName('menu')
const dropDownMenu = document.getElementsByClassName('dropdown-menu')

toggleButton.addEventListener('click',function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleButtonIcon.classList=isOpen?'fa-solid fa-xmark':'fa-solid fa-bars';
})
