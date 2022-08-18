import { incremented, decremented } from '../redux/store.js'
import  {useDispatch, useSelector} from 'react-redux'

export default function Layayt() {
    const dispatch = useDispatch()
    const count = useSelector(state => console.log(state.contactsRedux))
    console.log(count)

    return (
        <div>
            {count}
            <button onClick={() => dispatch(incremented(100))}>Inc</button>
            <button onClick={()=> dispatch(decremented(50))}>Dec</button>

        </div>
    )

}