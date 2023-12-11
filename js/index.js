function Register(){
    let UserName = document.getElementById('username').value;
    const user1 = /^[a-zA-Z]+$/;
    let UserStatus = false;


    let UserMail = document.getElementById('userEmail').value;
    const user2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let UserStatus1 = false;


    let UserMobile = document.getElementById('mobileNumber').value;
    const user3= /^[0-9]+$/;
    let UserStatus2 = false;

    // let Select = document.getElementById('SelectType').value;
    // let UserStatus3 = false;


    // let skill = document.getElementById('skill').value;
    // let UserStatus4 = false;


    // let resume = document.getElementById('Files').value;
    // let UserStatus5 = false;
    


    //username

    if(UserName == ""){
        document.getElementById('userNote').innerHTML="Name is required";
        UserStatus = false;
    }
    else{
        if(UserName.match(user1)){
            document.getElementById('userNote').innerHTML="";
            UserStatus = true;
        }
        else{
            document.getElementById('userNote').innerHTML="Enter only charcter"
            UserStatus = false;
        }
    }

    //userEmail

    if(UserMail == ""){
        document.getElementById('mailNote').innerHTML="Email is required";
        UserStatus1 = false;
    }else{
        if(UserMail.match(user2)){
            document.getElementById('mailNote').innerHTML="";
            UserStatus1 = true;
        }
        else{
            document.getElementById('mailNote').innerHTML="Enter a valid Email";
            UserStatus1 = false;

        }

    }

    //userMobile

    if(UserMobile == ""){
        document.getElementById('MobileNote').innerHTML="Mobile Number is Required";
        UserStatus2 = false;
    }
    else{
        if(UserMobile.match(user3)){
            if(UserMobile.length == 10){
                document.getElementById('MobileNote').innerHTML="";
                UserStatus2 = true;
            }
            else{
                document.getElementById('MobileNote').innerHTML="10 digits Only";
                UserStatus2 = false;
            }
        }
        else{
            document.getElementById('MobileNote').innerHTML="Only Digits"
            UserStatus2 = false;
        }
    }


    //Student page
    //select validation

    // if(Select == "-1"){
    //     document.getElementById('selectNote').innerHTML="Choose One";
    //     UserStatus3 = false;
    // }
    // else{
    //     document.getElementById('selectNote').innerHTML="";
    //     UserStatus3 = true;
    // }

    //Instructor page
    //Skill valid

    // if(skill == ""){
    //     document.getElementById('SkillNote').innerHTML="Skill is required";
    //     UserStatus4 = false;
    // }
    // else{
    //     if(skill.match(user1)){
    //         document.getElementById('SkillNote').innerHTML="";
    //         UserStatus4 = true;
    //     }
    //     else{
    //         document.getElementById('SkillNote').innerHTML="Only Charcter";
    //         UserStatus4 = false;
    //     }
    // }

    // //resume
    // if(resume == ""){
    //     document.getElementById('FileNote').innerHTML="Resume is Required";
    //     UserStatus5 = false;
    // }
    // else{
    //     document.getElementById('FileNote').innerHTML="";
    //     UserStatus5 = true;
    // }


    if(UserStatus === true && UserStatus1 === true && UserStatus2 === true  ){
        return true;
    }
    else{
        return false;
    }
}