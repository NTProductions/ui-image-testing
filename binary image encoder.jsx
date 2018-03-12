var path = '/c/test/';
var f = File(path+"thumb.png");
f.encoding = 'BINARY'
f.open('e');

var binary;
binary = f.read().toSource();

var myFile = new File("/c/test/binary.txt");
        myFile.open("w");
        myFile.encoding = "UTF-8";
        myFile.write(binary);
        myFile.close();

$.writeln(binary);

f.close();