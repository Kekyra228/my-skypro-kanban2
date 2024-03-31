import { useState } from "react"

export function Header({tasksList,setTasksList}) {

    const [isOpen, setOpen] = useState(false)
    const openUser =()=>{
        setOpen ((isOpen)=>!isOpen)
    }


   function addNewTask() {
    const newTask = {
        id: tasksList.length+1,
        theme:"Web Design",
        name: "Новая задача", 
        date:"01.01.24",
        status:"Без статуса"
    }
    setTasksList ([...tasksList, newTask])
   }

    return (
        <header className="header">
			<div className="container">
				<div className="header__block">
					<div className="header__logo _show _light">
						<a href="" target="_self"><img src="public/logo.png" alt="logo"></img></a>
					</div>
					<div className="header__logo _dark">
						<a href="" target="_self"><img src="public/logo_dark.png" alt="logo"></img></a>
					</div>
					<nav className="header__nav">
                    <button onClick={addNewTask} className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
						<a onClick={openUser} href="#user-set-target" className="header__user _hover02">Ivan Ivanov</a>
                        {isOpen && 
						<div className="header__pop-user-set pop-user-set" id="user-set-target">		
							<p className="pop-user-set__name">Ivan Ivanov</p>
							<p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
							<div className="pop-user-set__theme">
								<p>Темная тема</p>
								<input type="checkbox" className="checkbox" name="checkbox"></input>
							</div>
							<button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
						</div>
						}
						
					</nav>					
				</div>
			</div>			
		</header>
    )
}