Array.from({length:99}).forEach(_=>{
    const sq=document.createElement('div')
    sq.classList.add('square')
    const color=Array.from({length:3}).map(_=>Math.trunc(Math.random()*256))
      
    sq.style.backgroundColor=`rgb(${color.join(',')})`

    document.querySelector('#colors').appendChild(sq)
})