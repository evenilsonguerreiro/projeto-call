function somar(){
     let tx1 = document.querySelector('#txt1')
     let tx2 = document.querySelector('#txt2')
     let res = document.querySelector('#res')


     if(tx1.value === '' || tx2.value === ''){
        alert('digite um número')
        return
     }

     let n1 = Number(tx1.value)
     let n2 = Number(tx2.value)
     let s = n1+n2;
     res.innerHTML = `Total : ${s} `


     tx1.value = ''
     tx2.value = ''
}