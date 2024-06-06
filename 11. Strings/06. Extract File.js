function f(path) {
    let parts = path.split("\\");
    let filename = parts[parts.length-1];
    console.log(`File name: ${filename.substring(0, filename.lastIndexOf("."))}`);
    console.log(`File extension: ${filename.substring(filename.lastIndexOf(".")+1)}`);

}

f('C:\\desktop\\academy\\template.pptx')
f('C:\\Projects\\website.folder\\file.name.js')
