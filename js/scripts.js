var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

const borderColors = ["eucalyptus", "tepapa"];
const fillColors = [{
    class: "romance",
    maxCol: 4,
    maxRow: 4
  },
  {
    class: "persian-blue",
    maxCol: 2,
    maxRow: 2
  },
  {
    class: "galliano",
    maxCol: 2,
    maxRow: 1
  },
  {
    class: "irish-coffee",
    maxCol: 1,
    maxRow: 1
  }
];

document.addEventListener("DOMContentLoaded", function() {
  initScene();
});

function initScene() {
  var table = document.getElementById("table");
  table.innerHtml = "";
  table.hidden = true;

  let borderUnit = 50;
  let borderWidth = Math.floor(window.innerWidth / borderUnit);
  let borderHeight = Math.floor(window.innerHeight / borderUnit);

  buildTable(borderWidth, borderHeight);
}

function buildTable(width, height) {
  //create rows based on height
  for (let i = 0; i < height; i++) {
    let row = table.insertRow();

    buildRow(width, height, row);
  }
  table.hidden = false;
}

function buildRow(width, height, row) {
  if (row.rowIndex === 0 || row.rowIndex === height - 1) {
    buildEdgeRow(width, row);
  } else {
    buildCenterRow(width, height, row);
  }
}

function buildEdgeRow(width, row) {
  for (let i = 0; i < width - 2; i++) {
    let cell = row.insertCell();

    if (cell.cellIndex % 2 === 0) {
      cell.classList.add("eucalyptus");
    } else {
      cell.classList.add("tepapa");
    }
  }

  cell = row.insertCell(-1);
  cell.classList.add("mexican-red");
  cell = row.insertCell(0);
  cell.classList.add("mexican-red");

  return row;
}

function buildCenterRow(width, height, row) {
  let cellCount = 0;
  /*
    	for (let i = 0; i < width - 2; i++) {
    		if (cellCount < width - 2) {
    			let cell = row.insertCell();
    			let fill = fillColors[Math.floor(Math.random() * fillColors.length)];
    			cell.classList.add(fill.class);

    			let colSpan = Math.floor(Math.random() * (fill.maxCol - 1 + 1)) + 1;
    			let rowSpan = Math.floor(Math.random() * (fill.maxRow - 1 + 1)) + 1;

    			if (cellCount + colSpan > width - 2) {
    				colSpan = width - 2 - cellCount;
    			}

    			// cell.rowSpan = rowSpan;
    			cell.colSpan = colSpan;
    			cellCount += colSpan;
    		}
    	}

    	if (row.rowIndex % 2 === 0) {
    		cell = row.insertCell(-1);
    		cell.classList.add("tepapa");
    		cell = row.insertCell(0);
    		cell.classList.add("tepapa");
    	} else {
    		cell = row.insertCell(-1);
    		cell.classList.add("eucalyptus");
    		cell = row.insertCell(0);
    		cell.classList.add("eucalyptus");
    	}

    	return row;
    }
