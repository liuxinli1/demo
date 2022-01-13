import { useState } from "react";

export default function NewButton(params) {
    const [state, setState] = useState([])

    const arr = [
        {
            name: 'Sean',
            favoriteColor: 'Teal'
        },
        {
            name: 'Shelby',
            favoriteColor: 'Green'
        },
        {
            name: 'Mike',
            favoriteColor: 'Blue'
        },
        {
            name: 'Hajime',
            favoriteColor: 'Silver'
        },
        {
            name: 'Tess',
            favoriteColor: 'Red'
        }
    ]

    function buttononClick() {

        let lst = []
        arr.map((element) => {
            lst.push(
                <tr>
                    <td>{element.name}</td>
                    <td>{element.favoriteColor}</td>
                </tr>
            )
        })
        setState(lst);
    }

    return (
        <div>
            <button onClick={() => buttononClick()}>Button</button>
            <table>
                {
                    state.map(element => {
                        return element
                    })
                }
            </table>
        </div>
    )
}