//create a vendor 
class Vendor{
    constructor(id,name,type,atype,validfrom,validto,addr){
        this.id=id;
        this.name=name;
        this.type=type;
        this.atype=atype;
        this.validfrom=validfrom;
        this.validto=validto;
        this.addr=addr;
    }
}

class Asset{
    constructor(){
        this.vendors=[];
    }
}

//create an object of Asset
var asset = new Asset();

//define functions for CRUD

//Add vendor
function addVendor(){
    //declare and get values from html file
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let atype = document.getElementById("atype").value;
    let validfrom = document.getElementById("validfrom").value;
    let validto = document.getElementById("validto").value;
    let addr = document.getElementById("addr").value;


    //success/failure flag
    let flag = true;

    //process
    try {
        
        //checking is Empty
        if(isEmpty(id) || isEmpty(name) || 
            isEmpty(type) || isEmpty(atype) ||   
                isEmpty(validfrom) || isEmpty(validto) || isEmpty(addr)){
            throw "Empty field : Please fill all the fields";
        }
    } catch (err) {
        flag=false;
        alert("Error : "+ err);
    }

    //success - flag = true
    if(flag){
        asset.vendors.push(new Vendor(id,name,type,
        atype,validfrom,validto,addr));
    
        console.log(asset.vendors);
        alert("Vendors has been added successfully!");
    }else{
        clearVendor();
    }
}

//Helper function for isEmpty
function isEmpty(inputStr){
    //check condition for empty string
    if(inputStr.length==0){
        return true;
    }
    return false;
}

//clear controls
function clearVendor(){
document.getElementById("id").value="";
document.getElementById("name").value="";
document.getElementById("type").value="";
document.getElementById("atype").value="";
document.getElementById("validfrom").value="";
document.getElementById("validto").value="";
document.getElementById("addr").value="";
}