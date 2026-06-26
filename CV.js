
document.getElementById("cv-button").addEventListener('click', function() {
    if(confirm("You Want To Download CV?")) {
        let link = document.createElement('a');
        link.href = "BilalGhaniCV.pdf";
        link.download = "Bilal CV.pdf";
        link.click();
       
    } else {
        alert("Download Cancel");
    }
});
       document.querySelector(".contact-button").addEventListener('click',function(){
         let link=document.createElement('a');
         link.href="https://www.linkedin.com/in/bilal-ghani-250192411";
         link.click();
         window.open("https://www.linkedin.com/in/bilal-ghani-250192411","_blank");
       });
       
       document.getElementById("linkedinLogo").addEventListener('click',function(){
         let link=document.createElement('a');
         link.href="https://www.linkedin.com/in/bilal-ghani-250192411";
         link.click();
         window.open("https://www.linkedin.com/in/bilal-ghani-250192411",EventTarget="_blank")
       });
      document.getElementById("ViewCv").addEventListener('click',function(){
       let link = document.getElementById('ViewCv');
       link.href="BilalGhaniCV.pdf";
       link.click();
       window.open("BilalGhaniCV.pdf","_blank");
      });
