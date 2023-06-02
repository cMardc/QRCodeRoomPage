

function checkBox() //Function To Check If Checkbox Pressed
{
    var checkBox = document.getElementById("passwd");
    //CheckBox Element
    var text = document.getElementById("int3");
    //Password Text Element
    if (checkBox.checked == true) //If Show
    {
        text.style.display = "inline"; //Just Make Them On
        //Same Line
    }
    else
    {
        text.style.display = "none"; //Don't Show Anything
    }
}


function copyCode(id) //Function To Copy A Text
{ 
    // get the container
    const element = document.querySelector(id);
    // Create a fake `textarea` and set the contents to the text
    // you want to copy
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);
  
    // Copy the text in the fake `textarea` and remove the `textarea`
    storage.select();
    storage.setSelectionRange(0, 999999);
    document.execCommand('copy');
    element.removeChild(storage);
}

