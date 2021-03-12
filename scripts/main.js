console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");
navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})
navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})
navElement.addEventListener("click", (event) => {
	if (event.target.id === "sortByYear") {
		console.log(`User wants to see legos in order by year`)
		// filterLegosByYear()
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

//? dropdown filter for material
const materialElement = document.querySelector("#materialSelector")
materialElement.addEventListener("change", (event) => {
	if (event.target.id === "materialSelector") {
		const materialValue = (event.target.value);
		filterMaterials(materialValue);
	}
})

//? LegoID search box with enter key
const legoIDElement = document.querySelector("#legoIdSearch")
legoIDElement.addEventListener("keyup", event => {//? keypress event
	if (event.key === "Enter") {
		const legoIDValue = (event.target.value);
		filterLegoIDValue(legoIDValue)
	}
})
legoIDElement.addEventListener("click", event => {
	if (event.target.id === "legoIDSearchButton") { //? button ui click event
		const legoIDValue = (document.querySelector("#legoIdSearchInput").value);
		filterLegoIDValue(legoIDValue);
	} else {
		console.log("invalid ID")
		document.getElementById("all-legos").innerHTML = "<h2>No Legos found with that ID!</h2>"
	}
})
legoIDElement.addEventListener("click", event => {
	if (event.target.id === "legoIDResetButton") { //? button ui click RESET event
		makeLegoList(useLegos())
	}
})

//?Lego Builder Favorite Color Filter
const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}
//? Lego Brick Material Filter
const filterMaterials = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

//? Lego ID Filter
const filterLegoIDValue = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoId === (whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}
// const filterLegosByYear = (whatFilter) => {
// 	const years = Date.parse()
// }

const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();