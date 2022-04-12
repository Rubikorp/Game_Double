(() => {
    const searchIdCouple = document.getElementById('couple-grid');
    let createBlockRow = document.createElement('div');

    searchIdCouple.classList.add('container', 'mt-5');
    createBlockRow.classList.add('row', 'g-3');
    
    //создаем и возвращаем  массив  
    function createArray() {
        let arr1 = [];
        let arr2 = [];
        let i = 0;
        let number;
        while (arr1.length < 8) {
            i++;
            number = Math.round(Math.random()*7) + 1;
            if (arr1.indexOf(number, 0) === -1) {
                arr1.push(number);
            };
        };
    
        while (arr2.length < 8) {
            i++;
            number = Math.round(Math.random()*7) + 1;
            if (arr2.indexOf(number, 0) === -1) {
                arr2.push(number);
            };
        };
        arr1 = arr1.concat(arr2);
        return arr1;
    };

    // создаем и возвращаем кнопку рестарт
    function restart() {
        let createBlockRestart = document.createElement('div');

        createBlockRestart.classList.add('col-md-6', 'offset-md-3', 'mt-5', 'bg-primary', 'text-center');
        
        createBlockRestart.style.fontSize = '30px';
        createBlockRestart.style.color = 'white';
        createBlockRestart.style.cursor = 'pointer';
        createBlockRestart.style.borderRadius = '5px';

        createBlockRestart.textContent = 'Начать заново';

        createBlockRow.append(createBlockRestart);

        createBlockRestart.addEventListener('click', () => {
            location.reload ();
        });
    }

    function restartBag() {
        let createBlockBag = document.createElement('div');

        createBlockBag.classList.add('col-md-6', 'offset-md-3', 'mt-5', 'bg-primary', 'text-center', 'p-1');
        
        createBlockBag.style.fontSize = '30px';
        createBlockBag.style.color = 'white';
        createBlockBag.style.cursor = 'pointer';
        createBlockBag.style.borderRadius = '5px';

        createBlockBag.textContent = 'Перезапустить';

        createBlockRow.append(createBlockBag);

        createBlockBag.addEventListener('click', () => {
            location.reload ();
        });
    };

    // создаем и собираем приложение
    function createAppPara(array) {
        let arrSuccess = [];

        for (let index in array) {
            let block = document.createElement('div');
            let blockParagraph = document.createElement('div');

            block.classList.add('col-3');
            blockParagraph.classList.add('border', 'bg-light', 'text-center', 'p-4');
            blockParagraph.style.cursor = 'pointer';
            blockParagraph.style.fontSize = '40px';
            block.style.pointerEvents = 'none';
            setTimeout(() => { 
                blockParagraph.style.color = 'transparent';
                block.style.pointerEvents = 'auto'
            }, 4000)



            blockParagraph.textContent = array[index];

            searchIdCouple.append(createBlockRow);
            createBlockRow.append(block);
            block.append(blockParagraph);
            let itemArray = [];

            blockParagraph.addEventListener('click', () => {
                blockParagraph.classList.toggle('bg-success');
                blockParagraph.classList.toggle('bg-light');

                blockParagraph.style.pointerEvents = 'none';
                blockParagraph.style.color = 'white';

                arrSuccess.push(array[index]);
                let searchItemIdSuccess = document.getElementsByClassName('bg-success');
                for (let itemSuccess of searchItemIdSuccess) {
                    itemArray.push(itemSuccess);
                };
                if (itemArray.length === 16) {
                    restart();
                } else if (arrSuccess.length === 2) {
                        setTimeout(() => {
                            if (arrSuccess[0] !== arrSuccess[1]) {
                                for (let obj of itemArray) {
                                    obj.classList.remove('bg-success');
                                    obj.classList.add('bg-light');

                                    obj.style.pointerEvents = 'auto';
                                    obj.style.color = 'transparent';
                
                                    blockParagraph.style.pointerEvents = 'auto';
                                    blockParagraph.style.color = 'transparent';
                                };
                                
                                arrSuccess = [];
                                itemArray = [];
                            }                 
                            else {
                                for (let obj of itemArray) {
                                    obj.style.pointerEvents = 'none';
                                }
                                arrSuccess = [];
                            }
                        }, 200)}; 
            });
        };
        restartBag()
    };

    createAppPara(createArray());
})();