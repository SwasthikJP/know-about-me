function photo() {

 var source= document.getElementById("profile_image").src;
 source=source.slice(-23);

  if(source=="images/profilepic1.jpeg"){
    document.getElementById("profile_image").src="./images/profilepic2.jpeg";
  } else{
    document.getElementById("profile_image").src="./images/profilepic1.jpeg";
  }
}
