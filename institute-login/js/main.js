const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

function newstudent(){
	window.location.href = "newstudent.html";
}

function student(){
	window.location.href = "student.html";
}

function Admin(){
	window.location.href = "Admin.html";
}

function Student(){
	window.location.href = "student.html";
}

function Faculty(){
	window.location.href = "Faculty.html";
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
