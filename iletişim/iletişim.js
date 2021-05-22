const control=form =>{

    let invalids=form.querySelectorAll(':invalid').length,
    button=form.querySelector('button[type="submit"]');
    
    console.log(invalids);

    if(invalids==0){

        button.removeAttribute('disabled');

    }else{

        button.setAtribute('disabled','disabled');

    }

    let forms=dokument.querySelectorAll('form.form-validation');
    forms.forEach(form => {
        control(form);
        form.addEventListener('keyup', ()=> control(form))
        form.addEventListener('change',()=> control(form))
        
    });
}
control('form1');