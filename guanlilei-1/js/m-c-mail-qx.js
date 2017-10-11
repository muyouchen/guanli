function getByClass(cla, obj){  
        var obj = obj || document, arr = [];  
       
        if(document.getElementsByClassName){  
                        return document.getElementsByClassName(cla);  
        } else {  
            var all = obj.getElementsByTagName('*');  
                      
            for(var i = 0, len = all.length; i < len; i++){  
                            if(all[i].className.match(cla) != null) arr.push(all[i]);  
            }  
                      
            return arr;  
        }  
}  
function checkAll(cla,obj){  
    var checkboxs = getByClass(cla);  
    var len = checkboxs.length;  
    for(i=0;i<len;i++){  
        checkboxs[i].checked = obj.checked;  
    }  
}         
