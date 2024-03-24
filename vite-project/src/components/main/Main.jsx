import { Column } from "./Column";



const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];


export function MainBlock({tasksList, isLoading}) {

    return (
        <main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
						
                    {isLoading ? "Данные загружаются" : <>
							{statusList.map((status, index) =>
								<Column status={status} key={index}
									tasks={tasksList.filter((task) => task.status === status)}
								/>
							)
							}</>

						}
                      			
					</div>
				
				</div>
			</div>
		</main>
    )
}