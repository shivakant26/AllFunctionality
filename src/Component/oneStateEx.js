import React, { useEffect, useState } from "react";


const OneStateEx = () => {
    // declear one state
    const [state, setState] = useState({
        title: "",
        discription: "",
    })
    const [data, setData] = useState([])

    // save method here....
    const Save = (e) => {
        e.preventDefault();
        
        if (state.id) {
            let newdata = data.splice(state.id,1,state)
            setData([...data],newdata)
            setState({
                title:"",
                discription:""
            })
        } else {
            data.push(state);
            setData(data);
            setState({
                ...state,
                title: "",
                discription: ""
            })
        }
    }
    const Edit = (id) => {
        console.log("Editable id", id)
        let current_object = data[id];
        console.log("current_object", current_object)
        setState({
            ...state,
            id: id-1,
            title: current_object.title,
            discription: current_object.discription
        })
    }

    const Delete = (id) => {
        var abc = data.splice(id, 1)
        setData([...data], abc)
    }
    return (
        <>
            <div>
                <h1>One State Example</h1>
                <form>
                    <div className="form-field">
                        <input type="text"
                            placeholder="Enter title"
                            // here manage data with one state
                            // ...state catch previous state
                            onChange={(e) => setState({ ...state, title: e.target.value })}
                            value={state.title}
                        />
                    </div>
                    <div className="form-field">
                        <input type="text"
                            placeholder="Enter title"
                            onChange={(e) => setState({ ...state, discription: e.target.value })}
                            value={state.discription}
                        />
                    </div>
                    <div className="form-field">
                        <button onClick={(e) => Save(e)}>
                            {
                                state.id ? "Update" : "Create"
                            }
                        </button>
                    </div>
                </form>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Discription</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item,id) =>
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.discription}</td>
                                    <td>
                                        <button onClick={() => Edit(id)}>Edit</button>
                                        <button onClick={() => Delete(id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default OneStateEx;