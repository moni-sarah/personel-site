
        var tablinks= document.getElementsByClassName("tab-links");
        var tabcontents= document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(var tablink of tablinks){
                tablink.classList.remove("active-link");
               
            }
            for(var tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");

        }
   
        var side_menu = document.getElementById("sidemenu"); 

        function openmenu(){
            side_menu.style.right= "0";
        }


        function closemenu(){
            side_menu.style.right = "-200px";
        }
 
        const scriptURL = '<https://script.google.com/macros/s/AKfycbz4PWdjkJR4cWd-GiD1pfsmuFlKslQumIHYGJY377dDlNxuA9azKOTFKw3GL2fKgvkc/exec>'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })
   