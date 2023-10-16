function check(){
    if(document.getElementById('name').value==''){
        document.getElementById('error-name').innerHTML='Please Enter Your Name';
        document.getElementById('error-name').style.color='red';
        return false;
    }
    else if(document.getElementById('email').value==''){
        document.getElementById('error-email').innerHTML='Please Enter Your Email';
        document.getElementById('error-email').style.color='red';
        return false;
    }
    else if(document.getElementById('password').value==''){
        document.getElementById('error-password').innerHTML='Please Enter Your Password';
        document.getElementById('error-password').style.color='red';
        return false;
    }
    else if(document.getElementById('address').value==''){
    document.getElementById('error-address').innerHTML='Please Enter Your Address';
    document.getElementById('error-address').style.color='red'
    return false
    }
    else if(document.getElementById('sing').checked=='' && document.getElementById('dance').checked=='' && document.getElementById('music').checked==''){
        document.getElementById('error-hobbies').innerHTML='Please Select Any One Hobby'
        document.getElementById('error-hobbies').style.color='red';
        return false;
    }
    else if(document.getElementById('gender').checked==''){
        document.getElementById('error-gender').innerHTML='Please Specify Gender'
        document.getElementById('error-gender').style.color='red';
        return false;
    }
    else if(document.getElementById('file').value==''){
        document.getElementById('error-file').innerHTML='Please Upload Your Photo';
        document.getElementById('error-file').style.color='red';
        return false;
        }
    else{
        
        return true;
    }
}