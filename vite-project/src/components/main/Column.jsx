import { Card } from "./Card";



export function Column({status, tasks}) {
    return (
        <div className="main__column column">
							<div className="column__title">
								<p>{status}</p>
							</div>
							{
                                tasks.map((task)=>
                                <Card key={task.id} {...task}/>)
                            }
						</div>	
    )
}