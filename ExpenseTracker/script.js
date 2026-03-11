
const expenseForm = document.getElementById('expenseForm');
const expenseList= document.getElementById('expenseList');

// page reload hone par purana data localstorage se nikalna
window.addEventListener('DOMContentLoaded',()=>{
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
       savedExpenses.forEach(expense=>{
          addNewExpenseToUI(expense);
       });
});

//form submit hone par new expense add karna
expenseForm.addEventListener('submit',(e)=>{
      e.preventDefault();

      const amount = document.getElementById('amount').value;
        const description = document.getElementById('description').value;
        const  category = document.getElementById('category').value;


        const expenseDetails={

            id:Date.now(),
            amount:amount,
            description:description,
            category:category

        };

        addNewExpenseToUI(expenseDetails);
        saveToLocalStorage(expenseDetails);

        expenseForm.reset();

});

// screen par expense show karna
function addNewExpenseToUI(expense){
      const li = document.createElement('li');
      li.className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2";
      li.setAttribute('data-id',expense.id);

      li.innerHTML=`<span> <strong>${expense.amount}</strong> - ${expense.category} - ${expense.description}
        </span>
        <div>
        <button class="btn btn-warning btn-sm edit-btn me-2">Edit Expense </button>
         <button class="btn btn-danger btn-sm delete-btn">Delete Button</button>
         </div>`;

         expenseList.appendChild(li);
         
}

//delete and eedit button
expenseList.addEventListener('click',(e)=>{

    const li = e.target.closest('li');
    const id = li.getAttribute('data-id');

       if(e.target.classList.contains('delete-btn')){
          
           li.remove();
           removeFromLocalStorage(id);
       }

       if(e.target.classList.contains('edit-btn')){

         const li = e.target.closest('li');
         const id = li.getAttribute('data-id');  

          const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
          const expenseToEdit = expenses.find(exp=>exp.id==id);

          //edit karke bapis dalna
            if(expenseToEdit){
          document.getElementById('amount').value=expenseToEdit.amount;
          document.getElementById('description').value = expenseToEdit.description;
          document.getElementById('category').value = expenseToEdit.category;
            

          li.remove();
          removeFromLocalStorage(id);
       }
    }
});

    function saveToLocalStorage(expense){
        let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expenses.push(expense);
        localStorage.setItem('expenses',JSON.stringify(expenses));
    }

      function removeFromLocalStorage(id){
          let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

          expenses = expenses.filter(exp => exp.id != id);
          localStorage.setItem('expenses',JSON.stringify(expenses));
      }


