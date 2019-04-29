
function updateFile() {
    const getFile = document.querySelector('#getfile');
    const fileList = getFile.files;
    const reader = new FileReader();
    
    reader.readAsDataURL(fileList[0]);
    reader.onload = function() {
        document.querySelector('#thumbnail').src = reader.result;
    }
}