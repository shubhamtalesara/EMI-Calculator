var amtInput= document.getElementById('amount')
var interestInput= document.getElementById('ir')
var mtpInput= document.getElementById('mtp')
var submit= document.getElementById('submit')
var emi= document.getElementById('emi')


submit.addEventListener('click', ()=>{
    amt= parseFloat(amtInput.value)
    interest= parseFloat(interestInput.value)
    mtp= parseFloat(mtpInput.value)

    let int= interest/12/100

    emi.innerHTML= Math.round(amt*int*(Math.pow(1+int, mtp))/(Math.pow(1+int, mtp)-1))
    
})

