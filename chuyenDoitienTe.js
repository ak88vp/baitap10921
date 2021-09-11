function nhanvao(){
    let nhapgiatri=document.getElementById('nhậpvào').value
    let SS1=document.getElementById('SS1').value
    let ss2=document.getElementById('ss2').value
    if ( SS1 == ss2) {
        alert(nhapgiatri)
    }
    if (SS1=='a'&& ss2=='b'){
        alert(nhapgiatri/23000)
    }
    if(SS1=='b'&& ss2=='a'){
        alert(nhapgiatri*23000)
    }
}