
 function click_a(divDisplay)
        {
            if(document.getElementById(divDisplay).style.display != "block")
            {
                document.getElementById(divDisplay).style.display = "block";
                document.getElementById("m-c-txtjyhk").style.display="none";
                document.getElementById("m-c-tx-qx").style.display="none";
                document.getElementById("m-c-txtjyhk2").style.display="none";
                document.getElementById("m-c-tx-qx2").style.display="none";
            }
            else
            {
                document.getElementById(divDisplay).style.display = "none";
            }
        }