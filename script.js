const btn = document.getElementById('btn')
const body = document.body

//checking what theme was previously stored in the browser
currentTheme = localStorage.getItem('default theme')
if (currentTheme){
    body.classList.add(currentTheme)
}else{
    body.classList.add('light-mode') 
}

//Animate the button
   btn.classList.add('animate');
   setTimeout(() => toggleButton.classList.remove('animate'), 500);

  
btn.addEventListener('click', function(){
    if (body.classList.contains('light-mode')){
        body.classList.replace('light-mode', 'dark-mode')
        localStorage.setItem('default theme','dark-mode')
    }else{
        body.classList.replace('dark-mode', 'light-mode')
        localStorage.setItem('default theme','light-mode')
    }
})
