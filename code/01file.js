//���ز����ļ���Īģ���
//fs��nodeƽ̨�ṩ��һ������ģ�飬ר�����������ļ�
var fs = require('fs');

//д���ļ�
//fs.writeFile(�ļ�·����Ҫд������ݣ��ص�����)
//����ļ������ڣ���ֱ���½�
//����ļ��Ѵ��ڣ�ֱ�Ӹ���
//fs.writeFile('./date/a1.text','kdfjkadjgkdy����',function(err){
	//�ص������е�err��ʾһ���������
	//���ļ�д������ǣ��ص������Զ�������
	//����д���err����һ���������
	//���û�У�err����null
//	if(err){
//		return console.log("д���ļ�ʧ��")
//	}
//		console.log("д���ļ��ɹ�")
//})

fs.readFile('./date/a1.text',function(err,date){
	if(err){
	throw err;
	}
	console.log(date.toString())
})
