

const catagoryCombinationContainer = document.getElementById('catagoryCombinationContainer')
const productCombinationContainer = document.getElementById('productCombinationContainer')
const todoPopupForm = document.getElementById('todoPopupForm')
let catagoryCombinationItemtoUpdate;
let productCombinationItemtoUpdate;
let formTask = (event)=>{

}
let deletePupupFunction;
let catagoryCombinations =[
    {
        category_name:'FAST FOOD',
        image:''
    },

    
    
]
const returncatagoryCombinationCard =(catagoryCombination,index)=>{
    return ` <div class="combinationCard">
    <div class="left">
        <div class="imgContainer">
            <img src="https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg"
                alt="">
        </div>
        <div class="name">
        ${catagoryCombination.category_name}
        </div>
    </div>
    <div class="right">
        <!-- <i class="fa-sharp fa-regular fa-money-check-pen"></i> -->
        <i onclick='updatecatagoryCombination(${index})' class="fa-solid fa-pen-to-square"></i>
        <i onclick='deletecatagoryCombination(${index})' data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap" class="fa-solid fa-trash-can"></i>

    </div>

</div>`
    
}

const fillcatagoryCombinationContainer = (items = catagoryCombinations)=>{
    let htmls = '';
    items.forEach((elm,index)=>{
        htmls += returncatagoryCombinationCard(elm,index)
    })
    catagoryCombinationContainer.innerHTML=htmls;
    
}
const todoPopupFormSubmitHandler =(event)=>{
    event.preventDefault()
    formTask(event)
}
const returncatagoryCombinationFormForCteate = ()=>{
    return ` <form action="" onsubmit="todoPopupFormSubmitHandler(event)">
    <div class="heading">
        store operator

    </div>
    <div class="mainContainer">
        <div class="left">
            
                <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="">

            
            
        </div>
        <div class="right">
            <div class="fields">
                <label for="category_name"> Name </label>
                <input type="text" name="category_name" id="">
            </div>
            
            <input type="submit" class="submit" value="Keep">
            <i onclick="todoPopupForm.classList.remove('active')" class="fa-solid fa-xmark"></i>
        </div>
    </div>
</form>`
}
const returncatagoryCombinationFormForUpdate = ()=>{
    return ` <form action="" onsubmit="todoPopupFormSubmitHandler(event)">
    <div class="heading">
        store operator

    </div>
    <div class="mainContainer">
        <div class="left">
            
                <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="">

            
            
        </div>
        <div class="right">
            <div class="fields">
                <label for="category_name"> Name </label>
                <input value=${catagoryCombinationItemtoUpdate.category_name} type="text" name="category_name" id="">
            </div>
            
            <input type="submit" class="submit" value="Keep">
            <i onclick="todoPopupForm.classList.remove('active')" class="fa-solid fa-xmark"></i>
        </div>
    </div>
</form>`
}
const addcatagoryCombination = ()=>{
    todoPopupForm.innerHTML = returncatagoryCombinationFormForCteate()
    todoPopupForm.classList.add('active')
    formTask =(event)=>{
        const newOperator ={
            category_name:event.target.category_name.value,
                
        }
        catagoryCombinations=[...catagoryCombinations,newOperator]
        fillcatagoryCombinationContainer();
        todoPopupForm.classList.remove('active')
    }
}
const updatecatagoryCombination=(index) =>{
    catagoryCombinationItemtoUpdate=catagoryCombinations.filter((item)=>catagoryCombinations.indexOf(item)==index)[0]
    todoPopupForm.innerHTML = returncatagoryCombinationFormForUpdate()
    todoPopupForm.classList.add('active')
    formTask =(event)=>{
        const newOperator ={
            category_name:event.target.category_name.value,
                
        }
        catagoryCombinations[index]=newOperator
        fillcatagoryCombinationContainer();
        todoPopupForm.classList.remove('active')
    }
}
const deletecatagoryCombination =(index)=>{
    deletePupupFunction=()=>{
    catagoryCombinations = catagoryCombinations.filter((item)=>catagoryCombinations.indexOf(item) != index)
    fillcatagoryCombinationContainer()}
    

}
fillcatagoryCombinationContainer()


let productCombinations =[
    {
        name:'masudss',
        value:'hjkgjhg',
        catagory:'lbhjgghvm',
        image:''
    },

    
    
]
const returnproductCombinationCard =(productCombination,index)=>{
    return `<div class="combinationCard">
    <div class="left">
        
        <div class="name">
            <span>${productCombination.name}</span>
        </div>
        <div class="combinationValue">
            s./${productCombination.value}

        </div>
    </div>
    <div class="right">
        <div class="status">
            <div class="active">
                Asset
            </div>
            <!-- <div class="inActive">
                inactive
            </div> -->
        </div>
        <!-- <i class="fa-sharp fa-regular fa-money-check-pen"></i>
    <i class="fa-solid fa-trash-can"></i> -->
    <i class="fa-solid fa-up-down-left-right"></i>
        <i onclick='updateproductCombination(${index})'  class="fa-solid fa-pen-to-square"></i>
        <i onclick='deleteproductCombination(${index})' data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap" class="fa-solid fa-trash-can"></i>

    </div>

</div>`
    
}

const fillproductCombinationContainer = (items = productCombinations)=>{
    let htmls = '';
    items.forEach((elm,index)=>{
        htmls += returnproductCombinationCard(elm,index)
    })
    productCombinationContainer.innerHTML=htmls;
    
}

const returnproductCombinationFormForCteate = ()=>{
    return ` <form action="" onsubmit="todoPopupFormSubmitHandler(event)">
    <div class="heading">
        store operator

    </div>
    <div class="mainContainer">
        <div class="left">
            
                <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="">

            
            
        </div>
        <div class="right">
            <div class="fields">
                <label for="name"> Combination name </label>
                <input type="text" name="name" id="">
            </div>
            <div class="fields">
                <label for="value"> Combination Value </label>
                <input type="text" name="value" id="">
            </div>
            <div class="fields">
                <label for="category_name"> Name </label>

                 <select name="catagory" id="">
                    <option value="First Food">First Food</option>
                    <option value="Finance">Finance</option>
                    <option value="Pizza">Pizza</option>
                </select>
            </div>
            
            <input type="submit" class="submit" value="Keep">
            <i onclick="todoPopupForm.classList.remove('active')" class="fa-solid fa-xmark"></i>
        </div>
    </div>
</form>`
}
const returnproductCombinationFormForUpdate = ()=>{
    return ` <form action="" onsubmit="todoPopupFormSubmitHandler(event)">
    <div class="heading">
        store operator

    </div>
    <div class="mainContainer">
        <div class="left">
            
                <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="">

            
            
        </div>
        <div class="right">
            <div class="fields">
                <label for="name"> Combination name </label>
                <input value=(${productCombinationItemtoUpdate.name}) type="text" name="name" id="">
            </div>
            <div class="fields">
                <label for="value"> Combination Value </label>
                <input value=(${productCombinationItemtoUpdate.value}) type="text" name="value" id="">
            </div>
            <div class="fields">
                <label for="category_name"> Name </label>

                 <select value=(${productCombinationItemtoUpdate.catagory}) name="catagory" id="">
                    <option value="First Food">First Food</option>
                    <option value="Finance">Finance</option>
                    <option value="Pizza">Pizza</option>
                </select>
            </div>
            
            <input type="submit" class="submit" value="Keep">
            <i onclick="todoPopupForm.classList.remove('active')" class="fa-solid fa-xmark"></i>
        </div>
    </div>
</form>`
}
const addproductCombination = ()=>{
    todoPopupForm.innerHTML = returnproductCombinationFormForCteate()
    todoPopupForm.classList.add('active')
    formTask =(event)=>{
        const newOperator ={
            name:event.target.name.value,
            value:event.target.value.value,
            catagory:event.target.catagory.value,
                
        }
        productCombinations=[...productCombinations,newOperator]
        fillproductCombinationContainer();
        todoPopupForm.classList.remove('active')
    }
}
const updateproductCombination=(index) =>{
    productCombinationItemtoUpdate=productCombinations.filter((item)=>productCombinations.indexOf(item)==index)[0]
    todoPopupForm.innerHTML = returnproductCombinationFormForUpdate()
    todoPopupForm.classList.add('active')
    formTask =(event)=>{
        const newItem ={
            name:event.target.name.value,
            value:event.target.value.value,
            catagory:event.target.catagory.value,
                
        }
        productCombinations[index]=newItem
        fillproductCombinationContainer();
        todoPopupForm.classList.remove('active')
    }
}
const deleteproductCombination =(index)=>{
    deletePupupFunction=()=>{
    productCombinations = productCombinations.filter((item)=>productCombinations.indexOf(item) != index)
    fillproductCombinationContainer()}
    

}
fillproductCombinationContainer()