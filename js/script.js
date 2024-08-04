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

document.getElementById('download-pdf')
    .addEventListener('click', () => {
        const element = document.getElementById('main-container');
        const options = {
            // filename: 'GFG.pdf',
            // margin: 0,
            // image: { type: 'jpeg', quality: 0.98 },
            // html2canvas: { scale: 2 },
            // jsPDF: {
            //     unit: 'in',
            //     format: 'letter',
            //     orientation: 'portrait'
            // }
        };

        html2pdf().set(options).from(element).save();
    });