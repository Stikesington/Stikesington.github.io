function validate(e){
    hideErrors();

    if(formHasErrors())
    {
        e.preventDefault();
        return false;
    }
    return true;
}

function resetForm(e)
{
    if(confirm('Reset?'))
    {
        hideErrors();

        document.getElementById("teller").focus();

        return true;
    }
    e.preventDefault();

    return false;
}

function formHasErrors()
{
    var errorFlag=false;

    if(document.getElementById("teller").value=="")
    {
        document.getElementById("name_error").style.display="block";
        errorFlag=true;
        console.log("hello")
    }

    if(document.getElementById("storyName").value=="")
    {
        document.getElementById("storyName_error").style.display="block";
        if(!errorFlag)
			{
				textField.focus();
				textField.select();
			}
        errorFlag=true;
    
    }
    if(document.getElementById("email").value=="")
    {
        document.getElementById("enteremail_error").style.display="block";
        if(!errorFlag)
			{
				textField.focus();
				textField.select();
			}
        errorFlag=true;
    }
    var regexEmail= new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    var emailValue= document.getElementById("email").value;

    if(!regexEmail.test(emailValue)){
        document.getElementById("email_error").style.display="block";
        if(!errorFlag)
			{
				textField.focus();
				textField.select();
			}
        errorFlag=true;
    }

    return errorFlag;
}
function hideErrors()
{
    var errorFields=["name", "storyName", "email", "enteremail"];

    for(var i=0; i<errorFields.length; i++)
    {
        document.getElementById(errorFields[i]+"_error").style.display="none";
    }
}

function load()
{
    hideErrors();

    let submit= document.getElementById("submit");
    submit.addEventListener("click",validate, false);

    let clear= document.getElementById("clear");
    clear.addEventListener("click",resetForm);
}

document.addEventListener("DOMContentLoaded", load, false);