async function dining() {
    const request = await fetch('/api/dining');
    const diningData = await request.json();
    console.log(diningData);
    console.table(diningData);
    const elements = diningData.data;
    elements.forEach((element) => {
        const targetList = document.querySelector('.target-list');
        const appendItem = document.createElement('tr');
            appendItem.innerHTML = `
            <td>${element.hall_id}</td>
            <td>${element.hall_name}</td>
            <td>${element.hall_address}</td>`;
        
        targetList.append(appendItem);  
    });
};



window.onload = dining;