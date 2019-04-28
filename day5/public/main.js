
function fileChanged() {
    var getFile = document.querySelector('#getfile');
    var fileList = getFile.files;
    var reader = new FileReader();
    
    reader.readAsDataURL(fileList[0]);
    reader.onload = function() {
        document.querySelector('#thumbnail').src = reader.result;
    }
}