var m, f, v;

f = document.getElementById("files");
v = document.getElementById("img1");

f.addEventListener("change", function(e){
	m = new FileReader();
	m.onload = function(e){
		v.src = e.target.result;
	};
	m.readAsDataURL(this.files[0]);
});


function interestButtomClick() {
    var addInterestDiv = document.getElementById('add-interest');

    var interestInput = document.createElement('input');
    interestInput.classList.add('interestInput')
    interestInput.type = 'text';
    interestInput.placeholder = "Your Interest"
    interestInput.style = 'background-color: white; border-radius: 40px;';

    addInterestDiv.appendChild(interestInput);
}


function toolButtomClick(id) {
    var addToolDiv = document.getElementById(id).parentElement;

    var toolInput = document.createElement('select');
    // toolInput.classList.add('toolInput')

    const listOptions = ["JS", "HTML", "CSS", "C/C++", "Py", "Java", "Meet", "Notion", "Figma", "WebFlow"];

    for (let i = 0; i < listOptions.length; i++) {
        var toolOption = document.createElement('option');
        toolOption.text = listOptions[i];
        toolInput.add(toolOption);
    }

    addToolDiv.appendChild(toolInput);
}

document.getElementById('download-pdf').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
  
    html2canvas(document.getElementById('resume'), { scale: 2 }).then(
      (canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf');
      }
    );
});