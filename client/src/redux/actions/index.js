import axios from 'axios'
import { grid } from '../../components/Map/grid'
import { config } from '../../config'

export const SENDING_CREDENTIALS = 'SENDING_CREDENTIALS'
export const AUTHENTICATED_CREDENTIALS = 'AUTHENTICATED_CREDENTIALS'
export const AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED'
export const INIT_GAME = 'INIT_GAME'
export const INIT_SUCCESS = 'INIT_SUCCESS'
export const INIT_FAILED = 'INIT_FAILED'
export const FETCHING_ALL_ROOMS = 'FETCHING_ALL_ROOMS'
export const FETCHED_ALL_ROOMS = 'FETCHED_ALL_ROOMS'
export const FAILED_ALL_ROOMS = 'FAILED_ALL_ROOMS'
export const SEND_PLAYER_MOVE = 'SEND_PLAYER_MOVE'
export const PLAYER_MOVED = 'PLAYER_MOVED'
export const FAILED_PLAYER_MOVE = 'SEND_PLAYER_MOVE'
export const LOADING = 'LOADING'
export const ON_CHANGE = 'ON_CHANGE'
export const CANT_MOVE = 'CANT_MOVE'

// const baseURI = 'https://lambda-mud-test.herokuapp.com/api'
const baseURI = 'https://team22adv.herokuapp.com/api'


export const login = (credential, param, history) => async dispatch => {

    dispatch({type: SENDING_CREDENTIALS})

    console.log(credential)

    try{

        const { data:{key} } = await axios.post(`${baseURI}/${param}/`, credential)

        console.log('login-res', key)

        dispatch({type: AUTHENTICATED_CREDENTIALS})
        localStorage.setItem('authToken', key)
        history.push('/');


    }catch(err){

        console.log(err.message)
        dispatch({type: AUTHENTICATION_FAILED})
    }   
}

export const initGame =  _ => async dispatch => {

    dispatch({type: INIT_GAME})  

    try{

        const init_res = await config.axiosWithAuth().get(`${baseURI}/adv/init/`)

        console.log('init_res', init_res)

        dispatch({type: INIT_SUCCESS, payload: init_res.data})  

    }catch(err){

        console.log(err.message)
        dispatch({type: INIT_FAILED})
    }
}

export const fetchRooms =  _ => async dispatch => {

    dispatch({type: FETCHING_ALL_ROOMS})

    try{

        const { data:{all_rooms} } = await config.axiosWithAuth(baseURI).get(`${baseURI}/adv/rooms/`)

        // const { all_rooms } = data

        console.log('fetchRooms_res', all_rooms)

        const currentRoom = all_rooms[47]
        const nextRoom = []
        const prevRoom = []
        const northRoom = null
        const southRoom = all_rooms[currentRoom.s_to]
        const eastRoom = all_rooms.forEach(room => room.id == currentRoom.e_to)
        const westRoom = all_rooms.forEach(room => room.id == currentRoom.w_to)

        

       
         
        console.log(nextRoom)
        dispatch({type: FETCHED_ALL_ROOMS, payload: all_rooms, first: currentRoom})

    

    }catch(err){

        console.log(err.message)
        dispatch({ type: FAILED_ALL_ROOMS })
    }

}

export const playerMove = direction => async dispatch => {
    console.log(direction)

    try{

        const { data } = await config.axiosWithAuth().post(`${baseURI}/adv/move`, {direction})

        console.log('move_res', data)

        dispatch({type: PLAYER_MOVED, payload: data})

        if(!data.error_msg){

            dispatch({type: SEND_PLAYER_MOVE, payload: direction})
        }else{
            dispatch({type: CANT_MOVE, payload: data.error_msg})
        }

    }catch(err){    

        console.log(err.message)
        dispatch({type: FAILED_PLAYER_MOVE})
    }
}

export const handleOnChange = ({ name, value }) => dispatch => {


    dispatch({ type: ON_CHANGE, payload: {name, value} })
}

