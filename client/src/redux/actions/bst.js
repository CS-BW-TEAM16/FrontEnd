export class Bst {
    constructor(value){
        this.value = value
        this.west = null
        this.east = null
        this.north = null
        this.south = null
        this.current = this.value
        this.next = this.current.n_to? 
    }

    insert = item => {
        if(Boolean(item.w_to)){
            if(Boolean(!this.west)){
                this.west = Bst(item)
                this.west.x = 
            }else{
                this.west.insert(item)
            }
        }else if(Boolean(item.e_to)){
            if(Boolean(!this.east)){
                this.east = Bst(item)
            }else{
                this.east.insert(item)
            }
        }else if(Boolean(item.n_to)){
            if(Boolean(!this.north)){
                this.north = Bst(item)
            }else{
                this.north.insert(item)
            }
        }else if(Boolean(item.s_to)){
            if(Boolean(!this.south)){
                this.south = Bst(item)
            }else{
                this.south.insert(item)
            }
        }
    }

    for_each = (cb) => {
        cb(this.value)

        if(this.value.w_to != 0){
            this.west.for_each(cb)
        }
        if (this.value.e_to != 0){

            this.east.for_each(cb)
        }
    }
}