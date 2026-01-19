let clic = () =>{
    let add = localStorage.setItem('study', 'javaScript')

}
let clic2 = () => {
    localStorage.setItem('word', 'Hello')    
    let h1 = document.getElementById('h1')
    h1.innerHTML = localStorage.getItem('word')
}
