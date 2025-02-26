function orderFood() {
    setTimeout(() => {
        console.log("Тапсырыс қабылданды!!!");
    }, 1000);
}

function deiverFood() {
    setTimeout(() => {
        console.log("Тамақ жеткізу!!!");
    }, 2000);
}

function prepareFood() {
    setTimeout(() => {
        console.log("Ас дайындау!!!");
    }, 3000);
}

async function menu() {
    try {
        const a = await orderFood()
        const b = await deiverFood()
        const c = await prepareFood()
    } catch (error) {
        console.error(error + "404")
    }
}

menu()