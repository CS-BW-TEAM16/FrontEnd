import { 

    SENDING_CREDENTIALS,
    AUTHENTICATED_CREDENTIALS,
    AUTHENTICATION_FAILED,
    INIT_GAME,
    INIT_SUCCESS,
    INIT_FAILED,
    FETCHING_ALL_ROOMS,
    FETCHED_ALL_ROOMS,
    FAILED_ALL_ROOMS,
    SEND_PLAYER_MOVE,
    PLAYER_MOVED,
    FAILED_PLAYER_MOVE,
    LOADING,
    ON_CHANGE,
    CANT_MOVE

} from '../actions'

import {grid} from '../../components/Map/grid'

const initialState = {

    gameState: {
        description: "",
        error_message: "",
        title: '',
        current_room: {},
        next_room: {},
        last_room: {},
        allRooms: [],
        playersInRoom: [],
        grid: [...grid]
        
    },

    registerState: {
        "username": "",
        "email": "",
        "password1": "",
        "password2": "",
        loading: false,
    },

    loginState: {
        username: "",
        password: "",
        loading: false
    },

    playerState: {
        userID: null,
        name: '',
        current_room: '',
        x: 400,
        y: 400
    }
}

const reducer = (state=initialState, action) => {

    switch(action.type){
        case INIT_SUCCESS:

            const { uuid, name, description, title } = action.payload;
            console.log(action.payload)
            return {
                ...state,

                gameState: {
                   ...state.gameState,
                   description,
                   title
                },

                playerState: {
                    ...state.playerState,
                    userID: uuid,
                    name
                }

            }
        
        case FETCHED_ALL_ROOMS:
            return {
                ...state,
                gameState: {
                    ...state.gameState,
                    allRooms: action.payload,
                    current_room: action.first
                }
                
            }
        case SEND_PLAYER_MOVE:
           switch(action.payload){
                case 'w':
                    return {
                        ...state,
                        playerState: {
                            ...state.playerState,
                            y: state.playerState.y -= 40
                        }
                    }
                case 'e':
                    return {
                        ...state,
                        playerState: {
                            ...state.playerState,
                            y: state.playerState.y += 40
                        }
                    }
                case 'n':
                    return {
                        ...state,
                        playerState: {
                            ...state.playerState,
                            x: state.playerState.x -= 40
                        }
                    }
                case 's':
                    return {
                        ...state,
                        playerState: {
                            ...state.playerState,
                            x: state.playerState.x += 40
                        }
                    }
                default:
                    return state
            }
        case CANT_MOVE:
            return{
                ...state,
                gameState: {
                    ...state.gameState,
                    description: action.payload
                }
            }

        case ON_CHANGE:
            return{
                ...state,
                loginState: {
                    ...state.loginState,
                    [action.payload.name]: action.payload.value
                },
                registerState: {
                    ...state.registerState,
                    [action.payload.name]: action.payload.value
                }
            }
        case PLAYER_MOVED:
            return {
                ...state,
                gameState: {
                    ...state.gameState,
                    description: action.payload.description,
                    playersInRoom: action.payload.players
                }
            
            }
        default:
            return state
    }
}

export default reducer;