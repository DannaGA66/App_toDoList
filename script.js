document.addEventListener('DOMContentLoaded',() => {
    const taskInput = document.getElementById('task-input');

    const addTaskBtn = document.getElementById('add-task-btn');

    const taskList = document.getElementById('task-list');

    const emptyImage = document.querySelector('.empty-image');

    const todosContainer = document.querySelector('.todos-container');

    const taskForm = document.getElementById('task-form');

    const escapeHtml = (str) => str.replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));

    const progressBar = document.getElementById('progress');

    const progressNumbers = document.getElementById('numbers');

    const toggleEmptyState = () => {
        emptyImage.style.display = taskList.children.length === 0 ? 'block' : 'none';
        todosContainer.style.width = taskList.children.length > 0 ? '100%' : '50%';
    };

    const updateProgress = (checkCompletion = true) =>{
        const totalTasks = taskList.children.length;
        const completedTasks = taskList.querySelectorAll('.checkbox:checked').length;

        progressBar.style.width = totalTasks ? `${(completedTasks / totalTasks) * 100}%` : '0%';
        progressNumbers.textContent = `${completedTasks} / ${totalTasks}`;

        if(checkCompletion && totalTasks >0 && completedTasks === totalTasks){
             fireConfetti(); 
        }
    };

    const addTask = (text, completed = false, checkCompletion = true) => {
        const taskText = text || taskInput.value.trim();

        if (!taskText) {
            taskInput.value = '';
            return;
        }

        const li = document.createElement('li');
        li.innerHTML= `
        <input type = "checkbox" class = "checkbox" ${completed ? 'checked' : ''} />
        <span>${escapeHtml(taskText)}</span>
        <div class ="task-button">
            <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;

        const checkbox = li.querySelector('.checkbox');
        const editBtn = li.querySelector('.edit-btn');

       if (completed) {
         li.classList.add('completed');
         editBtn.disabled = true;
         editBtn.style.opacity = '0.5';
        }

        checkbox.addEventListener('change', () => {
            const isCheked = checkbox.checked;
            li.classList.toggle('completed', isCheked);
            editBtn.disabled = isCheked;
            editBtn.style.opacity = isCheked ? '0.5' : '1';
            editBtn.style.pointerEvents = isCheked ? 'none':'auto';
            updateProgress();
        });

        editBtn.addEventListener('click', () => {
            if(!checkbox.checked){
                taskInput.value = li.querySelector('span').textContent;
                li.remove();
                toggleEmptyState();
                updateProgress(false);
            }
        })

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
            toggleEmptyState();
            updateProgress();
        });

        taskList.appendChild(li);
        taskInput.value = '';
        toggleEmptyState();
        updateProgress(checkCompletion);
    };

   taskForm.addEventListener('submit', (e) => {
     e.preventDefault();   
        addTask();            
    });

    const fireConfetti = () => {
    const count = 100;
    const defaults = { origin: { y: 1 } };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {   // ✅ "confetti" = librería
            particleCount: Math.floor(count * particleRatio),
        }));
    }

    let y = 1;
    const interval = setInterval(() => {
        fire(0.2, { spread: 60,  startVelocity: 30, scalar: 0.8, origin: { y } });
        fire(0.1, { spread: 120, startVelocity: 55, scalar: 1.2 });
        y -= 0.05;
        if (y <= 0.3) clearInterval(interval);
    }, 8);
    };
});