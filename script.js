const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// function search(str) {
// 	let results = [];

// 	// TODO

// 	return results;
// }

function searchHandler() { // completed?
	let results = [...fruits].filter((fruit) => fruit.toLowerCase().includes(input.value.toLowerCase()) && input.value !== ''); // results
	showSuggestions(results);
}

// function showSuggestions(results, inputVal) {
// 	// TODO
// }
function showSuggestions(results){
	suggestions.innerHTML = ''; // should clear all li's
	if (results.length !== 0){
		suggestions.classList.toggle('has-suggestions');
	}

    /* snippet creates and assembles the li right here with bolded text taken from user input*/
	results.forEach((fruit, index) =>{
		const f = document.createElement('li'); // fruit li
		f.classList.toggle('fruitSuggestion');
        const boldElement = document.createElement('b'); // input.value selection of text
        let boldStart = fruit.toLowerCase().indexOf(input.value.toLowerCase()); // 'Apple'.toLowerCase().indexOf('ap') should be 0 and bolded text should start there
        let i;
        let endString = '';
        for (i = 0; i < fruit.length - (fruit.length-boldStart); i++){ // beginning of fruit li (NOT BOLD TEXT)
            f.innerText += fruit[i];
        }
        for (let j = 0; j < input.value.length; j++){ // middle of fruit li (BOLD TEXT)
            boldElement.innerText += fruit[i];
            i++;
        }
        for (i; i < fruit.length; i++){ // end of fruit li (NOT BOLD TEXT)
            endString += fruit[i];
        }
        f.append(boldElement);
        boldElement.after(endString);
		suggestions.append(f);
	});
}

function useSuggestion(e) { // Completed?
	input.value = e.target.innerText;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);