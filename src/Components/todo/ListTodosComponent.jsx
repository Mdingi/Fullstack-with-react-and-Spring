import React,{Component} from "react";

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [
                {id:1,description :'learn react',completed:'No',completionDate: new Date()},
                {id:2,description :'learn devOps',completed:'No',completionDate: new Date()},
                {id:3,description :'learn Angular',completed:'No',completionDate: new Date()},
                {id:4,description :'learn Springboot',completed:'No',completionDate: new Date()}
            ]
        }
    }
    render(){
        return (
            <div>
               <h1>List Todos</h1>
                <div className="container">

                    <table className="table">
                        <thead>
                                <tr>
                                    <th>description</th>
                                    <th>Completed</th>
                                    <th>completion Date</th>

                                </tr>
                            </thead> 
                            <tbody>
                                {
                                    this.state.todos.map(
                                        todo=>
                                            <tr key={todo.id}>
                                                <td>{todo.description}</td>
                                                <td>{todo.completed.toString()}</td>
                                                <td>{todo.completionDate.toString()}</td>
                                            </tr>
                                    )    
                                }
                            </tbody>
                    </table>
                </div>
            </div>
        )
        }
}
export default ListTodosComponent