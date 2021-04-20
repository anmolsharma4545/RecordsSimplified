var ida = document.querySelector('.id');
	var names = document.querySelector('.name');
	var salary = document.querySelector('.salary');
	var position = document.querySelector('.position');
	var address = document.querySelector('.address');
	var doj = document.querySelector('.doj');
	var posinp = document.querySelector('.pos-input');
	const idarr =['101','102','103','104','105','106','107','108','109','110'];
	const namearr =['Ashish Kumar','Raj Singh','Tarun Sinha','Rakshit Sharma','Ved Verma',
		'Shree','Aman K.','Piyush R.','Neeraj S.','Anmol Sharma'];
	const salarr =['40000','45000','20000','39500','52000','50000','65000','45000','37000','70000'];
	const posarr =['CTO','Packaging Department','Cleaning Staff','Sales Executive','Product Manager','Field Assistant',
		'Staff Recruitment','Front Desk','Marketing Head','Developer'];
	const addarr =['New Delhi','Chandigarh','Jaipur','Amritsar','Rohtak','Mathura','Jamshedpur',
		'Madurai','Kanyakumari','Mandawa'];
	const dojarr =['04/02/2020','24/07/2018','16/04/2020','24/05/2016','18/06/2020','03/02/2019',
		'07/11/2020','17/01/2020','21/08/2018','02/02/2016',];
	
		function input(){
			var prmpt =prompt("Enter Employee ID" + "(101-110)");
			

			if(prmpt == 101){
				ida.innerHTML = idarr[0];
				names.innerHTML = namearr[0];
				salary.innerHTML = salarr[0];
				position.innerHTML = posarr[0];
				address.innerHTML = addarr[0];
				doj.innerHTML = dojarr[0];
				posinp.value = posarr[0];
			}
			else if(prmpt == 102){
				ida.innerHTML = idarr[1];
				names.innerHTML = namearr[1];
				salary.innerHTML = salarr[1];
				position.innerHTML = posarr[1];
				address.innerHTML = addarr[1];
				doj.innerHTML = dojarr[1];
				posinp.value = posarr[1];
			}
			else if(prmpt == 103){
				ida.innerHTML = idarr[2];
				names.innerHTML = namearr[2];
				salary.innerHTML = salarr[2];
				position.innerHTML = posarr[2];
				address.innerHTML = addarr[2];
				doj.innerHTML = dojarr[2];
				posinp.value = posarr[2];
			}
			else if(prmpt == 104){
				ida.innerHTML = idarr[3];
				names.innerHTML = namearr[3];
				salary.innerHTML = salarr[3];
				position.innerHTML = posarr[3];
				address.innerHTML = addarr[3];
				doj.innerHTML = dojarr[3];
				posinp.value = posarr[3];
			}
			else if(prmpt == 105){
				ida.innerHTML = idarr[4];
				names.innerHTML = namearr[4];
				salary.innerHTML = salarr[4];
				position.innerHTML = posarr[4];
				address.innerHTML = addarr[4];
				doj.innerHTML = dojarr[4];
				posinp.value = posarr[4];
			}
			else if(prmpt == 106){
				ida.innerHTML = idarr[5];
				names.innerHTML = namearr[5];
				salary.innerHTML = salarr[5];
				position.innerHTML = posarr[5];
				address.innerHTML = addarr[5];
				doj.innerHTML = dojarr[5];
				posinp.value = posarr[5];
			}
			else if(prmpt == 107){
				ida.innerHTML = idarr[6];
				names.innerHTML = namearr[6];
				salary.innerHTML = salarr[6];
				position.innerHTML = posarr[6];
				address.innerHTML = addarr[6];
				doj.innerHTML = dojarr[6];
				posinp.value = posarr[6];
			}
			else if(prmpt == 108){
				ida.innerHTML = idarr[7];
				names.innerHTML = namearr[7];
				salary.innerHTML = salarr[7];
				position.innerHTML = posarr[7];
				address.innerHTML = addarr[7];
				doj.innerHTML = dojarr[7];
				posinp.value = posarr[7];
			}
			else if(prmpt == 109){
				ida.innerHTML = idarr[8];
				names.innerHTML = namearr[8];
				salary.innerHTML = salarr[8];
				position.innerHTML = posarr[8];
				address.innerHTML = addarr[8];
				doj.innerHTML = dojarr[8];
				posinp.value = posarr[8];
			}
			else if(prmpt == 110){
				ida.innerHTML = idarr[9];
				names.innerHTML = namearr[9];
				salary.innerHTML = salarr[9];
				position.innerHTML = posarr[9];
				address.innerHTML = addarr[9];
				doj.innerHTML = dojarr[9];
				posinp.value = posarr[9];
			}

			else{
				alert('Employee Details Didn`t match');
			}
			
		
		}
		
		
		function formSubmit() {
			var tax = document.querySelector('.tax').value;
			console.log(tax);
			salarr.push("30000",tax); 
			alert('Yay! The Salary has been Recorded Successfully.....');
		}