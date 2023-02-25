// console.log('ami ki here gelam ')\
document.getElementById('search-btn').addEventListener('click', function () {
    const inputFiled = document.getElementById('input-filed');
    const inputValue = inputFiled.value;
    loadData(inputValue)
});

const loadData = async (inputValue) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
}