function show_map(){
			var c1_elem = document.getElementById("c1");
			var c2_elem = document.getElementById("c2");
			var c3_elem = document.getElementById("c3");
			c1_elem.style.display='block';
			c2_elem.style.display='none';
			c3_elem.style.display='none';
			}
function show_text(){
			var c1_elem = document.getElementById("c1");
			var c2_elem = document.getElementById("c2");
			var c3_elem = document.getElementById("c3");
			c1_elem.style.display='none';
			c2_elem.style.display='block';
			c3_elem.style.display='none';
			}
function show_victorina(){
			var c1_elem = document.getElementById("c1");
			var c2_elem = document.getElementById("c2");
			var c3_elem = document.getElementById("c3");
			c1_elem.style.display='none';
			c2_elem.style.display='none';
			c3_elem.style.display='block';
			}


	 var res="11323"; 
	function check_me()
	{
	    var count=0;
	    with(document.test) {
	if (!Q1[0].checked&&!Q1[1].checked&&!Q1[2].checked)  
	{count+=1};  
	if (!Q2[0].checked&&!Q2[1].checked&&!Q2[2].checked)  
	{count+=1};  
	if (!Q3[0].checked&&!Q3[1].checked&&!Q3[2].checked)  
	{count+=1};  
	if (!Q4[0].checked&&!Q4[1].checked&&!Q4[2].checked)  
	{count+=1};  
	if (!Q5[0].checked&&!Q5[1].checked&&!Q5[2].checked)  
	{count+=1};  
	if (count>0) alert("您没做所有问题. 请做得努力一点!")    
	        else answer();
	    }
	} 
	 
	function control(k, f1,f2,f3,f4,f5) {
	if (k==1&&f1.checked) return true;
	if (k==2&&f2.checked) return true;
	if (k==3&&f3.checked) return true;
	if (k==4&&f4.checked) return true;
	if (k==5&&f5.checked) return true;
	return false;
	}

	function answer() {
	answ="";
	     with(document)    {
	    answ+=control(res.charAt(0) ,test.Q1[0],test.Q1[1],test.Q1[2])?"1":"0";
	answ+=control(res.charAt(1) ,test.Q2[0],test.Q2[1],test.Q2[2])?"1":"0";
	answ+=control(res.charAt(2) ,test.Q3[0],test.Q3[1],test.Q3[2])?"1":"0";
	answ+=control(res.charAt(3) ,test.Q4[0],test.Q4[1],test.Q4[2])?"1":"0";
	answ+=control(res.charAt(4) ,test.Q5[0],test.Q5[1],test.Q5[2])?"1":"0";

	showResult();
	    }
	}
	 
	function showResult()   {
	    var nok=0;
	    var i,s;
	 
	for (i=0; i<answ.length;i++) {nok+=answ.charAt(i)=="1"?1:0;}
	if(nok==5) s="非常好";
	if(nok<5) s="不错";
	if(nok<3.75) s="不太好";
	if (nok<2.5) s="很不好";
	    document.test.s1.
	    value="这是您的对回答的数 -  "+nok+"。 您的成绩 "+s+". 请看旁边问题的数。 如果您的问题对，有 +， 如果不对， 有  -  。"
	 
	with(document.test)
	    {
	    if (answ.charAt(0)=="1") {T1.value=" + "} else {T1.value=" - "};
	   if (answ.charAt(1)=="1") {T2.value=" + "} else {T2.value=" - "};
	   if (answ.charAt(2)=="1") {T3.value=" + "} else {T3.value=" - "};
	   if (answ.charAt(3)=="1") {T4.value=" + "} else {T4.value=" - "};
	   if (answ.charAt(4)=="1") {T5.value=" + "} else {T5.value=" - "};
	     }
	}
	function showhide(obj){
	    if(obj == 'none') return 'inline';
	    else return 'none';
	}